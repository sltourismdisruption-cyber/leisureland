# Design Handoff V3 — Per-Page Section Layouts (Day Outing, Stay, Food)

## What these files are
Three static HTML design references live in `design/`:
- `leisureland-dayouting-v3.html`
- `leisureland-stay-v1.html`
- `leisureland-food-v1.html`

**They are mockups of SECTION layouts and visuals only.** They are NOT a source of truth for the page shell (nav, hero scaffold, routing, providers, WhatsApp wiring). Treat them the way you would treat a Figma export: copy the look and structure of the new sections, and ignore everything that is already built and working in the live app.

## The one rule that matters
**Separation of concerns.** Port the section CONTENT and STYLING from the reference files into the EXISTING page components. Do not replace the existing page shells. When in doubt, the live app wins for behavior, the reference file wins for section visuals.

## PRESERVE from the existing live site (do NOT overwrite from the HTML files)
- The existing **navbar component** and all its behavior: scroll behavior, mobile drawer/collapse, how it mounts, its sticky logic. The reference files contain a simplified static nav. Do NOT swap the real nav for it.
- The existing **hero layout**, including the **centered hero content** on the homepage and wherever it is already centered. The reference files left-align some heroes. Keep the live alignment.
- All **routing**, **Next.js Link** usage, metadata, and existing **WhatsApp/wa.me link wiring** with prefilled messages.
- Any existing **providers, analytics, image optimization** (next/image), and component structure.
- The existing **floating WhatsApp FAB** behavior if already implemented.

## ADD to the navbar (the only nav changes wanted)
Bring these two behaviors over, implemented inside the EXISTING nav component, not by replacing it:
1. **Active-page indicator.** The current page's nav link gets the hand-drawn marker: a short fern-colored stroke under the active link, tilted ~ -1.6deg. Reference CSS: `.nav-links a.active::after` in any of the v3 files. Use the existing router (e.g. `usePathname`) to set the active link.
2. **Glassy nav.** The translucent blurred background: `background:rgba(222,231,228,.55); backdrop-filter:blur(16px) saturate(1.1)`. Apply to the existing nav element only if it does not break the existing scroll behavior. If the live nav changes background on scroll, keep that and just adopt the blur/translucency values.

## DESIGN SYSTEM UPDATE (important — overrides older handoff docs)
The CTA color has changed. Earlier docs said "coconut orange is the only CTA color." **That is now retired.**
- **Primary CTA / buttons:** canopy green `#1D4534`, light text `#F4F8F4`.
- **Accents** (active nav stroke, focus rings, small highlights): fern `#3E7E57`.
- **Orange `#E8973B`** is retired as a CTA color. It survives ONLY as a tiny non-CTA accent (e.g. the height-ruler dots on the day-outing ticket, where it is sand `#F2D98B` now anyway). Do not use orange for any button.
- WhatsApp FAB stays WhatsApp green `#25D366`.

## Tokens (unchanged, confirm they match globals)
mist `#DEE7E4` · mist-deep `#CEDAD5` · card `#FBFDFC` · ink `#1E3A2C` · body `#46594D` · canopy `#1D4534` · canopy-deep `#173829` · night `#143026` · fern `#3E7E57` · bark `#6A5037` · note `#7A5B3C` · coconut(retired CTA) `#E8973B` · sand `#F2D98B`
Fonts: Young Serif (display), Albert Sans (body), Kalam (handwriting, limited use).

## PER-PAGE: what to port

### /day-outing  (from leisureland-dayouting-v3.html)
- **How your day flows:** the "day flows like water" section. Pool-shaped blob photos (organic border-radius, slight rotations), connected by ONE thin dotted bark-colored bend line image-to-image (`.flowline`), endpoints tucked behind the pools so there is no gap. Section background drifts mist → golden hour top to bottom. No name-chips, no timestamps.
- **Tickets (What your day costs):** two perforated tickets, equal height. Notches are a real CSS mask punch (`-webkit-mask` + `mask-composite`), NOT pasted circles, with `filter:drop-shadow` on a `.twrap` wrapper so the shadow follows the cut. Full Day Pass = dark canopy stub with a cream hand-drawn height ruler (sand dots at 0.8 m / 1.3 m). Pool-Only = lighter fern stub with cream waves, matching price-row structure. No green "sum" underline under any price.
- **Know before you go:** 7 rules each with a custom hand-drawn stroke icon (ID, swimwear, towel, alcohol clock, lifebuoy, parent+child, ring). Never a library icon.
- **Booking box:** full container width.
- Wavy `.sep` dividers between sections.

### /accommodation (Stay)  (from leisureland-stay-v1.html)
- **Rooms FIRST, A-frame whole-villa booking BELOW.** Lead with the 4 bungalow room cards by name (Apartment Style Family ×3, Apartment Style Triple ×1, Family Room Paddy View ×1, Family Room Pool View ×2) each with capacity, personality line, [PRICE] slot, and a per-room prefilled WhatsApp CTA on the whole clickable tile. THEN the A-frame section ("Or take the whole A-Frame") with the whole-villa CTA below the rooms.
- **Every stay includes:** icon rows (water park, WiFi, jungle, birdsong, welcome drink + tea, BBQ), custom hand-drawn stroke icons, not naked text rows. Plus the two meal-plan cards.
- Nature Walk, Hands-On Ceylon experiences, Galle Basecamp sections as laid out.

### /food  (from leisureland-food-v1.html)
- **Philosophy section** ("Absolutely no artificial flavors...") sits on a **white band**, fenced by wavy `.sep` dividers ABOVE and BELOW (the white background is what makes the waves visible against the mist neighbors — keep it).
- Beside the statement: the **hand-drawn Ceylon spice illustration** (cinnamon quill bundle tied with twine, star anise, cardamom pods, dried chilli, peppercorns). Inline SVG, our stroke language.
- **Image pairs full width:** spicy/mild pair and the showcase row are true 1fr/1fr edge-to-edge grids, no dead gutter.

## Photo slots
All `.ph` gradient blocks with dashed `.shot` chips are PLACEHOLDERS describing the photo to shoot. In code, use existing image components/placeholders. Keep the dashed chip text as a code comment or placeholder caption so the photographer brief survives. **Never ship a wrong/mismatched photo or an orange `[CONFIRM]`/`[PRICE]` dev chip to production** — those are for the founder only.

## Copy rule (applies to all visible text)
No em dashes or en dashes anywhere. Use commas, colons, periods, or middots.

## Build order
1. Shared: design-system color update (retire orange CTA → canopy/fern) + nav active-state + glassy nav, inside existing components.
2. /day-outing sections.
3. /accommodation sections.
4. /food sections.
Propose the plan and wait for approval before writing code.
