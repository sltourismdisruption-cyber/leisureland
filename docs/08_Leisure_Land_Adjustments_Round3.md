# 08 — Leisure Land Website Adjustments (Round 3) — Claude Code Handoff

**Source:** founder's `Website_adjustments.md`
**This doc = only the LIVE items.** Everything struck-through in the founder's file is already shipped in Docs 06 (Round 1) and 07 (Round 2) — do **not** redo those. A short "already done" reference list is at the bottom.

**Apply in order:** Global → Home → Day Outing → Stay → Food → Our Story → New Events page.
**Pause after each page so the founder can review before continuing.**
**Never invent values.** Anything not provided stays a placeholder.
**Never remove the sticky WhatsApp button from any page.**

---

## ⚠️ READ FIRST — TinaCMS safety (the site now runs Tina)

The site has TinaCMS wired in. Most page copy is **CMS-managed content**, not hardcoded JSX. Before editing:

1. **Find where each string lives.** If a piece of copy is editable in Tina, it sits in a **content file** (e.g. `content/**.json` or `.md/.mdx`) with its shape defined in the **Tina schema** (`tina/config.ts|tsx` → `schema.collections`). Edit the **content file**, not a hardcoded string in the component — otherwise Tina will overwrite your change on next edit, or the field will mismatch.
2. **Adding a new field** (e.g. the room "person/pax" value, the "Room count" label, a video URL): update **both** the Tina collection schema **and** the component that renders it, using a consistent field name. Then run Tina codegen/build so generated types regenerate.
3. **Renaming/removing a field:** never rename an existing Tina field without migrating the content value, or the content disappears from the editor. Prefer adding new + deprecating over renaming in place.
4. **New Events page:** create it as a **new Tina collection/content file** mirroring the existing page pattern (same structure as Day Outing / Food pages) so the founder can edit it in `/admin`. Don't hardcode a page that bypasses Tina if every other page is CMS-driven.
5. **After any schema change:** run the Tina build, load `/admin` locally, and confirm every existing page still opens in the editor with its content intact. Confirm `next build` passes.
6. If a change genuinely can't be done without a schema migration, **flag it and pause** rather than guessing.

---

# GLOBAL

## G1. WhatsApp default (pre-filled) messages — make each CTA context-specific
- Confirmed number everywhere: **+94 77 757 2785** → link format `https://wa.me/94777572785?text=<url-encoded message>`.
- Replace every generic/placeholder pre-filled message with a message that matches where the button sits. Suggested set (tweak wording to brand voice, keep them short):

| CTA location | Pre-filled message |
|---|---|
| Global floating button | `Hi Leisure Land! I'd like to know more about visiting.` |
| Home hero / "Book your day" | `Hi! I'd like to book a Day Outing. Can you share availability?` |
| Pool-only ticket | `Hi! I'd like info on the pool-only ticket — dates & availability.` |
| Accommodation (generic) | `Hi! I'd like rates & availability for a stay at Leisure Land.` |
| Per-room card | `Hi! I'd like rates & availability for the [ROOM NAME].` |
| Whole villa card | `Hi! I'd like to book the whole A-Frame Villa with Private Jacuzzi — rates & availability.` |
| Food / "View menu" area | `Hi! Could you share the current menu?` |
| Group Events / Corporate | `Hi! I'd like to plan a group event. Type (corporate/school/celebration): ___ · Size: ___ · Date: ___` |
| Transport help | `Hi! I'd like help arranging transport to Leisure Land.` |

- Per-room messages must inject that room's exact name (e.g. "Family Room with Paddy View").

## G2. Remove leftover dev prompts / placeholder brackets from RENDERED pages
- Sweep the whole site and remove any visible developer notes / bracketed prompts that are leaking onto the live page, e.g. `[CONFIRM] credit wording: original note said "reintroduced by National Inn"`, stray `[PRICE]`, `[COUNT]`, `[CONFIRM]`, `[ASSET]`.
- **Coconut Tree Climbing credit — DECISION NEEDED (see Decisions block):** for now, **remove the bracketed dev note and the credit line entirely** so nothing dev-facing shows. If the founder confirms he wants the credit displayed, add it back as clean copy: *"Reintroduced by National Inn."* Do **not** leave the `[CONFIRM]` wrapper on the page either way.

## G3. NEW: Events page (`/events`)
- Add a new route `/events` + a Tina collection so it's editable (see Tina note #4).
- Add **Events** to the main nav and the footer quick links.
- Seed content from the Group Events copy in **H3** below (heading + body + WhatsApp CTA). Treat this as the page's hero/intro.
- Full Events page content (event types, packages, gallery, testimonials) is an **open item** — build the page so those sections can be added later; use the corporate copy + WhatsApp CTA as the launch version. Pause for founder review.

