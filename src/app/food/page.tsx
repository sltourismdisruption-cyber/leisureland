import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { menu, messages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "From Our Kitchen · Authentic Sri Lankan Food near Galle",
  description:
    "Authentic Sri Lankan food cooked from scratch with zero artificial flavors, 10 minutes from Galle. Spicy or mild, your choice. Vegetarian, vegan and gluten-free all covered.",
};

/*
  Band order: hero(photo) > philosophy(mist) > spicy or mild(card) >
  menu(mist) > culinary experience(card) > final(photo).
  No booking mechanics on this page; the single closer CTA funnels to
  the day-outing booking (Doc 05).
*/

// The culinary details strip, same treatment as the homepage food section.
// These captions are three of Kalam's allowed homes (handoff §3).
const DETAILS = [
  { tone: "food" as const, shot: "shot 10: the curry pots, squarish", src: "/assets/photos/bbq-bonfire.jpg", hand: "the curry pots" },
  { tone: "food" as const, shot: "shot 11: string hoppers, fresh, squarish", src: "/assets/photos/coconut-climb.jpg", hand: "string hoppers, fresh" },
  { tone: "gold" as const, shot: "shot 12: fruit picked this morning, squarish", src: "/assets/photos/wildlife-lizard.jpg", hand: "picked this morning" },
];

export default function Food() {
  return (
    <>
      <PageHero
        tone="food"
        shotLabel="food hero: steam, color, hands serving"
        src="/assets/photos/bbq-bonfire.jpg"
        title="From Our Kitchen"
        sub="Authentic Sri Lankan food, cooked from scratch. Zero artificial flavors. Your spice, your way."
        edgeFill="mist"
      />

      <section id="philosophy">
        <div className="wrap">
          <h2 className="rv">How we cook.</h2>
          <div className="prose-col rv">
            <p>
              Everything that reaches the table is cooked from scratch, in our kitchen, every day.
            </p>
            <p>
              Zero artificial flavors, no shortcuts. That&apos;s not a goal, it&apos;s a promise we
              make as a brand and keep at every meal.
            </p>
            <p>
              Where possible, ingredients come from our own land. The fruit on your plate was often
              on a tree that morning.
            </p>
            <p>
              Food made the way grandma would. It&apos;s the line we cook by, and the standard every
              dish has to meet.
            </p>
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="spice">
        <div className="wrap">
          <h2 className="rv">Spicy or mild. You choose.</h2>
          <p className="lede rv">
            Real Sri Lankan flavor doesn&apos;t have to mean chili sweat. Tell us your preference
            when you arrive: fiery, the way Sri Lankans love it, or mild, with all of the flavor and
            none of the fire. Same dishes, same soul, your spice.
          </p>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot tone="food" label="food set: the spicy plate, portrait" src="/assets/photos/bbq-bonfire.jpg" />
              </div>
              <p className="pcap">Spicy, the Sri Lankan way</p>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot tone="gold" label="food set: the mild plate, portrait" src="/assets/photos/hero-lagoon.jpg" />
              </div>
              <p className="pcap">Mild, and still authentic</p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="menu">
        <div className="wrap">
          <h2 className="rv">What&apos;s on the buffet.</h2>
          <ul className="menu-list rv">
            {menu.map((m) => (
              <li key={m.dish}>
                <b>{m.dish}</b>
                <span>{m.note}</span>
              </li>
            ))}
          </ul>
          <p className="menu-note rv">
            Vegetarian, vegan and gluten-free all accommodated. Message us ahead and we&apos;ll take
            care of it.
          </p>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="experience">
        <div className="wrap">
          <h2 className="rv">More than a meal.</h2>
          <p className="lede rv">
            Eat surrounded by jungle: the buffet at midday, tea as the light goes golden, fruit
            straight off the trees between swims.
          </p>
          <div className="food-details">
            {DETAILS.map((d, i) => (
              <div className="detail rv" key={d.shot} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="frame">
                  <Shot tone={d.tone} label={d.shot} src={d.src} />
                </div>
                <span className="hand">{d.hand}</span>
              </div>
            ))}
          </div>
          <p className="menu-note rv">
            Staying overnight? In the villa you can cook your own meals too.{" "}
            <Link className="section-link" href="/accommodation">
              See the stay page
            </Link>
          </p>
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta
        heading="Hungry already?"
        body="One ticket covers the day, the play, and all you can eat from this kitchen."
        ctaLabel="Book your day on WhatsApp"
        message={messages.book}
        edgeFill="card"
      />
    </>
  );
}
