import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import OurStoryClient from "./OurStoryClient";

export const metadata: Metadata = {
  title: "Our Story · Leisure Land, the Land near Galle",
  description:
    "A nature-inspired water park born from the way Sri Lankans used to play: where it began, the stay and play ethos, and the traditions we keep alive, 10 minutes from Galle.",
};

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
