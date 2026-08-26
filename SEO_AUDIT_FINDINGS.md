# Leisure Land — SEO Audit Findings (Phase 0)

> **Read-only baseline.** No code was changed this session, per the Phase 0 handoff in
> [docs/09_Leisure_Land_SEO_Plan.md](docs/09_Leisure_Land_SEO_Plan.md). Ran the
> `searchfit-seo:seo-audit` and `searchfit-seo:technical-seo` skill frameworks against the repo.
>
> **Stack:** Next.js 16.2.7 (App Router), React 19, TinaCMS, deployed to Vercel (dynamic).
> **Config:** `trailingSlash: true`, `images: { unoptimized: true }`, `basePath` env-driven (empty on Vercel).
> **Scope:** 6 public routes — `/`, `/day-outing`, `/accommodation`, `/food`, `/our-story`, `/events` (plus `/admin` Tina route, excluded).

---

## Scores (SearchFit rubric)

| Area | Score | One-line |
|------|-------|----------|
| On-page meta | 58/100 | Titles/descriptions exist and are on-brand, but no OG, no canonical, several over length |
| Crawlability | 35/100 | No sitemap, no robots.txt |
| Indexation / migration | 30/100 | No 301 redirects — old ranking URLs will 404 at go-live |
| Performance / CWV | 45/100 | Images unoptimized, hero LCP image lazy-loaded |
| Structured data | 0/100 | No JSON-LD anywhere |
| Mobile / a11y | 80/100 | Responsive, skip-link, `lang`, `font-display: swap` all good |
| **Overall** | **~48/100** | Solid content foundation; SEO plumbing largely absent |

---

## 1. Existing meta / OG tags per page

Only `title` and `description` are set anywhere. **No page has Open Graph, Twitter Card, or canonical tags. There is no `metadataBase`.**

| Page | File | Title (len) | Desc (len) | OG | Twitter | Canonical |
|------|------|-------------|-----------|----|---------|-----------|
| Home | `src/app/page.tsx` | *(none — inherits root)* | *(inherits root)* | ❌ | ❌ | ❌ |
| Root layout (applies to Home) | `src/app/layout.tsx:33` | 73 ⚠️>60 | 121 ⚠️<150 | ❌ | ❌ | ❌ |
| Day Outing | `src/app/day-outing/page.tsx:5` | 59 ✅ | 153 ✅ | ❌ | ❌ | ❌ |
| Accommodation | `src/app/accommodation/page.tsx:5` | 58 ✅ | 181 ⚠️>160 | ❌ | ❌ | ❌ |
| Food | `src/app/food/page.tsx:5` | 55 ✅ | 173 ⚠️>160 | ❌ | ❌ | ❌ |
| Our Story | `src/app/our-story/page.tsx:5` | 45 ✅ | 170 ⚠️>160 | ❌ | ❌ | ❌ |
| Events | `src/app/events/page.tsx:5` | 62 ⚠️>60 | 188 ⚠️>160 | ❌ | ❌ | ❌ |

**Notes**
- **Home has no `metadata` export** — it falls back to the root layout's title/description. That title is generic-length and the description is short (121 chars). Home needs its own metadata block.
- Titles/descriptions are unique per subpage and read on-brand (immersed/nature/authentic; no "luxury/premium", no "foreigner"). ✅
- 4 of 6 descriptions exceed Google's ~160-char display limit and will be truncated in the SERP. Two titles exceed 60 chars.
- `<html lang="en">` is set (`layout.tsx:44`). ✅ No explicit `viewport` export, but Next.js injects the default responsive viewport meta. ✅

---

## 2. Sitemap / robots status

- **No `app/sitemap.ts` and no `public/sitemap.xml`.** ❌ — search engines have no URL manifest.
- **No `app/robots.ts` and no `public/robots.txt`.** ❌ — no crawl directives, no sitemap pointer.
- Nothing named robots/sitemap has ever been git-tracked.
- A stale static export directory `out/` exists (from a prior GitHub Pages build) and also contains no robots/sitemap. It should **not** ship on Vercel — confirm it's ignored/unused so no stale `404.html` or old assets leak.
- **No `noindex` / `disallow-all` found anywhere** — good, nothing is accidentally blocking indexing (the Phase 4 staging-carryover risk is currently clean).

---

## 3. Core Web Vitals / performance flags

| Flag | Evidence | Impact |
|------|----------|--------|
| **Hero LCP image is lazy-loaded** ⚠️ HIGH | `src/components/Shot.tsx:26` renders every photo as `<img loading="lazy">`, including the homepage hero (`Hero.tsx`) and each page hero (`PageHero.tsx`) | The Largest Contentful Paint element is deferred → slow LCP. Hero images should be eager with `fetchPriority="high"`. |
| **All images unoptimized** ⚠️ HIGH | `next.config.ts` sets `images: { unoptimized: true }`; **zero `next/image` usage** in the codebase (all raw `<img>`) | No WebP/AVIF, no responsive `srcset`, no automatic sizing. Large raster hero shots ship full-size to mobile. |
| **No width/height on images** ⚠️ MEDIUM | `<img>` in `Shot.tsx` has no dimensions | Layout shift risk (CLS) as images load. |
| **3 web font families** ⚠️ LOW | `layout.tsx` loads Young Serif, Albert Sans (4 weights), Kalam via `next/font` | Mitigated by `display: "swap"` ✅ and self-hosting via next/font, but still ~6 font files. |
| **Blocking boot script** ⚠️ LOW | `layout.tsx` injects a `beforeInteractive` script + `Preloader` curtain (6s watchdog) | Adds a small pre-hydration gate; watchdog prevents a stranded blank page. Acceptable but worth measuring. |
| Client-component footprint | 14 of 45 `.tsx` files are `"use client"`; all 6 pages are **server components** fetching Tina | Reasonable — landing pages aren't over-clientized. ✅ |

