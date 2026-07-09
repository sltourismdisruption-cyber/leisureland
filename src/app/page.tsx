import type { Metadata } from "next";
import client from "../../tina/__generated__/client";
import HomeClient from "./HomeClient";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { organizationLd, webSiteLd } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Leisure Land | Nature Water Park & Stay in Galle",
  description:
    "A nature-immersed water park, jungle adventures and rooms tucked in the paddy fields of Galle. Day outings and stays — message us on WhatsApp.",
  path: "/",
  image: "/images/home/hero/pools-jungle-landscape-ground.jpg",
  imageAlt: "Leisure Land pools set into the Galle jungle",
});

// Server component: fetch the Home page content from Tina, then hand it to the
// client component that renders all sections and powers click-on-the-page
// visual editing via useTina. (The Galle journey rows moved to /accommodation,
// Doc 05.)
export default async function Home() {
  const res = await client.queries.home({ relativePath: "home.json" });
  return (
    <>
      <JsonLd data={[organizationLd(), webSiteLd()]} />
      <HomeClient data={res.data} query={res.query} variables={res.variables} />
    </>
  );
}
