import { X, Star, Sparkles } from "lucide-react";

export default function MenuModal({ selectedItem, setSelectedItem }) {
  if (!selectedItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-white max-w-2xl w-full rounded-[32px] overflow-hidden border border-rosegold-100 shadow-2xl relative animate-fade-in-up">
        
        <button
          onClick={() => setSelectedItem(null)}
          className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur-xs rounded-full text-rosegold-800 hover:bg-rosegold-50 transition-colors z-20 shadow-md"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="h-64 md:h-full relative min-h-[300px]">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-1.5">
              {selectedItem.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 bg-rosegold-600 text-white rounded-full text-[9px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-rosegold-500 uppercase tracking-widest">
                  {selectedItem.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-rosegold-800">{selectedItem.rating}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-rosegold-900 leading-tight">
                {selectedItem.name}
              </h3>

              <p className="text-xs sm:text-sm text-rosegold-700/80 leading-relaxed font-sans font-light">
                {selectedItem.description}
              </p>

              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-rosegold-500 tracking-wider block mb-1.5">
                    Contains Allergens:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="px-2 py-0.5 rounded-md bg-[#FFF5F6] border border-rosegold-200 text-rosegold-700 text-[10px] font-medium"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-rosegold-100 flex items-center justify-between mt-6">
              <div>
                <span className="text-[10px] text-rosegold-500 uppercase tracking-wider block">Price</span>
                <span className="font-serif text-2xl font-black text-rosegold-900">
                  ${selectedItem.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-3 bg-gradient-to-r from-rosegold-600 to-rosegold-400 hover:from-rosegold-500 hover:to-rosegold-300 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all"
              >
                Back to Menu
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
