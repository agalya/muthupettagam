import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const itemCount = category.items?.length || 
    category.subCategories?.reduce((acc, sub) => acc + sub.items.length, 0) || 0;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        to={`/category/${category.id}`}
        className="group flex flex-col h-full rounded-2xl bg-card border border-border/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-accent/30"
      >
        <div className="mb-4 h-11 w-11 rounded-xl bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {category.icon}
        </div>
        <h3 className="mb-2 font-tamil-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground font-tamil-body leading-relaxed">
          {category.description}
        </p>
        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-tamil-body bg-secondary px-2.5 py-1 rounded-full">
            {itemCount} படைப்புகள்
          </span>
          <span className="text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
