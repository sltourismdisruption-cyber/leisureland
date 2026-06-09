# Leisure Land, design handoff (v5 to Next.js + Tailwind)

This document plus `design/leisureland-redesign-v5.html` is the complete spec for the redesign.
The HTML file is the visual source of truth: copy, layout, spacing, and every SVG path (icons,
underline, edges, treeline, palms, map) live in it. This document explains the rules, the tokens,
and the implementation details the HTML cannot say out loud.

We are fully replacing the previous "Canopy" theme (Baloo 2, Nunito Sans, cream background,
card grids, carousels). Remove those tokens entirely. The two systems must never coexist.

---

## 1. Hard rules (non negotiable)

1. No `text-transform: uppercase` and no letter-spacing tricks anywhere. No eyebrow or kicker
   labels above headings. Hierarchy comes from type scale, color bands and whitespace only.
2. No em dashes or en dashes in any visible copy. Use commas, colons, periods, parentheses,
   or a middle dot. Regular hyphens in compound words (non-spicy, A-frame) are fine.
3. Copy in the v5 HTML is approved. Do not rewrite it. New sections must stay inside the scope
   of `01_Leisure_Land_Content_Brief.md`: creative freedom within it, no invented claims.
4. Photos persuade at scale, icons inform at small sizes. Never place a photo smaller than
   roughly 300px tall to sell an experience. Small slots get hand-drawn icons instead.
5. Portrait first. Activity and experience images are portrait or squarish. Landscape is the
   earned exception, used only for true vistas (currently only the paddy swings panoramic).
6. One visible primary action per section, always WhatsApp (email only for corporate).
7. Every viewport of scroll should contain at least one image once real photos land.
8. No icon libraries (no Lucide, no Font Awesome). Only the custom stroke icons in the v5 file.
9. Avoid generic AI tells: no purple-blue gradients, no equal 3-card icon grids, no
   emoji-as-icons, no fake testimonials or invented stats.

## 2. Design tokens

Colors (extend the Tailwind theme with these names):

| Token | Hex | Use |
|---|---|---|
| mist | #DEE7E4 | page background |
| mist-deep | #CEDAD5 | banners, subtle panels |
| card | #FBFDFC | light section bands |
| ink | #1E3A2C | headings, dark text |
| body | #46594D | body text on light |
| canopy | #1D4534 | dark green band (activities), edges |
| canopy-deep | #173829 | panels inside the dark band |
| night | #143026 | footer background, treeline front layer |
| fern | #3E7E57 | icons, links, accents |
| bark | #6A5037 | food accents, map doodles |
| note | #7A5B3C | Kalam handwriting color on light |
| coconut | #E8973B | the only CTA color, underline mark |
| coconut-ink | #3F2A0C | text on coconut |

WhatsApp green #25D366 is reserved for the floating button only.

Type, via `next/font/google`:

| Role | Font | Notes |
|---|---|---|
| Display | Young Serif | single weight 400, headings and image caption names |
| Body and UI | Albert Sans | 400 to 700 |
| Handwriting | Kalam | 400, strictly limited uses, see section 3 |

Radii: tiles and frames 20 to 24px, pills fully rounded. Edges between color bands use the
irregular SVG paths from the v5 file, never straight lines or perfect sine waves.

## 3. Signature elements and their usage limits

These marks are what make the site feel authored. Their power comes from scarcity, so the
limits below are part of the design.

Painted underline (coconut stroke, draws on reveal): exactly two uses. Hero word
"Nature-Inspired" and the price "4,000 LKR". Do not add more.

Kalam handwriting, allowed only in: timeline times (9:00 etc.), the three food detail captions,
the grandma quote on the buffet photo, the single annotation "harder than it looks" with its
hand-drawn arrow on the rope walk spotlight, the notes inside the Galle map, and the footer
sign-off "built with love in Galle". Nothing else.

