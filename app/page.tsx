import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Engineering } from "@/components/sections/Engineering";
import { CreativeLab } from "@/components/sections/CreativeLab";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Marquee text="LORENZ HEILER — COMPUTATIONAL NEUROSCIENCE — SCALABLE SYSTEMS — CREATIVE DIRECTION — " />
      <Research />
      <Marquee text="AVAILABLE FOR COLLABORATION — AVAILABLE FOR COLLABORATION — " />
      <Engineering />
      <CreativeLab />
      <Footer />
    </main>
  );
}
