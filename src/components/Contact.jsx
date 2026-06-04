import { MapPin, Phone, Mail, Clock, Compass } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-rosegold-50/20 overflow-hidden">
      
      <div className="absolute top-[20%] -left-12 w-80 h-80 bg-rosegold-100 rounded-full blur-3xl pointer-events-none opacity-45" />
      <div className="absolute bottom-[20%] -right-12 w-96 h-96 bg-[#FFEAEB] rounded-full blur-3xl pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-100/80 rounded-full text-[10px] text-rosegold-700 font-semibold uppercase tracking-wider">
            <Mail size={12} className="text-rosegold-600" />
            <span>Consultation & Location</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 mt-3">
            Visit Our Lounge & Tastings
          </h2>
          <p className="text-sm text-rosegold-700/70 mt-3 font-sans font-light">
            Plan a wedding, birthday party, or a special private event. Reserve a tasting appointment or drop by our Parisian-styled lounge in Blush Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            <div className="bg-white border border-rosegold-100 rounded-[32px] p-8 shadow-md space-y-8 flex-grow">
              <div className="flex items-center justify-between border-b border-rosegold-50 pb-4">
                <h3 className="font-serif text-xl font-bold text-rosegold-800">
                  Maison Patisserie Lounge
                </h3>
                <span className="text-[10px] bg-rosegold-50 text-rosegold-600 font-bold px-2 py-0.5 rounded-full border border-rosegold-200 uppercase">
                  Dine-In & Pickups
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-rosegold-50 rounded-xl text-rosegold-600 shadow-sm shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-rosegold-800 text-xs uppercase tracking-wider">Address</h4>
                    <p className="text-xs text-rosegold-700/80 mt-1 leading-relaxed">
                      Chota Tengra, Jhapatapur,<br />
                      Kharagpur, West Bengal 721301 
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-rosegold-50 rounded-xl text-rosegold-600 shadow-sm shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-rosegold-800 text-xs uppercase tracking-wider">Phone</h4>
                    <p className="text-xs text-rosegold-700/80 mt-1">
                      98367-04752
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-rosegold-50 rounded-xl text-rosegold-600 shadow-sm shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-rosegold-800 text-xs uppercase tracking-wider">Email Contact</h4>
                    <p className="text-xs text-rosegold-700/80 mt-1">
                      hello@maisondelarose.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-rosegold-50 rounded-xl text-rosegold-600 shadow-sm shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-rosegold-800 text-xs uppercase tracking-wider">Hours</h4>
                    <p className="text-xs text-rosegold-700/80 mt-1 leading-relaxed">
                      Mon - Fri: 7am - 7pm <br />
                      Sat - Sun: 8am - 8pm
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-rosegold-50 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919836704752"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-rosegold-600 to-rosegold-400 hover:from-rosegold-500 hover:to-rosegold-300 text-white rounded-xl text-center text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  <span>Call to Reserve Lounge</span>
                </a>
                <a
                  href="mailto:hello@maisondelarose.com"
                  className="flex-1 py-3 px-4 bg-white border border-rosegold-200 text-rosegold-700 rounded-xl text-center text-xs font-bold uppercase tracking-wider hover:bg-rosegold-50 transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={14} className="text-rosegold-500" />
                  <span>Email Tasting Staff</span>
                </a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden border border-rosegold-200/50 shadow-md min-h-[350px]">
            <div className="absolute inset-0">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59050.82364893415!2d87.24716514863279!3d22.32807200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d45001815f975%3A0xfb5c18a2f7d7d298!2sOurs%20Bakery!5e0!3m2!1sen!2sin!4v1780600133933!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-rosegold-950/80 via-rosegold-900/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-rosegold-600 rounded-lg text-white">
                  <Compass size={16} className="animate-spin-slow" />
                </span>
                <div>
                  {/* <span className="text-[9px] uppercase font-bold tracking-widest text-rosegold-300 block">
                    Luxury Experiences
                  </span> */}
                  <h4 className="font-serif font-bold text-base">Interactive GPS Map</h4>
                </div>
              </div>
              
              {/* <p className="text-xs text-rosegold-100/80 leading-relaxed font-sans font-light">
                Our main patisserie is located right in the center of Blush Valley. Valet parking is available for all private events, wedding tasting consultations, and cake viewings.
              </p> */}

              <a
                href="https://maps.app.goo.gl/5DqLxQeDzL4aXHpx5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-rosegold-800 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-rosegold-100 transition-colors shadow-lg"
              >
                <MapPin size={12} className="text-rosegold-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