Hand-drawn stroke icons, five total, paths in the v5 file: welcome drink glass, slide with
splash, curry pot, two ropes, teacup. 52px on desktop, 40px on small screens, stroke fern.

Irregular section edge: the SVG between the day section and the activities band, mirrored on
exit. Reuse the same path, fill matches the dark band.

Treeline footer: two-layer canopy silhouette with two palm crowns, rising over the final
golden-hour photo into the night footer. Paths in the v5 file.

Fireflies: five absolutely positioned dots in the footer with a slow opacity and drift
animation. Must be disabled (static, low opacity) under `prefers-reduced-motion`.

Mega wordmark: giant "Leisure Land" in Young Serif at roughly 9 percent white opacity,
cropped at the footer bottom edge, `aria-hidden`.

Galle map: inline SVG, schematic and not to scale. It encodes relative travel times, jungle
above, coastline below. Mobile may horizontally scroll inside its panel for now; a simplified
stacked variant is a welcome improvement. Verify all driving times with the founder before
launch (the content brief flags them as unverified).

## 4. Component map (suggested)

```
components/
  Nav.tsx            sticky, mist with blur. BUILD the mobile collapsible menu,
                     v5 only hides links under 840px and that is a gap.
  WhatsAppPill.tsx   coconut pill, takes a message key, builds the wa.me URL
  Underline.tsx      word wrapper with the stroke SVG and draw-on animation
  SectionEdge.tsx    irregular divider, flip prop
  Shot.tsx           placeholder with tone (jungle, water, food, gold) and the
                     dashed shot chip; swapped for next/image at photo time
  Reveal.tsx         IntersectionObserver fade-up, respects reduced motion
  Fab.tsx            floating WhatsApp button, visible on every section
sections/
  Hero, DayTimeline, PriceMoment, Activities (Spotlight + BigGrid), Food,
  Stay (RoomTiles + StayOnlyGrid), GalleMap, FinalCta (with Treeline), Footer
lib/
  constants.ts       WhatsApp number, prefilled messages, prices, hours
```

Aspect ratios to preserve (desktop): activity squarish tiles 4/4.5, activity portraits 3/4.2,
paddy panoramic 21/8, room tiles 3/3.8, stay-only tiles 4/4.3, food details 4/3.2. On mobile
everything stacks full width, portraits around 4/4.6, panoramic 16/10.

## 5. WhatsApp integration

One number, one helper: `https://wa.me/{number}?text={encodeURIComponent(message)}`.
Store the number and all message strings in `lib/constants.ts` so the founder can edit them
in one place. Suggested prefilled messages (founder may adjust wording):

| Context | Message |
|---|---|
| Hero, FAB, nav pill | Hi! I'd like to book a day pass at Leisure Land. When are you available? |
| Price block | Hi! I'd like to check a date for a day pass. |
| Rope walk link | Hi! I want to try the rope walk, tell me more. |
| Each room tile (whole tile is the link) | Hi! I'm interested in the {room name}. Our dates and group size: |
| Stay section button | Hi! We're looking to stay. Our dates and group size: |
| Final CTA | Hi! We're in Galle for a few days, can you help us plan? |

Rooms: the grid shows one visible button, but each room tile is fully clickable and deep-links
with its own prefilled message. One visible action, per-room intent preserved.

## 6. Image and shot system

Until real photos arrive, keep the `Shot` placeholder component with the dashed chips. The
chips are the photographer's brief and are deleted at launch. Naming convention for delivery:
`public/shots/shot-01-hero-drone.jpg` etc., matching the numbers below.

