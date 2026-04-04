const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-10 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="h-8 w-8 mx-auto rounded-lg bg-primary flex items-center justify-center mb-3">
          <span className="text-xs text-primary-foreground font-bold">மு</span>
        </div>
        <p className="font-tamil-heading text-xs text-foreground font-medium mb-3">
          நம் மீன் தொட்டிக்குள்ளே "மீன்" என நம்பி இருந்துவிட்ட விண்மீன்
        </p>

        <p className="font-tamil-body text-[11px] text-foreground/80 mb-1">
          உறவுகளின் உறுதுணையுடன்
        </p>
        <p className="font-tamil-body text-[11px] text-foreground/80 mb-4">
          தொகுத்தவர் அன்பு மகள் அகல்யா
        </p>

        <div className="flex justify-center items-center gap-4 mb-6">
          <a href="mailto:agalya94@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors" title="Gmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </a>
          <a href="https://wa.me/917708944004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.112.552 4.118 1.54 5.908L.027 24l6.236-1.637a11.96 11.96 0 0 0 5.768 1.488h.004c6.648 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 21.849c-1.785 0-3.535-.481-5.07-1.39l-.364-.216-3.774.99 1-3.68-.236-.375a10 10 0 0 1-1.529-5.328c0-5.545 4.512-10.057 10.057-10.057 5.545 0 10.057 4.512 10.057 10.057s-4.512 10.057-10.057 10.057zm5.526-7.55c-.303-.152-1.792-.885-2.072-.986-.28-.101-.485-.152-.687.152-.202.303-.784.986-.961 1.189-.177.202-.354.227-.657.076-.303-.152-1.281-.473-2.441-1.507-.903-.805-1.512-1.8-1.689-2.103-.177-.303-.019-.467.132-.619.136-.137.303-.354.455-.53.152-.177.202-.303.303-.505.101-.202.051-.38-.025-.532-.076-.152-.687-1.657-.941-2.268-.248-.595-.5-.515-.687-.525-.177-.008-.38-.01-.582-.01-.202 0-.53.076-.809.38C6.671 7.234 5.86 8.017 5.86 9.61c0 1.593 1.133 3.136 1.291 3.338.152.202 2.274 3.473 5.508 4.869.77.332 1.37.53 1.84.679.773.245 1.476.21 2.032.127.625-.093 1.792-.733 2.045-1.442.253-.709.253-1.316.177-1.442-.076-.126-.28-.202-.583-.353z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/agalya-kandasamy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="https://www.facebook.com/share/1BvUygCDHn/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors" title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
          </a>
        </div>

        <p className="font-tamil-body text-[10px] text-muted-foreground max-w-md mx-auto">
          இந்த இணையதளம் அவரின் படைப்புகளை பாதுகாக்கும் முத்துப் பெட்டகம்
        </p>
      </div>
    </footer>
  );
};

export default Footer;
