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

  const tamilContainer = createContainer();
  const englishContainer = createContainer();

  // 1. Tamil Container Setup
  const titleEl = document.createElement("h1");
  titleEl.innerText = articleDisplayTitle(item);
  titleEl.style.fontSize = "24px";
  titleEl.style.fontWeight = "bold";
  titleEl.style.marginBottom = "24px";
  tamilContainer.appendChild(titleEl);

  if (item.content) {
    const contentEl = document.createElement("div");
    contentEl.style.fontSize = "16px";
    contentEl.style.whiteSpace = "pre-wrap";
    contentEl.style.marginBottom = "24px";
    contentEl.style.lineHeight = "1.6";
    contentEl.innerText = item.content;
    tamilContainer.appendChild(contentEl);
  }

  // 2. English Container Setup (Image + Translation)
  const hasEnglishSection = Boolean(item.image || item.englishTranslation);
  if (hasEnglishSection) {
    const englishSection = document.createElement("div");
    englishSection.style.display = "flex";
    englishSection.style.gap = "24px";
    
    // Image
    if (item.image) {
      const imgCont = document.createElement("div");
      // 85mm is approx 321px
      imgCont.style.width = "320px";
      imgCont.style.flexShrink = "0";
      
      const imgEl = document.createElement("img");
      try {
        const { dataUrl } = await imageUrlToDataUrl(item.image);
        imgEl.src = dataUrl;
        imgEl.style.width = "100%";
        imgEl.style.height = "auto";
        imgEl.style.objectFit = "contain";
        
        await new Promise((resolve) => {
          imgEl.onload = resolve;
          imgEl.onerror = resolve; // Just resolve on error so we continue
        });
        imgCont.appendChild(imgEl);
        englishSection.appendChild(imgCont);
      } catch (e) {
        console.error("Failed to load image for PDF", e);
      }
    }

    // English text
    if (item.englishTranslation) {
      const engTextCont = document.createElement("div");
      engTextCont.style.flexGrow = "1";
      
      const engTitleEl = document.createElement("h2");
      engTitleEl.innerText = "English Translation";
      engTitleEl.style.fontSize = "18px";
      engTitleEl.style.fontWeight = "bold";
      engTitleEl.style.marginBottom = "12px";
      engTextCont.appendChild(engTitleEl);

      const engContentEl = document.createElement("div");
      engContentEl.style.fontSize = "14px";
      engContentEl.style.whiteSpace = "pre-wrap";
      engContentEl.style.lineHeight = "1.5";
      engContentEl.innerText = item.englishTranslation;
      engTextCont.appendChild(engContentEl);

      englishSection.appendChild(engTextCont);
    }
    
    englishContainer.appendChild(englishSection);
  }

  // Append containers to body to compute styles and render fonts
  document.body.appendChild(tamilContainer);
  if (hasEnglishSection) document.body.appendChild(englishContainer);

  // Wait a brief moment to ensure browser renders fonts fully
  await new Promise(resolve => setTimeout(resolve, 150));

  // 3. Capture as canvas
  const canvases = [];
  
  const tamilCanvas = await html2canvas(tamilContainer, {
    scale: 2, // 2x scale for better text resolution
    useCORS: true,
    logging: false
  });
  canvases.push(tamilCanvas);

  if (hasEnglishSection) {
    const englishCanvas = await html2canvas(englishContainer, {
      scale: 2,
      useCORS: true,
      logging: false
    });
    canvases.push(englishCanvas);
  }

  // Cleanup
  document.body.removeChild(tamilContainer);
  if (hasEnglishSection) document.body.removeChild(englishContainer);

  // 4. Generate PDF
  const mod: any = await import("jspdf");
  const JsPdfCtor = mod.jsPDF ?? mod.default;
  const pdf = new JsPdfCtor({ unit: "mm", format: "a4" });
  
  const pdfWidth = pdf.internal.pageSize.getWidth(); // in mm (approx 210)
  const pageHeight = pdf.internal.pageSize.getHeight(); // in mm (approx 297)

  for (let i = 0; i < canvases.length; i++) {
    if (i > 0) pdf.addPage(); // Start a new page for the next canvas (e.g., English section)
    
    const canvas = canvases[i];
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