| Shot | Subject | Orientation |
|---|---|---|
| 01 | drone pass over the pools through the canopy | wide, hero |
| 02 | rope walk, feet on lower rope hands on top, halfway across | tall |
| 03 | Kotta Pora mid pillow swing, both balanced | portrait |
| 04 | Tarzan jump, mid air, rope released | portrait |
| 05 | paddy field swing, wide vista | the one landscape |
| 06 | under the waterfall | portrait |
| 07 | up in the tree house | portrait |
| 08 | speed slide splashdown | portrait |
| 09 | buffet spread, wide, steam | wide |
| 10 to 12 | curry pots, string hoppers, fruit | squarish details |
| 13 to 15 | standard room morning light, bed with paddy view, A-frame at dusk | portrait |
| 16 to 19 | cinnamon plucking, tea picking, hibiscus making, fruit picking | portrait |
| 20 | golden hour over the paddy, A-frame in last light | wide, final CTA |

Swap to `next/image` with `fill` inside the existing rounded relative containers, hero with
`priority`, everything else lazy, correct `sizes` per breakpoint, alt text describing the
action ("a guest crossing the rope walk above the pool"), never "image of".

## 7. Sections still to build (not in the v5 preview)

Build these in the same language, content from the content brief:

Corporate and group outings: light band, short heading and the four bullet points as flowing
prose, single mailto CTA to hello@leisureland.lk. No cards.

How to get here: practical companion to the Galle map. Real Google Maps embed in a rounded
frame, driving times as a simple ruled list like the timeline (no icons needed), closing line
offering tuk tuk pickup over WhatsApp. Verify times first.

FAQ: accordion styled like the timeline rows, question in Albert Sans 600 ink, thin rules,
a plus that rotates to a cross, answer in body color. All questions from the content brief.

Reviews: build the section shell (Google, TripAdvisor, Instagram) but keep it unrendered
behind a flag until real handles and listings exist. Never show placeholder ratings.

Also required: cookie consent (lightweight), skip link (exists in v5), sticky nav with the
mobile menu, analytics hooks left for the later phase.

## 8. Motion and accessibility

Reveal: fade plus 20px rise, IntersectionObserver, threshold around 0.1, run once.
All animation (reveal, underline draw, hover zooms, fireflies) must check
`prefers-reduced-motion` and fall back to static. Focus-visible: 3px coconut outline with
offset. Semantic heading order h1 then h2 then h3. The map SVG keeps its `role="img"` and
aria-label. Hover zoom on tiles is subtle, scale 1.04 over 0.6s.

## 9. QA checklist before merge

1. Phone first: every wa.me link opens WhatsApp with the right prefilled text.
2. No em dashes, no uppercase styling anywhere (search the codebase for both).
3. Underline appears exactly twice, Kalam only in its allowed homes.
4. Reduced motion: nothing moves, fireflies static, page fully readable.
5. Keyboard pass: skip link, focus rings, accordion operable.
6. Mobile nav menu works, FAB never covers a CTA.
7. Lighthouse: no layout shift from images (aspect ratios reserved), hero loads fast.
8. Old theme fully gone: no Baloo 2, no cream tokens, no leftover carousel code.
9. Driving times and the WhatsApp number confirmed by the founder.
10. backdrop-filter nav degrades gracefully where unsupported.

## 10. Kickoff prompt for Claude Code

Paste this to start:

> Read `design/DESIGN_HANDOFF.md` fully, then read `design/leisureland-redesign-v5.html`
> as the visual source of truth for copy, layout, spacing and every SVG path. We are
> replacing the current Canopy theme with this system completely. First, propose a short
> plan and wait for my approval. Then work in this order: (1) foundations: next/font for
> Young Serif, Albert Sans and Kalam, Tailwind tokens from the handoff, global styles,
> and remove Baloo 2 and the cream palette entirely; (2) shared components per the
> component map; (3) replace sections one at a time in page order, committing after each
> so the build never breaks; (4) build Corporate, How to get here, FAQ and the hidden
> Reviews shell per section 7. Follow the hard rules exactly: no uppercase styling, no
> em dashes, the underline and Kalam usage limits, portrait-first imagery, one CTA per
> section. Keep all copy exactly as written in the v5 file.
