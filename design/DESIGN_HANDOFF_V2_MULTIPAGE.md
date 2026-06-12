# Leisure Land — Design Handoff v2 (Multi-Page Expansion)

This document extends `DESIGN_HANDOFF.md` (v1, single-page) to cover the four new pages
defined in `05_Leisure_Land_MultiPage_Content_Brief.md`. Read v1 first — every rule in it
applies to all new pages without exception. This document adds page-specific layout direction.

---

## CRITICAL: What must NOT change

These are the decisions five rounds of iteration locked in. Do not reinterpret them.

1. **Photo sizing rule.** Every experience image is minimum 400px tall on desktop, portrait or
   squarish aspect ratio by default (4/4.3 to 4/4.6). Landscape only for true vistas. A photo
   smaller than this is not selling an experience, it is decorating text. If you are tempted to
   use a small photo, use a hand-drawn icon instead or no image.

2. **One CTA per section.** Always WhatsApp (email only for corporate enquiries). No per-card
   buttons except where specified below (room cards on /accommodation).

3. **No eyebrow labels, no ALL-CAPS, no letter-spacing tricks.** Zero. Every section stands on
   its heading and content alone.

4. **No em dashes or en dashes** in any visible copy. Commas, colons, full stops, middots only.

5. **Kalam handwriting** only in: timeline times, food detail captions, the grandma quote,
   the annotation on the rope walk, the Galle map notes, the footer sign-off. Nowhere else.

6. **The painted underline** (coconut stroke, draws on reveal) on exactly two words sitewide:
   "Nature-Inspired" in the hero, "4,000 LKR" in the price block. On new pages this device
   may be used once per page on one meaningful word or number, maximum.

7. **No icon libraries.** Only the five custom stroke icons from v1 (welcome drink, slide,
   curry pot, two ropes, teacup) on the homepage. New pages use prose, photos, and the
   hand-drawn map style for any visual shorthand. The emoji badges on /day-outing activity
   cards (the Sri Lanka flag badge) are the one allowed exception, treated as inline content.

8. **Portrait-first imagery.** The paddy swing panoramic on the homepage is the only landscape
   image. Every new page follows the same rule: landscape only for a single earned vista shot
   per page if one exists, everything else portrait or squarish.

9. **Consistent section structure.** Dark canopy band (activities on home) with irregular
   SVG edges is a signature moment. Use it maximum once per page for the most important
   section. Do not use it on every section or it loses meaning.

10. **The footer is the same on every page.** Treeline, palm crowns, fireflies, "See you in
    the jungle," contact block, nav row, mega wordmark, copyright. Do not simplify it.

---

## Updated navigation

The nav changes sitewide. Replace the current links with:

| Label | Target |
|---|---|
| Day Outing | /day-outing |
| Stay | /accommodation |
| Food | /food |
| Our Story | /our-story |

The WhatsApp pill stays as the rightmost nav element on all pages, always visible.
Mobile: collapsible drawer (this was flagged as a gap in v1, it must be built now).

The homepage hero nav link "The day" that scrolled to a section now becomes the "Day Outing"
link pointing to /day-outing. Update the homepage nav to match.

---

## Homepage changes required alongside new pages

Per the content brief (Doc 05):

1. Remove timestamps (9:00, 9:30, 1:00 etc.) from the day timeline. Replace with the
   moment-based flow from Doc 05 Section 2: Arrive and breathe / Play / Feast / More play /
   Wind down. Keep the custom stroke icons. Remove the Kalam time stamps. The heading
   "Here's how the day goes." stays.

2. Add a quiet "Learn more" link at the end of each major section pointing to its deep page:
   - Day timeline / price block: "Full details on our day outing page"
   - Activities grid closing line: "See all 10 activities"
   - Food section: "More about our food"
   - Stay section: "See all rooms and availability"
   These are text links in body color, not buttons, so they do not compete with the WhatsApp CTA.

3. Nav update as above.

---

## Page 1: /day-outing

**Job:** Convert day-trip seekers. Show the full value so 4,200 LKR feels like a steal.
**Primary CTA throughout:** WhatsApp to book your day (same pill, same prefill as homepage).

### Hero
Full-bleed photo (best action or joy shot from the shoot). Same structure as homepage hero.
Heading: Your Day at Leisure Land
Sub: One ticket. A full day of slides, traditional games, jungle, and a proper Sri Lankan feast.

### Day flow (moment-based, no timestamps)
Five moments from Doc 05 Section 2. Each moment: one large portrait photo (minimum 400px tall)
on one side, 1-2 lines of copy on the other, alternating left-right per moment.
This is editorial layout, not a timeline list. Use the irregular edge above and below the
section if it becomes a dark band, otherwise let it breathe on the mist background.
Headings are the moment names: "Arrive and breathe." / "Play." / "Feast." etc.
No Kalam timestamps. No icon column.

