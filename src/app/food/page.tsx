import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { asset, messages, type Tone } from "@/lib/constants";

export const metadata: Metadata = {
  title: "From Our Kitchen · Authentic Sri Lankan Food near Galle",
  description:
    "Authentic Sri Lankan food cooked from scratch with zero artificial flavors, 10 minutes from Galle. Spicy or mild, your choice. Vegetarian, vegan and gluten-free all covered.",
};

/*
  Band order: hero(photo) > statement(mist) > the story + cooking photos(card) >
  the buffet in photos + breakfast menu(mist) > more than a meal(card) >
  final(photo).
  Doc 06 direction: less description, more photos. No text menus anywhere on
  the page; the breakfast menu opens as a PDF once the founder provides it.
*/

// ~3 appealing food photos replacing the dish-text strip (Doc 06 §6).
const LOWER_SHOTS: { tone: Tone; shot: string; src: string }[] = [
  { tone: "food", shot: "appealing food photo: a loaded plate, squarish", src: "/assets/photos/bbq-bonfire.jpg" },
  { tone: "food", shot: "appealing food photo: the table mid-feast, squarish", src: "/assets/photos/coconut-climb.jpg" },
  { tone: "gold", shot: "appealing food photo: fruit and juices, squarish", src: "/assets/photos/wildlife-lizard.jpg" },
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

      <section id="promise">
        <div className="wrap">
          <h2 className="rv">
            Absolutely no artificial flavors. Everything made from real ingredients.
          </h2>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="story">
        <div className="wrap">
          <h2 className="rv">Where the recipes come from.</h2>
          <p className="lede rv">
            Our recipes come from the village itself, local cooks who came together to craft a
            flavor you can make your own: spicy, or mild. You choose.
          </p>
          <p className="rv">
            <span className="confirm-note">
              [CONFIRM] origin wording: original note mentioned a popular village school / village folk
            </span>
          </p>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot
                  tone="food"
                  label="behind the scenes: hands cooking over clay pots, portrait"
                  src="/assets/photos/bbq-bonfire.jpg"
                />
              </div>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot
                  tone="food"
                  label="behind the scenes: fire and fresh ingredients, portrait"
                  src="/assets/photos/coconut-climb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="buffet">
        <div className="wrap">
          <h2 className="rv">The buffet.</h2>
          <p className="lede rv">Two versions of the same feast: spicy or mild, you choose.</p>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot tone="food" label="the spicy buffet spread, clear photo" src="/assets/photos/bbq-bonfire.jpg" />
              </div>
              <p className="pcap">The spicy buffet</p>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot tone="gold" label="the mild buffet spread, clear photo" src="/assets/photos/hero-lagoon.jpg" />
              </div>
              <p className="pcap">The mild buffet</p>
            </div>
          </div>
          <p className="menu-note rv">
            Vegetarian, vegan and gluten-free all accommodated. Message us ahead and we&apos;ll take
            care of it.
          </p>

          <h3 className="sub rv" style={{ marginTop: 70 }}>The breakfast menu.</h3>
          <p className="sub-lede rv">
            Staying with us? Breakfast has its own menu.{" "}
            <a
              className="section-link"
              href={asset("/assets/menus/breakfast-menu.pdf")}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the breakfast menu (PDF)
            </a>
          </p>
          <p className="rv">
            <span className="confirm-note">
              [ASSET NEEDED] breakfast menu PDF from the founder (drop it at
              public/assets/menus/breakfast-menu.pdf)
            </span>
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
            {LOWER_SHOTS.map((d, i) => (
              <div className="detail rv" key={d.shot} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="frame">
                  <Shot tone={d.tone} label={d.shot} src={d.src} />
                </div>
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
