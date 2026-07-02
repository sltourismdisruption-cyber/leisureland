"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import PageHero from "@/components/PageHero";
import WhatsAppPill from "@/components/WhatsAppPill";
import FinalCta from "@/components/sections/FinalCta";
import { messages } from "@/lib/constants";
import type { EventsQuery } from "../../../tina/__generated__/types";

/*
  Events page (Round 3 G3) — LAUNCH VERSION.
  Images (hero + final CTA) come from content/pages/events.json via useTina
  (click-on-the-page editing in /admin). The copy is the Group Events / Corporate
  block from Round 3 H3, verbatim. Event types, packages, a gallery and
  testimonials are an open item — they drop into the marked slot below once the
  founder supplies the content.
*/

export default function EventsClient(props: {
  data: EventsQuery;
  query: string;
  variables: object;
}) {
  const { data } = useTina(props);
  const d = data.events;

  return (
    <>
      <PageHero
        tone="gold"
        shotLabel="events hero: a group together at the park"
        src={d.heroImage ?? undefined}
        title="Group Events & Corporate Experiences"
        sub="Bring the team, the class, or the whole crew."
        edgeFill="card"
        tinaField={tinaField(d, "heroImage")}
      />

      <section className="band-card" id="group-events">
        <div className="wrap">
          <div className="prose rv">
            <p>
              From corporate day outings and outbound training programs to school excursions,
              birthdays, and private celebrations, we help you plan experiences that bring people
              together. Our team can assist with activity arrangements, event coordination, meals,
              and customized schedules to suit your group&apos;s goals.
            </p>
          </div>
          <div className="mailcta rv">
            <WhatsAppPill message={messages.group} big>
              WhatsApp us to plan your event
            </WhatsAppPill>
          </div>
        </div>
      </section>

      {/*
        Open item (Round 3 G3): event types, packages, a gallery and testimonials
        slot in here once the founder supplies them. Keeping it as its own band
        preserves the hero → card → final-CTA edge flow when they land.
      */}

      <FinalCta
        heading="Let's plan your event."
        body="Share your group size, preferred dates, and what you're looking to achieve, and we'll help create an experience tailored to your needs."
        ctaLabel="Plan your event on WhatsApp"
        message={messages.group}
        edgeFill="card"
        src={d.ctaImage ?? undefined}
        tinaField={tinaField(d, "ctaImage")}
      />
    </>
  );
}
