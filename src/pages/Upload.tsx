import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, Category, SubCategory } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadCloud, Loader2 } from "lucide-react";
import appConfig from "@/config/appConfig";  // ADD THIS

const MAX_IMAGE_SIZE = 8 * 1024 * 1024; // 8MB
const MAX_AUDIO_SIZE = 20 * 1024 * 1024; // 20MB

export default function Upload() {
  // If upload is disabled on production, show message
  if (!appConfig.enableUpload) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 container mx-auto px-4 py-10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-tamil-heading mb-4">Upload Disabled</h1>
            <p className="text-muted-foreground font-tamil-body">
              Uploads are currently disabled in this environment.
            </p>
            <Link to="/" className="inline-block mt-6 text-primary hover:underline font-tamil-body">
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const [isSubmitting, setIsSubmitting] = useState(false);


  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [tamilText, setTamilText] = useState("");
  const [englishText, setEnglishText] = useState("");
  const [date, setDate] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const selectedCategory = categories.find((c) => c.id === categoryId);
  const hasSubCategories = Boolean(selectedCategory?.subCategories && selectedCategory.subCategories.length > 0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        alert("Image exceeds the maximum allowed size of 8MB.");
        e.target.value = "";
        return;
      }
      setImageFile(file);
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_AUDIO_SIZE) {
        alert("Audio exceeds the maximum allowed size of 20MB.");
        e.target.value = "";
        return;
      }
      setAudioFile(file);
    }
  };

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const isPhotoUpload = subCategoryId === "photos" || categoryId === "haiku";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryId) return alert("Please select a Category");
    if (hasSubCategories && !subCategoryId) return alert("Please select a Subcategory");
    if (!title.trim()) return alert("Please enter a Title");
    if (isPhotoUpload && !imageFile) return alert("Please select an Image to upload");

    setIsSubmitting(true);

    try {
      const targetId = hasSubCategories ? subCategoryId : categoryId;
      const itemId = `item_${Date.now()}`;

      let imageBase64 = "";
      let imageFilePath = "";
      if (imageFile) {
        imageBase64 = await toBase64(imageFile);
        imageFilePath = `images/${itemId}_${imageFile.name.replace(/\s+/g, "_")}`;
      }

      let audioBase64 = "";
      let audioFilePath = "";
      if (audioFile) {
        audioBase64 = await toBase64(audioFile);
        audioFilePath = `audio/${itemId}_${audioFile.name.replace(/\s+/g, "_")}`;
      }

      const payload = {
        targetId,
        imageBase64,
        audioBase64,
        newItem: {
          id: itemId,
          title,
          date,
          content: tamilText,
          englishTranslation: englishText,
          image: imageFilePath,
          audioFile: audioFilePath
        }
      };

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Upload failed");
      }

      alert("Article published successfully!");
      // Reset form
      setTitle("");
      setTamilText("");
      setEnglishText("");
      setImageFile(null);
      setAudioFile(null);

      // Attempt to clear file inputs directly isn't perfectly react-way here without refs, 
      // but reloading usually resets states safely.
      setTimeout(() => window.location.reload(), 1000);

    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground font-tamil-body text-sm mb-6 hover:text-foreground transition-colors">
          ← முகப்பு
        </Link>
        <h1 className="text-3xl font-bold font-tamil-heading mb-8 flex items-center gap-3">
          <UploadCloud className="w-8 h-8 text-primary" />
          புதிய பதிவு (Upload Article)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Category (பிரிவு) *</Label>
              <Select value={categoryId} onValueChange={(val) => { setCategoryId(val); setSubCategoryId(""); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasSubCategories && (
              <div className="space-y-3 animate-in fade-in zoom-in duration-300">
                <Label>Subcategory (உட்பிரிவு) *</Label>
                <Select value={subCategoryId} onValueChange={setSubCategoryId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCategory.subCategories.map(sub => (
                      <SelectItem key={sub.id} value={sub.id}>{sub.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Label>{isPhotoUpload ? "Caption / Title (தலைப்பு) *" : "Title (தலைப்பு) *"}</Label>
            <Input required value={title} onChange={e => setTitle(e.target.value)} placeholder={isPhotoUpload ? "Enter Caption" : "Entry Title"} />
          </div>

          {!isPhotoUpload && (
            <div className="space-y-3">
              <Label>Date (தேதி)</Label>
              <Input value={date} onChange={e => setDate(e.target.value)} placeholder="DD Month YYYY" />
              <p className="text-xs text-muted-foreground font-tamil-body">Ex: 15 அக்டோபர் 2024</p>
            </div>
          )}

          <div className={`grid grid-cols-1 ${!isPhotoUpload ? 'md:grid-cols-2' : ''} gap-6 p-4 rounded-xl bg-muted/40 border border-border/50`}>
            <div className="space-y-3">
              <Label>Image File {isPhotoUpload ? "* (Max: 8MB)" : "(Max: 8MB)"}</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} className="bg-background" required={isPhotoUpload} />
            </div>

            {!isPhotoUpload && (
              <div className="space-y-3">
                <Label>Audio File (Max: 20MB)</Label>
                <Input type="file" accept="audio/*" onChange={handleAudioChange} className="bg-background" />
              </div>
            )}
          </div>

          {!isPhotoUpload && (
            <>
              <div className="space-y-3">
                <Label>Tamil Content (தமிழ் உரை)</Label>
                <Textarea
                  value={tamilText}
                  onChange={e => setTamilText(e.target.value)}
                  placeholder="Enter the primary Tamil content here..."
                  className="min-h-[150px] font-sans text-base leading-relaxed"
                />
              </div>

              <div className="space-y-3">
                <Label>English Translation</Label>
                <Textarea
                  value={englishText}
                  onChange={e => setEnglishText(e.target.value)}
                  placeholder="Enter the English translation here..."
                  className="min-h-[150px] font-sans text-base leading-relaxed"
                />
              </div>
            </>
          )}

          <div className="pt-4 border-t border-border/50">
            <Button type="submit" className="w-full md:w-auto px-10 py-6 text-lg rounded-full shadow-lg hover:translate-y-[-2px] transition-transform" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <UploadCloud className="w-5 h-5 mr-2" />
                  {isPhotoUpload ? (categoryId === "haiku" ? "Upload Haiku" : "Upload Photo") : "Publish Article"}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
