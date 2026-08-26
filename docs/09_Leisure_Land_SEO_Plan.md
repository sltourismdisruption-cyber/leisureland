# Leisure Land — SEO Plan & Claude Code Handoff (Doc 09)

> **How to use:** Run these phases **in order**, one Claude Code session each. Pause and review after every phase before merging — same as the build docs. Each phase has its own paste-ready handoff prompt at the end of its section.
>
> **CRITICAL RULES:**
> - **Phase 1 (redirects) MUST be done before or at go-live.** The live site currently ranks on OLD urls (`/dayouting/`, `/about/`, etc.). Swapping to the new build without 301 redirects will 404 those pages and lose existing rankings. This is the single most important task in this doc.
> - **Never invent the old URL list.** Pull the real inventory from Google Search Console (Pages report) or a crawl of the current live site.
> - **Brand voice applies to all meta copy:** no "luxury/premium/VIP", never "foreigner", no cook-your-own. Words to lean on: immersed, jungle, paddy, nature, real, authentic.
> - Do not break the sticky WhatsApp button or any existing functionality.
> - Values marked `[CONFIRM]` must be verified by the founder before shipping.

---

## Context — why this plan (read once)

The site is **already indexed** and has a **strong off-site footprint** (Facebook 65k+ / ~984 reviews, Instagram 37k+, TripAdvisor, Trip.com, Booking, Wanderlog). So the generic "nobody knows you exist" advice does **not** apply. The real priorities for Leisure Land are, in order of impact:

1. **Don't lose existing SEO during the Vercel migration** (redirects) — Phase 1.
2. **Make shared links look great** (Open Graph) — traffic is social-first — Phase 2.
3. **Win rich results** (structured data + review stars) — Phase 3.
4. **Baseline plumbing** (sitemap, robots, IndexNow) — Phase 4.
5. **Off-code trust/consistency** (GSC, Bing, NAP, Google Business Profile) — parallel track.

The reel's five items are covered inside Phases 2–4 + the parallel track — done properly for *this* site.

---

# PHASE 0 — AUDIT (baseline, no changes)

Goal: get an accurate picture before touching anything. **Output only — do not edit code this phase.**

## A1. Run the SEO audit
- Use the **`searchfit-seo:seo-audit`** skill against the Next.js repo.
- Use **`searchfit-seo:technical-seo`** for crawlability, page speed, and Core Web Vitals.

## A2. Produce a findings summary
- What meta tags / OG tags already exist per page.
- Current sitemap / robots.txt status.
- Page-speed / CWV flags.
- Any broken internal links.
- A prioritized fix list (quick wins vs. bigger jobs).

### HANDOFF PROMPT — Phase 0 (paste into Claude Code)
```
Read 09_Leisure_Land_SEO_Plan.md. Do PHASE 0 only.
Run the searchfit-seo seo-audit and searchfit-seo technical-seo skills
against this repo. Produce a written findings summary: existing meta/OG
tags per page, sitemap/robots status, Core Web Vitals flags, broken
links, and a prioritized fix list. DO NOT change any code this session —
this is a read-only audit. Save the summary as SEO_AUDIT_FINDINGS.md.
```

---

# PHASE 1 — MIGRATION SAFETY NET (highest impact)

Goal: when leisureland.lk flips to the new Vercel build, no old URL dies.

## M1. Old-URL inventory — CONFIRMED ✅
Source: the live site is a **Django** app; its URLconf was captured directly on 2026-07-09 (authoritative — not a guess). Public content pages:
- `/` — home
- `/about/`
- `/dayouting/`
- `/gallery/`
- `/accomodation/` — ⚠️ **misspelled in the live site (one "m")**. This is the real indexed URL. The redirect source MUST use this exact spelling.
- `/contact/`

Non-content, leave alone (no redirect): `/admin/`, `/images/...` (Django media route).

> Note: the old site runs with `DEBUG=True` in production (it leaked this routing table publicly). No fix needed on that codebase — ensure the Django site is fully shut down at domain cutover so the issue retires with it.

## M2. Map old → new — CONFIRMED
Both sites use trailing slashes (Django `APPEND_SLASH`; new build `trailingSlash: true`), so targets are trailing-slash form.

| Old URL (301 from) | New URL (301 to) | Note |
|--------------------|------------------|------|
| `/dayouting/` | `/day-outing/` | |
| `/about/` | `/our-story/` | about ≈ our story |
| `/accomodation/` | `/accommodation/` | ⚠️ source keeps the one-"m" typo; target is correct spelling |
| `/gallery/` | `/` | no gallery page on new site — home is the safe default (`[DECIDE]` if founder prefers `/day-outing/`) |
| `/contact/` | `/` | no contact page — WhatsApp is global |
| `/` | — | unchanged, no redirect |

New pages with no old equivalent — **do not redirect**, they get discovered via the sitemap: `/food/`, `/events/` (and `/our-story/` is a redirect *target*, not a source).

