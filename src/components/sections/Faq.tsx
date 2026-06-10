"use client";

import { useState } from "react";

const FAQS = [
  { q: "What should I bring?", a: "Swimwear, a towel, sunscreen and a change of clothes. Lockers are available on site." },
  { q: "Is it safe for kids?", a: "Yes. Kid-friendly pools, lifeguards on duty, and the family slides are kept separate from the speed slides." },
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome, but a quick WhatsApp ahead guarantees a spot on weekends and holidays." },
  { q: "What time are you open?", a: "The water park is open 9 am to 10 pm daily. The ten-foot deep pool closes at 6 pm for safety, once the light goes." },
  { q: "Is the food really not spicy?", a: "There is a non-spicy line for foreign guests, with spicier options too if you are feeling brave." },
  { q: "Vegetarian, vegan or gluten free?", a: "All sorted. Just message us in advance and we will take care of it." },
  { q: "Do you serve alcohol?", a: "Yes, after 2 pm for day guests. No adventure pool or activities after drinking, safety first." },
  { q: "Are there quiet hours for guests staying over?", a: "Yes, no loud sounds after 10 pm. We protect the calm so everyone enjoys the nature." },
  { q: "What if it rains?", a: "We handle it case by case. Just WhatsApp us and we will sort you out fairly." },
  { q: "Can I rent a bicycle to explore?", a: "Yes, with a little notice. Let us know on WhatsApp and we will have one ready." },
  { q: "Is there parking?", a: "Yes, free on-site parking." },
  { q: "How do I book accommodation?", a: "WhatsApp us your dates and group size. Booking direct saves up to 30% versus the big travel sites." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="day" id="faq">
      <div className="wrap">
        <h2 className="rv">The questions we get asked most.</h2>
        <div className="faqs">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="faq rv" key={f.q} data-open={isOpen ? "true" : "false"}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="plus" aria-hidden="true" />
                </button>
                <div className="ans-wrap">
                  <div className="ans">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
