import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone, Sparkles } from "lucide-react";

export default function Header({ onOpenCakeBuilder }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Menu", href: "#menu" },
    { name: "Cake Designer", href: "#cake-designer", highlight: true },
    { name: "Daily Specials", href: "#specials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    
    if (href === "#cake-designer") {
      onOpenCakeBuilder();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-lg shadow-rosegold-100/20 border-b border-rosegold-100/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-rosegold-400 via-rosegold-500 to-rosegold-600 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rosegold-400 to-rosegold-600 flex items-center justify-center shadow-md">
                <span className="font-serif text-white font-bold text-lg">M</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-rosegold-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wide text-rosegold-800 leading-tight">
                Maison de la Rose
              </span>
              <span className="text-[10px] tracking-[0.25em] text-rosegold-500 uppercase font-sans">
                Artisan Patisserie
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm tracking-wider uppercase transition-colors relative py-2 group ${
                  link.highlight
                    ? "text-rosegold-600 font-semibold flex items-center gap-1.5"
                    : "text-rosegold-700/80 hover:text-rosegold-900 font-medium"
                }`}
              >
                {link.highlight && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-rosegold-500 animate-ping" />
                )}
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rosegold-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="tel:+1555ROSEGLD"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rosegold-700 hover:text-rosegold-900 transition-colors"
            >
              <Phone size={14} className="text-rosegold-500" />
              <span>(555) ROSE-GLD</span>
            </a>

            <button
              onClick={() => handleLinkClick("#contact")}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-rosegold-600 to-rosegold-400 hover:from-rosegold-500 hover:to-rosegold-300 rounded-full shadow-md shadow-rosegold-600/20 hover:shadow-lg hover:shadow-rosegold-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Consultation
            </button>
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-rosegold-700 hover:bg-rosegold-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[60px] z-30 w-full bg-white/95 backdrop-blur-lg border-t border-rosegold-100 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className={`text-left text-lg tracking-wider uppercase font-medium py-2 border-b border-rosegold-50/50 ${
                link.highlight ? "text-rosegold-600 font-bold" : "text-rosegold-800"
              }`}
            >
              {link.name}
            </button>
          ))}

          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="tel:+1555ROSEGLD"
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-rosegold-700"
            >
              <Phone size={18} className="text-rosegold-500" />
              <span>(555) ROSE-GLD</span>
            </a>
            <button
              onClick={() => handleLinkClick("#contact")}
              className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-rosegold-600 to-rosegold-400 rounded-full shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
