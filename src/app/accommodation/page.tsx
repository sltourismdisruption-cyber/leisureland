import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import Accordion, { type QA } from "@/components/Accordion";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import GalleMap from "@/components/sections/GalleMap";
import { STAY_ONLY } from "@/components/sections/Stay";
import { bungalowRooms, roomMessage, waLink, messages } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stay With Us · The A-Frame Villa & Family Rooms near Galle",
  description:
    "Ten rooms in the jungle near Galle and Unawatuna: the A-Frame Villa, family rooms with paddy and pool views, hands-on Ceylon experiences, and the whole water park included in your stay.",
};

/*
  Band order: hero(photo) > book-direct banner(mist-deep) > a-frame(mist) >
  bungalow rooms(card) > every stay includes(mist) > walk the land(canopy) >
  hands-on(card) > galle basecamp(mist) > stay faq(card) > final(photo)
*/

// The walk as a 5-shot story sequence (Doc 05 photography additions).
const WALK_SHOTS: { label: string; src: string }[] = [
  { label: "walk set: the path ahead, portrait", src: "/assets/photos/coconut-climb.jpg" },
  { label: "walk set: guide pointing out a plant, portrait", src: "/assets/photos/natural-waterfall.jpg" },
  { label: "walk set: hands on cinnamon bark, portrait", src: "/assets/photos/wildlife-lizard.jpg" },
  { label: "walk set: tea leaves being picked, portrait", src: "/assets/photos/hero-lagoon.jpg" },
  { label: "walk set: fruit straight off the tree, portrait", src: "/assets/photos/waterfall-jump.jpg" },
];

// Stay FAQ (Doc 05 §8). Check-in and check-out times are an open item, so the
// answer points to WhatsApp instead of guessing.
const STAY_FAQS: QA[] = [
  { q: "When are check-in and check-out?", a: "Message us when you book and we'll confirm the exact times for your dates." },
  { q: "What happens when we arrive?", a: "A quick ID check and wristbands at check-in, and the housekeeper walks you through your room." },
  { q: "Are there quiet hours?", a: "Yes, quiet after 10 pm so the jungle stays the loudest thing here. Dinner orders close at 8:30 pm." },
  { q: "Can we bring our pet?", a: "Sorry, no pets." },
  { q: "What if our plans change?", a: "Message us as early as you can and we'll postpone your booking fairly. Full terms are available on request." },
];

