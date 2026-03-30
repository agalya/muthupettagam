import type { WritingItem } from "@/data/categories";
import { articleDisplayTitle } from "@/lib/articleDisplayTitle";

function safeFilename(name: string) {
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

function writeTextPreservingNewlines(
  doc: any,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeightMm: number,
  pageHeight: number,
  marginBottom = 10
) {
  const rows = text.split(/\r?\n/);
  const startY = y;
  const wrappedLines: string[] = [];

  for (const row of rows) {
    if (row.trim().length === 0) {
      wrappedLines.push(""); // blank line
      continue;
    }
    const parts = doc.splitTextToSize(row, maxWidth);
    for (const p of parts) wrappedLines.push(String(p));
  }

  let cursorY = startY;
  for (const line of wrappedLines) {
    if (cursorY > pageHeight - marginBottom) {
      doc.addPage();
      cursorY = 10;
    }
    // Blank line spacing
    if (line === "") {
      cursorY += lineHeightMm;
      continue;
    }
    doc.text(line, x, cursorY);
    cursorY += lineHeightMm;
  }

  return cursorY; // next Y
}

export async function downloadArticlePdf(item: WritingItem) {
  // Dynamic import keeps initial bundle smaller and avoids SSR issues.
  const mod: any = await import("jspdf");
  const JsPdfCtor = mod.jsPDF ?? mod.default;
  const doc = new JsPdfCtor({ unit: "mm", format: "a4" });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 10;
  let cursorY = 10;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  const title = articleDisplayTitle(item);
  const titleLines = doc.splitTextToSize(title, pageWidth - marginX * 2);
  doc.text(titleLines, marginX, cursorY);
  cursorY += 8 + titleLines.length * 5;

  // Tamil first (top alignment)
  const tamilMaxWidth = pageWidth - marginX * 2;
  if (item.content) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    // Render Tamil preserving newlines
    cursorY = writeTextPreservingNewlines(
      doc,
      item.content,
      marginX,
      cursorY,
      tamilMaxWidth,
      5,
      pageHeight,
      10
    );
    cursorY += 4;
  }

  // English section: image (left) + English translation (right)
  const imageUrl = item.image;
  const englishText = item.englishTranslation;

  const hasImage = Boolean(imageUrl);
  const hasEnglish = Boolean(englishText);

  const colGap = 5;
  const leftColW = 85; // mm
  const rightColW = pageWidth - marginX * 2 - leftColW - colGap;

  let topRowY = cursorY + 2;
  let imageHeightMm = 0;

  // If the English row would overflow, start it on a new page.
  // (This keeps the requested alignment: tamil at top, english below.)
  if (hasImage) {
    try {
      const { dataUrl, kind } = await imageUrlToDataUrl(imageUrl as string);
      const img = new Image();
      img.src = dataUrl;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
      });

      // Preserve aspect ratio, cap so it fits on one page section.
      const aspect = img.height / Math.max(1, img.width);
      const rawH = leftColW * aspect;
      imageHeightMm = Math.min(95, Math.max(35, rawH));

      if (topRowY + imageHeightMm > pageHeight - 10) {
        doc.addPage();
        topRowY = 10;
      }

      doc.addImage(dataUrl, kind, marginX, topRowY, leftColW, imageHeightMm);
    } catch {
      imageHeightMm = 0;
    }
  }

  if (hasEnglish) {
    if (topRowY > pageHeight - 30) {
      doc.addPage();
      topRowY = 10;
    }

    const headerY = topRowY + 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("English Translation", marginX + leftColW + colGap, headerY);

    const textYStart = headerY + 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);

    const lines = doc.splitTextToSize(englishText as string, rightColW);
    let y = textYStart;
    for (const line of lines) {
      if (y > pageHeight - 10) {
        doc.addPage();
        y = 10;
      }
      doc.text(String(line), marginX + leftColW + colGap, y);
      y += 5;
    }
  }

  cursorY = topRowY + (imageHeightMm || 70) + 5;

  const filenameBase = safeFilename(item.id ? item.id : item.title);
  doc.save(`${filenameBase || "article"}-muthupettagam.pdf`);
}

