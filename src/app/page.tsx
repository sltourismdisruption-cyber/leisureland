import Hero from "@/components/sections/Hero";
import TheDay from "@/components/sections/TheDay";
import SectionEdge from "@/components/SectionEdge";
import Activities from "@/components/sections/Activities";
import Food from "@/components/sections/Food";
import Stay from "@/components/sections/Stay";
import GalleMap from "@/components/sections/GalleMap";
import GettingHere from "@/components/sections/GettingHere";
import Corporate from "@/components/sections/Corporate";
import Faq from "@/components/sections/Faq";
import Reviews from "@/components/sections/Reviews";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TheDay />
      <SectionEdge />
      <Activities />
      <SectionEdge flip />
      <Food />
      <Stay />
      <GalleMap />
      <GettingHere />
      <Corporate />
      <Faq />
      <Reviews />
      <FinalCta />
    </>
  );
}