### Every activity
All 10 activities, each as a large portrait photo tile (same treatment as the homepage
mosaic but every tile is equal weight here, no hierarchy needed). Two tiles per row on
desktop, single column on mobile. Under each photo: activity name in Young Serif, 2-3 lines
in Albert Sans. The two traditional games (Kotta Pora, rope walking) get a small inline
Sri Lanka flag emoji and the label "Traditional Sri Lankan game" in body text, not a badge
component.

### The buffet
Heading: One Buffet, Your Way
Wide food hero photo (minimum 440px tall). Side by side portrait shots: spicy version, mild
version (these are two of the new shots from Doc 05 photography additions).
The menu list: plain ruled list, no icons, Albert Sans, ink color for dish names, body color
for descriptions.

### Pricing
This is the one section that can be more functional. A clean ruled table: three rows
(below 0.8m, 0.8 to 1.3m, above 1.3m), price per row. Young Serif for the prices.
Below the table: hours, then the booking format box. The booking format box is a lightly
bordered card in mist-deep with the instruction "To book, WhatsApp us: Date, number of
people, your name." and the WhatsApp pill.

### Know before you go
Warm rules section. Plain prose list, no emoji bullets (the emoji in Doc 05 are editorial
notes for us, not UI elements). Body text, ruled rows like the timeline. No icons.

### Reviews strip and final CTA
Placeholder shell until real reviews exist. Final CTA identical to homepage.

---

## Page 2: /accommodation

**Job:** Convert stays. Higher-value product. Sell rooms by name.
**Primary CTA:** WhatsApp with room-specific prefilled messages.
**Note on room CTAs:** This page is the one exception to the one-CTA-per-section rule.
Each room card has its own WhatsApp link with a prefilled message naming that room.
This is correct because the conversion action (enquiry) must carry the room name into
the chat. Make each entire room tile clickable as a link, not just a button inside it.
The room-specific link is the primary action; there is no secondary action per card.

### Hero
Full-bleed photo (the A-frame at golden hour or the paddy view from a window).
Heading: Stay Overnight. Live Sri Lanka.
Sub: Ten rooms in the jungle. Paddy views, pool views, hands-on Ceylon experiences and
the whole water park included.
Below the hero, a single line banner in mist-deep: "Book direct on WhatsApp and save up to
30% versus Booking.com and Airbnb." No pill needed here, the hero CTA carries it.

### The A-frame villa (featured, not a card)
Two-column layout: large photo left (the exterior at golden hour, portrait or squarish),
text right. Then a row of three smaller portrait photos below (one per room interior).
This is the signature stay, not a card in a grid.
Heading: The A-Frame Villa
Body from Doc 05.
CTA: WhatsApp to book the A-Frame (prefill: "Hi! I'm interested in the A-Frame Villa")

### Bungalow rooms
Four rooms, each as a large portrait tile (same treatment as the homepage room cards that
we locked in). Two per row on desktop. Under each: room name, capacity, personality line,
price from. The entire tile is the WhatsApp link with the room-specific prefill.
Confirm room names from Doc 05: Apartment Style Family Room, Apartment Style Triple Room,
Family Room with Paddy View, Family Room with Pool View.

### Every stay includes
Not a grid. A single column of plain prose lines, each introduced by a short bold label.
No icons, no cards, no emoji bullets in the rendered page (Doc 05 emoji are our notes).
Five lines maximum. Then one line about meals with a note to message for board options.

### The nature walk
Dark canopy band for this section (the signature dark moment on this page).
Heading: Walk the Land
Five portrait photos in a horizontal scroll strip or a 2-3 across grid, each a moment from
the walk. Body copy from Doc 05. CTA inline: "Ask about the nature walk when you book."

### Hands-on Ceylon experiences
Four experiences in the same 2x2 large portrait grid as the homepage "Only if you stay the
night" section. This is already locked in from v5. Same treatment, same sizing.

### Galle basecamp
Moved from homepage. The hand-drawn map from the homepage lives here at full width.
Add the airport transfers line from Doc 05 below the map.
The "Other places give you a bed" line stays as the section closer.

### Stay FAQ
Accordion, same styling as the homepage FAQ. Questions from Doc 05 Section 8.

### Reviews and final CTA

---

## Page 3: /food

**Job:** Build appetite and trust. No booking mechanics on this page except a single
closer CTA. Funnels to day-outing booking.

