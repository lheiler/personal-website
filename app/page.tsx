import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Engineering } from "@/components/sections/Engineering";
import { CreativeLab } from "@/components/sections/CreativeLab";
import { ThesisSpotlight } from "@/components/sections/ThesisSpotlight";
import { ContactManifesto } from "@/components/sections/ContactManifesto";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ThesisSpotlight />
      <Marquee text="LORENZ HEILER — COMP NEURO — MACHINE LEARNING — MUSIC " />
      <Research />
      <Marquee text="LONDON — ZURICH — STUTTGART — HONG KONG " />
      <Engineering />
      <CreativeLab />
      <ContactManifesto />
    </main>
  );
}
