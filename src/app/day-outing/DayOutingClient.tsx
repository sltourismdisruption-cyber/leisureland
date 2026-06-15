"use client";

import { Fragment } from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import MenuModal from "@/components/MenuModal";
import TermsModal from "@/components/TermsModal";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { messages, dayPricing, dayHours, poolPricing, poolSpecialNote, type Tone } from "@/lib/constants";
import type { DayOutingQuery } from "../../../tina/__generated__/types";

/*
  Band order: hero(photo) > day flow(mist) > every activity(card) >
  buffet(mist) > pricing(card) > know before you go(mist-deep) >
  final(photo) > footer via treeline

  Phase 2 (TinaCMS): all IMAGES come from content/pages/day-outing.json via
  useTina (editable click-on-the-page). The TEXT (moment/activity copy, shot
  labels, rules, pricing) stays in code; images zip to the Tina lists by index.
  Empty Tina values fall through to the gradient placeholder + shot brief.
*/

// Doc 06 §1: the six-beat journey. Images come from data.dayOuting.moments[i].
const MOMENTS: { title: string; body: string; tone: Tone; shot: string }[] = [
  {
    title: "Arrive to Another World",
    body: "Step off the road and into the jungle. A cold welcome juice in your hand, birdsong overhead, the air suddenly greener. You made it.",
    tone: "jungle",
    shot: "moments set: welcome juice being handed over, portrait",
  },
  {
    title: "Chase the Rush",
    body: "Hit the slides. Feel your stomach drop as you race through the canopy and crash into cool water. Again? Obviously again.",
    tone: "water",
    shot: "The Jungle Plunge: splashdown, portrait",
  },
  {
    title: "Play Like a Kid Again",
    body: "Knock a friend off the log into the pool. Swing in like Tarzan. Balance the ancient rope walk. This is the stuff you'll still be laughing about next year.",
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
  },
  {
    title: "Feast Together",
    body: "Gather around a real Sri Lankan spread, cooked from scratch. Spicy or mild, your call. Eat until you're happy.",
    tone: "food",
    shot: "moments set: buffet being served onto a plate, portrait",
  },
  {
    title: "Let the Water Heal You",
    body: "Stand under the waterfall and let it massage your shoulders. Float. Breathe. Let the jungle do the rest.",
    tone: "water",
    shot: "waterfall massage shot: under the falls, shoulders and back, portrait",
  },
  {
    title: "Leave Lighter Than You Came",
    body: "A last cup of Ceylon tea as the light turns gold. You'll already be planning the next visit.",
    tone: "gold",
    shot: "moments set: evening tea at golden hour, portrait",
  },
];

// All 12 activities (Doc 06). Images come from data.dayOuting.activities[i].
const ACTIVITIES: {
  name: string;
  body: string;
  tag?: string;
  confirmNote?: string;
  tone: Tone;
  shot: string;
}[] = [
  {
    name: "The Jungle Plunge",
    body: "The fast one. A steep run, a big splash, and a story to tell. For the daredevils in the group.",
    tone: "water",
    shot: "The Jungle Plunge: splashdown, portrait",
  },
  {
    name: "Tarzan jump",
    body: "Grab the rope, swing wide, let go. The splash is half the fun, the flight is the other half.",
    tone: "jungle",
    shot: "shot 04: mid air, rope released, portrait",
  },
  {
    name: "Rope walking",
    body: "For generations, toddy tappers crossed between coconut palms on two ropes, feet on one, hands on the other. Ours is strung over the pool. Make it across, or make a splash trying.",
    tag: "🇱🇰 Traditional Sri Lankan game",
    tone: "jungle",
    shot: "shot 02: feet on the lower rope, hands on the top rope, halfway across",
  },
  {
    name: "The Waterfall: Nature's Massage",
    body: "Step beneath the cascading water and let it work. The falls pour over your shoulders and back like a natural massage, water therapy the way nature intended. Close your eyes, feel the rush, and let the tension melt into the pool. Surrounded by jungle, there's no spa quite like it.",
    tone: "water",
    shot: "waterfall massage shot: under the falls, blissful, portrait",
  },
  {
    name: "Coconut Tree Climbing",
    body: "A traditional Sri Lankan skill, nearly lost to time and reintroduced here. Learn how generations scaled the palms, a real cultural adventure you won't find at any regular water park.",
    tag: "🇱🇰 Traditional Sri Lankan experience",
    confirmNote: '[CONFIRM] credit wording: original note said "reintroduced by National Inn"',
    tone: "jungle",
    shot: "coconut tree climbing: action, the climber up the palm, portrait",
  },
  {
    name: "Kotta Pora",
    body: "A pillow fight on a log above the water, the game villages played at Avurudu, the Sri Lankan New Year. Last one dry wins.",
    tag: "🇱🇰 Traditional Sri Lankan game",
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
  },
  {
    name: "The Twister",
    body: "Wider and gentler, built for everyone. Race your kids down it, then go again.",
    tone: "water",
    shot: "The Twister: mid-ride, portrait",
  },
  {
    name: "Paaruwa (Bamboo Raft)",
    body: "Drift the water the old Sri Lankan way, poling a traditional bamboo raft.",
    tag: "🇱🇰 Traditional Sri Lankan experience",
    tone: "water",
    shot: "Paaruwa bamboo raft: poling across the water, portrait",
  },
  {
    name: "Tree house",
    body: "Climb into the canopy and take in the whole park from above. The quiet spot when you need a breather.",
    tone: "jungle",
    shot: "shot 07: up in the tree house, portrait",
  },
  {
    name: "Paddy field swings",
    body: "Swing out over the rice fields with the jungle at your back. The view does the talking.",
    tone: "gold",
    shot: "shot 05, portrait crop: swing out over the paddy",
  },
  {
    name: "Pool Volleyball",
    body: "A net strung over the water. Pick teams, serve, and settle it properly.",
    tone: "water",
    shot: "pool volleyball, separate action shot, portrait",
  },
  {
    name: "Pool Basketball",
    body: "A hoop above the pool. Shoot, splash, and go again.",
    tone: "water",
    shot: "pool basketball, separate action shot, portrait",
  },
];

