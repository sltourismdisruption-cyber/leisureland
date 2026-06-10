import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import Accordion, { type QA } from "@/components/Accordion";
import RoomGallery, { type GalleryPhoto } from "@/components/RoomGallery";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import GalleMap from "@/components/sections/GalleMap";
import { STAY_ONLY } from "@/components/sections/Stay";
import { roomListings, roomMessage, waLink, messages, type Tone } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stay With Us · The A-Frame Villa & Family Rooms near Galle",
  description:
    "Rooms in the jungle near Galle and Unawatuna: the A-Frame Villa, family rooms with paddy and pool views, hands-on Ceylon experiences, and the whole water park included in your stay.",
};

/*
  Band order: hero(photo) > book-direct banner(mist-deep) > whole villa(mist) >
  room listings(card) > every stay includes(mist) > nature walk(canopy) >
  hands-on(card) > galle basecamp(mist) > stay faq(card) > final(photo)
*/

// The four required gallery angles per room (Doc 06 §1). Placeholder shots
// double as the photographer's brief: same angle style across every room.
function roomGallery(name: string, tone: Tone, img: string): GalleryPhoto[] {
  return [
    { tone, label: `${name}: bed made, natural light`, src: img },
    { tone, label: `${name}: bathroom`, src: img },
    { tone, label: `${name}: the view from the window or door`, src: img },
    { tone, label: `${name}: one detail (texture, lamp, towel setup)`, src: img },
  ];
}

const VILLA_GALLERY: GalleryPhoto[] = [
  { tone: "gold", label: "A-frame exterior at golden hour", src: "/assets/photos/room-aframe.jpg" },
  { tone: "jungle", label: "A-frame shared spaces", src: "/assets/photos/room-bungalow-bed.jpg" },
  { tone: "gold", label: "three couples lifestyle shot, group on the veranda", src: "/assets/photos/room-balcony.jpg" },
  { tone: "jungle", label: "A-frame room interior", src: "/assets/photos/room-aframe.jpg" },
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
        sub="Rooms in the jungle. Paddy views, pool views, hands-on Ceylon experiences and the whole water park included."
        ctaLabel="WhatsApp us with your dates"
        message={messages.stay}
        edgeFill="mistDeep"
      />

      <div className="note-banner">
        <b>Book direct on WhatsApp</b> and save up to 30% versus Booking.com and Airbnb.
      </div>

      <section id="a-frame">
        <div className="wrap">
          <h2 className="rv">The Whole A-Frame Villa</h2>
          <p className="lede rv">
            Book the entire A-Frame: all rooms, the whole place to yourselves.
          </p>
          <div className="aframe">
            <div className="rv">
              <RoomGallery photos={VILLA_GALLERY} name="The A-Frame Villa" />
            </div>
            <div className="aframe-txt rv">
              <p>
                Three private rooms under one iconic roof. Book a single room below, or take the
                whole villa with your favorite people. Best enjoyed booked together: three couples,
                one unforgettable stay.
              </p>
              <p className="price-line">Whole villa from [PRICE] · single rooms listed below.</p>
              <span className="confirm-note">[PRICE] founder to provide the whole-villa rate</span>
              <div>
                <WhatsAppPill message={messages.wholeVilla} big>
                  Book the whole A-Frame Villa
                </WhatsAppPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="rooms">
        <div className="wrap">
          <h2 className="rv">Choose your room.</h2>
          <p className="lede rv">
            Every room is its own stay, with its own photos, view and personality. The WhatsApp
            button on each room opens the chat with that room&apos;s name already in the message.
          </p>
          <div className="listings">
            {roomListings.map((r, i) => (
              <div className="listing rv" key={r.name} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <RoomGallery photos={roomGallery(r.name, r.tone, r.img)} name={r.name} />
                <h3>{r.name}</h3>
                <span className="meta">Sleeps {r.occupancy} · {r.count} available</span>
                {r.features ? <span className="feat">{r.features}</span> : null}
                <p className="desc">{r.description}</p>
                <p className="price-line">From {r.price} a night</p>
                {r.confirmNote ? <span className="confirm-note">{r.confirmNote}</span> : null}
                <div>
                  <WhatsAppPill message={roomMessage(r.name)}>
                    Ask about this room
                  </WhatsAppPill>
                </div>
              </div>
            ))}
          </div>
          <p className="menu-note rv">
            <span className="confirm-note">
              [CONFIRM] complete and final room list: any other room types?
            </span>
          </p>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="includes">
        <div className="wrap">
          <h2 className="rv">Every stay includes.</h2>
          <div className="includes rv">
            <p><b>Full access to the water park.</b></p>
            <p><b>Complimentary Wi-Fi.</b></p>
            <p><b>Peaceful jungle surroundings.</b></p>
            <p><b>Natural sounds and birdsong.</b></p>
            <p><b>Welcome drink on arrival.</b></p>
            <p><b>Morning bed tea.</b></p>
          </div>

          <h3 className="sub rv" style={{ marginTop: 60 }}>Choose your meal plan.</h3>
          <p className="sub-lede rv">
            Full board, half board or room only. Tell us when you book and we&apos;ll set it up.
          </p>

          <h3 className="sub rv" style={{ marginTop: 60 }}>Optional add-on experiences.</h3>
          <p className="sub-lede rv">
            BBQ nights: request it and we&apos;ll fire up the grill under the stars.
          </p>
        </div>
      </section>

      <SectionEdge from="mist" to="canopy" />

      <section className="acts" id="nature-walk">
        <div className="wrap">
          <h2 className="rv">Nature Walk</h2>
          <p className="lede rv">
            A guided walk through our own jungle: pluck Ceylon cinnamon from the tree, pick real tea
            leaves, taste fruit straight off the branch, and learn what grows where. Bird watching
            along the way, the property is alive with birdsong.
          </p>
          <p className="lede rv">
            Our Nature Walks can be arranged on request. Availability depends on our nature
            guide&apos;s schedule, so we recommend asking in advance to secure your spot.
          </p>
          <div className="walkstrip">
            {[
              { label: "walk set: the path ahead, portrait", src: "/assets/photos/coconut-climb.jpg" },
              { label: "walk set: guide pointing out a plant, portrait", src: "/assets/photos/natural-waterfall.jpg" },
              { label: "walk set: hands on cinnamon bark, portrait", src: "/assets/photos/wildlife-lizard.jpg" },
              { label: "walk set: tea leaves being picked, portrait", src: "/assets/photos/hero-lagoon.jpg" },
              { label: "walk set: fruit straight off the tree, portrait", src: "/assets/photos/waterfall-jump.jpg" },
            ].map((w, i) => (
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
              Ask about the Nature Walk when you book
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
