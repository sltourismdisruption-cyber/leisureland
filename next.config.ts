import type { NextConfig } from "next";

// GitHub Pages serves the site under /leisureland, so the deploy workflow sets
// NEXT_PUBLIC_BASE_PATH=/leisureland. Local dev keeps it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Every route exports as folder/index.html (e.g. /day-outing/index.html)
  // so GitHub Pages serves the new pages without any rewrite rules.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
