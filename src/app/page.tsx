import Hero from "@/components/sections/Hero";
import Included from "@/components/sections/Included";
import Activities from "@/components/sections/Activities";
import Food from "@/components/sections/Food";
import Stay from "@/components/sections/Stay";
import Basecamp from "@/components/sections/Basecamp";
import Corporate from "@/components/sections/Corporate";
import Reviews from "@/components/sections/Reviews";
import GettingHere from "@/components/sections/GettingHere";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Included />
      <Activities />
      <Food />
      <Stay />
      <Basecamp />
      <Corporate />
      <Reviews />
      <GettingHere />
      <Faq />
      <FinalCta />
    </main>
  );
}
