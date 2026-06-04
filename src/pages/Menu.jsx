import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { ReactiveCursor, SpeedLines } from "../components/LandoAnimations";

export default function MenuPage() {
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

  return (
    <div className="min-h-screen bg-white font-sans text-rosegold-800 selection:bg-rosegold-300 selection:text-rosegold-900 relative">
      <ReactiveCursor />
      <SpeedLines />
      <Header onOpenCakeBuilder={scrollToMenu} />
      <main className="pt-16">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
