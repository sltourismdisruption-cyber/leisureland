import type { NextConfig } from "next";

// Hosting moved to Vercel (dynamic) so the TinaCMS admin route can run.
// basePath stays env-driven (empty on Vercel) in case a GitHub Pages build is
// ever run again with NEXT_PUBLIC_BASE_PATH=/leisureland.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,

  // Image optimization ON (Perf doc Phase 1, Path B). `unoptimized: true` is
  // removed AND assets.tina.io is whitelisted in the SAME change — one without
  // the other would break images or serve them raw. Tina-managed photos come
  // from the TinaCloud media CDN (assets.tina.io); whitelisting lets Vercel's
  // optimizer fetch, resize, convert to WebP/AVIF and cache them on its edge.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "assets.tina.io" }],
  },

  // MIGRATION SAFETY NET (SEO Plan doc 09, Phase 1). The live site ranks on
  // these OLD urls; when leisureland.lk flips to this build they must 301 to
  // the new routes, not 404. Destinations carry the trailing slash to match
  // `trailingSlash: true`, so the real indexed (trailing-slash) old URLs
  // resolve in a single hop. Bare/no-slash forms take one extra normalisation
  // hop first, which is accepted (the indexed URLs are the slash forms).
  // We use an explicit `statusCode: 301` (a literal permanent 301) rather than
  // `permanent: true` (which would emit 308) so the status matches the plan.
  // NOTE: `/accomodation` keeps the live site's one-"m" typo on the SOURCE on
  // purpose; the NEW route is the correctly spelled `/accommodation`.
  async redirects() {
    return [
      { source: "/dayouting", destination: "/day-outing/", statusCode: 301 },
      { source: "/about", destination: "/our-story/", statusCode: 301 },
      { source: "/accomodation", destination: "/accommodation/", statusCode: 301 },
      { source: "/gallery", destination: "/", statusCode: 301 },
      { source: "/contact", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
