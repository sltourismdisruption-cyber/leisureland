import type { NextConfig } from "next";

// Hosting moved to Vercel (dynamic) so the TinaCMS admin route can run.
// basePath stays env-driven (empty on Vercel) in case a GitHub Pages build is
// ever run again with NEXT_PUBLIC_BASE_PATH=/leisureland.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
