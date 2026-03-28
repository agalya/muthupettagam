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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/category/${category.id}`}
        className="group block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-memorial-gold hover:-translate-y-1"
      >
        <div className="mb-3 text-3xl">{category.icon}</div>
        <div className="mb-1 font-tamil-body text-xs text-muted-foreground">
          {category.number}.
        </div>
        <h3 className="mb-2 font-tamil-heading text-lg font-semibold text-foreground group-hover:text-memorial-burgundy transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground font-tamil-body">
          {category.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-tamil-body">
            {itemCount} படைப்புகள்
          </span>
          <span className="text-memorial-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            காண்க →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
