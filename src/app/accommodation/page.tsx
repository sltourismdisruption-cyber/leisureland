import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import AccommodationClient from "./AccommodationClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { lodgingBusinessLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Stay in Galle | Nature Rooms & A-Frame Villa",
  description:
    "Ten rooms tucked into the jungle — paddy and pool views, a private-jacuzzi villa, full water park access with every stay. Book direct & save.",
  path: "/accommodation/",
  // The page hero is a dark/moody night shot; use a daytime landscape (pool +
  // paddy view, no faces) so shares read warm. [ASSET] still needs a proper
  // 1200×630 no-faces image; this interim also carries a photo watermark.
  image:
    "/images/accommodation/rooms/family-room-pool-view/poolview-pool-paddy-pro.jpg",
  imageAlt: "Leisure Land pool overlooking the Galle paddy fields",
});

// Server component: fetch the Accommodation page content from Tina at build
// time (statically prerendered), then hand it to the client component that
// renders the page and powers click-on-the-page visual editing via useTina.
export default async function Accommodation() {
  const res = await client.queries.accommodation({ relativePath: "accommodation.json" });
  return (
    <>
      <JsonLd data={lodgingBusinessLd()} />
      <AccommodationClient
        data={res.data}
        query={res.query}
        variables={res.variables}
      />
    </>
  );
}
