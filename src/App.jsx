import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SplitHub from "./components/SplitHub";
import About from "./components/About";
import Menu from "./components/Menu";
import CakeBuilder from "./components/CakeBuilder";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ReactiveCursor, ScrollPathPastry, SpeedLines } from "./components/LandoAnimations";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
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

  const scrollToCakeDesigner = () => {
    const el = document.getElementById("cake-designer");
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

  const scrollToContact = () => {
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
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-white font-sans text-rosegold-800 selection:bg-rosegold-300 selection:text-rosegold-900 relative">
          
          <ReactiveCursor />

          <SpeedLines />

          <Header onOpenCakeBuilder={scrollToCakeDesigner} />

          <Hero onExploreMenu={scrollToMenu} onOpenCakeBuilder={scrollToCakeDesigner} />

          <SplitHub onOnOvenClick={scrollToMenu} onOffOvenClick={scrollToContact} />

          <div className="relative">
            <ScrollPathPastry imageSrc="https://images.pexels.com/photos/7474223/pexels-photo-7474223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" />
            <About />
          </div>

          <Menu />

          <CakeBuilder />

          <Specials />

          <Testimonials />

          <Contact />

          <Footer />

        </div>
      )}
    </>
  );
}
