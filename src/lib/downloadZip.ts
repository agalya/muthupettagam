import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Category } from "@/data/categories";
import { generateArticlePdfBlob, safeFilename } from "./downloadArticlePdf";

export async function downloadCategoryZip(
  category: Category,
  onProgress: (msg: string) => void
) {
  const zip = new JSZip();
  const folderName = safeFilename(category.title);
  const folder = zip.folder(folderName);
  
  if (!folder) throw new Error("Could not create ZIP folder");

  const items = category.items || [];
  const subs = category.subCategories || [];
  
  let totalItems = items.length + subs.reduce((acc, sub) => acc + sub.items.length, 0);
  let processCount = 0;

  for (const item of items) {
    onProgress(`Generating PDF... (${++processCount}/${totalItems})`);
    try {
      const blob = await generateArticlePdfBlob(item);
      const filename = `${safeFilename(item.id || item.title)}.pdf`;
      folder.file(filename, blob);
    } catch (e) {
      console.error(`Failed to generate pdf for ${item.title}`, e);
    }
  }

  for (const sub of subs) {
    const subFolderTitle = safeFilename(sub.title);
    const subFolder = folder.folder(subFolderTitle);
    if (!subFolder) continue;
    
    for (const item of sub.items) {
      onProgress(`Generating PDF... (${++processCount}/${totalItems})`);
      try {
        const blob = await generateArticlePdfBlob(item);
        const filename = `${safeFilename(item.id || item.title)}.pdf`;
        subFolder.file(filename, blob);
      } catch (e) {
        console.error(`Failed to generate pdf for ${item.title}`, e);
      }
    }
  }

  onProgress("Compressing files...");
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `${folderName}-muthupettagam.zip`);
}

export async function downloadAllCategoriesZip(
  categories: Category[],
  onProgress: (msg: string) => void
) {
  const zip = new JSZip();

  let totalItems = 0;
  for (const cat of categories) {
    totalItems += (cat.items?.length || 0);
    totalItems += (cat.subCategories?.reduce((acc, sub) => acc + sub.items.length, 0) || 0);
  }

  let processCount = 0;

  for (const cat of categories) {
    const catFolder = zip.folder(safeFilename(cat.title));
    if (!catFolder) continue;

    if (cat.items) {
      for (const item of cat.items) {
        onProgress(`Generating PDF... (${++processCount}/${totalItems})`);
        try {
          const blob = await generateArticlePdfBlob(item);
          const filename = `${safeFilename(item.id || item.title)}.pdf`;
          catFolder.file(filename, blob);
        } catch (e) {
          console.error(`Failed to generate pdf for ${item.title}`, e);
        }
      }
    }

    if (cat.subCategories) {
      for (const sub of cat.subCategories) {
        const subFolder = catFolder.folder(safeFilename(sub.title));
        if (!subFolder) continue;

        for (const item of sub.items) {
          onProgress(`Generating PDF... (${++processCount}/${totalItems})`);
          try {
            const blob = await generateArticlePdfBlob(item);
            const filename = `${safeFilename(item.id || item.title)}.pdf`;
            subFolder.file(filename, blob);
          } catch (e) {
            console.error(`Failed to generate pdf for ${item.title}`, e);
          }
        }
      }
    }
  }

  onProgress("Compressing all files...");
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `all-articles-muthupettagam.zip`);
}
