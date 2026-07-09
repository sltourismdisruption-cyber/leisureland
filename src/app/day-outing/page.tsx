import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import DayOutingClient from "./DayOutingClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Day Outing in Galle | Water Park + Sri Lankan Buffet",
  description:
    "A full day of water slides, rope swings and jungle activities plus a real Sri Lankan lunch buffet. 10 min from the Galle exit. Book on WhatsApp.",
  path: "/day-outing/",
  // The page hero is portrait (bad OG crop); use a landscape, no-faces shot
  // from the same page instead. [ASSET] still needs a proper 1200×630 image.
  image: "/images/day-outing/final-cta/pool-paddy-fields-professional.jpg",
  imageAlt: "Leisure Land pool beside the Galle paddy fields",
});

// Server component: fetch the Day Outing content from Tina at build time
// (statically prerendered), then hand it to the client component that renders
// the page and powers click-on-the-page visual editing via useTina.
export default async function DayOuting() {
  const res = await client.queries.dayOuting({ relativePath: "day-outing.json" });
  return (
    <DayOutingClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
