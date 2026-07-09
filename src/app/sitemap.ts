import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * XML sitemap (SEO Plan doc 09, Phase 4). Lists the real public pages in their
 * canonical trailing-slash form (matches `trailingSlash: true` and the
 * per-page canonicals). The Tina admin route (/admin) is intentionally excluded.
 * Served at /sitemap.xml and referenced from robots.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/day-outing/", priority: 0.9 },
    { path: "/accommodation/", priority: 0.9 },
    { path: "/food/", priority: 0.8 },
    { path: "/events/", priority: 0.6 },
    { path: "/our-story/", priority: 0.6 },
  ];
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