---

# HOME PAGE

## H1. Add the video
- Place the property video on the homepage. Default: a dedicated "Watch" section (responsive 16:9, click-to-play) **or** a muted autoplay loop behind the hero — confirm placement with founder (see Decisions).
- **[ASSET]** founder to supply the video file / URL. Until then, leave a clearly-labelled placeholder block (not a broken embed).

## H2. Swap the generic play-button icons for themed icons
- The video "play" triggers should use **brand-themed icons** instead of the default ▶:
  - One play trigger → **tree house** icon.
  - A second play trigger → **Tarzan / rope-swing** icon.
- These are custom SVGs. **Confirm how many play buttons exist** (see Decisions). If there's only one video, use the tree house icon; add the Tarzan one when the second video exists.

## H3. "Bring the team" block → **Group Events & Corporate Experiences**
- Replace the heading and body of the existing corporate/"Bring the team" block with **exactly**:

> **Heading:** Group Events & Corporate Experiences
>
> **Body — bold lead line:** **Bring the team, the class, or the whole crew.**
>
> From corporate day outings and outbound training programs to school excursions, birthdays, and private celebrations, we help you plan experiences that bring people together. Our team can assist with activity arrangements, event coordination, meals, and customized schedules to suit your group's goals.
>
> Share your group size, preferred dates, and what you're looking to achieve, and we'll help create an experience tailored to your needs.

- CTA: WhatsApp (Doc 07 H5 already moved this off email) using the **Group Events** pre-filled message from G1.
- Add a secondary link to the new **/events** page ("Plan your event →").

## H4. "Easier to Reach Than You'd Think" block → reframe
- Replace the heading + subheading + body of the current how-to-get-here / "Easier to Reach Than You'd Think" block with **exactly**:

> **Heading:** Just 10 minutes from the Galle Expressway exit.
>
> **Body:** Close enough for a spontaneous day out, far enough to feel like you've escaped into nature.
>
> **Need transport? We can help arrange it.**

- Keep the WhatsApp transport CTA (Doc 07 H4 already changed "tuk tuk" → "vehicle" — stay consistent: "we can arrange a vehicle"). Keep the embedded map if present.

## H5. Fix the placeholder WhatsApp number
- Any "xxx" / "[number]" placeholder (footer, contact, etc.) → **+94 77 757 2785**, and make it **clickable** (tap-to-call `tel:` where it's shown as a phone number, and `wa.me/94777572785` where it's the WhatsApp CTA). No bare un-linked numbers anywhere.

---

# DAY OUTING PAGE

## DO1. Fix the divider glitch near the food heading
- By the food heading (see DO2), the coloured **separator/divider has a thin line showing inside the curved design**. Clean up the SVG/CSS so the curve renders solid with no inner hairline.

