import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { pageMetadata } from "@/lib/seo";

// No Tina collection here — the photo list is curated in GalleryClient from
// images already approved and live on the other five pages, so there's
// nothing new to click-on-the-page edit. Reclaims the old Django /gallery/
// URL (see next.config.ts — it no longer redirects) which already carried
// real search demand ("leisure land photos") that had nowhere to land.
export const metadata: Metadata = pageMetadata({
  title: "Photos | Leisure Land, Galle",
  description:
    "The water park, the rooms, the food and the jungle around it, in one place. See Leisure Land before you book.",
  path: "/gallery/",
  image: "/images/events/final-cta/aerial-topdown-pools-2019.jpg",
  imageAlt: "Aerial view of the Leisure Land pools and jungle",
});

export default function Gallery() {
  return <GalleryClient />;
}
