import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import FoodClient from "./FoodClient";

export const metadata: Metadata = {
  title: "From Our Kitchen · Authentic Sri Lankan Food near Galle",
  description:
    "Authentic Sri Lankan food cooked from scratch with zero artificial flavors, 10 minutes from Galle. Spicy or mild, your choice. Vegetarian, vegan and gluten-free all covered.",
};

// Server component: fetch the Food page content from Tina at build time
// (statically prerendered), then hand it to the client component that renders
// the page and powers click-on-the-page visual editing via useTina.
export default async function Food() {
  const res = await client.queries.food({ relativePath: "food.json" });
  return (
    <FoodClient
      data={res.data}
      query={res.query}
      variables={res.variables}
    />
  );
}
