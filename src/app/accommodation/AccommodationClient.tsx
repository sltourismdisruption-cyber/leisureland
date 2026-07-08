"use client";

import type { ReactNode } from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import WhatsAppPill from "@/components/WhatsAppPill";
import Accordion, { type QA } from "@/components/Accordion";
import RoomGallery, { type GalleryPhoto } from "@/components/RoomGallery";
import WalkCarousel from "@/components/WalkCarousel";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import GalleMap from "@/components/sections/GalleMap";
import { roomListings, roomMessage, waLink, messages, type Tone } from "@/lib/constants";
import type { AccommodationQuery } from "../../../tina/__generated__/types";

// Single-person icon standing in for the word "Sleeps" (max pax) on room cards
// (Round 3 ST1). currentColor + inline sizing so it inherits the meta text.
const PaxIcon = () => (
  <svg
    className="pax-ic"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Sleeps"
    style={{ display: "inline-block", width: "1.05em", height: "1.05em", verticalAlign: "-0.15em", marginRight: "0.35em" }}
  >
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 19.5c0-3.6 2.9-6.3 6.5-6.3s6.5 2.7 6.5 6.3" />
  </svg>
);

/*
  Band order: hero(photo) > book-direct banner(mist-deep) > room listings(mist) >
  whole villa(card) > every stay includes(mist) > nature walk(canopy) >
  hands-on(card) > galle basecamp(mist) > stay faq(card) > final(photo)

  Phase 1 (TinaCMS): all IMAGES on this page now come from the Tina content
  file (content/pages/accommodation.json) via useTina, so they are editable
  click-on-the-page. Room TEXT (occupancy, features, description) still comes
  from constants.ts roomListings, zipped to the Tina rooms by index. Visual
  output is unchanged.
*/

// Per-room gallery angles (Doc 06 §1). Used only as the placeholder shot-chip
// labels so the dashed briefs read the same as before; real photos override.
const ROOM_ANGLES = [
  "bed made, natural light",
  "bathroom",
  "the view from the window or door",
  "one detail (texture, lamp, towel setup)",
];

// The whole-villa gallery's shot labels + tones, in order (was VILLA_GALLERY).
const VILLA_META: { tone: Tone; label: string }[] = [
  { tone: "gold", label: "A-frame exterior at golden hour" },
  { tone: "jungle", label: "A-frame shared spaces" },
  { tone: "gold", label: "three couples lifestyle shot, group on the veranda" },
  { tone: "jungle", label: "A-frame room interior" },
];