## M3. Implement 301 redirects
- Add permanent (301) redirects in **`next.config.ts`** via the `redirects()` function. (Audit confirmed: no `redirects()` and no `middleware.ts` exist today.)
- Ensure BOTH the trailing-slash and non-trailing-slash form of each old URL lands on the correct new page — no 404s, no redirect chains.

## M4. Verify no dead ends
- Run **`searchfit-seo:broken-links`** after redirects are in.
- Confirm all five old URLs 301 cleanly to a live new page. Zero 404s.

### HANDOFF PROMPT — Phase 1 (paste into Claude Code)
```
Read 09_Leisure_Land_SEO_Plan.md. Do PHASE 1 only (migration redirects).
The old-URL inventory is CONFIRMED in M1 — do NOT re-ask or re-guess it.
Add 301 redirects in next.config.ts via redirects() (none exist today;
trailingSlash is true, so use trailing-slash targets):
  /dayouting/    -> /day-outing/
  /about/        -> /our-story/
  /accomodation/ -> /accommodation/   (keep the old one-"m" spelling on the source — it is a typo in the live site, not a mistake)
  /gallery/      -> /
  /contact/      -> /
Ensure both trailing-slash and non-trailing-slash forms of each old URL
resolve to the new page with no 404 and no redirect chain. Do NOT redirect
/, /food/, /our-story/, or /events/. Leave /admin and /images untouched.
Then run searchfit-seo broken-links and confirm zero 404s on the five old
URLs. Show me the final next.config.ts redirect block and the broken-links
output before merging. Pause for my review.
```

---

# PHASE 2 — ON-PAGE + OPEN GRAPH

Goal: unique, brand-voice titles/descriptions per page + link previews that look great when shared to WhatsApp/Instagram/Facebook.

## P1. Per-page metadata (Next.js Metadata API)
- Unique `title` (≤60 chars) and `meta description` (≤155 chars) per page.
- **Draft starting copy (review/edit — not final):**

| Page | Title (draft) | Description (draft) |
|------|---------------|---------------------|
| Home | Leisure Land \| Nature Water Park & Stay in Galle | A nature-immersed water park, jungle adventures and boutique rooms in the paddy fields of Galle. Day outings and stays — message us on WhatsApp. |
| Day Outing | Day Outing in Galle \| Water Park + Sri Lankan Buffet | A full day of water slides, rope swings and jungle activities plus a real Sri Lankan lunch buffet. 10 min from the Galle exit. Book on WhatsApp. |
| Accommodation | Stay in Galle \| Nature Rooms & A-Frame Villa | Ten rooms tucked into the jungle — paddy and pool views, a private-jacuzzi villa, full water park access with every stay. Book direct & save. |
| Food | From Our Kitchen \| Real Sri Lankan Food, Galle | No artificial flavours — real ingredients, village recipes. One buffet, your way: spicy or mild. À la carte all day at Leisure Land. |
| Our Story | The Land \| Our Story \| Leisure Land Galle | How childhood adventures in Sri Lanka's paddy fields and jungles became Leisure Land — a place to escape, explore and enjoy near Galle. |

- Optional: run **`searchfit-seo:on-page-seo`** per page to sanity-check headings (one H1 per page), keyword focus, and image alt text.

## P2. Open Graph + Twitter cards (all pages)
- Add `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, plus `twitter:card` (summary_large_image).
- `og:image`: one strong 1200×630 image per page (hero shot). `[ASSET]` — confirm which image per page. **Brand rule: never faces.**
- Set `metadataBase` in Next.js so OG/canonical URLs resolve to `https://leisureland.lk`.

## P3. Canonicals
- Add a self-referencing `canonical` tag per page to prevent duplicate-URL issues (esp. trailing slash).

### HANDOFF PROMPT — Phase 2 (paste into Claude Code)
```
Read 09_Leisure_Land_SEO_Plan.md. Do PHASE 2 only (on-page + Open Graph).
Using the Next.js Metadata API, set unique title + meta description per
page from the P1 draft table (treat as drafts — flag anything that reads
off-brand: no luxury/premium, never "foreigner"). Add full Open Graph +
Twitter card tags, set metadataBase to https://leisureland.lk, and add
self-referencing canonicals. Use placeholder og:image paths where the
final image isn't chosen yet and list them for me. Optionally run
searchfit-seo on-page-seo to check headings and alt text. Do one page,
show me the result, then continue page by page. Pause for review.
```

---

# PHASE 3 — STRUCTURED DATA (rich results)

Goal: earn rich cards / star ratings in Google. Big lever for a tourism business.

## SD1. Add JSON-LD (via `searchfit-seo:schema-markup`)
- **`LodgingBusiness`** — for accommodation (rooms, amenities, check-in/out).
- **`TouristAttraction`** or **`LocalBusiness`** — for the water park / day outing.
- **`Restaurant`** — for the food page.
- Shared values (mark `[CONFIRM]` — see NAP note in the parallel track):
  - name: **Leisure Land** (pick ONE canonical name — see OFF-3)
  - address `[CONFIRM exact wording]`
  - geo lat/long `[CONFIRM]`
  - telephone: +94 77 757 2785
  - openingHours: 9 AM–10 PM daily `[CONFIRM]`
  - sameAs: Facebook, Instagram, TripAdvisor URLs

