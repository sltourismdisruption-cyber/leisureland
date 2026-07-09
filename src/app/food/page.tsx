import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import FoodClient from "./FoodClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { restaurantLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "From Our Kitchen | Real Sri Lankan Food, Galle",
  description:
    "No artificial flavors — real ingredients, village recipes. One buffet, your way: spicy or mild. À la carte all day at Leisure Land.",
  path: "/food/",
  // No hero shot on this page and real food photos aren't shot yet; use the
  // existing Sri Lankan buffet spread (landscape, no faces) as a topical
  // interim. [ASSET] still needs proper 1200×630 food photography.
  image: "/images/sri-lankan-buffet-spread_2.jpg",
  imageAlt: "A Sri Lankan rice and curry buffet spread at Leisure Land",
});

// Server component: fetch the Food page content from Tina at build time
// (statically prerendered), then hand it to the client component that renders
// the page and powers click-on-the-page visual editing via useTina.
export default async function Food() {
  const res = await client.queries.food({ relativePath: "food.json" });
  return (
    <>
      <JsonLd data={restaurantLd()} />
      <FoodClient
        data={res.data}
        query={res.query}
        variables={res.variables}
      />
    </>
  );
}