// Food photos that replace the text menu (Doc 06 §7). Images from data.dayOuting.foodShots[i].
const FOOD_SHOTS: { tone: Tone; shot: string }[] = [
  { tone: "food", shot: "appealing food photo: dishes being served, squarish" },
  { tone: "food", shot: "appealing food photo: drinks and bites by the pool, squarish" },
  { tone: "gold", shot: "appealing food photo: fresh fruit and juices, squarish" },
];

// Know before you go: the warm version of the rules (Doc 05 §6).
const RULES: { rule: string; detail: string }[] = [
  { rule: "Bring ID", detail: "Anyone 18 or over needs one: NIC, license or passport." },
  { rule: "Swimwear in the pools", detail: "Swimwear or silk suits only. No denim, cotton or shawls, they're unsafe on the slides." },
  { rule: "Towels", detail: "Towels aren't included, bring your own, or purchase one on site." },
  { rule: "Alcohol", detail: "We don't serve alcohol, but you're welcome to enjoy your own after 2 pm. No pools or activities after drinking, safety first." },
  { rule: "Lifeguards", detail: "On duty all day. The deep pool closes at 6:30 pm, once the light goes." },
  { rule: "Under 18s", detail: "Come along with a parent or guardian." },
];

// Hand-drawn stroke icons for the rules, in the same order as RULES.
const RULE_ICONS = [
  // ID card
  <svg viewBox="0 0 48 48" key="id"><rect x="6" y="12" width="36" height="25" rx="4" /><circle cx="15.5" cy="22" r="4" /><path d="M25 20h13" /><path d="M25 26.5h10" /><path d="M11 31.5h9" /></svg>,
  // swimwear
  <svg viewBox="0 0 48 48" key="swim"><path d="M11 16h26" /><path d="M11 16l3.5 15c1 4.5 6.5 4.5 7.5 0l2-8 2 8c1 4.5 6.5 4.5 7.5 0L37 16" /><path d="M21.5 16c0 3 5 3 5 0" /></svg>,
  // towel
  <svg viewBox="0 0 48 48" key="towel"><path d="M9 17h25a6.5 6.5 0 0 1 0 13H9z" /><path d="M9 17v13" /><path d="M9 23.5h25" /><path d="M38 22v9" /></svg>,
  // alcohol clock
  <svg viewBox="0 0 48 48" key="alcohol"><circle cx="17" cy="25" r="10.5" /><path d="M17 25v-6.5" /><path d="M17 25l4.5 2.5" /><path d="M32 13h9l-1.8 9c-.8 6.5-4.6 6.5-5.4 0z" /><path d="M36.5 29v6" /><path d="M33 35h7" /></svg>,
  // lifebuoy
  <svg viewBox="0 0 48 48" key="guard"><circle cx="24" cy="24" r="13" /><circle cx="24" cy="24" r="5.5" /><path d="M24 11v7.5M24 29.5V37M11 24h7.5M29.5 24H37" /></svg>,
  // parent and child
  <svg viewBox="0 0 48 48" key="kids"><circle cx="17" cy="13.5" r="5" /><path d="M9 38c0-8.5 3.8-12.5 8-12.5s8 4 8 12.5" /><circle cx="34" cy="20" r="4" /><path d="M28.5 38c0-6 2.5-9 5.5-9s5.5 3 5.5 9" /></svg>,
];

