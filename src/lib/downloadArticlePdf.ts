import type { WritingItem } from "@/data/categories";
import { articleDisplayTitle } from "@/lib/articleDisplayTitle";
import html2canvas from "html2canvas";

export function safeFilename(name: string) {
  return name
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[\\/:*?"<>|]+/g, "")
    .slice(0, 80);
}

async function imageUrlToDataUrl(url: string): Promise<{ dataUrl: string; kind: "JPEG" | "PNG" }> {
  const absUrl = url.startsWith("http") ? url : `${window.location.origin}${url}`;
  const res = await fetch(absUrl);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`);

  const blob = await res.blob();
  const kind: "JPEG" | "PNG" =
    blob.type === "image/png"
      ? "PNG"
      : blob.type === "image/jpeg" || blob.type === "image/jpg"
        ? "JPEG"
        : "JPEG";

  const dataUrl: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  return { dataUrl, kind };
}

export async function generateArticlePdf(item: WritingItem) {
  // Helper to create styled containers for rendering via DOM
  const createContainer = () => {
    const container = document.createElement("div");
    // 794px is roughly 210mm at 96 DPI (A4 Width)
    container.style.width = "794px";
    container.style.padding = "40px"; // 40px padding acts as roughly 10mm margin
    container.style.position = "absolute";
    container.style.left = "-9999px";
    container.style.top = "0";
    container.style.backgroundColor = "white";
    container.style.color = "black";
    container.style.fontFamily = "ui-sans-serif, system-ui, sans-serif, Noto Sans Tamil"; 
    return container;
  };

  const container = createContainer();

  // 1. Title
  const titleEl = document.createElement("h1");
  titleEl.innerText = articleDisplayTitle(item);
  titleEl.style.fontSize = "24px";
  titleEl.style.fontWeight = "bold";
  titleEl.style.marginBottom = "24px";
  container.appendChild(titleEl);

  // 2. Image
  if (item.image) {
    const imgCont = document.createElement("div");
    imgCont.style.marginBottom = "24px";
    imgCont.style.textAlign = "center";
    
    const imgEl = document.createElement("img");
    try {
      const { dataUrl } = await imageUrlToDataUrl(item.image);
      imgEl.src = dataUrl;
      imgEl.style.maxWidth = "100%";
      imgEl.style.maxHeight = "500px";
      imgEl.style.objectFit = "contain";
      
      await new Promise((resolve) => {
        imgEl.onload = resolve;
        imgEl.onerror = resolve; // Just resolve on error so we continue
      });
      imgCont.appendChild(imgEl);
      container.appendChild(imgCont);
    } catch (e) {
      console.error("Failed to load image for PDF", e);
    }
  }

  // 3. Tamil Text
  if (item.content) {
    const contentEl = document.createElement("div");
    contentEl.style.fontSize = "16px";
    contentEl.style.whiteSpace = "pre-wrap";
    contentEl.style.marginBottom = "24px";
    contentEl.style.lineHeight = "1.6";
    // Important: retain spaces and newlines natively for tamil text
    contentEl.innerText = item.content;
    container.appendChild(contentEl);
  }

  // 4. English Text
  if (item.englishTranslation) {
    const engTitleEl = document.createElement("h2");
    engTitleEl.innerText = "English Translation";
    engTitleEl.style.fontSize = "18px";
    engTitleEl.style.fontWeight = "bold";
    engTitleEl.style.marginBottom = "12px";
    container.appendChild(engTitleEl);

    const engContentEl = document.createElement("div");
    engContentEl.style.fontSize = "14px";
    engContentEl.style.whiteSpace = "pre-wrap";
    engContentEl.style.lineHeight = "1.5";
    engContentEl.innerText = item.englishTranslation;
    container.appendChild(engContentEl);
  }

  // Append container to body to compute styles and render fonts
  document.body.appendChild(container);

  // Wait a brief moment to ensure browser renders fonts fully
  await new Promise(resolve => setTimeout(resolve, 150));

  // 3. Capture as canvas
  const canvas = await html2canvas(container, {
    scale: 2, // 2x scale for better text resolution
    useCORS: true,
    logging: false
  });

  // Cleanup
  document.body.removeChild(container);

  // 4. Generate PDF
  const mod: any = await import("jspdf");
  const JsPdfCtor = mod.jsPDF ?? mod.default;
  const pdf = new JsPdfCtor({ unit: "mm", format: "a4" });
  
  const pdfWidth = pdf.internal.pageSize.getWidth(); // in mm (approx 210)
  const pageHeight = pdf.internal.pageSize.getHeight(); // in mm (approx 297)

  const imgData = canvas.toDataURL("image/jpeg", 0.95);
  const imgProps = pdf.getImageProperties(imgData);
  // Calculate height that maintains aspect ratio based on full document width
  const totalImgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  let heightLeft = totalImgHeight;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, totalImgHeight);
  heightLeft -= pageHeight;

  // Multi-page slicing within the same canvas if it's very long
  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, totalImgHeight);
    heightLeft -= pageHeight;
  }

  return pdf;
}

export async function generateArticlePdfBlob(item: WritingItem): Promise<Blob> {
  const pdf = await generateArticlePdf(item);
  return pdf.output('blob');
}

export async function downloadArticlePdf(item: WritingItem) {
  const pdf = await generateArticlePdf(item);
  const filenameBase = safeFilename(item.id ? item.id : item.title);
  pdf.save(`${filenameBase || "article"}-muthupettagam.pdf`);
}