// Nature-walk shot labels, in order (was the inline WalkCarousel array).
const WALK_LABELS = [
  "walk set: the path ahead, portrait",
  "walk set: guide pointing out a plant, portrait",
  "walk set: hands on cinnamon bark, portrait",
  "walk set: tea leaves being picked, portrait",
  "walk set: fruit straight off the tree, portrait",
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

// Every stay includes: the founder's exact 6 items (BBQ stays an add-on, not
// folded in here), each paired with a hand-drawn fern stroke icon. Strokes
// inherit color/width from .inc .iic svg, so no per-path styling.
const INCLUDES: { title: string; body: string; icon: ReactNode }[] = [
  { title: "Full access to the water park", body: "Every slide, pool and game, all day, every day of your stay.", icon: <svg viewBox="0 0 48 48"><path d="M7 30c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3" /><path d="M7 38c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3" /><path d="M14 27V13a4 4 0 0 1 8 0v3" /><circle cx="30" cy="14" r="3.5" /></svg> },
  { title: "Complimentary Wi-Fi", body: "Stay connected across the whole property.", icon: <svg viewBox="0 0 48 48"><path d="M10 22c8-7 20-7 28 0" /><path d="M15 28c5.5-4.5 12.5-4.5 18 0" /><path d="M20 34c3-2.5 5-2.5 8 0" /><circle cx="24" cy="38.5" r="1.6" fill="currentColor" stroke="none" /></svg> },
  { title: "Peaceful jungle surroundings", body: "Fresh air and calm, with nothing rushing you.", icon: <svg viewBox="0 0 48 48"><path d="M24 40c0-10 5-16 13-18-3 9-7 13-13 14" /><path d="M24 40c0-12-5-19-13-21 3 10 7 15 13 16" /><path d="M24 40V24" /></svg> },
  { title: "Natural sounds and birdsong", body: "The property is alive with birds from first light.", icon: <svg viewBox="0 0 48 48"><path d="M14 32c0-7 5-12 12-12 4 0 6 2 9 2-1 4-4 6-4 6" /><path d="M14 32c-3 0-5-2-5-5" /><path d="M14 32l-3 6" /><circle cx="31" cy="20.5" r="1.4" fill="currentColor" stroke="none" /></svg> },
  { title: "Welcome drink on arrival", body: "A cold drink to greet you the moment you land.", icon: <svg viewBox="0 0 48 48"><path d="M15 13h18l-2.5 24a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8z" /><path d="M16.5 21h15" /><path d="M27 13l4-6" /></svg> },
  { title: "Morning bed tea", body: "Bed tea brought to your room when you wake.", icon: <svg viewBox="0 0 48 48"><path d="M14 18h16v8a8 8 0 0 1-16 0z" /><path d="M30 20h4a3 3 0 0 1 0 6h-4" /><path d="M18 13c0-2 2-2 2-4M24 13c0-2 2-2 2-4" /></svg> },
];

// Hands-on Ceylon experiences, each with its own hand-drawn icon.
const EXPERIENCES: { title: string; body: string; icon: ReactNode }[] = [
  { title: "Pluck Ceylon cinnamon", body: "Straight from the tree.", icon: <svg viewBox="0 0 48 48"><path d="M24 40c0-12 5-19 14-21-3 10-8 15-14 16" /><path d="M24 40c0-9-4-14-11-16 2 8 6 12 11 13" /></svg> },
  { title: "Pick and brew tea", body: "Your own cup, leaf to pot.", icon: <svg viewBox="0 0 48 48"><path d="M16 16h16v8a8 8 0 0 1-16 0z" /><path d="M32 18h3a3 3 0 0 1 0 6h-3" /><path d="M16 30h16" /></svg> },
  { title: "Make a hibiscus drink", body: "Shoe-flower, the local way.", icon: <svg viewBox="0 0 48 48"><circle cx="24" cy="27" r="9" /><path d="M24 18c0-4 3-6 6-6-1 4-3 6-6 6" /><path d="M20 27h8M24 23v8" /></svg> },
  { title: "Fruit off the tree", body: "Whatever's ripe that day.", icon: <svg viewBox="0 0 48 48"><path d="M24 38c-6 0-10-5-10-11 0-5 4-9 10-9s10 4 10 9c0 6-4 11-10 11z" /><path d="M24 18c0-4 2-7 5-8" /></svg> },
  { title: "Watch the birds", body: "The land is full of them.", icon: <svg viewBox="0 0 48 48"><path d="M14 32c0-7 5-12 12-12 4 0 6 2 9 2-1 4-4 6-4 6" /><path d="M14 32c-3 0-5-2-5-5" /><circle cx="31" cy="20.5" r="1.4" fill="currentColor" stroke="none" /></svg> },
];

// Build gallery photos from a Tina image list, keeping the original shot-chip
// labels/tones so placeholders look unchanged. Nulls/blanks are dropped.
function buildRoomGallery(
  gallery: ReadonlyArray<string | null> | null | undefined,
  tone: Tone,
  name: string,
): GalleryPhoto[] {
  return (gallery ?? [])
    .filter((s): s is string => Boolean(s))
    .map((src, gi) => ({ tone, label: `${name}: ${ROOM_ANGLES[gi] ?? `photo ${gi + 1}`}`, src }));
}

export default function AccommodationClient(props: {
  data: AccommodationQuery;
  query: string;
  variables: object;
}) {
  const { data } = useTina(props);
  const acc = data.accommodation;

  const villaPhotos: GalleryPhoto[] = (acc.wholeVilla?.gallery ?? [])
    .filter((s): s is string => Boolean(s))
    .map((src, gi) => ({
      tone: VILLA_META[gi]?.tone ?? "gold",
      label: VILLA_META[gi]?.label ?? `A-frame photo ${gi + 1}`,
      src,
    }));

  const walkPhotos = (acc.natureWalk ?? [])
    .filter((s): s is string => Boolean(s))
    .map((src, gi) => ({ label: WALK_LABELS[gi] ?? `walk photo ${gi + 1}`, src }));

  return (
    <>
      <PageHero
        tone="gold"
        shotLabel="stay hero: the A-frame at golden hour, or the paddy view from a window"
        src={acc.heroImage ?? undefined}
        title="Stay Overnight. Live Sri Lanka."
        sub="Rooms in the jungle. Paddy views, pool views, hands-on Ceylon experiences and the whole water park included."
        ctaLabel="WhatsApp us with your dates"
        message={messages.stay}
        edgeFill="mistDeep"
        tinaField={tinaField(acc, "heroImage")}
      />

      <div className="note-banner">
        <b>Book direct on WhatsApp</b> and save up to 30% versus Booking.com and Airbnb.
      </div>

      <section id="rooms">
        <div className="wrap">
          <h2 className="rv">Choose your room.</h2>
          <p className="lede rv">
            Every room is its own stay, with its own photos, view and personality. The WhatsApp
            button on each room opens the chat with that room&apos;s name already in the message.
          </p>
          <div className="listings">
            {roomListings.map((r, i) => {
              const tinaRoom = acc.rooms?.[i] ?? null;
              return (
                <div className="listing rv" key={r.name} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                  <RoomGallery
                    photos={buildRoomGallery(tinaRoom?.gallery, r.tone, r.name)}
                    name={r.name}
                    tinaField={tinaRoom ? tinaField(tinaRoom, "gallery") : undefined}
                  />
                  <h3>{r.name}</h3>
                  <span className="meta"><PaxIcon />{r.occupancy} · Room count: {r.count}</span>
                  {r.features ? <span className="feat">{r.features}</span> : null}
                  <p className="desc">{r.description}</p>
                  <div>
                    <WhatsAppPill message={roomMessage(r.name)}>
                      Message us for rates and availability&nbsp;→
                    </WhatsAppPill>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="a-frame">
        <div className="wrap">
          <h2 className="rv">Or take the whole A-Frame Villa with Private Jacuzzi.</h2>
          <p className="lede rv">
            Book the entire villa, private jacuzzi included. Every room, the whole place, and the
            jacuzzi to yourselves.
          </p>
          <div className="aframe">
            <div className="rv">
              <RoomGallery
                photos={villaPhotos}
                name="The A-Frame Villa with Private Jacuzzi"
                tinaField={acc.wholeVilla ? tinaField(acc.wholeVilla, "gallery") : undefined}
              />
            </div>
            <div className="aframe-txt rv">
              <p>
                Two double rooms and a triple under one iconic roof, sleeping seven in all, with a
                private jacuzzi just for your group. Book a single room above, or take the entire
                villa with your favorite people.
              </p>
              <p className="price-line"><PaxIcon />7 · one entire villa, private jacuzzi included.</p>
              <div>
                <WhatsAppPill message={messages.wholeVilla} big>
                  Message us to book the villa
                </WhatsAppPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="includes">
        <div className="wrap">
          <h2 className="rv">Every stay includes.</h2>
          <p className="lede rv">The things that come with every room, no asterisks.</p>
          <div className="incl">
            {INCLUDES.map((it, i) => (
              <div className="inc rv" key={it.title} style={{ transitionDelay: `${(i % 2) * 60}ms` }}>
                <span className="iic" aria-hidden="true">{it.icon}</span>
                <div>
                  <b>{it.title}</b>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="plan">
            <div className="planc rv">
              <h3>Meals your way</h3>
              <p>Full board, half board or room only. Tell us when you book and we&apos;ll set it up.</p>
            </div>
            <div className="planc rv" style={{ transitionDelay: "90ms" }}>
              <h3>BBQ under the stars</h3>
              <p>An optional add-on. Request it and we&apos;ll fire up the grill under the stars.</p>
            </div>
          </div>
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
          <WalkCarousel photos={walkPhotos} tinaField={tinaField(acc, "natureWalk")} />
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
          <div className="exp">
            {EXPERIENCES.map((e, i) => (
              <div className="expc rv" key={e.title} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                <span className="eic" aria-hidden="true">{e.icon}</span>
                <b>{e.title}</b>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
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
        src={acc.ctaImage ?? undefined}
        tinaField={tinaField(acc, "ctaImage")}
      />
    </>
  );
}
