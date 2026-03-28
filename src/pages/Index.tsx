import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import img1 from "@/assets/periyappaAndPeriyamma.jpeg";
import img2 from "@/assets/periyappaAndSiddhu.jpeg";
import img3 from "@/assets/periyappaKavinandShawn.jpeg";
import img4 from "@/assets/periyappareadingpaper.jpeg";
import img5 from "@/assets/Railviharperiyappa.jpeg";

const photos = [img1, img2, img5, img4, img3];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section with Photo Background */}
      <section className="gradient-memorial relative overflow-hidden py-24 px-4 text-center">
        {/* Photo mosaic background */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-0 opacity-[0.5]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240_50%_16%/0.7)] via-[hsl(240_40%_22%/0.6)] to-[hsl(260_35%_28%/0.8)]" />

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
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className="h-12 w-12 mx-auto rounded-2xl gradient-gold flex items-center justify-center shadow-lg">
              <span className="text-xl">✦</span>
            </div>
          </motion.div>
          <h1 className="font-tamil-heading text-4xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            நினைவு மலர்
          </h1>
          <div className="w-20 h-1 gradient-gold mx-auto mb-6 rounded-full" />
          <p className="font-tamil-body text-white/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            எழுத்தாளர், கவிஞர், விமர்சகர் — அவரின் படைப்புகளின் தொகுப்பு.
            <br />
            அவரின் சொற்கள் என்றும் எம் நெஞ்சில் நிலைத்திருக்கும்.
          </p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 -mt-8 relative z-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
