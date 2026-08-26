"use client";

import { useEffect, useState } from "react";
import Accordion, { type QA } from "@/components/Accordion";

type Category = { name: string; items: QA[] };

// Grouped into 3 topics so the list isn't one long undifferentiated scroll.
const CATEGORIES: Category[] = [
  {
    name: "Planning your visit",
    items: [
      { q: "Do I need to book in advance?", a: "Walk-ins are welcome, but a quick WhatsApp ahead guarantees a spot on weekends and holidays." },
      { q: "What time are you open?", a: "The water park is open 9 am to 10 pm daily. The ten-foot deep pool closes at 6:30 pm for safety, once the light goes." },
      { q: "What should I bring?", a: "Swimwear, a towel, sunscreen and a change of clothes. Lockers are available on site." },
      { q: "Is there parking?", a: "Yes, free on-site parking." },
      { q: "What's included in a day out package?", a: "The Full Day Pass covers the water park, buffet, welcome drink and evening tea, all in one ticket, priced by height. Just want the pool? The Pool-Only Ticket leaves out the buffet, and you can order from the menu instead." },
    ],
  },
  {
    name: "Food & family",
    items: [
      { q: "Is it safe for kids?", a: "Yes. Kid-friendly pools, lifeguards on duty, and the family slides are kept separate from the speed slides." },
      { q: "Is there a discount for kids?", a: "Kids under 0.8 m tall come along free, on both the Full Day Pass and the Pool-Only Ticket. Above that, it's priced by height, not by age." },
      { q: "Is the food really not spicy?", a: "There is a non-spicy line for guests from around the world, with spicier options too if you are feeling brave." },
      { q: "Vegetarian, vegan or gluten free?", a: "All sorted. Just message us in advance and we will take care of it." },
      { q: "Do you serve alcohol?", a: "We don't serve alcohol, but you're welcome to enjoy your own after 2 pm. For everyone's safety, adventure activities and pools are off-limits after drinking." },
    ],
  },
  {
    name: "Staying & extras",
    items: [
      { q: "Are there quiet hours for guests staying over?", a: "Yes, no loud sounds after 10 pm. We protect the calm so everyone enjoys the nature." },
      { q: "What if it rains?", a: "We handle it case by case. Just WhatsApp us and we will sort you out fairly." },
      { q: "Can I rent a bicycle to explore?", a: "Yes, with a little notice. Let us know on WhatsApp and we will have one ready." },
      { q: "How do I book accommodation?", a: "WhatsApp us your dates and group size. Booking direct saves up to 30% versus the big travel sites." },
    ],
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  // RevealObserver (src/components/RevealObserver.tsx) only scans for .rv
  // elements once on page mount — a one-shot scroll-triggered reveal. This
  // list's DOM swaps on every category click (and can mount after that
  // initial scan even on first load), so it would otherwise get stuck at
  // opacity 0 forever. Drive its reveal directly instead.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".faq-layout .faq:not(.in)").forEach((el) => el.classList.add("in"));
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <section className="day" id="faq">
      <div className="wrap">
        <h2 className="rv">The questions we get asked most.</h2>
        <p className="lede rv">Pick a topic, or just scroll through everything guests usually ask.</p>

        <div className="faq-layout">
          <div className="faq-cats" role="tablist" aria-label="FAQ topics">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                type="button"
                role="tab"
                aria-selected={active === i}
                className="faq-cat"
                data-active={active === i}
                onClick={() => setActive(i)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <Accordion key={active} items={CATEGORIES[active].items} idPrefix={`faq-${active}`} />
        </div>
      </div>
    </section>
  );
}
