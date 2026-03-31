import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm text-primary-foreground font-bold">மு</span>
          </div>
          <span className="font-tamil-heading text-lg font-semibold text-foreground">
            முத்துக்குமாரின் நினைவகம்
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/", label: "முகப்பு" },
            { to: "/category/his-poems", label: "கவிதைகள்" },
            { to: "/category/press", label: "பத்திரிக்கை" },
            { to: "/category/memories", label: "நினைவுகள்" },
            { to: "/upload", label: "புதிய பதிவு (Upload)" },
          ].map((link) => (
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
