import { useAssetUrl } from "@/hooks/useAssetUrl";
import { getAudioUrl } from "@/lib/audioUtils";
import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextToSpeech from "@/components/TextToSpeech";
import { ArticleTitle, articleDisplayTitle } from "@/lib/articleDisplayTitle";
import { downloadArticlePdf } from "@/lib/downloadArticlePdf";
import { Languages, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import ZipDownloadButton from "@/components/ZipDownloadButton";
import { features } from "@/config/site";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allImages = useMemo(() => {
    const imgs: { src: string, title?: string, id: string, originalItem?: any }[] = [];
    categories.forEach(cat => {
      if (cat.items) {
        cat.items.forEach(item => {
          if (item.image) imgs.push({ src: item.image, title: item.title, id: item.id, originalItem: item });
        });
      }
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          if (sub.image) imgs.push({ src: sub.image, title: sub.title, id: sub.id, originalItem: sub });
          sub.items.forEach(item => {
            if (item.image) imgs.push({ src: item.image, title: item.title, id: item.id, originalItem: item });
          });
        });
      }
    });
    // Remove duplicates by src and sort so newest uploads are at the top
    const uniqueImgs = Array.from(new Map(imgs.map(img => [img.src, img])).values());
    return uniqueImgs.sort((a, b) => {
      const getTimestamp = (id: string) => {
        const match = id.match(/\d{13}/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getTimestamp(b.id) - getTimestamp(a.id);
    });
  }, []);

  const currentGalleryImages = useMemo(() => {
    if (category?.id === "haiku") {
      const imgs = (category?.items || []).filter(item => item.image).map(item => ({
        src: item.image!,
        title: item.title || item.content,
        id: item.id,
        originalItem: item
      }));
      return imgs.sort((a, b) => {
        const getT = (id: string) => { const m = id.match(/\d{13}/); return m ? parseInt(m[0], 10) : 0; };
        return getT(b.id) - getT(a.id);
      });
    }
    return allImages;
  }, [category, allImages]);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-tamil-heading text-xl text-foreground mb-4">பக்கம் கிடைக்கவில்லை</p>
            <Link to="/" className="text-primary font-tamil-body hover:underline">
              முகப்புக்குச் செல்க
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <div className="gradient-memorial relative overflow-hidden py-16 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-1/4 w-48 h-48 rounded-full bg-accent blur-[80px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-1 text-white/50 font-tamil-body text-sm mb-6 hover:text-white/80 transition-colors">
              ← முகப்பு
            </Link>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur flex-shrink-0 flex items-center justify-center text-3xl">
                  {category.icon}
                </div>
                <div>
                  <h1 className="font-tamil-heading text-2xl md:text-3xl font-bold text-white">
                    {category.title}
                  </h1>
                  <p className="font-tamil-body text-white/60 text-sm mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                {features.enableDownloadCategoryZip && <ZipDownloadButton categories={[category]} />}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-10 max-w-7xl">
        {category.subCategories ? (
          <Tabs defaultValue={category.subCategories[0].id} className="w-full">
            <div className="w-full relative mb-8 flex flex-wrap justify-start sm:justify-center px-1">
              <TabsList className="inline-flex h-auto p-1.5 bg-muted/80 backdrop-blur rounded-2xl shadow-inner gap-2 flex-wrap w-full justify-center">
                {category.subCategories.map(sub => (
                  <TabsTrigger
                    key={sub.id}
                    value={sub.id}
                    className="flex-1 min-w-[180px] text-center py-2.5 px-5 rounded-xl font-tamil-heading text-sm md:text-base data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {sub.title}
                      <span className="text-xs font-tamil-body font-normal opacity-80 bg-foreground/10 px-2.5 py-0.5 rounded-full">
                        {sub.id === "photos" ? currentGalleryImages.length : sub.items.length}
                      </span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {category.subCategories.map((sub, i) => (
              <TabsContent key={sub.id} value={sub.id} className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  {(sub.image || sub.description) && (
                    <div className="mb-8 p-6 rounded-2xl bg-card/60 backdrop-blur border border-border/50 shadow-sm flex flex-col md:flex-row gap-6">
                      {sub.image && (
                        <div className="w-full md:w-1/3 flex-shrink-0">
                          <img
                            src={useAssetUrl(sub.image)}
                            alt={sub.title}
                            className="w-full h-auto rounded-xl object-cover aspect-[4/3] shadow-sm"
                          />
                        </div>
                      )}
                      {sub.description && (
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="font-tamil-heading text-xl font-bold text-primary mb-3">{sub.title}</h3>
                          <p className="font-tamil-body text-foreground/80 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                            {sub.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {sub.id === "photos" ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-8">
                      {currentGalleryImages.map((img, idx) => (
                        <div
                          key={`${img.id}-${idx}`}
                          className="rounded-xl overflow-hidden border border-border/50 shadow-sm aspect-square bg-muted/30 group relative cursor-pointer"
                          onClick={() => setSelectedIndex(idx)}
                        >
                          <img
                            src={useAssetUrl(img.src)}
                            alt={img.title || "Photo"}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white font-tamil-body p-4 text-sm md:text-base line-clamp-2">
                              {img.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Accordion type="multiple" className="space-y-4">
                      {sub.items.map((item) => (
                        <AccordionItem
                          key={item.id}
                          value={item.id}
                          className="rounded-xl border border-border/50 bg-card px-6 py-2 hover:border-accent/30 hover:shadow-sm transition-all data-[state=open]:bg-muted/10"
                        >
                          <AccordionTrigger className="font-tamil-heading font-semibold text-foreground hover:no-underline text-left pt-4 pb-0">
                            <ArticleTitle item={item} titleClassName="font-tamil-heading font-semibold" />
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-0 pb-4">
                              {item.content && (
                                <div className="sticky top-16 md:top-20 z-10 bg-background/95 backdrop-blur-md pt-0 pb-3 mb-6 -mt-2 border-b border-border/50 shadow-sm flex flex-wrap gap-3 items-center max-w-4xl mx-auto rounded-t-lg -mx-2 px-2 md:-mx-4 md:px-4">
                                  {item.audioFile ? (
                                    <div className="flex flex-col gap-1 w-full sm:w-auto flex-grow max-w-sm">
                                      <span className="font-tamil-body text-xs font-semibold text-muted-foreground ml-2">கேட்க :</span>
                                      <audio controls src={getAudioUrl(item.audioFile)} className="w-full h-10 outline-none hover:shadow-sm transition-shadow rounded-full" />
                                    </div>
                                  ) : (
                                    <TextToSpeech text={item.content} audioFile={item.audioFile} />
                                  )}
                                  {item.englishTranslation && (
                                    <button
                                      onClick={() => document.getElementById(`translation-${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                                    >
                                      <Languages className="w-4 h-4" />
                                      <span>English Translation</span>
                                    </button>
                                  )}
                                  {features.enableDownloadIndividualPdf && item.englishTranslation && (
                                    <button
                                      onClick={() => downloadArticlePdf(item).catch((e) => console.error("PDF download failed:", e))}
                                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                                    >
                                      <Download className="w-4 h-4" />
                                      <span>Download PDF</span>
                                    </button>
                                  )}
                                </div>
                              )}
                              {item.image && (
                                <div className="mb-6 rounded-lg overflow-hidden border border-border/50 shadow-sm max-w-3xl mx-auto">
                                  <img src={useAssetUrl(item.image)} alt={articleDisplayTitle(item)} className="w-full h-auto" />
                                </div>
                              )}
                              <p className="font-tamil-body text-sm md:text-base text-foreground whitespace-pre-wrap leading-relaxed max-w-3xl mx-auto">
                                {item.content}
                              </p>
                              {item.englishTranslation && (
                                <div id={`translation-${item.id}`} className="mt-8 pt-6 border-t border-border/50 max-w-3xl mx-auto">
                                  <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                                    <h4 className="text-lg font-semibold text-primary font-sans flex items-center gap-2 m-0">
                                      <Languages className="w-5 h-5" />
                                      English Translation
                                    </h4>
                                    {item.englishAudioFile ? (
                                      <div className="flex flex-col gap-1 w-full sm:w-auto">
                                        <span className="font-sans text-xs font-semibold text-muted-foreground ml-2">Listen:</span>
                                        <audio controls src={getAudioUrl(item.englishAudioFile)} className="w-full h-10 outline-none hover:shadow-sm transition-shadow rounded-full" />
                                      </div>
                                    ) : (
                                      <TextToSpeech
                                        text={item.englishTranslation}
                                        audioFile={item.englishAudioFile}
                                        lang="en-US"
                                        labelPlay="Listen"
                                        labelStop="Stop"
                                      />
                                    )}
                                  </div>
                                  <p className="font-sans text-sm md:text-base text-foreground/90 whitespace-pre-wrap leading-relaxed">
                                    {item.englishTranslation}
                                  </p>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        ) : category.items ? (
          <div className="max-w-4xl mx-auto">
            {category.id === "haiku" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8 px-4 md:px-0">
                {currentGalleryImages.map((img, idx) => (
                  <div
                    key={`${img.id}-${idx}`}
                    className="flex flex-col rounded-2xl overflow-hidden border border-border/60 shadow-md bg-card group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={useAssetUrl(img.src)}
                        alt={img.title || "Haiku"}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-4 py-4 flex-1 flex items-center justify-center border-t border-border/40 bg-card">
                      <p className="font-tamil-body text-sm md:text-base text-foreground text-center leading-relaxed italic">
                        {img.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Accordion type="multiple" className="space-y-3">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <AccordionItem
                      value={item.id}
                      className="rounded-xl border border-border/50 bg-card px-6 py-2 hover:border-accent/30 hover:shadow-sm transition-all data-[state=open]:bg-muted/10"
                    >
                      <AccordionTrigger className="font-tamil-heading font-semibold text-foreground hover:no-underline text-left pt-4 pb-0">
                        <ArticleTitle item={item} titleClassName="font-tamil-heading font-semibold" />
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-0 pb-4">
                          {item.content && (
                            <div className="sticky top-16 md:top-20 z-10 bg-background/95 backdrop-blur-md pt-0 pb-3 mb-6 -mt-2 border-b border-border/50 shadow-sm flex flex-wrap gap-3 items-center max-w-4xl mx-auto rounded-t-lg -mx-2 px-2 md:-mx-4 md:px-4">
                              {item.audioFile ? (
                                <div className="flex flex-col gap-1 w-full sm:w-auto flex-grow max-w-sm">
                                  <span className="font-tamil-body text-xs font-semibold text-muted-foreground ml-2">கேட்க :</span>
                                  <audio controls src={getAudioUrl(item.audioFile)} className="w-full h-10 outline-none hover:shadow-sm transition-shadow rounded-full" />
                                </div>
                              ) : (
                                <TextToSpeech text={item.content} audioFile={item.audioFile} />
                              )}
                              {item.englishTranslation && (
                                <button
                                  onClick={() => document.getElementById(`translation-${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                                >
                                  <Languages className="w-4 h-4" />
                                  <span>English Translation</span>
                                </button>
                              )}
                              {features.enableDownloadIndividualPdf && item.englishTranslation && (
                                <button
                                  onClick={() => downloadArticlePdf(item).catch((e) => console.error("PDF download failed:", e))}
                                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                                >
                                  <Download className="w-4 h-4" />
                                  <span>Download PDF</span>
                                </button>
                              )}
                            </div>
                          )}
                          {item.image && (
                            <div className="mb-6 rounded-lg overflow-hidden border border-border/50 shadow-sm max-w-3xl mx-auto">
                              <img src={useAssetUrl(item.image)} alt={articleDisplayTitle(item)} className="w-full h-auto" />
                            </div>
                          )}
                          <p className="font-tamil-body text-sm md:text-base text-foreground whitespace-pre-wrap leading-relaxed max-w-3xl mx-auto">
                            {item.content}
                          </p>
                          {item.englishTranslation && (
                            <div id={`translation-${item.id}`} className="mt-8 pt-6 border-t border-border/50 max-w-3xl mx-auto">
                              <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                                <h4 className="text-lg font-semibold text-primary font-sans flex items-center gap-2 m-0">
                                  <Languages className="w-5 h-5" />
                                  English Translation
                                </h4>
                                {item.englishAudioFile ? (
                                  <div className="flex flex-col gap-1 w-full sm:w-auto">
                                    <span className="font-sans text-xs font-semibold text-muted-foreground ml-2">Listen:</span>
                                    <audio controls src={getAudioUrl(item.englishAudioFile)} className="w-full h-10 outline-none hover:shadow-sm transition-shadow rounded-full" />
                                  </div>
                                ) : (
                                  <TextToSpeech
                                    text={item.englishTranslation}
                                    audioFile={item.englishAudioFile}
                                    lang="en-US"
                                    labelPlay="Listen"
                                    labelStop="Stop"
                                  />
                                )}
                              </div>
                              <p className="font-sans text-sm md:text-base text-foreground/90 whitespace-pre-wrap leading-relaxed">
                                {item.englishTranslation}
                              </p>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            )}
          </div>
        ) : null}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedIndex !== null && currentGalleryImages[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
              {features.enableDownloadIndividualPdf && (
                <button
                  className="text-white/70 hover:text-white transition-colors bg-black/40 p-2 rounded-full backdrop-blur-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentGalleryImages[selectedIndex].originalItem) {
                      downloadArticlePdf(currentGalleryImages[selectedIndex].originalItem).catch((err) => console.error("PDF download failed:", err));
                    }
                  }}
                  title="Download PDF"
                >
                  <Download className="w-6 h-6" />
                </button>
              )}
              <button
                className="text-white/70 hover:text-white transition-colors bg-black/40 p-2 rounded-full backdrop-blur-md"
                onClick={() => setSelectedIndex(null)}
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {currentGalleryImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/80 p-3 rounded-full backdrop-blur-md z-20 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length);
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all bg-black/40 hover:bg-black/80 p-3 rounded-full backdrop-blur-md z-20 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex + 1) % currentGalleryImages.length);
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.div
              key={currentGalleryImages[selectedIndex].src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={useAssetUrl(currentGalleryImages[selectedIndex].src)}
                alt={currentGalleryImages[selectedIndex].title || "Full size photo"}
                className="max-w-full max-h-[80vh] object-contain rounded-t-lg shadow-2xl"
              />
              {currentGalleryImages[selectedIndex].title && (
                <div className="w-full bg-black/80 backdrop-blur-sm px-6 py-4 rounded-b-lg border-t border-white/10">
                  <p className="text-white font-tamil-heading text-base md:text-xl font-medium text-center leading-relaxed italic">
                    {currentGalleryImages[selectedIndex].title}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CategoryPage;
