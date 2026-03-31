import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Category } from "@/data/categories";
import { downloadCategoryZip, downloadAllCategoriesZip } from "@/lib/downloadZip";

interface ZipDownloadButtonProps {
  categories: Category[];
  isAll?: boolean; // If true, download all categories instead of just the first in the array
  className?: string;
}

export default function ZipDownloadButton({ categories, isAll, className }: ZipDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progressMsg, setProgressMsg] = useState("");

  const handleDownload = async () => {
    setIsDownloading(true);
    setProgressMsg("Starting...");
    
    try {
      if (isAll) {
        await downloadAllCategoriesZip(categories, setProgressMsg);
      } else {
        await downloadCategoryZip(categories[0], setProgressMsg);
      }
      setProgressMsg("");
    } catch (e) {
      console.error(e);
      alert("Failed to download ZIP file.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
        isDownloading 
          ? "bg-primary/70 text-primary-foreground cursor-not-allowed" 
          : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      } ${className || ""}`}
    >
      {isDownloading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="font-sans text-sm">{progressMsg}</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          <span className="font-sans text-sm">{isAll ? "Download All as ZIP" : "Download Category ZIP"}</span>
        </>
      )}
    </button>
  );
}
