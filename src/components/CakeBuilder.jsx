import { useState } from "react";
import { Sparkles, RotateCcw, Calendar } from "lucide-react";

export default function CakeBuilder() {
  const [size, setSize] = useState("8\"");
  const [selectedLayers, setSelectedLayers] = useState(["Rosewater Cardamom", "Rosewater Cardamom"]);
  const [frosting, setFrosting] = useState("Rose Gold Buttercream");
  const [toppings, setToppings] = useState(["24k Edible Gold Leaf", "Blush Pink Macarons"]);

  const sizes = [
    { name: "6\"", desc: "Feeds 6-8 guests", basePrice: 35 },
    { name: "8\"", desc: "Feeds 12-16 guests", basePrice: 50 },
    { name: "10\"", desc: "Feeds 20-25 guests", basePrice: 70 },
  ];

  const flavorOptions = [
    { name: "Pink Velvet Sponge", color: "#FCD5D7", price: 5 },
    { name: "Rosewater Cardamom", color: "#C68E90", price: 6 },
    { name: "Champagne & Strawberry", color: "#FFEAEB", price: 8 },
    { name: "Bourbon Vanilla", color: "#FFFFFF", price: 4 },
  ];

  const frostingOptions = [
    { name: "Rose Gold Buttercream", color: "#B76E79", highlight: "#FFEAEB" },
    { name: "Cream Cheese Rosettes", color: "#FFF9FA", highlight: "#FCD5D7" },
    { name: "Metallic Blush Fondant", color: "#E9B2B5", highlight: "#FFFFFF" },
  ];

  const toppingOptions = [
    { name: "24k Edible Gold Leaf", price: 6, emoji: "✨" },
    { name: "Sugar Rose Petals", price: 4, emoji: "🌹" },
    { name: "Blush Pink Macarons", price: 8, emoji: "🍥" },
    { name: "White Chocolate Curl", price: 3, emoji: "🍫" },
    { name: "Golden Sparkler", price: 3, emoji: "🎇" },
  ];

  const basePrice = sizes.find((s) => s.name === size)?.basePrice || 50;
  const layersPrice = selectedLayers.reduce((acc, layerName) => {
    const flav = flavorOptions.find((f) => f.name === layerName);
    return acc + (flav?.price || 0);
  }, 0);
  const toppingsPrice = toppings.reduce((acc, topName) => {
    const top = toppingOptions.find((t) => t.name === topName);
    return acc + (top?.price || 0);
  }, 0);
  const totalPrice = basePrice + layersPrice + toppingsPrice;

  const addLayer = (flavor) => {
    if (selectedLayers.length < 3) {
      setSelectedLayers([...selectedLayers, flavor]);
    }
  };

  const removeLayer = (index) => {
    const newLayers = [...selectedLayers];
    newLayers.splice(index, 1);
    setSelectedLayers(newLayers);
  };

  const toggleTopping = (name) => {
    setToppings((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  };

  const handleReset = () => {
    setSize("8\"");
    setSelectedLayers(["Rosewater Cardamom", "Rosewater Cardamom"]);
    setFrosting("Rose Gold Buttercream");
    setToppings(["24k Edible Gold Leaf", "Blush Pink Macarons"]);
  };

  const getLayerColor = (layerName) => {
    const flav = flavorOptions.find((f) => f.name === layerName);
    return flav?.color || "#EAEAEA";
  };

  const activeFrosting = frostingOptions.find((f) => f.name === frosting) || frostingOptions[0];

  const handleConsultationScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="cake-designer" className="relative py-24 bg-white">
      <div className="absolute top-[30%] -left-20 w-80 h-80 bg-rosegold-100 rounded-full blur-3xl pointer-events-none opacity-45" />
      <div className="absolute bottom-[20%] -right-20 w-96 h-96 bg-[#FFEAEB] rounded-full blur-3xl pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-100/80 rounded-full text-[10px] text-rosegold-700 font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="text-rosegold-600 animate-pulse" />
            <span>Interactive Designer</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 mt-3">
            Design Your Dream Cake
          </h2>
          <p className="text-sm text-rosegold-700/70 mt-3 font-sans font-light">
            Unleash your baking artistry. Customize size, choose delicious gourmet layers, outer frosting, and luxury toppings to watch your creation build instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col space-y-8 bg-rosegold-50/20 border border-rosegold-100 rounded-[32px] p-6 sm:p-8">
            
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold text-rosegold-700 tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-rosegold-600 text-white font-mono text-[10px] flex items-center justify-center">1</span>
                <span>Choose Size</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSize(s.name)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      size === s.name
                        ? "bg-white border-rosegold-500 ring-2 ring-rosegold-500/20 shadow-md"
                        : "bg-white/50 border-rosegold-100 hover:bg-white hover:border-rosegold-200"
                    }`}
                  >
                    <span className="font-serif text-lg font-bold text-rosegold-800">{s.name}</span>
                    <span className="text-[10px] text-rosegold-500 mt-1 font-sans">{s.desc}</span>
                    <span className="text-xs font-bold text-rosegold-900 mt-2">+${s.basePrice}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase font-bold text-rosegold-700 tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-rosegold-600 text-white font-mono text-[10px] flex items-center justify-center">2</span>
                  <span>Cake Layers ({selectedLayers.length}/3)</span>
                </label>
                {selectedLayers.length === 3 && (
                  <span className="text-[10px] text-amber-600 font-semibold tracking-wide">Max layers reached</span>
                )}
              </div>
              
              <div className="flex flex-col gap-2 p-3 bg-white/70 border border-rosegold-100 rounded-2xl">
                {selectedLayers.length === 0 ? (
                  <div className="text-center py-4">
                    <span className="text-xs text-rosegold-400">No layers selected yet. Click a flavor below to add!</span>
                  </div>
                ) : (
                  selectedLayers.map((layer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-rosegold-100"
                      style={{ backgroundColor: `${getLayerColor(layer)}20` }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-md border border-white shadow-sm"
                          style={{ backgroundColor: getLayerColor(layer) }}
                        />
                        <span className="text-xs font-semibold text-rosegold-800">
                          {index + 1}. Layer: {layer}
                        </span>
                      </div>
                      <button
                        onClick={() => removeLayer(index)}
                        className="text-[10px] text-rosegold-600 hover:text-rosegold-800 font-bold uppercase"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {flavorOptions.map((flav) => (
                  <button
                    key={flav.name}
                    disabled={selectedLayers.length >= 3}
                    onClick={() => addLayer(flav.name)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedLayers.length >= 3
                        ? "opacity-50 cursor-not-allowed bg-rosegold-50/10 border-rosegold-100"
                        : "bg-white border-rosegold-100 hover:bg-rosegold-50 hover:border-rosegold-300"
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full mx-auto mb-2 border border-rosegold-200"
                      style={{ backgroundColor: flav.color }}
                    />
                    <span className="block text-[10px] font-bold text-rosegold-800 line-clamp-1 leading-tight">
                      {flav.name}
                    </span>
                    <span className="block text-[9px] text-rosegold-500 mt-1 font-semibold">
                      +${flav.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs uppercase font-bold text-rosegold-700 tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-rosegold-600 text-white font-mono text-[10px] flex items-center justify-center">3</span>
                <span>Frosting Style</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {frostingOptions.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setFrosting(f.name)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                      frosting === f.name
                        ? "bg-white border-rosegold-500 ring-2 ring-rosegold-500/20 shadow-md"
                        : "bg-white/50 border-rosegold-100 hover:bg-white hover:border-rosegold-200"
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full shrink-0 border border-rosegold-200 shadow-inner"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${f.highlight}, ${f.color})`,
                      }}
                    />
                    <div>
                      <span className="block font-serif text-sm font-bold text-rosegold-800 leading-tight">
                        {f.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs uppercase font-bold text-rosegold-700 tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-rosegold-600 text-white font-mono text-[10px] flex items-center justify-center">4</span>
                <span>Luxury Toppings</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {toppingOptions.map((top) => {
                  const isSelected = toppings.includes(top.name);
                  return (
                    <button
                      key={top.name}
                      onClick={() => toggleTopping(top.name)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? "bg-white border-rosegold-500 ring-2 ring-rosegold-500/20 shadow-md"
                          : "bg-white/50 border-rosegold-100 hover:bg-white hover:border-rosegold-200"
                      }`}
                    >
                      <span className="text-lg block mb-1.5">{top.emoji}</span>
                      <span className="block text-[9px] font-bold text-rosegold-800 line-clamp-1">
                        {top.name}
                      </span>
                      <span className="block text-[8px] text-rosegold-500 mt-1 font-semibold">
                        +${top.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#FFF5F6] to-white border border-rosegold-200/50 rounded-[32px] p-8 shadow-xl shadow-rosegold-200/25 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#b76e7915_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />

            <button
              onClick={handleReset}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-rosegold-100/50 text-rosegold-500 transition-colors z-10"
              title="Reset Design"
            >
              <RotateCcw size={16} />
            </button>

            <div className="relative h-64 sm:h-72 flex flex-col items-center justify-end pb-8 z-10">
              {toppings.includes("24k Edible Gold Leaf") && (
                <div className="absolute top-12 left-1/4 animate-sparkles text-rosegold-500">
                  <Sparkles size={20} />
                </div>
              )}
              {toppings.includes("Golden Sparkler") && (
                <div className="absolute top-6 right-1/4 animate-pulse text-amber-500">
                  🎇
                </div>
              )}

              <div className="flex gap-2 justify-center mb-[-4px] z-20">
                {toppings.map((top, idx) => {
                  const opt = toppingOptions.find((t) => t.name === top);
                  if (!opt) return null;
                  return (
                    <span
                      key={idx}
                      className="text-2xl animate-float-slow"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    >
                      {opt.emoji}
                    </span>
                  );
                })}
              </div>

              <div
                className="w-48 h-8 rounded-t-full z-15 shadow-inner border border-white/50"
                style={{
                  background: `linear-gradient(135deg, ${activeFrosting.highlight} 0%, ${activeFrosting.color} 100%)`,
                }}
              />

              <div className="flex flex-col-reverse items-center justify-end z-10">
                {selectedLayers.map((layer, index) => {
                  const widthClass = index === 0 ? "w-56" : index === 1 ? "w-52" : "w-48";
                  const heightClass = "h-10";
                  return (
                    <div
                      key={index}
                      className={`${widthClass} ${heightClass} border-x-4 border-b-2 border-white rounded-b-lg shadow-sm flex items-center justify-center font-bold text-[8px] uppercase tracking-widest text-rosegold-800/80 transition-all duration-300`}
                      style={{
                        backgroundColor: getLayerColor(layer),
                      }}
                    >
                      Layer {index + 1}
                    </div>
                  );
                })}
                {selectedLayers.length === 0 && (
                  <div className="w-48 h-20 bg-dashed border-2 border-rosegold-300/40 rounded-xl flex items-center justify-center text-center px-4">
                    <span className="text-[10px] text-rosegold-400 font-medium">Add flavors to stack your cake layers</span>
                  </div>
                )}
              </div>

              <div className="w-64 h-3 bg-gradient-to-r from-rosegold-100 to-rosegold-300 rounded-full border border-rosegold-400/20 shadow-md mt-[-2px] z-5 relative flex flex-col justify-end items-center">
                <div className="w-20 h-4 bg-gradient-to-b from-rosegold-200 to-rosegold-300 rounded-b-md shadow-inner" />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-rosegold-200/50 relative z-10">
              <div className="flex justify-between items-center text-xs text-rosegold-500 uppercase tracking-wider font-bold">
                <span>Selected Summary</span>
                <span>Size: {size}</span>
              </div>
              <div className="text-xs text-rosegold-700/80 space-y-1.5">
                <p><span className="font-semibold">Outer Frosting:</span> {frosting}</p>
                <p>
                  <span className="font-semibold">Layers ({selectedLayers.length}):</span>{" "}
                  {selectedLayers.length > 0 ? selectedLayers.join(" + ") : "None"}
                </p>
                <p>
                  <span className="font-semibold">Toppings ({toppings.length}):</span>{" "}
                  {toppings.length > 0 ? toppings.join(", ") : "None"}
                </p>
              </div>

              <div className="pt-4 border-t border-rosegold-200/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-rosegold-500 uppercase tracking-wider block font-medium">Estimated Value</span>
                  <span className="font-serif text-3xl font-black text-rosegold-900">${totalPrice}</span>
                </div>
                
                <button
                  onClick={handleConsultationScroll}
                  className="px-6 py-4 bg-gradient-to-r from-rosegold-600 to-rosegold-400 hover:from-rosegold-500 hover:to-rosegold-300 text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-102"
                >
                  <Calendar size={14} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
