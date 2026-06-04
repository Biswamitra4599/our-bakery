import { Filter } from "lucide-react";

export default function MenuFilters({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <div className="overflow-x-auto pb-4 mb-12 w-full">
      <div className="mx-auto flex w-max items-center gap-2 px-1">
        <Filter size={16} className="text-rosegold-500 shrink-0 hidden sm:block" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-500 transform hover:scale-105 active:scale-95 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-rosegold-600 to-rosegold-400 text-white shadow-lg shadow-rosegold-600/30"
                : "bg-white text-rosegold-700 border border-rosegold-100 hover:bg-rosegold-50 hover:border-rosegold-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
