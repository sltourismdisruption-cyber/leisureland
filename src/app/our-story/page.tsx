import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { messages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story · Leisure Land, the Land near Galle",
  description:
    "A nature-inspired water park born from the way Sri Lankans used to play: where it began, the stay and play ethos, and the traditions we keep alive, 10 minutes from Galle.",
};

/*
  Band order: hero(photo, the page's one landscape) > origin(mist) >
  stay ethos(card) > play ethos(mist) > nature as partner(card) >
  traditions(mist) > what we offer(card) > final(photo).
  No dark canopy band on this page (handoff v2); photography is hands
  and the land, never faces.
*/

export default function OurStory() {
  return (
    <>
      <PageHero
        tone="gold"
        shotLabel="story set: the land at golden hour, wide (the one landscape here)"
        src="/assets/photos/aerial-pools.jpg"
        title="Our Story"
        sub="A nature-inspired water park born from the way Sri Lankans used to play."
        edgeFill="mist"
      />

      <section id="origin">
        <div className="wrap">
          <h2 className="rv">Where it all began.</h2>
          <div className="story-row">
            <div className="sframe rv">
              <Shot
                tone="jungle"
                label="story set: hands plucking cinnamon, no faces, portrait"
                src="/assets/photos/wildlife-lizard.jpg"
              />
            </div>
            <div className="s-txt rv">
              <p>
                Leisure Land is built on a memory. The kind every Sri Lankan grew up with: running
                barefoot through paddy fields, leaping into rivers, playing hide-and-seek by the
                waterfalls.
              </p>
              <p>
                We wanted to bring those days back to life. So we built a place of hands-on,
                nature-based adventures and stays, somewhere you can step away from the rush and
                rediscover the simple joy of being outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="stay-ethos">
        <div className="wrap">
          <h2 className="rv">Not just a bed to crash.</h2>
          <div className="story-row flip">
            <div className="sframe rv">
              <Shot
                tone="gold"
                label="story set: morning light on the paddy, portrait"
                src="/assets/photos/room-balcony.jpg"
              />
            </div>
            <div className="s-txt rv">
              <p>
                Wake up to golden paddy fields, misty views, and lush jungle. Let birdsong be your
                morning playlist. Dip into the pool, sip tea on your veranda, and breathe in the
                quiet.
              </p>
              <p>This isn&apos;t just a stay: it&apos;s stillness, scenery, and slow living at its finest.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="play-ethos">
        <div className="wrap">
          <h2 className="rv">Adventure around every corner.</h2>
          <div className="story-row">
            <div className="sframe rv">
              <Shot
                tone="jungle"
                label="shot 04: mid air, rope released, portrait"
                src="/assets/photos/waterfall-jump.jpg"
              />
            </div>
            <div className="s-txt rv">
              <p>
                Have you ever balanced on ropes and dropped into a pool? Swung like Tarzan into the
                water? Slid full-speed into greenery, or floated in a pool that feels like nature
                itself?
              </p>
              <p>
                Every corner here is built for real fun. Laugh loud. Reconnect with the people you
                came with. It&apos;s the kind of day you don&apos;t forget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="nature">
        <div className="wrap">
          <h2 className="rv">Nature isn&apos;t our backdrop. It&apos;s our partner.</h2>
          <div className="story-row flip">
            <div className="sframe rv">
              <Shot
                tone="water"
                label="story set: the land at dawn, portrait"
                src="/assets/photos/natural-waterfall.jpg"
              />
            </div>
            <div className="s-txt rv">
              <p>
                We didn&apos;t build a park and add nature. We found a corner of jungle and added
                play, and we blend in rather than compete.
              </p>
              <p>
                The same promise runs through everything here: zero artificial flavors in the
                kitchen, and no artificial feeling in the place. The trees, the birds, the paddy:
                they were here first, and we keep it that way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="traditions">
        <div className="wrap">
          <h2 className="rv">The traditions we keep alive.</h2>
          <div className="prose-col rv">
            <p>
              Kotta Pora, the log pillow fight, comes from Avurudu, the Sri Lankan New Year, when
              whole villages gathered to play. Rope walking is how toddy tappers crossed between
              coconut palms, feet on one rope, hands on the other. Hibiscus drinks are still made
              the traditional shoe-flower way.
            </p>
            <p>
              These games and crafts were slipping out of everyday life, so we gave them a home.
              Play them here, and you keep them alive too.
            </p>
          </div>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot tone="water" label="shot 03: mid pillow swing, both balanced, portrait" src="/assets/photos/pool-volleyball.jpg" />
              </div>
              <p className="pcap">Kotta Pora, mid swing</p>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot tone="jungle" label="shot 02: feet on the lower rope, hands on the top rope" src="/assets/photos/rope-swing.jpg" />
              </div>
              <p className="pcap">The toddy tapper&apos;s ropes</p>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="offer">
        <div className="wrap">
          <h2 className="rv">What we offer.</h2>
          <p className="facilities rv">
            Waterpark experience<span className="dot">·</span>Adventure activities
            <span className="dot">·</span>Nature walks<span className="dot">·</span>Bird watching
            <span className="dot">·</span>Comfortable rooms<span className="dot">·</span>Delicious meals
            <span className="dot">·</span>BBQ nights<span className="dot">·</span>Airport transfers
            <span className="dot">·</span>WiFi
          </p>
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta
        heading="Escape. Explore. Enjoy."
        body="Come spend a day with us and see what we mean. With love, the Leisure Land family."
        ctaLabel="Come see it for yourself"
        message={messages.finalCta}
        edgeFill="card"
      />
    </>
  );
}
