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
import { REVIEWS_ENABLED, type ImgField } from "@/lib/constants";
import type { HomeQuery } from "../../tina/__generated__/types";

/*
  Phase 5 (TinaCMS): every IMAGE on the homepage comes from
  content/pages/home.json via useTina (editable click-on-the-page). All copy
  stays in code (the section components + constants). Hero and a few summary
  tiles are clean placeholders awaiting the Home shoot (see PHOTOS_NEEDED.md).

  Band order, every transition separated by the irregular wavy edge
  (hero and final carry their own overlaid edges over the photos):
  hero(photo) > watch(canopy) > day(card) > stay(mist) > acts(canopy) > food(mist) >
  getting-here(card) > corporate(mist-deep) > faq(card) > reviews(mist) >
  final(photo) > footer via treeline

  Stay moved up (right after day, before acts) so the 10 rooms surface much
  earlier in the scroll — was 6th of 11 sections, now 4th. No two adjacent
  bands share a tone: stay is mist (not card, so it stands apart from "day"
  right above it) and getting-here is explicit card (not the mist body
  default, so it stands apart from food right above it). Reviews is mist too
  (not "day"/card, so it stands apart from faq); when REVIEWS_ENABLED is off
  Reviews doesn't render, so its edge and FinalCta's edgeFill fall back to
  card to match faq directly.
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
      <SectionEdge from="card" to="mist" />
      <Stay
        roomImgs={[0, 1, 2].map((i) => item("stayRooms", d.stayRooms, i))}
        experienceImgs={[0, 1, 2, 3].map((i) => item("stayExperiences", d.stayExperiences, i))}
      />
      <SectionEdge from="mist" to="canopy" />
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
      <GettingHere />
      <SectionEdge from="card" to="mistDeep" />
      <Corporate />
      <SectionEdge from="mistDeep" to="card" />
      <Faq />
      {REVIEWS_ENABLED && <SectionEdge from="card" to="mist" />}
      <Reviews />
      <FinalCta
        src={d.ctaImage ?? undefined}
        tinaField={tinaField(d, "ctaImage")}
        edgeFill={REVIEWS_ENABLED ? "mist" : "card"}
      />
    </>
  );
}
