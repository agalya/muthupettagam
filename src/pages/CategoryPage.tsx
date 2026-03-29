import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextToSpeech from "@/components/TextToSpeech";
import { ArticleTitle, articleDisplayTitle } from "@/lib/articleDisplayTitle";
import { Languages } from "lucide-react";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);

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
            <div className="flex items-center gap-4 mb-3">
              <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-3xl">
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
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-10 max-w-5xl">
        {category.subCategories ? (
          <Tabs defaultValue={category.subCategories[0].id} className="w-full">
            <div className="w-full relative mb-8 overflow-x-auto flex justify-start sm:justify-center px-1">
              <TabsList className="inline-flex flex-nowrap whitespace-nowrap h-auto p-1.5 bg-muted/80 backdrop-blur rounded-2xl shadow-inner gap-1 min-w-max">
                {category.subCategories.map(sub => (
                  <TabsTrigger 
                    key={sub.id} 
                    value={sub.id} 
                    className="py-2.5 px-5 rounded-xl font-tamil-heading text-sm md:text-base data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {sub.title}
                      <span className="text-xs font-tamil-body font-normal opacity-80 bg-foreground/10 px-2.5 py-0.5 rounded-full">
                        {sub.items.length}
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
                  <Accordion type="multiple" className="space-y-4">
                    {sub.items.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="rounded-xl border border-border/50 bg-card px-6 py-2 hover:border-accent/30 hover:shadow-sm transition-all data-[state=open]:bg-muted/10"
                      >
                        <AccordionTrigger className="font-tamil-heading font-semibold text-foreground hover:no-underline text-left py-4">
                          <ArticleTitle item={item} titleClassName="font-tamil-heading font-semibold" />
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-4">
                            {item.content && (
                              <div className="mb-6 flex flex-wrap gap-3 max-w-3xl mx-auto">
                                <TextToSpeech text={item.content} audioFile={item.audioFile} />
                                {item.englishTranslation && (
                                  <button 
                                    onClick={() => document.getElementById(`translation-${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                                  >
                                    <Languages className="w-4 h-4" />
                                    <span>English Translation</span>
                                  </button>
                                )}
                              </div>
                            )}
                            {item.image && (
                              <div className="mb-6 rounded-lg overflow-hidden border border-border/50 shadow-sm max-w-3xl mx-auto">
                                <img src={item.image} alt={articleDisplayTitle(item)} className="w-full h-auto" />
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
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        ) : category.items ? (
          <div className="max-w-3xl mx-auto">
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
                  <AccordionTrigger className="font-tamil-heading font-semibold text-foreground hover:no-underline text-left py-4">
                    <ArticleTitle item={item} titleClassName="font-tamil-heading font-semibold" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      {item.content && (
                        <div className="mb-5 flex flex-wrap gap-3">
                          <TextToSpeech text={item.content} audioFile={item.audioFile} />
                          {item.englishTranslation && (
                            <button 
                              onClick={() => document.getElementById(`translation-${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
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
                      <p className="font-tamil-body text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                        {item.content}
                      </p>
                      {item.englishTranslation && (
                        <div id={`translation-${item.id}`} className="mt-6 pt-6 border-t border-border/50">
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
              </motion.div>
            ))}
          </Accordion>
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
