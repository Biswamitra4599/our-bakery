import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";

export default function GoldenJarGame() {
  const [isOpened, setIsOpened] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpenJar = () => {
    if (isOpened) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpened(true);
    }, 800);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("ROSEGOLD15");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="lg:col-span-5 bg-gradient-to-b from-[#FFEAEB] to-[#FFF5F6] border border-rosegold-200/50 rounded-[32px] p-8 shadow-xl shadow-rosegold-200/25 flex flex-col justify-between relative overflow-hidden text-center h-full">
      <div className="absolute inset-0 bg-[radial-gradient(#b76e7915_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />

      <div className="relative z-10">
        <span className="text-xs uppercase font-bold text-rosegold-600 tracking-widest block mb-2">
          Click To Crack Open
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-rosegold-900">
          The Golden Sweet Jar
        </h3>
        <p className="text-[11px] text-rosegold-700/70 font-sans font-light mt-1 max-w-xs mx-auto">
          Break open the ceramic jar to win an instant 15% discount for your online bakery order!
        </p>
      </div>

      <div className="h-60 flex items-center justify-center relative z-10">
        <button
          onClick={handleOpenJar}
          disabled={isOpened}
          className={`relative focus:outline-none transition-all duration-300 ${
            isOpened ? "cursor-default scale-102" : "hover:scale-105 active:scale-95"
          } ${isShaking ? "animate-bounce" : ""}`}
        >
          {!isOpened ? (
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 animate-sparkles text-rosegold-500">
                <Sparkles size={24} />
              </div>
              <svg width="140" height="150" viewBox="0 0 140 150" className="drop-shadow-2xl">
                <path d="M40 30 C40 20, 100 20, 100 30 Z" fill="#C68E90" stroke="#FFF" strokeWidth="2" />
                <ellipse cx="70" cy="22" rx="10" ry="10" fill="#B76E79" />
                <rect x="45" y="30" width="50" height="10" rx="3" fill="#FFEAEB" stroke="#FFF" strokeWidth="2" />
                <path d="M45 40 C20 40, 20 130, 45 130 L95 130 C120 130, 120 40, 95 40 Z" fill="url(#jarGrad)" stroke="#FFF" strokeWidth="3" />
                <path d="M45 42 L95 42 L85 62 L55 62 Z" fill="#B76E79" />
                <circle cx="70" cy="90" rx="20" ry="20" fill="#FFF" opacity="0.9" />
                <text x="70" y="94" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#B76E79">
                  TAP
                </text>
                <defs>
                  <linearGradient id="jarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E9B2B5" />
                    <stop offset="50%" stopColor="#C68E90" />
                    <stop offset="100%" stopColor="#B76E79" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ) : (
            <div className="relative flex flex-col items-center animate-fade-in-up">
              <span className="absolute -top-6 left-2 text-2xl animate-float-slow">🍥</span>
              <span className="absolute -top-12 right-2 text-2xl animate-float-medium" style={{ animationDelay: "0.2s" }}>🌹</span>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-2xl animate-float-fast" style={{ animationDelay: "0.4s" }}>✨</span>

              <svg width="140" height="150" viewBox="0 0 140 150" className="drop-shadow-lg opacity-85">
                <path d="M10 110 C5 100, 50 90, 60 110 Z" fill="#C68E90" stroke="#FFF" strokeWidth="2" transform="rotate(-30 30 100)" />
                <rect x="45" y="55" width="50" height="10" rx="3" fill="#FFEAEB" stroke="#FFF" strokeWidth="2" />
                <path d="M45 65 C20 65, 20 135, 45 135 L95 135 C120 135, 120 65, 95 65 Z" fill="url(#jarGrad)" stroke="#FFF" strokeWidth="3" />
                <circle cx="70" cy="100" rx="20" ry="20" fill="#FFF" opacity="0.9" />
                <text x="70" y="104" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#B76E79">
                  OPEN
                </text>
              </svg>
            </div>
          )}
        </button>
      </div>

      <div className="relative z-10 min-h-16 flex flex-col justify-end">
        {!isOpened ? (
          <span className="text-[10px] uppercase font-bold text-rosegold-500 tracking-wider">
            Tap the jar to see your code!
          </span>
        ) : (
          <div className="space-y-3 animate-fade-in-up">
            <span className="text-[10px] uppercase font-extrabold text-emerald-600 tracking-wider block">
              ★ Coupon Unlocked! ★
            </span>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-dashed border-rosegold-400 rounded-xl shadow-md justify-center">
              <span className="font-mono text-sm font-bold text-rosegold-800 tracking-widest">
                ROSEGOLD15
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1 text-rosegold-500 hover:text-rosegold-700 transition-colors"
                title="Copy Coupon Code"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
            {copied && (
              <span className="text-[9px] text-emerald-600 font-semibold block">
                Code copied to clipboard!
              </span>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
