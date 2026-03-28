import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl text-memorial-gold">✦</span>
          <span className="font-tamil-heading text-lg font-semibold text-foreground">
            நினைவு மலர்
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-tamil-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            முகப்பு
          </Link>
          <Link to="/category/his-poems" className="font-tamil-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            கவிதைகள்
          </Link>
          <Link to="/category/press" className="font-tamil-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            பத்திரிக்கை
          </Link>
          <Link to="/category/memories" className="font-tamil-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            நினைவுகள்
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