export default function Accommodation() {
  return (
    <>
      <PageHero
        tone="gold"
        shotLabel="stay hero: the A-frame at golden hour, or the paddy view from a window"
        src="/assets/photos/room-aframe.jpg"
        title="Stay Overnight. Live Sri Lanka."
        sub="Ten rooms in the jungle. Paddy views, pool views, hands-on Ceylon experiences and the whole water park included."
        ctaLabel="WhatsApp us with your dates"
        message={messages.stay}
        edgeFill="mistDeep"
      />

      <div className="note-banner">
        <b>Book direct on WhatsApp</b> and save up to 30% versus Booking.com and Airbnb.
      </div>

      <section id="a-frame">
        <div className="wrap">
          <h2 className="rv">The A-Frame Villa</h2>
          <p className="lede rv">Our signature stay.</p>
          <div className="aframe">
            <div className="frame rv">
              <Shot
                tone="gold"
                label="room set: A-frame exterior at golden hour, portrait"
                src="/assets/photos/room-aframe.jpg"
              />
            </div>
            <div className="aframe-txt rv">
              <p>
                Three private rooms under one iconic roof. Book a single room, or take the whole
                villa with your favorite people. Best enjoyed booked together: three couples, one
                unforgettable stay.
              </p>
              <p className="price-line">
                Per room or the whole villa: message us for rates. Additional guests on request.
              </p>
              <WhatsAppPill message={messages.aFrame} big>
                WhatsApp to book the A-Frame
              </WhatsAppPill>
            </div>
          </div>
          <div className="aframe-rooms">
            {["room one", "room two", "room three"].map((r, i) => (
              <div className="frame rv" key={r} style={{ transitionDelay: `${i * 90}ms` }}>
                <Shot
                  tone={i === 1 ? "gold" : "jungle"}
                  label={`room set: A-frame ${r} interior, portrait`}
                  src="/assets/photos/room-bungalow-bed.jpg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="rooms">
        <div className="wrap">
          <h2 className="rv">The bungalow rooms.</h2>
          <p className="lede rv">
            Four rooms, each with its own personality. Tap a room and the chat opens with its name
            already in the message.
          </p>
          <div className="roomgrid2">
            {bungalowRooms.map((r, i) => (
              <a
                className="roomtile rv"
                key={r.name}
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                href={waLink(roomMessage(r.name))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about the ${r.name} on WhatsApp`}
              >
                <Shot tone={r.tone} label={r.shot} src={r.img} />
                <div className="cap">
                  <span className="nm">{r.name}</span>
                  <span className="ds">{r.capacity} · {r.personality}</span>
                  {r.extraGuest ? <span className="ds">{r.extraGuest}</span> : null}
                  <span className="pr">{r.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="includes">
        <div className="wrap">
          <h2 className="rv">Every stay includes.</h2>
          <div className="includes rv">
            <p><b>The whole park.</b> Full water park and activities access, every day of your stay.</p>
            <p><b>BBQ nights.</b> Evenings around the grill under the stars, on request.</p>
            <p><b>WiFi.</b> Throughout the property.</p>
            <p><b>The jungle, the calm, the birdsong.</b> No extra charge.</p>
          </div>
          <p className="menu-note rv">
            Meals your way: full board, half board or room only. Tell us when you book and we&apos;ll
            set it up.
          </p>
        </div>
      </section>

      <SectionEdge from="mist" to="canopy" />

      <section className="acts" id="nature-walk">
        <div className="wrap">
          <h2 className="rv">Walk the Land</h2>
          <p className="lede rv">
            A guided walk through our own jungle: pluck Ceylon cinnamon from the tree, pick real tea
            leaves, taste fruit straight off the branch, and learn what grows where. Bird watching
            along the way, the property is alive with birdsong. Available most days, on request.
          </p>
          <div className="walkstrip">
            {WALK_SHOTS.map((w, i) => (
              <div className="wframe rv" key={w.label} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <Shot tone="jungle" label={w.label} src={w.src} />
              </div>
            ))}
          </div>
          <p className="closing rv">
            This is the Sri Lanka most tourists never touch. Literally.{" "}
            <a
              className="section-link"
              href={waLink(messages.natureWalk)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask about the nature walk when you book
            </a>
          </p>
        </div>
      </section>

      <SectionEdge from="canopy" to="card" />

      <section className="band-card" id="experiences">
        <div className="wrap">
          <h2 className="rv">Hands-on Ceylon experiences.</h2>
          <p className="lede rv">The hands-on part no day visitor gets, and no hotel in Galle offers.</p>
          <div className="stay2">
            {STAY_ONLY.map((s, i) => (
              <div className="bigplace rv" key={s.shot} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <Shot tone={s.tone} label={s.shot} src={s.src} />
                <div className="cap">
                  <span className="nm">{s.nm}</span>
                  <span className="ds">{s.ds}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="menu-note rv">
            Staying in the villa? You can cook your own meals too, just ask us when you book.
          </p>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <GalleMap />

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="stay-faq">
        <div className="wrap">
          <h2 className="rv">Good to know before you stay.</h2>
          <Accordion items={STAY_FAQS} idPrefix="stay-faq" />
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta
        heading="Stay the night. Wake to paddy fields."
        body="Tell us your dates and group size, we'll match you to the right room."
        ctaLabel="WhatsApp us with your dates"
        message={messages.stay}
        edgeFill="card"
      />
    </>
  );
}
