const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-10 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="h-8 w-8 mx-auto rounded-lg bg-primary flex items-center justify-center mb-3">
          <span className="text-xs text-primary-foreground font-bold">மு</span>
        </div>
        <p className="font-tamil-heading text-sm text-foreground font-medium">
          நம் மீன் தொட்டிக்குள்ளே "மீன்" என நம்பி இருந்துவிட்ட விண்மீன்
        </p>

        <p className="font-tamil-body text-xs text-muted-foreground max-w-md mx-auto">
          இந்த இணையதளம் அவரின் படைப்புகளை பாதுகாக்கும் முத்துப் பெட்டகம்
        </p>
      </div>
    </footer>
  );
};

export default Footer;
