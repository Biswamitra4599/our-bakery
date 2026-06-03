import { useEffect, useState, useRef } from "react";

/**
 * 1. Scroll-Bound Responsive Curved Path Animation
 */
export function ScrollPathPastry({ imageSrc }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      
      if (total > 0) {
        const current = window.scrollY - start;
        const progress = Math.max(0, Math.min(1, current / total));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const P0 = { x: 10, y: 5 };    
  const P1 = { x: 80, y: 25 };   
  const P2 = { x: 20, y: 70 };   
  const P3 = { x: 90, y: 95 };   

  const t = scrollProgress;
  const mt = 1 - t;
  const x = mt * mt * mt * P0.x + 3 * mt * mt * t * P1.x + 3 * mt * t * t * P2.x + t * t * t * P3.x;
  const y = mt * mt * mt * P0.y + 3 * mt * mt * t * P1.y + 3 * mt * t * t * P2.y + t * t * t * P3.y;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-30 select-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`M ${P0.x} ${P0.y} C ${P1.x} ${P1.y}, ${P2.x} ${P2.y}, ${P3.x} ${P3.y}`}
          fill="none"
          stroke="url(#pathGrad)"
          strokeWidth="0.5"
          strokeDasharray="1.5 1.5"
        />
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9B2B5" />
            <stop offset="100%" stopColor="#B76E79" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(-50%, -50%) rotate(${t * 360}deg)`,
        }}
      >
        <img src={imageSrc} alt="Flying Pastry" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-rosegold-500/10 mix-blend-overlay" />
      </div>
    </div>
  );
}

/**
 * 2. Cinematic Mask/Split Reveal Text
 */
export function RevealText({ text, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <span
        className={`inline-block transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

/**
 * 3. High-Performance Fluid Elastic Cursor Follower
 */
export function ReactiveCursor() {
  const cursorRef = useRef({ x: 0, y: 0 }); // Mouse position
  const followerRef = useRef({ x: 0, y: 0 }); // Spring follower position
  const glowRef = useRef({ x: 0, y: 0 }); // Larger soft glow lag position
  const domFollower = useRef(null);
  const domGlow = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [clickBlooms, setClickBlooms] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleMouseDown = () => {
      setClicking(true);
      // Spawn burst particles on click
      const newParticles = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: cursorRef.current.x,
        y: cursorRef.current.y,
        angle: (i * 360) / 6 + Math.random() * 15,
      }));
      setClickBlooms((prev) => [...prev, ...newParticles]);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    // Clean up expired burst particles
    const interval = setInterval(() => {
      setClickBlooms((prev) => prev.filter((p) => Date.now() - p.id < 600));
    }, 600);

    // High performance animation loop
    let animId;
    const updateFollower = () => {
      // Interpolate main dot (smooth spring damping)
      const dx = cursorRef.current.x - followerRef.current.x;
      const dy = cursorRef.current.y - followerRef.current.y;
      followerRef.current.x += dx * 0.15;
      followerRef.current.y += dy * 0.15;

      if (domFollower.current) {
        domFollower.current.style.transform = `translate3d(${followerRef.current.x}px, ${followerRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Interpolate larger outer glow (slower lag)
      const gdx = cursorRef.current.x - glowRef.current.x;
      const gdy = cursorRef.current.y - glowRef.current.y;
      glowRef.current.x += gdx * 0.08;
      glowRef.current.y += gdy * 0.08;

      if (domGlow.current) {
        domGlow.current.style.transform = `translate3d(${glowRef.current.x}px, ${glowRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(updateFollower);
    };
    animId = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearInterval(interval);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Outer Fuzzy Glow Bubble */}
      <div
        ref={domGlow}
        className={`fixed pointer-events-none z-40 w-16 h-16 rounded-full bg-gradient-to-r from-rosegold-300/15 via-pink-200/10 to-rosegold-400/15 blur-md hidden md:block transition-all duration-300 ${
          hovering ? "scale-135 bg-rosegold-500/20" : "scale-100"
        } ${clicking ? "scale-90 opacity-80" : ""}`}
      />

      {/* Main Core Follower Dot */}
      <div
        ref={domFollower}
        className={`fixed pointer-events-none z-50 rounded-full border border-white/40 shadow-md hidden md:block transition-all duration-300 ${
          hovering
            ? "w-8 h-8 bg-rosegold-500/40 backdrop-blur-xs ring-4 ring-rosegold-400/30"
            : "w-3 h-3 bg-gradient-to-br from-rosegold-600 to-rosegold-400"
        } ${clicking ? "scale-75" : ""}`}
      />

      {/* Burst Bloom Particles */}
      {clickBlooms.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-rosegold-500 hidden md:block"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transformOrigin: "center",
            animation: "burstSpread 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards",
            "--angle": `${p.angle}deg`,
          }}
        />
      ))}

      <style>{`
        @keyframes burstSpread {
          0% {
            transform: rotate(var(--angle)) translateY(0px) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateY(40px) scale(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

/**
 * 4. High-Octane Speed Lines Overlay
 */
export function SpeedLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5 opacity-[0.03]">
      <div className="absolute top-[10%] left-[-20%] w-[150%] h-[2px] bg-gradient-to-r from-transparent via-rosegold-900 to-transparent rotate-[-15deg] animate-pulse" />
      <div className="absolute top-[40%] left-[-20%] w-[150%] h-[3px] bg-gradient-to-r from-transparent via-rosegold-900 to-transparent rotate-[15deg] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[20%] left-[-20%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-rosegold-900 to-transparent rotate-[-5deg] animate-pulse" style={{ animationDelay: "0.5s" }} />
    </div>
  );
}
