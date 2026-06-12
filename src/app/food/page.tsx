import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import MenuModal from "@/components/MenuModal";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { messages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "From Our Kitchen · Authentic Sri Lankan Food near Galle",
  description:
    "Authentic Sri Lankan food cooked from scratch with zero artificial flavors, 10 minutes from Galle. Spicy or mild, your choice. Vegetarian, vegan and gluten-free all covered.",
};

export default function Food() {
  return (
    <>
      <PageHero
        tone="food"
        shotLabel="food hero: steam, color, hands serving"
        src="/assets/photos/bbq-bonfire.jpg"
        title="From Our Kitchen"
        sub="Authentic Sri Lankan food, cooked from scratch. Zero artificial flavors. Your spice, your way."
        edgeFill="card"
      />

      <section className="band-card" id="philosophy">
        <div className="wrap">
          <div className="philo-grid">
            <div className="rv">
              <h2>Absolutely no artificial flavors. Everything made from real ingredients.</h2>
              <p className="pp">From scratch, in our kitchen, every single day. Ingredients from our own land where we can, the rest from the village around us.</p>
              <p className="grandma">Food made the way grandma would.</p>
            </div>
            <div className="rv philo-art" style={{ transitionDelay: "90ms" }}>
              <svg className="botanical" viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g stroke="#6A5037" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M120 360 C 112 280, 128 200, 122 140" fill="#B07F4F" fillOpacity="0.22"/>
                  <path d="M138 366 C 132 286, 146 206, 140 146" fill="#A9794B" fillOpacity="0.18"/>
                  <path d="M156 360 C 150 282, 162 202, 158 142" fill="#B07F4F" fillOpacity="0.15"/>
                  <ellipse cx="128" cy="140" rx="9" ry="4.5" fill="#C49A6A" fillOpacity="0.5"/>
                  <ellipse cx="146" cy="146" rx="9" ry="4.5" fill="#C49A6A" fillOpacity="0.4"/>
                  <ellipse cx="162" cy="142" rx="8" ry="4" fill="#C49A6A" fillOpacity="0.4"/>
                  <path d="M124 200 q 5 -3 10 0 M142 210 q 5 -3 10 0 M124 270 q 5 -3 10 0 M142 280 q 5 -3 10 0"/>
                </g>
                <g stroke="#7A5B3C" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M108 250 q 30 10 62 0" fill="none"/>
                  <path d="M108 262 q 30 10 62 0" fill="none"/>
                  <path d="M168 250 l 12 -7 M168 262 l 12 9"/>
                </g>
                <g stroke="#6A5037" strokeWidth="2.2" strokeLinejoin="round">
                  <g transform="translate(282 150)" fill="#8A6B47" fillOpacity="0.2">
                    <path d="M0 -26 L7 -8 L26 -8 L11 4 L16 23 L0 12 L-16 23 L-11 4 L-26 -8 L-7 -8 Z"/>
                    <circle cx="0" cy="0" r="5" fill="#C49A6A" fillOpacity="0.6"/>
                  </g>
                </g>
                <g stroke="#3E7E57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M250 250 q 9 -20 18 0 q -9 7 -18 0 Z" fill="#3E7E57" fillOpacity="0.18"/>
                  <path d="M259 230 v -10"/>
                  <path d="M276 268 q 8 -18 16 0 q -8 6 -16 0 Z" fill="#3E7E57" fillOpacity="0.14"/>
                  <path d="M284 250 v -9"/>
                </g>
                <g stroke="#A23A1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M300 300 C 330 308, 346 332, 338 360 C 330 348, 316 332, 300 320 Z" fill="#C0492A" fillOpacity="0.22"/>
                  <path d="M300 300 l -8 -8 M300 300 l 10 -4"/>
                </g>
                <g fill="#3F2A0C" fillOpacity="0.5">
                  <circle cx="210" cy="330" r="5"/>
                  <circle cx="226" cy="346" r="4.5"/>
                  <circle cx="198" cy="350" r="4"/>
                  <circle cx="240" cy="332" r="3.5"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="spicy-mild">
        <div className="wrap">
          <h2 className="rv">One Buffet, Your Way.</h2>
          <p className="lede rv">
            Two default versions of the day-outing buffet: a gentle, non-spicy one and a fiery Sri
            Lankan-spicy one. The same feast, the same dishes, cooked to your spice.
          </p>
          <div className="pair">
            <div className="pitem rv">
              <Shot tone="food" label="the spicy plate, portrait" src="/assets/photos/bbq-bonfire.jpg" />
              <div className="cap">
                <span className="nm">The spicy one</span>
                <span className="ds">the way the village eats it</span>
              </div>
            </div>
            <div className="pitem rv" style={{ transitionDelay: "90ms" }}>
              <Shot tone="gold" label="the mild plate, portrait" src="/assets/photos/hero-lagoon.jpg" />
              <div className="cap">
                <span className="nm">The mild one</span>
                <span className="ds">all the flavor, none of the fire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buffet">
        <div className="wrap">
          <h2 className="rv">More from our kitchen.</h2>
          <p className="lede rv">
            The buffet is just the start. Browse the full menu and order à la carte through the day,
            whatever you fancy.
          </p>
          <div className="buf-hero rv">
            <Shot tone="food" label="the buffet spread, wide, steam and all" src="/assets/photos/bbq-bonfire.jpg" />
          </div>
          <div className="menu-cta rv">
            <MenuModal label="View the full menu" />
          </div>
          <p className="diet rv">
            Vegetarian, vegan and gluten free all accommodated. Message us ahead and we&apos;ll take
            care of it.
          </p>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="showcase">
        <div className="wrap">
          <h2 className="rv">Eating, the Leisure Land way.</h2>
          <p className="lede rv">Half the flavor is where you&apos;re sitting.</p>
          <div className="show">
            <div className="showc rv">
              <Shot tone="food" label="buffet ritual, plates being filled" src="/assets/photos/bbq-bonfire.jpg" />
              <div className="cap">
                <span className="nm">The buffet</span>
                <span className="ds">served hot, eat as much as you like</span>
              </div>
            </div>
            <div className="showc rv" style={{ transitionDelay: "90ms" }}>
              <Shot tone="gold" label="evening tea at golden hour" src="/assets/photos/coconut-climb.jpg" />
              <div className="cap">
                <span className="nm">Evening tea</span>
                <span className="ds">as the light goes golden</span>
              </div>
            </div>
            <div className="showc rv" style={{ transitionDelay: "180ms" }}>
              <Shot tone="jungle" label="fruit straight off the tree" src="/assets/photos/wildlife-lizard.jpg" />
              <div className="cap">
                <span className="nm">Fruit off the trees</span>
                <span className="ds">whatever&apos;s ripe that day</span>
              </div>
            </div>
          </div>
          <p className="menu-note rv">
            Staying the night? The whole park and every meal we serve come with your stay.{" "}
            <Link className="section-link" href="/accommodation">
              See the stay options
            </Link>
          </p>
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta
        heading="Hungry already?"
        body="Come for the day and the buffet's included. Tell us spicy or mild when you book."
        ctaLabel="Book your day on WhatsApp"
        message={messages.book}
        edgeFill="card"
      />
    </>
  );
}