### Hero
Full-bleed photo (steam, color, hands serving from Doc 05 photography additions).
Heading: From Our Kitchen
Sub: Authentic Sri Lankan food, cooked from scratch. Zero artificial flavors. Your spice,
your way.

### Food philosophy
Single column, generous body text, no cards, no icons. Four short paragraphs from Doc 05
Section 2. This is a voice section, not a features list.

### Spicy or mild
Two large portrait photos side by side: the spicy version, the mild version.
Short copy from Doc 05 Section 3 beneath or beside the pair.

### The menu
Until the new menu is ready: the current buffet list as a plain ruled list.
Each dish: name bold, description in body text, one line.
A short line below: "Vegetarian, vegan and gluten-free all accommodated. Message us ahead."

### The culinary experience
Two or three large portrait photos with the Kalam-style handwritten captions from v5
(the curry pots, string hoppers, picked this morning). Same treatment as the food details
strip on the homepage.
The grandma quote in Kalam stays here too if it makes sense in this expanded context.
Cross-link to /accommodation for the cook-your-own-meals experience.

### CTA
"Hungry already? Book your day." WhatsApp pill.

---

## Page 4: /our-story

**Job:** Trust. Prove real caring humans run this place without showing founder portraits.

### Approach
First-person "we" voice signed "The Leisure Land family" at the end.
Photography: hands not faces, team at work from behind, the land through times of day.
No dark band on this page. Let it breathe entirely on mist and card alternating bands.

### Hero
Full-bleed photo: the land at golden hour, wide. This is the one landscape allowed here.
Heading: Our Story
Sub: A nature-inspired water park born from the way Sri Lankans used to play.

### Origin story
Single column, generous line height, the copy from Doc 05 Section 2 verbatim. No cards,
no pull-quotes styled as components, no sidebars. Just the copy and one large portrait photo
beside it or below it.

### The stay ethos
One large portrait photo (morning light on the paddy, or the veranda view), copy from
Doc 05 Section 3.

### The play ethos
One large portrait photo (Tarzan jump or a waterfall pool moment), copy from Doc 05
Section 4.

### Nature as partner
Short section, copy from Doc 05 Section 5. No icons. One photo of the land or the kitchen.

### Traditions we keep alive
Copy from Doc 05 Section 6. Two portrait photos: Kotta Pora mid-swing and rope walking.
Explain the Avurudu and toddy-tapper histories in the copy, same as Doc 05 specifies.

### Facilities strip
This is the one place on this page where a visual list makes sense because it is a quick
reference, not a persuasion section. Plain inline list in Albert Sans, middots as separators,
no icons, no cards. One line.

### Reviews and closer
Reviews placeholder. Closing copy signed "The Leisure Land family." WhatsApp pill:
"Come see it for yourself."

---

## Shared components to build or confirm exist

These must work identically on all five pages (home plus four new):

- `Nav.tsx` with mobile drawer now required (not optional)
- `WhatsAppPill.tsx` accepting a message key from `lib/constants.ts`
- `Reveal.tsx` fade-up on scroll with reduced-motion fallback
- `Shot.tsx` placeholder with dashed chip and tone prop
- `SectionEdge.tsx` the irregular SVG edge, used max once per page
- `Footer.tsx` identical on every page, treeline and all
- `Fab.tsx` floating WhatsApp button on every page
- `ReviewsStrip.tsx` hidden behind a flag until real reviews exist
- `Accordion.tsx` for FAQ sections on /day-outing and /accommodation

---

## Claude Code kickoff prompt for the multi-page build

Paste this at the start of the session:

> Read `design/DESIGN_HANDOFF.md` then `design/DESIGN_HANDOFF_V2_MULTIPAGE.md` fully.
> Then read `design/leisureland-redesign-v5.html` as the visual source of truth.
> Then read `05_Leisure_Land_MultiPage_Content_Brief.md` for all page content.
>
> We are building four new pages (/day-outing, /accommodation, /food, /our-story) and
> making targeted changes to the homepage and nav. The design system from v5 applies to
> every page without exception.
>
> Before writing any code, propose a plan in this order:
> 1. Homepage and nav changes
> 2. Shared components that need to be built or updated
> 3. The four new pages in order
>
> Wait for my approval of the plan before writing any code.
>
> The most important rule: every experience photo must be large, portrait or squarish,
> minimum 400px tall on desktop. No small photo tiles. No card grids with equal small
> images. If in doubt, make the photo bigger. This is the single rule that separates this
> site from every AI-generated template.
>
> Do not add any eyebrow labels, uppercase text transforms, letter-spacing effects,
> em dashes, icon library icons, or fake testimonials anywhere.
>
> Commit after each page is complete so the build never breaks.
