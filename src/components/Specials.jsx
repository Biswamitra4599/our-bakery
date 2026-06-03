import { useState } from "react";
import { Sparkles, Gift, Info } from "lucide-react";
import GoldenJarGame from "./specials/GoldenJarGame";

export default function Specials() {
  const [activeSpecial, setActiveSpecial] = useState(0);

  const dailySpecials = [
    {
      day: "Monday & Tuesday",
      title: "Rose Gold Tea Pairing",
      desc: "Buy any Signature Cake slice and get a fresh Sparkling Rose Tea Infusion at 50% off.",
      finePrint: "Valid for dine-in and online pickup orders only.",
    },
    {
      day: "Wednesday & Thursday",
      title: "The Macaron Box Special",
      desc: "Order a custom luxury cake box (box of 6 macarons) and receive a complimentary Flaky Rose Gold Croissant.",
      finePrint: "Applicable online, limit 1 per customer.",
    },
    {
      day: "Friday & Weekend",
      title: "Chiffon Celebration Pack",
      desc: "Pre-order any 8\" or 10\" custom designer cake and receive free gold leaf upgrades and standard candle set.",
      finePrint: "Must be placed 24 hours in advance.",
    },
  ];

  return (
    <section id="specials" className="relative py-24 bg-white">
      <div className="absolute top-[20%] -right-12 w-80 h-80 bg-rosegold-50 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-[20%] -left-12 w-96 h-96 bg-[#FFEAEB] rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-100/80 rounded-full text-[10px] text-rosegold-700 font-semibold uppercase tracking-wider">
            <Gift size={12} className="text-rosegold-600 animate-pulse" />
            <span>Limited Promotions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 mt-3">
            Daily Specials & Gold Surprises
          </h2>
          <p className="text-sm text-rosegold-700/70 mt-3 font-sans font-light">
            Each day we bake up unique treats, pairings, and surprises. View our calendar specials below, or click our magical golden jar to win a special gift!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          <div className="lg:col-span-7 flex flex-col justify-between bg-rosegold-50/20 border border-rosegold-100 rounded-[32px] p-6 sm:p-8">
            
            <div className="flex flex-wrap gap-2 mb-6">
              {dailySpecials.map((spec, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSpecial(index)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeSpecial === index
                      ? "bg-gradient-to-r from-rosegold-600 to-rosegold-400 text-white shadow-md shadow-rosegold-600/20"
                      : "bg-white text-rosegold-700 border border-rosegold-100 hover:bg-rosegold-50"
                  }`}
                >
                  {spec.day}
                </button>
              ))}
            </div>

            <div className="bg-white/80 border border-rosegold-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1 text-[10px] text-rosegold-500 font-bold uppercase tracking-wider">
                  <Sparkles size={12} className="text-rosegold-400 animate-pulse" />
                  <span>Featured Daily Deal</span>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rosegold-800">
                  {dailySpecials[activeSpecial].title}
                </h3>
                
                <p className="text-sm sm:text-base text-rosegold-700 leading-relaxed font-sans font-light">
                  {dailySpecials[activeSpecial].desc}
                </p>
              </div>

              <div className="flex gap-2 items-center bg-[#FFF5F6] border border-rosegold-100 rounded-xl p-3.5 mt-8">
                <Info size={16} className="text-rosegold-500 shrink-0" />
                <span className="text-[10px] text-rosegold-700/80 font-medium">
                  {dailySpecials[activeSpecial].finePrint}
                </span>
              </div>
            </div>

          </div>

          <GoldenJarGame />

        </div>

      </div>
    </section>
  );
}
