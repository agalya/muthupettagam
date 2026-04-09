import { Link } from "react-router-dom";
import { features } from "@/config/site";
import { VisitorStats } from "@/components/VisitorStats";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-6">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-sm text-primary-foreground font-bold">மு</span>
            </div>
            <span className="hidden lg:inline font-tamil-heading text-lg font-semibold text-foreground whitespace-nowrap">
              முத்துக்குமாரின் நினைவகம்
            </span>
          </Link>
          <VisitorStats />
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/", label: "முகப்பு" },
            { to: "/category/his-poems", label: "கவிதைகள்" },
            { to: "/category/press", label: "பத்திரிக்கை" },
            { to: "/category/memories", label: "நினைவுகள்" },
            features.enableUpload ? { to: "/upload", label: "புதிய பதிவு (Upload)" } : null,
          ].filter((link): link is { to: string, label: string } => link !== null).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-tamil-body text-sm text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-2 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
