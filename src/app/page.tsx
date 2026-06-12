import Hero from "@/components/sections/Hero";
import TheDay from "@/components/sections/TheDay";
import SectionEdge from "@/components/SectionEdge";
import Activities from "@/components/sections/Activities";
import Food from "@/components/sections/Food";
import Stay from "@/components/sections/Stay";
import GettingHere from "@/components/sections/GettingHere";
import Corporate from "@/components/sections/Corporate";
import Faq from "@/components/sections/Faq";
import Reviews from "@/components/sections/Reviews";
import FinalCta from "@/components/sections/FinalCta";

/*
  Band order, every transition separated by the irregular wavy edge
  (hero and final carry their own overlaid edges over the photos):
  hero(photo) > day(card) > acts(canopy) > food(mist) > stay(card) >
  getting-here(mist) > corporate(mist-deep) > faq(card) >
  final(photo) > footer via treeline
  The Galle journey rows moved to /accommodation (Doc 05).
*/
export default function Home() {
  return (
    <>
      <Hero />
      <TheDay />
      <SectionEdge from="card" to="canopy" />
      <Activities />
      <SectionEdge from="canopy" to="mist" />
      <Food />
      <SectionEdge from="mist" to="card" />
      <Stay />
      <SectionEdge from="card" to="mist" />
      <GettingHere />
      <SectionEdge from="mist" to="mistDeep" />
      <Corporate />
      <SectionEdge from="mistDeep" to="card" />
      <Faq />
      <Reviews />
      <FinalCta />
    </>
  );
}
