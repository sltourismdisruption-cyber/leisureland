import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.txt (SEO Plan doc 09, Phase 4). Allow crawling of the whole site,
 * disallow only the Tina admin route, and point crawlers at the sitemap.
 * ⚠️ No "Disallow: /" anywhere — the site must stay fully indexable at launch.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
