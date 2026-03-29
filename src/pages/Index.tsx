import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Mic, Languages } from "lucide-react";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TextToSpeech from "@/components/TextToSpeech";
import { ArticleTitle, articleDisplayTitle } from "@/lib/articleDisplayTitle";

import img1 from "@/assets/periyappaAndPeriyamma.jpeg";
import img2 from "@/assets/periyappaAndSiddhu.jpeg";
import img3 from "@/assets/periyappaKavinandShawn.jpeg";
import img4 from "@/assets/periyappareadingpaper.jpeg";
import img5 from "@/assets/Railviharperiyappa.jpeg";

const photos = [img1, img2, img5, img4, img3];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("உங்கள் உலாவி குரல் தேடலை ஆதரிக்கவில்லை."); // Your browser doesn't support voice search
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ta-IN'; // Tamil language
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const allArticles = useMemo(() => {
    const articles: any[] = [];
    categories.forEach(cat => {
      if (cat.items) {
        cat.items.forEach(item => articles.push({...item, categoryId: cat.id, categoryTitle: cat.title}));
      }
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => articles.push({...item, categoryId: cat.id, categoryTitle: cat.title, subCategoryTitle: sub.title}));
        })
      }
    });
    return articles;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allArticles.filter((item) => {
      const titleBlock = articleDisplayTitle(item).toLowerCase();
      return (
        item.title?.toLowerCase().includes(query) ||
        item.date?.toLowerCase().includes(query) ||
        titleBlock.includes(query) ||
        item.content?.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, allArticles]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section with Photo Background */}
      <section className="bg-[hsl(220_20%_12%)] relative overflow-hidden py-24 px-4 text-center">
        {/* Photo mosaic background */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-0 opacity-[0.75]">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              className="relative overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          ))}
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_30%_8%/0.6)] via-[hsl(220_25%_12%/0.5)] to-[hsl(220_20%_15%/0.7)]" />

        {/* Ambient glow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-accent blur-[100px]" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-accent blur-[80px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-2xl relative z-10"
        >
          <h1 className="font-tamil-heading text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            முத்துப் பெட்டகம்
          </h1>
          <div className="w-20 h-1 gradient-gold mx-auto mb-6 rounded-full" />
          <p className="font-tamil-body text-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            எழுத்தாளர், கவிஞர், விமர்சகர் — காலத்தால் அழியாத! காலனால் களவு கொள்ள முடியாத! கருத்து கருவூலங்கள்
          </p>

          <div className="mt-8 max-w-md mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50 group-focus-within:text-white/90 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="கட்டுரைகளைத் தேடுக..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-full pl-11 pr-14 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-md transition-all"
            />
            <div className="absolute inset-y-0 right-1 pr-2 flex items-center">
              <button
                onClick={handleVoiceSearch}
                className={`p-2 rounded-full transition-colors fill-current ${isListening ? 'bg-destructive/80 text-white animate-pulse' : 'text-white/50 hover:bg-white/10 hover:text-white/90'}`}
                title="குரல் தேடல்"
                disabled={isListening}
              >
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      {searchQuery.trim() ? (
        <section className="container mx-auto px-4 -mt-8 relative z-10 pb-16">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border/50 p-6 shadow-xl">
            <h2 className="font-tamil-heading text-xl font-semibold mb-6 text-foreground">
              தேடல் முடிவுகள்: {searchResults.length} {searchResults.length === 1 ? 'முடிவு' : 'முடிவுகள்'}
            </h2>
            {searchResults.length > 0 ? (
              <Accordion type="multiple" className="space-y-3">
                {searchResults.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="rounded-xl border border-border/50 bg-background px-5 py-1 hover:border-accent/30 hover:shadow-sm transition-all data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="font-tamil-heading font-medium text-foreground hover:no-underline text-left py-4 flex flex-col items-start gap-1">
                      <span className="w-full text-left">
                        <ArticleTitle item={item} titleClassName="font-tamil-heading font-medium" />
                      </span>
                      <span className="text-xs font-tamil-body text-muted-foreground/80 font-normal">
                        {item.categoryTitle} {item.subCategoryTitle ? `> ${item.subCategoryTitle}` : ''}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pb-4">
                        {item.content && (
                          <div className="mb-5 flex flex-wrap gap-3">
                            <TextToSpeech text={item.content} audioFile={item.audioFile} />
                            {item.englishTranslation && (
                              <button 
                                onClick={() => document.getElementById(`search-translation-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                              >
                                <Languages className="w-4 h-4" />
                                <span>English Translation</span>
                              </button>
                            )}
                          </div>
                        )}
                        {item.image && (
                          <div className="mb-5 rounded-lg overflow-hidden border border-border/50 shadow-sm">
                            <img src={item.image} alt={articleDisplayTitle(item)} className="w-full h-auto" />
                          </div>
                        )}
                        <p className="font-tamil-body text-sm md:text-base text-foreground whitespace-pre-wrap leading-relaxed">
                          {item.content}
                        </p>
                        {item.englishTranslation && (
                          <div id={`search-translation-${item.id}`} className="mt-6 pt-6 border-t border-border/50">
                            <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                              <h4 className="text-lg font-semibold text-primary font-sans flex items-center gap-2 m-0">
                                <Languages className="w-5 h-5" />
                                English Translation
                              </h4>
                              <TextToSpeech 
                                text={item.englishTranslation} 
                                audioFile={item.englishAudioFile} 
                                lang="en-US" 
                                labelPlay="Listen" 
                                labelStop="Stop" 
                              />
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
            ) : (
              <p className="font-tamil-body py-10 text-center text-muted-foreground">முடிவுகள் எதுவும் கிடைக்கவில்லை.</p>
            )}
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-4 -mt-8 relative z-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
