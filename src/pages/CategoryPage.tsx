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
            <Link to="/" className="text-memorial-burgundy font-tamil-body hover:underline">
              முகப்புக்குச் செல்க
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <div className="gradient-memorial py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-1 text-primary-foreground/70 font-tamil-body text-sm mb-4 hover:text-primary-foreground transition-colors">
              ← முகப்பு
            </Link>
            <div className="text-4xl mb-3">{category.icon}</div>
            <h1 className="font-tamil-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {category.title}
            </h1>
            <p className="font-tamil-body text-primary-foreground/80">
              {category.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-10">
        {category.subCategories ? (
          <Accordion type="multiple" defaultValue={category.subCategories.map(s => s.id)} className="space-y-4">
            {category.subCategories.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <AccordionItem value={sub.id} className="border border-border rounded-lg bg-card px-4">
                  <AccordionTrigger className="font-tamil-heading text-lg hover:no-underline hover:text-memorial-burgundy">
                    <span className="flex items-center gap-3">
                      {sub.title}
                      <span className="text-xs font-tamil-body text-muted-foreground font-normal">
                        ({sub.items.length} படைப்புகள்)
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2 pb-4">
                      {sub.items.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-md border border-border bg-background p-4 hover:border-memorial-gold transition-colors"
                        >
                          <h4 className="font-tamil-heading font-medium text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="font-tamil-body text-sm text-muted-foreground whitespace-pre-line">
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
          <div className="space-y-4">
            {category.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-border bg-card p-6 hover:border-memorial-gold transition-colors"
              >
                <h3 className="font-tamil-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-tamil-body text-sm text-muted-foreground whitespace-pre-line">
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