> CWV numbers above are **static-analysis inferences**, not field data. Confirm with PageSpeed Insights / Lighthouse against the deployed Vercel URL once live (Phase 0 can't measure real LCP/INP/CLS from source alone).

---

## 4. Broken links

- **Internal links all resolve.** Literal hrefs found: `/`, `/accommodation`, `/day-outing`, `/events`, `/food`; nav also links `/our-story` via the `NAV_LINKS` constant (`src/lib/constants.ts`). Every target maps to a real route. ✅ No broken internal links detected in source.
- **No `middleware.ts` and no `redirects()` in `next.config.ts`.** ❌ **This is the migration landmine flagged in the plan.** When `leisureland.lk` flips to this build, old ranking URLs (`/dayouting/`, `/about/`, gallery/contact, etc.) will hard-404. This is Phase 1 and must be fixed before or at go-live. (Old-URL inventory must come from Google Search Console — do not guess.)
- `trailingSlash: true` means the canonical form of every URL is the **trailing-slash** variant (e.g. `/day-outing/`). Any future canonicals/redirects/sitemap entries must use that form consistently.
- External links (WhatsApp `wa.me`, socials) not fetch-verified this session (read-only, offline).

---

## 5. Structured data

- **No JSON-LD / schema markup anywhere.** ❌ No `application/ld+json`, no `LodgingBusiness`, `TouristAttraction`, `Restaurant`, or `LocalBusiness`. This is the entire Phase 3 lever and is currently absent.

---

## 6. Headings & images (quick checks)

- **Exactly one `<h1>` per page.** ✅ Home uses `Hero.tsx` (1 H1); the four deep pages use `PageHero.tsx` (1 H1). No duplicate or missing H1s.
- **Image `alt` text is empty.** All photos render through `Shot.tsx` with hardcoded `alt=""` (treated as decorative). The 5 literal `<img>` tags technically "have" an alt, but content/hero imagery has **no descriptive alt** — an SEO + accessibility miss. Descriptive alt should be added for meaningful images (hero, rooms, food, activities).

---

## 7. Prioritized fix list

### 🔴 Critical (blocks go-live / biggest impact)
1. **301 redirects for old→new URLs** (Phase 1) — `next.config.ts redirects()`, including trailing-slash variants. Pull the real old-URL list from GSC first. *Without this, existing rankings 404 on launch.*
2. **Add sitemap + robots** (Phase 4) — `app/sitemap.ts` listing the 6 real pages, `app/robots.ts` allowing crawl and pointing to the sitemap. Confirm no staging `noindex` carries over.

### 🟠 High (quick wins, do early)
3. **Set `metadataBase`** to `https://leisureland.lk` in the root layout so all OG/canonical URLs resolve absolutely. (One line; unblocks #4–5.)
4. **Add Open Graph + Twitter cards** to all pages (`og:title/description/image/url/type`, `twitter:card=summary_large_image`). Traffic is social-first — this is Phase 2's main payoff. Needs 1200×630 hero images per page (no faces).
5. **Add a `metadata` export to Home** (`src/app/page.tsx`) — it currently inherits the generic root title.
6. **Fix hero LCP loading** — hero images should be `loading="eager"` + `fetchPriority="high"`, not lazy (`Shot.tsx` / hero callers).

### 🟡 Medium
7. **Self-referencing canonicals** per page (trailing-slash form) — prevents duplicate-URL dilution.
8. **JSON-LD structured data** (Phase 3) — `LodgingBusiness`, `TouristAttraction`/`LocalBusiness`, `Restaurant`. Keep `aggregateRating` disabled until real first-party reviews exist (SD2).
9. **Trim over-length meta** — descriptions on Accommodation/Food/Our Story/Events (≤160), titles on Events + Home (≤60).
10. **Image optimization** — adopt `next/image` (or ship pre-generated WebP/AVIF at correct sizes) and add width/height to cut CLS. Reconsider `images: { unoptimized: true }` now that hosting is Vercel.

### 🟢 Low / nice-to-have
11. **Descriptive `alt`** on meaningful images (hero, rooms, food, activities).
12. **IndexNow** key file + ping on publish (Phase 4, cheap).
13. **Confirm stale `out/` export** is not deployed on Vercel.
14. **Publish opening hours on-page** (already in `constants.ts`; a reviewer asked for it — also feeds Phase 3 schema).

---

## 8. Off-code (parallel track — founder, not code)
Flagged in the plan and confirmed relevant by this audit: verify domain in **Google Search Console** + submit sitemap (also the source for the Phase 1 old-URL list); **Bing Webmaster**; fix **NAP / brand-name consistency** ("Leisure Land" vs "Leisure Land Villas", differing emails/addresses across platforms); complete **Google Business Profile**.

---

## What's already good ✅
- Every page is a server component; one H1 each; `lang="en"`; skip-to-content link; `font-display: swap`; on-brand, unique subpage copy; no accidental `noindex`; clean internal linking; sensible URL slugs.

*Baseline captured 2026-07-09. Next: Phase 1 (migration redirects) — the highest-impact task. Field CWV data should be measured against the live Vercel deployment with Lighthouse/PageSpeed Insights.*
