import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import EventsClient from "./EventsClient";
import { pageMetadata } from "@/lib/seo";

// Copy is the existing page metadata (which matches the on-page Group Events
// block), trimmed to fit the title/description limits; separator aligned to "|"
// like the other pages. No P1 draft exists for Events in doc 09.
export const metadata: Metadata = pageMetadata({
  title: "Group Events & Corporate Experiences | Leisure Land, Galle",
  description:
    "Corporate day outings, outbound training, school excursions, birthdays and private celebrations at Leisure Land, 10 minutes from Galle. Ask us to plan yours.",
  path: "/events/",
  // Events has no hero/CTA image yet; fall back to the sitewide default
  // (no-faces landscape). [ASSET] an events-appropriate 1200×630 no-faces
  // image would be ideal once available.
  imageAlt: "Leisure Land — group events near Galle",
});

// Server component: fetch the Events page content from Tina at build time
// (statically prerendered), then hand it to the client component that renders
// the page and powers click-on-the-page visual editing via useTina.
export default async function Events() {
  const res = await client.queries.events({ relativePath: "events.json" });
  return (
    <EventsClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
