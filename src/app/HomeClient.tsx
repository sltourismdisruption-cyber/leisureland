"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import Hero from "@/components/sections/Hero";
import VideoWatch from "@/components/sections/VideoWatch";
import TheDay from "@/components/sections/TheDay";
import SectionEdge from "@/components/SectionEdge";
import Activities from "@/components/sections/Activities";
import Food from "@/components/sections/Food";
import Stay from "@/components/sections/Stay";
import GettingHere from "@/components/sections/GettingHere";
import Corporate from "@/components/sections/Corporate";
import Faq from "@/components/sections/Faq";
import Reviews from "@/components/sections/Reviews";
import FinalCta from "@/components/sections/FinalCta";
import type { ImgField } from "@/lib/constants";
import type { HomeQuery } from "../../tina/__generated__/types";

/*
  Phase 5 (TinaCMS): every IMAGE on the homepage comes from
  content/pages/home.json via useTina (editable click-on-the-page). All copy
  stays in code (the section components + constants). Hero and a few summary
  tiles are clean placeholders awaiting the Home shoot (see PHOTOS_NEEDED.md).

  Band order, every transition separated by the irregular wavy edge
  (hero and final carry their own overlaid edges over the photos):
  hero(photo) > watch(canopy) > day(card) > acts(canopy) > food(mist) > stay(card) >
  getting-here(mist) > corporate(mist-deep) > faq(card) >
  final(photo) > footer via treeline
*/

export default function HomeClient(props: {
  data: HomeQuery;
  query: string;
  variables: object;
}) {
  const { data } = useTina(props);
  const d = data.home;

  // Build one image slot for a list field item: its current path (empty string
  // → clean placeholder) plus the visual-editing handle for that index.
  const item = (
    field: "activitiesTiles" | "foodDetails" | "stayRooms" | "stayExperiences",
    arr: (string | null)[] | null | undefined,
    i: number,
  ): ImgField => ({
    src: arr?.[i] ?? undefined,
    tinaField: tinaField(d, field, i),
  });

  return (
    <>
      <Hero src={d.heroImage ?? undefined} tinaField={tinaField(d, "heroImage")} />
      <VideoWatch videoId={d.videoId ?? undefined} tinaField={tinaField(d, "videoId")} />
      <SectionEdge from="canopy" to="card" />
      <TheDay />
      <SectionEdge from="card" to="canopy" />
      <Activities
        spotlight={{ src: d.activitiesSpotlight ?? undefined, tinaField: tinaField(d, "activitiesSpotlight") }}
        tiles={[0, 1, 2, 3, 4, 5].map((i) => item("activitiesTiles", d.activitiesTiles, i))}
      />
      <SectionEdge from="canopy" to="mist" />
      <Food
        hero={{ src: d.foodHero ?? undefined, tinaField: tinaField(d, "foodHero") }}
        details={[0, 1, 2].map((i) => item("foodDetails", d.foodDetails, i))}
      />
      <SectionEdge from="mist" to="card" />
      <Stay
        roomImgs={[0, 1, 2].map((i) => item("stayRooms", d.stayRooms, i))}
        experienceImgs={[0, 1, 2, 3].map((i) => item("stayExperiences", d.stayExperiences, i))}
      />
      <SectionEdge from="card" to="mist" />
      <GettingHere />
      <SectionEdge from="mist" to="mistDeep" />
      <Corporate />
      <SectionEdge from="mistDeep" to="card" />
      <Faq />
      <Reviews />
      <FinalCta src={d.ctaImage ?? undefined} tinaField={tinaField(d, "ctaImage")} />
    </>
  );
}
