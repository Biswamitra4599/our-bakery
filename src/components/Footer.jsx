import { useState } from "react";
import { Sparkles, Mail, Heart, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Cake Designer", href: "#cake-designer" },
    { name: "Promotions", href: "#specials" },
  ];

  return (
    <footer className="bg-[#231517] text-rosegold-100 border-t border-rosegold-500/10 pt-20 pb-10 relative overflow-hidden">
      
      <div className="absolute top-[10%] left-[5%] w-60 h-60 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-[#FFEAEB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-rosegold-500/10">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rosegold-400 to-rosegold-600 flex items-center justify-center shadow-md">
                <span className="font-serif text-white font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white leading-tight">
                  Our's Bakery
                </span>
                <span className="text-[10px] tracking-[0.25em] text-rosegold-400 uppercase font-sans">
                  Handcrafted Cakes & Pastries
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rosegold-200/70 leading-relaxed font-sans font-light">
              Crafting exceptional baking experiences through premium ingredients, artisan techniques, and timeless craftsmanship. Every cake, pastry, and dessert is thoughtfully created to deliver beautiful presentation, unforgettable flavor, and moments worth celebrating.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#3D2529] hover:bg-rosegold-600 text-rosegold-300 hover:text-white rounded-full transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/oursbakerykgp/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#3D2529] hover:bg-rosegold-600 text-rosegold-300 hover:text-white rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#3D2529] hover:bg-rosegold-600 text-rosegold-300 hover:text-white rounded-full transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-rosegold-200/70 hover:text-rosegold-300 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Patisserie Info
            </h4>
            <ul className="space-y-3.5 text-xs text-rosegold-200/70 font-light font-sans">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rosegold-400 shrink-0 mt-0.5" />
                <span>Chota Tengra, Jhapatapur, Kharagpur, West Bengal 721301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rosegold-400 shrink-0" />
                <span>+91 9836704752</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-rosegold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium">Mon - Fri: 7:00 AM - 7:00 PM</span>
                  <span className="block font-medium">Sat - Sun: 8:00 AM - 8:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs text-rosegold-200/70 font-light leading-relaxed font-sans">
              Subscribe to receive updates on new products, recipe videos, and daily chef surprises.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-2 relative">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-rosegold-400" size={14} />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#3D2529] border border-rosegold-500/20 rounded-xl text-xs text-white placeholder-rosegold-400/60 focus:outline-none focus:ring-1 focus:ring-rosegold-400 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-rosegold-600 to-rosegold-400 hover:from-rosegold-500 hover:to-rosegold-300 text-white font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <Sparkles size={10} />
              </button>

              {subscribed && (
                <span className="absolute -bottom-6 left-0 text-[10px] text-emerald-400 font-semibold animate-fade-in-up">
                  Thank you! You are subscribed.
                </span>
              )}
            </form>
          </div> */}

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-rosegold-200/50">
          <p>© {new Date().getFullYear()} Our's Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0 font-light">
            Made with <Heart size={10} className="text-rosegold-400 fill-rosegold-400 animate-pulse" /> for sweet lovers everywhere by Riqva Nexoyan Pvt. Ltd..
          </p>
        </div>

      </div>
    </footer>
  );
}