export default function DayOutingClient(props: {
  data: DayOutingQuery;
  query: string;
  variables: object;
}) {
  const { data } = useTina(props);
  const d = data.dayOuting;

  return (
    <>
      <PageHero
        tone="water"
        shotLabel="day-outing hero: best action or joy shot from the shoot"
        src={d.heroImage ?? undefined}
        title="Your Day at Leisure Land"
        sub="One ticket. A full day of slides, traditional games, jungle, and a proper Sri Lankan feast."
        ctaLabel="WhatsApp to book your day"
        message={messages.book}
        edgeFill="mist"
        tinaField={tinaField(d, "heroImage")}
      />

      <section id="day-flow">
        <div className="wrap">
          <h2 className="rv">How your day flows.</h2>
          <p className="lede rv">No schedule, no rush. The day moves the way you want it to.</p>
          <div className="trail">
            {MOMENTS.map((m, i) => (
              <Fragment key={m.title}>
                <div className={`moment${i % 2 === 1 ? " rev" : ""} rv`}>
                  <div className="medwrap">
                    <div className="pool">
                      <Shot tone={m.tone} label={m.shot} src={d.moments?.[i] ?? undefined} tinaField={tinaField(d, "moments", i)} />
                    </div>
                  </div>
                  <div className="mtxt">
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </div>
                {i < MOMENTS.length - 1 ? (
                  <svg className="flowline" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
                    <path
                      d={
                        i % 2 === 0
                          ? "M131 -34 C 320 158, 690 -38, 869 154"
                          : "M869 -34 C 680 158, 310 -38, 131 154"
                      }
                    />
                  </svg>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="golden" to="card" />

      <section className="band-card" id="activities">
        <div className="wrap">
          <h2 className="rv">Every activity, properly.</h2>
          <p className="lede rv">
            More ways to play than you can fit in one day, from the slides you know to the old games
            you don&apos;t.
          </p>
          <div className="allacts">
            {ACTIVITIES.map((a, i) => (
              <div className="act-card rv" key={a.name} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <div className="frame">
                  <Shot tone={a.tone} label={a.shot} src={d.activities?.[i] ?? undefined} tinaField={tinaField(d, "activities", i)} />
                </div>
                <h3>{a.name}</h3>
                {a.tag ? <span className="tag">{a.tag}</span> : null}
                <p>{a.body}</p>
                {a.confirmNote ? <span className="confirm-note">{a.confirmNote}</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="buffet">
        <div className="wrap">
          <h2 className="rv">One buffet, your way.</h2>
          <p className="lede rv">
            Our buffet is authentic Sri Lankan, cooked from scratch with zero artificial flavors.
            Tell us your preference, fiery Sri Lankan-style, or a gentler version loved by guests
            from around the world. Same dishes, same soul, your spice.
          </p>
          <div className="food-hero rv">
            <Shot
              tone="food"
              label="shot 09: the buffet spread, wide, steam and all"
              src={d.buffetHero ?? undefined}
              tinaField={tinaField(d, "buffetHero")}
            />
          </div>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot tone="food" label="food set: the spicy plate, portrait" src={d.spicyPlate ?? undefined} tinaField={tinaField(d, "spicyPlate")} />
              </div>
              <p className="pcap">Spicy, the Sri Lankan way</p>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot tone="gold" label="food set: the mild plate, portrait" src={d.mildPlate ?? undefined} tinaField={tinaField(d, "mildPlate")} />
              </div>
              <p className="pcap">Mild, and still authentic</p>
            </div>
          </div>

          <h3 className="sub rv" style={{ marginTop: 70 }}>Hungry? We&apos;ve got you, all day.</h3>
          <p className="sub-lede rv">
            Beyond the buffet, you can order food and drinks throughout the day. Just here for the
            pool? You can still grab whatever you fancy, food and beverages are available to all
            visitors.
          </p>
          <div className="food-details">
            {FOOD_SHOTS.map((f, i) => (
              <div className="detail rv" key={f.shot} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="frame">
                  <Shot tone={f.tone} label={f.shot} src={d.foodShots?.[i] ?? undefined} tinaField={tinaField(d, "foodShots", i)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="pricing">
        <div className="wrap">
          <h2 className="rv">What your day costs.</h2>
          <p className="lede rv">Two simple options, side by side. Pick the day you want.</p>
          <div className="tickets">
            <div className="twrap tilt-a rv">
              <div className="ticket">
                <div className="stub" aria-hidden="true">
                  <svg viewBox="0 0 90 230">
                    <g stroke="#eaf3ec" strokeWidth="2.5" fill="none" strokeLinecap="round">
                      <path d="M64 14 V216" />
                      <path d="M64 30 H48" /><path d="M64 50 H54" /><path d="M64 70 H42" />
                      <path d="M64 90 H54" /><path d="M64 110 H48" /><path d="M64 130 H54" />
                      <path d="M64 150 H42" /><path d="M64 170 H54" /><path d="M64 190 H48" />
                    </g>
                    <circle cx="64" cy="70" r="5.5" fill="#f2d98b" />
                    <circle cx="64" cy="150" r="5.5" fill="#f2d98b" />
                    <text x="6" y="64" fontSize="15" fill="#d9c9a8" style={{ fontFamily: "var(--cursive)" }}>1.3 m</text>
                    <text x="6" y="144" fontSize="15" fill="#d9c9a8" style={{ fontFamily: "var(--cursive)" }}>0.8 m</text>
                  </svg>
                </div>
                <div className="tbody">
                  <h3>Full Day Pass</h3>
                  <p className="tdesc">
                    Water park, buffet, welcome drink and evening tea. Everything included, nothing
                    hidden. Priced by height.
                  </p>
                  {dayPricing.map((p) => (
                    <div className="tier" key={p.height}>
                      <div>
                        <b>{p.height}</b>
                        <span>{p.note}</span>
                      </div>
                      <span className={`pr${p.price === "Free" ? " free" : ""}`}>{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="twrap tilt-b rv">
              <div className="ticket pool-t">
                <div className="stub" aria-hidden="true">
                  <svg viewBox="0 0 90 230">
                    <g stroke="#eaf3ec" strokeWidth="2.5" fill="none" strokeLinecap="round">
                      <path d="M16 90 q14 -10 28 0 q14 10 28 0" />
                      <path d="M16 115 q14 -10 28 0 q14 10 28 0" />
                      <path d="M16 140 q14 -10 28 0 q14 10 28 0" />
                    </g>
                  </svg>
                </div>
                <div className="tbody">
                  <h3>Pool-Only Ticket</h3>
                  <p className="tdesc">
                    Just here for the water? Order food and drinks from the menu whenever you like.
                    Buffet not included. Priced by height.
                  </p>
                  {poolPricing.map((p) => (
                    <div className="tier" key={p.height}>
                      <div>
                        <b>{p.height}</b>
                        <span>{p.note}</span>
                      </div>
                      <span className={`pr${p.price === "Free" ? " free" : ""}`}>{p.price}</span>
                    </div>
                  ))}
                  <p className="pool-note">{poolSpecialNote}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-cta rv">
            <MenuModal label="View the menu" />
          </div>
          <p className="hours-line rv">
            {dayHours.regular}. {dayHours.evening}.
          </p>
          <div className="book-box rv">
            <b>To book, WhatsApp us:</b>
            <p>Date · Number of people · Your name</p>
            <WhatsAppPill message={messages.book} big>
              WhatsApp to book your day
            </WhatsAppPill>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mistDeep" />

      <section className="band-deep" id="rules">
        <div className="wrap">
          <h2 className="rv">Know before you go.</h2>
          <p className="lede rv">
            A few things that keep the day safe and easy for everyone.
          </p>
          <div className="rules">
            {RULES.map((r, i) => (
              <div className="rule rv" key={r.rule} style={{ transitionDelay: `${(i % 2) * 60}ms` }}>
                <span className="ric" aria-hidden="true">{RULE_ICONS[i]}</span>
                <div>
                  <b>{r.rule}</b>
                  <p>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rv">
            <TermsModal label="Full rules and booking terms" />
          </div>
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta
        heading="Trust us."
        body="You don't want to miss this experience."
        ctaLabel="WhatsApp to book your day"
        message={messages.book}
        edgeFill="mistDeep"
        src={d.ctaImage ?? undefined}
        tinaField={tinaField(d, "ctaImage")}
      />
    </>
  );
}
