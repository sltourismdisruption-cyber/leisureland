import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Group Events & Corporate Experiences · Leisure Land near Galle",
  description:
    "Corporate day outings, outbound training, school excursions, birthdays and private celebrations at Leisure Land, 10 minutes from Galle. Tell us your group and dates and we'll help plan it.",
};

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