## SD2. aggregateRating — do this the safe way
- ⚠️ Do **not** paste the 984 Facebook / TripAdvisor review numbers into your site's schema. Google's guidelines only allow `aggregateRating` for reviews genuinely collected **on your own site**. Faking it risks a manual penalty.
- Correct path: collect first-party reviews on-site (ties into the QR-code review plan in the Pre-Launch Checklist, Track 1), display them, THEN add `aggregateRating` reflecting those. Leave the markup ready but disabled until real on-site reviews exist.

### HANDOFF PROMPT — Phase 3 (paste into Claude Code)
```
Read 09_Leisure_Land_SEO_Plan.md. Do PHASE 3 only (structured data).
Use the searchfit-seo schema-markup skill to add JSON-LD: LodgingBusiness
(accommodation), TouristAttraction/LocalBusiness (park/day outing), and
Restaurant (food). Use the SD1 values and mark every [CONFIRM] field so I
can verify — do NOT invent an address or coordinates. Add sameAs links to
our social profiles. Prepare aggregateRating markup but leave it commented
out / disabled per SD2 (no scraped review counts). Validate the JSON-LD
and show me before merging. Pause for review.
```

---

# PHASE 4 — SITEMAP · ROBOTS · INDEXNOW (plumbing)

Goal: fast, correct crawling. Low effort, do once.

## X1. Sitemap + robots (Next.js file conventions)
- Generate `app/sitemap.ts` (or `sitemap.xml`) listing all real pages.
- Generate `app/robots.ts` (or `robots.txt`) — allow crawling, point to the sitemap.
- ⚠️ Confirm the launch config does **not** carry over any "disallow all" / noindex from staging.

## X2. IndexNow
- Add IndexNow (works with Bing + others) so new/changed pages ping search engines instantly. Generate the key file and wire a ping on publish. Low priority but cheap.

### HANDOFF PROMPT — Phase 4 (paste into Claude Code)
```
Read 09_Leisure_Land_SEO_Plan.md. Do PHASE 4 only (sitemap/robots/IndexNow).
Add a Next.js sitemap covering all real pages and a robots file that allows
crawling and references the sitemap. Double-check there is no leftover
noindex/disallow-all from staging. Set up IndexNow with a key file and a
ping on publish. Show me the generated sitemap and robots output. Pause.
```

---

# PARALLEL TRACK — OFF-CODE (founder does these, not Claude Code)

These matter as much as the code. Do alongside the phases.

- **OFF-1. Google Search Console** — verify the domain, submit the sitemap (from Phase 4), watch the Pages/Coverage report. Use its Pages report to build the Phase 1 old-URL list.
- **OFF-2. Bing Webmaster Tools** — verify + submit sitemap (you can import straight from GSC). ~10 min. Low effort, marginal but free.
- **OFF-3. Fix NAP + brand-name consistency (higher impact than most code work):**
  - Pick ONE canonical business name and use it everywhere. Listings currently show both "Leisure Land" and "Leisure Land Villas".
  - Standardize the exact address + one contact email across Google Business, Facebook, TripAdvisor, Trip.com, Booking, Instagram, and the website. (Right now emails/addresses differ across platforms.)
- **OFF-4. Google Business Profile** — complete it fully per Pre-Launch Checklist Track 1. This is the biggest local-search lever for tourists searching "things to do in Galle."
- **OFF-5. Publish opening hours on the site** — a reviewer explicitly asked for this. Quick win, also feeds the schema in Phase 3.

---

# PHASE 5 — CONTENT & DISCOVERY (post-launch, later)

Once the above is solid and the site is live, level up with:
- **`searchfit-seo:keyword-clustering`** + **`searchfit-seo:content-strategy`** — target real search intent ("water park Galle", "family things to do Galle", "day outing near Galle").
- **`searchfit-seo:internal-linking`** — tighten links between pages.
- **`searchfit-seo:ai-visibility`** — how Leisure Land shows up in ChatGPT/Claude/Perplexity answers (growing channel for trip planning).

Keep these for a separate planning session after launch.

---

# OPEN / ASSETS NEEDED
- [x] ~~Old-URL inventory for Phase 1~~ — **CONFIRMED** from live Django URLconf (see M1)
- [ ] Confirm `/gallery/` redirect target: `/` (default) or `/day-outing/`
- [ ] Ensure old Django site is shut down at domain cutover (DEBUG=True is live on it)
- [ ] `og:image` (1200×630) chosen per page — no faces
- [ ] Confirmed canonical business name (Leisure Land vs Leisure Land Villas)
- [ ] Confirmed exact address + geo coordinates + opening hours (for schema)
- [ ] Review/approve the P1 meta title & description drafts
- [ ] First-party on-site reviews live before enabling aggregateRating (SD2)
