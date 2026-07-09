#!/usr/bin/env node
/**
 * IndexNow ping (SEO Plan doc 09, Phase 4 X2).
 *
 * Submits the site's public URLs to IndexNow (Bing, Yandex, and partners) so
 * new/changed pages get discovered fast. Run it AFTER a production publish:
 *
 *   node scripts/indexnow-ping.mjs           # ping all pages below
 *   npm run seo:indexnow                     # same, via package.json
 *
 * Deliberately NOT wired into `next build`: that would ping on every preview
 * build and could fail a deploy on a transient network error. Wire it to real
 * publishes instead — e.g. a Vercel Deploy Hook or a GitHub Action step that
 * runs this on pushes to the production branch.
 *
 * The key is verified via the public key file:
 *   https://leisureland.lk/8dd919a46de8ef9fc9019955db038f94.txt
 * (that file lives in /public and must stay reachable, or IndexNow rejects pings).
 */

const HOST = "leisureland.lk";
const KEY = "8dd919a46de8ef9fc9019955db038f94";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Keep in sync with src/app/sitemap.ts (canonical trailing-slash URLs).
const PATHS = [
  "/",
  "/day-outing/",
  "/accommodation/",
  "/food/",
  "/events/",
  "/our-story/",
];

const urlList = PATHS.map((p) => `https://${HOST}${p}`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// IndexNow returns 200 or 202 on success.
if (res.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URLs (HTTP ${res.status}).`);
} else {
  const text = await res.text().catch(() => "");
  console.error(`IndexNow: failed (HTTP ${res.status}). ${text}`);
  process.exit(1);
}
