import { useEffect, useState } from "react";
import { Sparkles, Utensils } from "lucide-react";

export default function IntroAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const quotes = [
    "Preheating the ovens with love...",
    "Whipping up sweet dreams...",
    "Adding a touch of rose gold magic...",
    "Glazing the perfect pastries...",
    "Welcome to Maison de la Rose..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFading(true);
        const exitTimeout = setTimeout(() => {
          onComplete();
        }, 800); 
        return () => clearTimeout(exitTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Deterministic sparkle layout based on index i to avoid Math.random() mismatch errors
  const getSparkleStyle = (i) => {
    const positions = [
      { top: "15%", left: "12%", delay: "0.2s", duration: "3s", size: 16 },
      { top: "25%", left: "80%", delay: "0.8s", duration: "4s", size: 24 },
      { top: "75%", left: "15%", delay: "1.2s", duration: "3.5s", size: 20 },
      { top: "80%", left: "85%", delay: "0.4s", duration: "4.5s", size: 18 },
      { top: "30%", left: "45%", delay: "1.5s", duration: "3.2s", size: 22 },
      { top: "60%", left: "55%", delay: "0.1s", duration: "5s", size: 16 },
      { top: "45%", left: "20%", delay: "0.6s", duration: "4.2s", size: 28 },
      { top: "18%", left: "65%", delay: "1.0s", duration: "3.8s", size: 20 },
      { top: "70%", left: "35%", delay: "0.3s", duration: "4.7s", size: 16 },
      { top: "85%", left: "50%", delay: "1.4s", duration: "3s", size: 22 },
      { top: "40%", left: "88%", delay: "0.7s", duration: "4.1s", size: 24 },
      { top: "62%", left: "10%", delay: "1.1s", duration: "3.6s", size: 18 },
    ];
    return positions[i % positions.length];
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2D1B1E] transition-all duration-1000 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#B76E79]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#FFEAEB]/5 rounded-full blur-3xl animate-pulse" />
        
        {Array.from({ length: 12 }).map((_, i) => {
          const style = getSparkleStyle(i);
          return (
            <div
              key={i}
              className="absolute text-rosegold-300/40 animate-sparkles"
              style={{
                top: style.top,
                left: style.left,
                animationDelay: style.delay,
                animationDuration: style.duration,
              }}
            >
              <Sparkles size={style.size} />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full border border-rosegold-400/30 flex items-center justify-center bg-[#3D2529]/80 shadow-2xl relative overflow-hidden">
            <Utensils className="h-10 w-10 text-rosegold-300 animate-bounce" />
            <div className="absolute inset-0 border-t-2 border-rosegold-300 rounded-full animate-spin-slow" />
          </div>
          <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-rosegold-400 animate-pulse" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-rosegold-100 mb-2">
          Our's Bakery
        </h1>
        <p className="font-cursive text-2xl text-rosegold-300 mb-8">
          Handcrafted Cakes & Pastries
        </p>

        <div className="h-8 mb-6 overflow-hidden relative w-full">
          <div
            key={quoteIndex}
            className="text-rosegold-200/80 font-sans text-sm tracking-widest uppercase transition-all duration-500 transform translate-y-0 opacity-100 animate-fade-in-up"
          >
            {quotes[quoteIndex]}
          </div>
        </div>

        <div className="w-full h-[3px] bg-[#3D2529] rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gradient-to-r from-rosegold-400 via-rosegold-300 to-rosegold-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-xs font-mono text-rosegold-400 tracking-widest">
          {progress}%
        </span>
      </div>

      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#231517] border-r border-rosegold-500/10 transition-transform duration-1000 ease-in-out z-0 ${
          isFading ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-[#231517] border-l border-rosegold-500/10 transition-transform duration-1000 ease-in-out z-0 ${
          isFading ? "translate-x-full" : "translate-x-0"
        }`}
      />
    </div>
  );
}
