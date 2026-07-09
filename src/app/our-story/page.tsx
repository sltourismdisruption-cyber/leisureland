import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import OurStoryClient from "./OurStoryClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Land | Our Story | Leisure Land Galle",
  description:
    "How childhood adventures in Sri Lanka's paddy fields and jungles became Leisure Land — a place to escape, explore and enjoy near Galle.",
  path: "/our-story/",
  // The page hero shows craft workers (faces); use the aerial "land" shot
  // (no discernible faces) which is on-brand for "The Land". [ASSET] a proper
  // 1200×630 image would still be ideal; this interim carries a photo watermark.
  image: "/images/our-story/final-cta/aerial-drone-pools-with-slide.jpg",
  imageAlt: "Aerial view of Leisure Land's jungle pools near Galle",
});

// Server component: fetch the Our Story page content from Tina, then hand it to
// the client component that renders the page and powers click-on-the-page
// visual editing via useTina.
export default async function OurStory() {
  const res = await client.queries.ourStory({ relativePath: "our-story.json" });
  return (
    <OurStoryClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
