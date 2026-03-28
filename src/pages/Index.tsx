import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="gradient-memorial py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-2xl"
        >
          <p className="text-memorial-gold text-3xl mb-4">✦</p>
          <h1 className="font-tamil-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            நினைவு மலர்
          </h1>
          <div className="w-16 h-0.5 gradient-gold mx-auto mb-6" />
          <p className="font-tamil-body text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            எழுத்தாளர், கவிஞர், விமர்சகர் — அவரின் படைப்புகளின் தொகுப்பு.
            <br />
            அவரின் சொற்கள் என்றும் எம் நெஞ்சில் நிலைத்திருக்கும்.
          </p>
        </motion.div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-border" />
        <span className="mx-4 text-memorial-gold text-sm">❧</span>
        <div className="h-px w-16 bg-border" />
      </div>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-tamil-heading text-xl md:text-2xl font-semibold text-foreground text-center mb-10"
        >
          படைப்புகள்
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
