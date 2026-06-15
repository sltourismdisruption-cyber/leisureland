import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import DayOutingClient from "./DayOutingClient";

export const metadata: Metadata = {
  title: "Your Day at Leisure Land · Water Park Day Outing near Galle",
  description:
    "One ticket, a full day: slides, waterfall pools, traditional Sri Lankan games and an all-you-can-eat buffet, 10 minutes from Galle. 4,200 LKR per person.",
};

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
