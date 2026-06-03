import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import MenuFilters from "./menu/MenuFilters";
import MenuCard from "./menu/MenuCard";
import MenuModal from "./menu/MenuModal";
import { menuData } from "../data/menuData";

export default function Menu() {
  const categories = menuData.categories;
  const menuItems = menuData.menuItems;
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedItems, setLikedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Staggered grid animations
  const [animateGrid, setAnimateGrid] = useState(false);

  useEffect(() => {
    setAnimateGrid(false);
    const timer = setTimeout(() => setAnimateGrid(true), 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = menuItems.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <section id="menu" className="relative py-24 bg-rosegold-50/30 overflow-hidden">
      {/* Decorative floral blobs */}
      <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-rosegold-100 rounded-full blur-3xl pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-[#FFEAEB] rounded-full blur-3xl pointer-events-none opacity-40 animate-pulse" />

      {/* Speed lines backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] z-0">
        <div className="absolute top-1/3 left-[-10%] w-[120%] h-[1px] bg-rosegold-900 rotate-[5deg] animate-pulse" />
        <div className="absolute top-2/3 left-[-10%] w-[120%] h-[1px] bg-rosegold-900 rotate-[-5deg] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-100 rounded-full text-[10px] text-rosegold-700 font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="text-rosegold-600 animate-pulse" />
            <span>Mouth-Watering Masterpieces</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 mt-3 tracking-tight">
            Our Sweet Signature Menu
          </h2>
          <p className="text-sm text-rosegold-700/70 mt-3 font-sans font-light">
            Indulge in sweet luxury. Explore our hand-crafted pastries, curated from clean organic flour, natural ingredients, and signature gold luster.
          </p>
        </div>

        {/* Category Filters */}
        <MenuFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-rosegold-100/50 shadow-inner">
            <p className="font-serif text-lg text-rosegold-800 font-semibold">No items match this category</p>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-opacity duration-500 ${
              animateGrid ? "opacity-100" : "opacity-0"
            }`}
          >
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                index={index}
                likedItems={likedItems}
                toggleLike={toggleLike}
                setSelectedItem={setSelectedItem}
                animateGrid={animateGrid}
              />
            ))}
          </div>
        )}

      </div>

      {/* Item Details modal */}
      <MenuModal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}
