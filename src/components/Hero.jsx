import { useEffect, useState } from "react";
import { Sparkles, ArrowRight, Cake, Eye } from "lucide-react";

export default function Hero({ onExploreMenu, onOpenCakeBuilder }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rosegold-50 via-white to-rosegold-100/50 pt-20 pb-16"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-rosegold-200/40 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-80 h-80 bg-[#FFD3DA]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-white rounded-full blur-2xl" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="absolute hidden md:block w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-rosegold-200/40 transition-transform duration-75 ease-out"
          style={{
            top: "20%",
            left: "8%",
            transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <img
            src="https://images.pexels.com/photos/7474223/pexels-photo-7474223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
            alt="Blush Macaron"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute hidden md:block w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-rosegold-200/40 transition-transform duration-75 ease-out"
          style={{
            top: "55%",
            left: "4%",
            transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.04}deg)`,
          }}
        >
          <img
            src="https://images.pexels.com/photos/32713517/pexels-photo-32713517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
            alt="Flaky Croissant"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute hidden md:block w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-rosegold-200/40 transition-transform duration-75 ease-out"
          style={{
            top: "15%",
            right: "8%",
            transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * -0.06}deg)`,
          }}
        >
          <img
            src="https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
            alt="Pink Frosting Cupcake"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute hidden md:block w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-rosegold-200/40 transition-transform duration-75 ease-out"
          style={{
            top: "50%",
            right: "5%",
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * 0.08}deg)`,
          }}
        >
          <img
            src="https://images.pexels.com/photos/37875170/pexels-photo-37875170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
            alt="Elegant Tea Time"
            className="w-full h-full object-cover"
          />
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rosegold-400 animate-sparkles hidden md:block"
            style={{
              top: `${20 + i * 12}%`,
              left: i % 2 === 0 ? `${15 + i * 5}%` : `${80 - i * 4}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <Sparkles size={16 + (i % 3) * 6} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold-100/80 border border-rosegold-200 text-rosegold-700 text-xs font-semibold uppercase tracking-wider animate-bounce">
              <Sparkles size={14} className="text-rosegold-500 animate-pulse" />
              <span>Baked Fresh Daily with Rose Gold Love</span>
            </div>

            <span className="font-cursive text-3xl md:text-4xl text-rosegold-600">
              Welcome to Sweet Elegance
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-rosegold-900">
              Sensational Pastries <br />
              <span className="text-rose-gold-gradient font-light">With A Blush Sparkle</span>
            </h1>

            <p className="max-w-md text-sm md:text-base text-rosegold-700/80 leading-relaxed font-sans font-light">
              Step into a Parisian sensory dream. We fuse traditional French pastry craft with contemporary design, finished with signature rose gold dust and pure edible gold accents.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rosegold-600 via-rosegold-500 to-rosegold-600 hover:from-rosegold-700 hover:to-rosegold-500 text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-lg shadow-rosegold-600/30 hover:shadow-xl hover:shadow-rosegold-600/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Eye size={16} />
                <span>Browse Our Menu</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCakeBuilder}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-rosegold-50 border border-rosegold-200 text-rosegold-700 font-bold uppercase tracking-widest text-xs rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Cake size={16} className="text-rosegold-500" />
                <span>Cake Designer</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 w-full border-t border-rosegold-200/50">
              <div>
                <span className="block font-serif text-2xl font-bold text-rosegold-800">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-rosegold-500 font-medium">Organic Flour</span>
              </div>
              <div className="border-x border-rosegold-200/50 px-2">
                <span className="block font-serif text-2xl font-bold text-rosegold-800">Daily</span>
                <span className="text-[10px] uppercase tracking-wider text-rosegold-500 font-medium">Freshly Oven Baked</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-rosegold-800">Elite</span>
                <span className="text-[10px] uppercase tracking-wider text-rosegold-500 font-medium">Pastry Chefs</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] w-full flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-rosegold-100 to-white border-2 border-dashed border-rosegold-300/30 flex items-center justify-center z-0 animate-spin-slow" />

            <div
              className="absolute w-[240px] h-[340px] sm:w-[320px] sm:h-[420px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl z-20 rotate-[-4deg] transition-all duration-500 hover:rotate-0 hover:scale-102"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/7474225/pexels-photo-7474225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500"
                alt="Rose Gold Macarons Set"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute w-[140px] h-[180px] sm:w-[180px] sm:h-[240px] bottom-2 right-4 sm:right-10 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl z-30 rotate-[8deg] transition-all duration-500 hover:rotate-0"
              style={{ transform: `translateY(${scrollY * -0.06}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/12124906/pexels-photo-12124906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300"
                alt="Elegant Cakes Display"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute w-[120px] h-[160px] sm:w-[150px] sm:h-[200px] top-6 left-4 sm:left-10 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl z-10 rotate-[-12deg] transition-all duration-500 hover:rotate-0"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/20543564/pexels-photo-20543564.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=200"
                alt="Bakery Kitchen Pastries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
