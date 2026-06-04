import { useState, useEffect } from "react";
import { Sparkles, Heart, Award, ShieldAlert, BookOpen } from "lucide-react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIngredient, setActiveIngredient] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ingredients = [
    {
      name: "Organic Rosewater Essence",
      description: "Imported directly from organic rose farms in Provence, distilled carefully to lock in pure floral notes.",
      benefit: "Delicate aroma & floral notes",
      image: "https://images.pexels.com/photos/7474223/pexels-photo-7474223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    },
    {
      name: "24k Edible Rose Gold",
      description: "Superfine, certified culinary-grade 24k gold leaf and copper-tinted gold dust that makes every pastry shine.",
      benefit: "Luxurious, dazzling texture",
      image: "https://images.pexels.com/photos/7474225/pexels-photo-7474225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    },
    {
      name: "Wild Lavender Honey",
      description: "Raw, unpasteurized honey harvested from high-altitude hives, offering a complex sweetener base.",
      benefit: "Natural moisture & wild sweetness",
      image: "https://images.pexels.com/photos/37875170/pexels-photo-37875170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    },
    {
      name: "Bourbon Vanilla Bean",
      description: "Hand-selected Madagascar vanilla pods cured to perfection, delivering rich, warm flavor flecks in every bite.",
      benefit: "Deep warm aroma & velvety speckles",
      image: "https://images.pexels.com/photos/12124906/pexels-photo-12124906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-[10%] -right-12 w-64 h-64 bg-rosegold-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] -left-12 w-80 h-80 bg-rosegold-100/55 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          <div className="lg:col-span-6 relative flex flex-col justify-center items-center h-[520px]">
            <div
              className="absolute w-[240px] h-[340px] top-4 left-6 sm:left-12 rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-10 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/3756050/pexels-photo-3756050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
                alt="Chef preparing dough"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute w-[260px] h-[320px] bottom-4 right-6 sm:right-12 rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-20 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${scrollY * -0.04}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/5964559/pexels-photo-5964559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
                alt="Finishing cake glaze"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute w-[450px] h-[450px] border border-rosegold-300/40 rounded-full z-0 hidden sm:block animate-pulse"
              style={{ transform: `scale(${1 + Math.sin(scrollY * 0.001) * 0.05})` }}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            <div className="flex items-center gap-2 text-rosegold-600 font-semibold uppercase tracking-wider text-xs">
              <BookOpen size={16} />
              <span>Our Flourishing Heritage</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 leading-tight">
              Crafting Edible Gold <br />
              <span className="text-rosegold-500 font-light">From The Heart of Paris</span>
            </h2>

            <p className="text-sm sm:text-base text-rosegold-700/80 leading-relaxed font-sans font-light">
              Welcome to Our's Bakery, where passion meets craftsmanship. Inspired by the timeless traditions of artisan baking, we create cakes, pastries, and desserts that are as beautiful as they are delicious. Using carefully selected ingredients and meticulous attention to detail, every creation is handcrafted to provide an unforgettable experience for every celebration and everyday indulgence.
            </p>

            <p className="text-sm sm:text-base text-rosegold-700/80 leading-relaxed font-sans font-light">
              Our signature baking techniques blend time-honored traditions with modern craftsmanship. Using carefully selected ingredients, slow-fermentation methods, and meticulous attention to detail, we create cakes, pastries, and desserts with exceptional flavor, texture, and freshness. The result is an unforgettable experience—delicate layers, rich aromas, and handcrafted creations designed to delight every sense.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rosegold-100 rounded-2xl text-rosegold-600 shadow-sm shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-rosegold-800 text-sm">Award-Winning Pastry Chef</h4>
                  <p className="text-xs text-rosegold-700/70 mt-1">Trained in Paris under Michelin star pastry maestros.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rosegold-100 rounded-2xl text-rosegold-600 shadow-sm shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-rosegold-800 text-sm">Handcrafted with Love</h4>
                  <p className="text-xs text-rosegold-700/70 mt-1">Baked in small batches using strictly organic ingredients.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="relative rounded-[40px] overflow-hidden my-24 shadow-2xl h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-[150%] -top-[25%] transition-transform duration-75 ease-out"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/20543564/pexels-photo-20543564.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${(scrollY - 1000) * 0.15}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rosegold-900/80 via-rosegold-800/80 to-[#2D1B1E]/80" />

          <div className="relative z-10 text-center px-4 max-w-2xl space-y-4">
            <Sparkles className="mx-auto text-rosegold-300 animate-bounce h-8 w-8" />
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold tracking-wide italic">
              "Baking is a love made visible, dusted in rose gold."
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-rosegold-200 font-sans">
              — Chef Charlotte Laurent
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-rosegold-600 font-semibold uppercase tracking-wider text-xs">
            The Secrets Behind the Taste
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-rosegold-900 mt-2">
            Signature Ingredients
          </h3>
          <p className="text-sm text-rosegold-700/70 mt-3 font-sans font-light">
            Hover or tap to discover how our secret blend of premium ingredients creates the signature Maison experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            {ingredients.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIngredient(index)}
                onMouseEnter={() => setActiveIngredient(index)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col ${
                  activeIngredient === index
                    ? "bg-rosegold-50 border-rosegold-400 shadow-md shadow-rosegold-200/50 scale-102"
                    : "bg-white border-rosegold-100 hover:bg-rosegold-50/30 hover:border-rosegold-200"
                }`}
              >
                <span className={`font-serif text-base font-bold ${
                  activeIngredient === index ? "text-rosegold-800" : "text-rosegold-700"
                }`}>
                  {item.name}
                </span>
                <span className="text-xs text-rosegold-500 uppercase font-medium tracking-wider mt-1">
                  {item.benefit}
                </span>
              </button>
            ))}
          </div>

          <div className="md:col-span-7 bg-rosegold-50/50 rounded-3xl border border-rosegold-100 p-8 flex flex-col md:flex-row gap-8 items-center justify-center transition-all duration-500">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 scale-105 transition-all">
              <img
                src={ingredients[activeIngredient].image}
                alt={ingredients[activeIngredient].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rosegold-100 rounded-full text-[10px] text-rosegold-700 font-semibold uppercase tracking-wider">
                <ShieldAlert size={12} className="text-rosegold-600" />
                <span>Pure Grade Premium</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-rosegold-800">
                {ingredients[activeIngredient].name}
              </h4>
              <p className="text-sm text-rosegold-700/80 leading-relaxed font-sans font-light">
                {ingredients[activeIngredient].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
