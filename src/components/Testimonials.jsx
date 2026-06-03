import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Genevieve Dubois",
    role: "Event Planner, Parisian Gala",
    comment: "Maison de la Rose created a towering 3-tier custom cake for our luxury spring gala. The hand-painted rose gold details were absolutely mesmerizing, and the flavor layers of raspberry rosewater were rich, delicate, and unforgettable. Highly recommend!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
  },
  {
    name: "Arthur Pendelton",
    role: "Local Food Critic",
    comment: "I have eaten croissants in Paris, Bordeaux, and Lyon, but the Flaky Rose Gold Croissant here is a revelation. 81 layers of perfect buttery laminated fold, with a light metallic shimmer that adds a beautiful modern luxury. The coffee is top tier too.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
  },
  {
    name: "Sophia Sterling",
    role: "Bride & Pastry Fanatic",
    comment: "We used the custom cake designer tool on their website to build our anniversary cake, and seeing it come to life was amazing. The Bourbon Vanilla and Champagne flavor layers were ridiculously moist, and the 24k gold leaf toppings looked stunning in our photos.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-rosegold-50/50">
      <div
        className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-rosegold-100 rounded-full blur-3xl pointer-events-none opacity-45"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div
        className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[#FFEAEB] rounded-full blur-3xl pointer-events-none opacity-45"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rosegold-600 font-semibold uppercase tracking-wider text-xs block">
            Love Letters from Clients
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-rosegold-900 mt-2">
            Why Our Guests Adore Us
          </h2>
        </div>

        <div className="relative bg-white border border-rosegold-100 rounded-[40px] shadow-2xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto overflow-hidden">
          
          <div className="absolute top-8 left-8 text-rosegold-100 opacity-80 pointer-events-none">
            <Quote size={80} className="stroke-[1.5px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="font-serif text-lg sm:text-xl text-rosegold-800 leading-relaxed max-w-2xl font-light italic mb-8">
              "{testimonials[activeIndex].comment}"
            </p>

            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rosegold-300 shadow-md mb-3">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="font-serif font-bold text-rosegold-900 text-base">
              {testimonials[activeIndex].name}
            </h4>
            <p className="text-xs uppercase tracking-wider text-rosegold-500 font-semibold">
              {testimonials[activeIndex].role}
            </p>

          </div>

          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-rosegold-50 hover:bg-rosegold-100 text-rosegold-700 transition-colors pointer-events-auto shadow-md"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-rosegold-50 hover:bg-rosegold-100 text-rosegold-700 transition-colors pointer-events-auto shadow-md"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex gap-2 justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-6 bg-rosegold-600" : "bg-rosegold-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