## DO2. Food teaser heading swap
- Change **"One buffet, your way"** → **"Sri Lankan food, your way."** (this is the Day Outing page's food teaser heading).
- ⚠️ Note: "One buffet, your way" is **intentionally reused on the Food page** (see F2). Do **not** unify these — Day Outing = "Sri Lankan food, your way.", Food page = "One buffet, your way."

## DO3. Move the "View menu" button
- Currently the menu-view button sits at the **end of the ticket-pricing section**. Move it to the **end of the food section** instead. (The menu still opens as the pop-up/modal from Doc 07 D5.)

## DO4. Rules & regulations section — align + tidy
- Founder flagged "rules and regulations needs to be changed." Interpretation pending confirmation (see Decisions). Default action: make the Day Outing rules list match the current policy table / Doc 04 — alcohol after 2 PM only & no activities after drinking, towels not included (bring your own or buy on site), 18+ ID, dress code (swimwear/silk; no denim/cotton/shawls), pool-only remark, lifeguards, deep pool closes 6:30 PM. (Gold-jewelry line already removed in Doc 07 D6.)

## DO5. Section heading swap
- Change **"Every activity, properly."** → **"Our Activities"**.

## DO6. Activity name swap
- Change **"The Waterfall: Nature's Massage"** (activity #4) → **"Waterfall Massage"** everywhere it appears (card title + any heading/anchor).

## DO7. Full Rules & Booking Terms → pop-up
- "Full rules & booking terms" opens as a **pop-up/modal** (or overlay), not a navigate-away. Pull the complete terms from Doc 04. (Reaffirms Doc 07 D7 — confirm it's actually implemented as a modal.)

---

# STAY PAGE

## ST1. Labels: icon for pax, rename "Available"
- Replace the word **"Sleeps"** on every room with a **person icon** (e.g. a 👤 / single-person SVG) that signals max pax — icon + the number.
- Replace the word **"Available"** with **"Room count"**.

## ST2. Update the distances block — use exactly
| Place | Time |
|---|---|
| Unawatuna Beach | 10 min |
| Galle Fort | 15 min |
| Jungle Beach | 10 min |
| Turtle Hatchery | 15 min |
| Stilt Fisherman | 15 min |
| Coconut Tree Hill | 20 min |

- These **replace** the older estimates. Recommend syncing the homepage "Galle basecamp" distances to match these too (see Decisions) so the two pages don't disagree.

---

# FOOD PAGE

## F1. Menu = pop-up, not a list
- Remove the menu shown as a text list. Add a **"View the full menu"** button that opens the whole menu in a **pop-up/modal**. **[ASSET]** founder to supply the menu file/images. Until then, modal shows a "menu coming soon" placeholder (photos, not text). (Reaffirms Doc 07 F1.)

## F2. Heading swap + explainer
- Change **"Spicy or Mild — You Choose"** → **"One buffet, your way"**.
- Under it, explain these are the **two default versions of the day-outing buffet** — a non-spicy version and a Sri Lankan-spicy version of the same feast. Keep both photos. (Reaffirms Doc 07 F2. Avoid the word "foreigner" — use "guests from around the world" / "international visitors".)

## F3. Repurpose the old "One buffet your way" area → food showcase
- The section that previously held that heading becomes a **showcase area**: the full-menu (pop-up trigger), the **à la carte menu**, and other food offerings — **photo-led**, not text lists. (Reaffirms Doc 07 F3. À la carte content is an open item — build the layout, leave a tidy placeholder.)

---

# OUR STORY PAGE

## OS1. Remove "What We Offer"
- Delete the **"What We Offer"** facilities strip section entirely. (Reaffirms Doc 07 O1.)

---

# DECISIONS NEEDED FROM FOUNDER (pause / placeholder until answered)
- [ ] **Coconut credit (G2):** drop the credit line entirely for now, or display "Reintroduced by National Inn" as clean copy?
- [ ] **Video (H1):** is the file ready? Hero-background loop, or its own "Watch" section?
- [ ] **Play icons (H2):** how many video play buttons exist? (1 → tree house only; 2 → tree house + Tarzan)
- [ ] **Events page (G3):** stand it up with the corporate copy + WhatsApp only for now, or wait for full Events content (types/packages/gallery)?
- [ ] **Distances (ST2):** also update the homepage basecamp distances to match the new Stay list? (recommended: yes)
- [ ] **Rules section (DO4):** confirm exactly what's wrong with the current Day Outing rules, or is "align to Doc 04" enough?

# ASSETS NEEDED
- [ ] Property **video** file/URL (H1)
- [ ] Tree house + Tarzan **play-button SVGs** (H2) — or confirm Claude Code should draw them
- [ ] **Menu** file/images for the pop-up (F1, DO3)
- [ ] **À la carte** menu content (F3)

# ALREADY DONE — DO NOT REDO (struck-through in founder's doc; shipped in Docs 06/07)
- Chat icon → WhatsApp logo · "Picked this morning" → "Plucked from our gardens" · "Stay the night" bungalow wording hidden (whole-park access kept) · "tuk tuk" → "vehicle" · FAQ alcohol corrected · "Other places give you a bed" → "Skip the boring landmarks…" tagline · Paaruwa added · activity count de-specified · pool-only prices 2,200 / 3,200 + special remark · gold-jewelry rule removed · towels wording fixed · Day Outing closing → "Trust us. You don't want to miss this experience." · room prices hidden → WhatsApp · "cook your own" removed.

---

# HANDOFF PROMPT (paste into Claude Code)
```
Read 08_Leisure_Land_Adjustments_Round3.md. Apply ONLY the live items,
in order: Global → Home → Day Outing → Stay → Food → Our Story → new
Events page. The site uses TinaCMS — follow the "READ FIRST — TinaCMS
safety" section: edit content files + schema (not hardcoded copy),
update schema AND component for any new field, run Tina codegen, and
verify /admin + next build after changes. Never invent values; keep
[PRICE]/[COUNT]/[ASSET] as placeholders and remove any that are leaking
onto rendered pages. Do not redo anything in the "ALREADY DONE" list.
Pause after each page for my review.
```
