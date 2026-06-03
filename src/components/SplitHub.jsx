import { useState } from "react";
import { ArrowRight, Flame, Compass, ChefHat, Calendar } from "lucide-react";

export default function SplitHub({ onOnOvenClick, onOffOvenClick }) {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex flex-col md:flex-row overflow-hidden bg-[#231517] border-y border-rosegold-500/10">
      
      {/* ON OVEN (Left Panel) */}
      <div
        onMouseEnter={() => setHoveredPanel("on")}
        onMouseLeave={() => setHoveredPanel(null)}
        onClick={onOnOvenClick}
        className={`relative flex-1 h-1/2 md:h-full flex flex-col justify-end p-8 md:p-16 transition-all duration-700 ease-out overflow-hidden cursor-pointer group ${
          hoveredPanel === "on"
            ? "md:flex-[1.5] brightness-105"
            : hoveredPanel === "off"
            ? "md:flex-[0.7] opacity-40 brightness-75"
            : "md:flex-1"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/33034727/pexels-photo-33034727.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200')`,
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rosegold-950 via-[#231517]/50 to-transparent" />
        <div className="absolute inset-0 bg-rosegold-900/20 mix-blend-color" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-600/90 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Flame size={12} className="animate-pulse" />
            <span>On Oven</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none uppercase tracking-tight">
            The Patisserie <br />
            <span className="text-rosegold-200">Catalog</span>
          </h3>

          <p className="text-xs sm:text-sm text-rosegold-100/80 max-w-md leading-relaxed font-sans font-light">
            Indulge in our signature creations, customizable cakes, and freshly laminated croissants. Handcrafted daily and ready for pickup.
          </p>

          <div className="pt-4 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
            <span>Explore Menu</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full border-r border-rosegold-500/10 transform skew-x-[-15deg] pointer-events-none" />
      </div>

      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rosegold-300 via-rosegold-500 to-rosegold-700 hidden md:block z-20 pointer-events-none shadow-[0_0_15px_rgba(183,110,121,0.5)]" />

      {/* OFF OVEN (Right Panel) */}
      <div
        onMouseEnter={() => setHoveredPanel("off")}
        onMouseLeave={() => setHoveredPanel(null)}
        onClick={onOffOvenClick}
        className={`relative flex-1 h-1/2 md:h-full flex flex-col justify-end p-8 md:p-16 transition-all duration-700 ease-out overflow-hidden cursor-pointer group ${
          hoveredPanel === "off"
            ? "md:flex-[1.5] brightness-105"
            : hoveredPanel === "on"
            ? "md:flex-[0.7] opacity-40 brightness-75"
            : "md:flex-1"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/37875170/pexels-photo-37875170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200')`,
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B1E] via-[#231517]/50 to-transparent" />
        <div className="absolute inset-0 bg-rosegold-900/20 mix-blend-color" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-500/90 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
            <Compass size={12} className="animate-spin-slow" />
            <span>Off Oven</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none uppercase tracking-tight">
            Events & <br />
            <span className="text-rosegold-200">Experiences</span>
          </h3>

          <p className="text-xs sm:text-sm text-rosegold-100/80 max-w-md leading-relaxed font-sans font-light">
            Step beyond baking. Book private tasting lounges, custom wedding catering, masterclasses, and explore our rose-gold lifestyle.
          </p>

          <div className="pt-4 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
            <span>Inquire Services</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-1/3 h-full border-l border-rosegold-500/10 transform skew-x-[15deg] pointer-events-none" />
      </div>

      <div className="absolute top-6 left-6 z-20 pointer-events-none hidden lg:flex items-center gap-2 text-[10px] text-white/50 tracking-widest uppercase font-mono bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/5">
        <ChefHat size={12} className="text-rosegold-300" />
        <span>Menu & Cakes</span>
      </div>

      <div className="absolute top-6 right-6 z-20 pointer-events-none hidden lg:flex items-center gap-2 text-[10px] text-white/50 tracking-widest uppercase font-mono bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/5">
        <Calendar size={12} className="text-rosegold-300" />
        <span>Tasting & Masterclasses</span>
      </div>

    </section>
  );
}
