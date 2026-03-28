import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      <div className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        {category.subCategories ? (
          <Accordion type="multiple" defaultValue={category.subCategories.map(s => s.id)} className="space-y-3">
            {category.subCategories.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <AccordionItem value={sub.id} className="border border-border/50 rounded-xl bg-card px-5">
                  <AccordionTrigger className="font-tamil-heading text-base hover:no-underline hover:text-primary">
                    <span className="flex items-center gap-3">
                      {sub.title}
                      <span className="text-xs font-tamil-body text-muted-foreground font-normal bg-secondary px-2 py-0.5 rounded-full">
                        {sub.items.length}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2 pb-4">
                      {sub.items.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-xl border border-border/50 bg-background p-5 hover:border-accent/30 hover:shadow-sm transition-all"
                        >
                          <h4 className="font-tamil-heading font-medium text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="font-tamil-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        ) : category.items ? (
          <div className="space-y-3">
            {category.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-xl border border-border/50 bg-card p-6 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <h3 className="font-tamil-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-tamil-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
