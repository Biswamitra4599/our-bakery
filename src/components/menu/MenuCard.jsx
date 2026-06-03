import { useState } from "react";
import { Star, Heart, Eye, Sparkles } from "lucide-react";

export default function MenuCard({ item, index, likedItems, toggleLike, setSelectedItem, animateGrid }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedItem(item)}
      className="group bg-white rounded-3xl border border-rosegold-100/50 shadow-md hover:shadow-2xl hover:shadow-rosegold-100/35 transition-all duration-700 ease-out overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 relative w-full"
      style={{
        animationDelay: `${index * 80}ms`,
        animationDuration: "800ms",
        animationFillMode: "both",
        animationName: animateGrid ? "fadeInUp" : "none",
      }}
    >
      {/* Image & Badges Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-rosegold-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Fluid Color Blur Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-rosegold-900/60 via-rosegold-600/30 to-transparent transition-opacity duration-500 flex items-center justify-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center text-rosegold-800 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Eye size={20} />
          </div>
        </div>

        {/* Wishlist Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(item.id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-xs shadow-md text-rosegold-500 hover:text-rosegold-600 transition-all hover:scale-110 z-10 animate-fade-in"
          aria-label="Wishlist Item"
        >
          <Heart
            size={16}
            fill={likedItems.includes(item.id) ? "#B76E79" : "none"}
            className={likedItems.includes(item.id) ? "text-rosegold-600 scale-105" : ""}
          />
        </button>

        {/* Highlight tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-rosegold-600/90 text-white text-[9px] font-bold uppercase tracking-wider shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white relative z-10">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-rosegold-500 font-bold">
              {item.category}
            </span>
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-rosegold-800">{item.rating}</span>
            </div>
          </div>

          <h4 className="font-serif text-lg font-bold text-rosegold-800 transition-colors line-clamp-1 group-hover:text-rosegold-600">
            {item.name}
          </h4>

          <p className="text-xs text-rosegold-700/70 font-sans font-light line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-5 mt-4 border-t border-rosegold-50">
          <span className="font-serif text-lg font-extrabold text-rosegold-900">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-[10px] uppercase font-bold text-rosegold-500 tracking-wider flex items-center gap-1 hover:text-rosegold-700 transition-colors">
            <span>Details</span>
            <Sparkles size={10} className="animate-pulse" />
          </span>
        </div>
      </div>
    </div>
  );
}
