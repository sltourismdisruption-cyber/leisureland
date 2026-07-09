/**
 * Leisure Land — shared SEO metadata builder (SEO Plan doc 09, Phase 2).
 *
 * One helper so every page emits a consistent set of tags: title, description,
 * a self-referencing canonical (trailing-slash form, matching `trailingSlash:
 * true`), Open Graph, and a Twitter summary_large_image card. `metadataBase`
 * lives in the root layout, so the relative `path`/`image` values below resolve
 * to absolute https://leisureland.lk URLs automatically.
 */
import type { Metadata } from "next";

export const SITE_URL = "https://leisureland.lk";
export const SITE_NAME = "Leisure Land";

// Interim sitewide share image: a landscape, no-faces hero (brand rule: never
// faces on share images). Pages pass their own hero where it's suitable.
// TODO [ASSET]: replace with a purpose-made 1200×630 no-faces share image.
export const DEFAULT_OG_IMAGE =
  "/images/home/hero/pools-jungle-landscape-ground.jpg";

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
}: {
  /** ≤60 chars. */
  title: string;
  /** ≤160 chars. */
  description: string;
  /** Canonical path in trailing-slash form, e.g. "/day-outing/". */
  path: string;
  /** Share image path; defaults to the sitewide no-faces image. */
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      // Dimensions intentionally omitted while interim images aren't 1200×630;
      // add width/height once the real share images land.
      images: [{ url: image, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
