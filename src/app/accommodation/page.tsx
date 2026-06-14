import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import AccommodationClient from "./AccommodationClient";

export const metadata: Metadata = {
  title: "Stay With Us · The A-Frame Villa & Family Rooms near Galle",
  description:
    "Rooms in the jungle near Galle and Unawatuna: the A-Frame Villa, family rooms with paddy and pool views, hands-on Ceylon experiences, and the whole water park included in your stay.",
};

// Server component: fetch the Accommodation page content from Tina at build
// time (statically prerendered), then hand it to the client component that
// renders the page and powers click-on-the-page visual editing via useTina.
export default async function Accommodation() {
  const res = await client.queries.accommodation({ relativePath: "accommodation.json" });
  return (
    <AccommodationClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
