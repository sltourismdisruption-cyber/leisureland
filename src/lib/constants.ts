/**
 * Leisure Land — single source of truth for contact details, prefilled
 * WhatsApp messages, prices and hours.
 *
 * 👉 NON-TECHNICAL NOTE: edit values here once and they update across the site.
 *    The CMS phase will read from this same shape, so keep it tidy.
 */

// ⚠️ PLACEHOLDER — replace with the real WhatsApp Business number.
// Country code + number, digits only (no +, spaces or dashes). e.g. "94771234567"
// The old site listed +94 77 757 2785 (Doc 05 open item) — confirm before using.
export const WHATSAPP_NUMBER = "94000000000";

// Sitewide navigation (nav bar + footer). Order and labels per Doc 05.
export const NAV_LINKS = [
  { href: "/day-outing", label: "Day Outing" },
  { href: "/accommodation", label: "Stay" },
  { href: "/food", label: "Food" },
  { href: "/our-story", label: "Our Story" },
] as const;

// On GitHub Pages the site lives under /leisureland, so every static asset URL
// gets this prefix. Locally it's empty. Set by the deploy workflow.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public asset path with the deployment base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

// Prefilled WhatsApp messages (founder may adjust wording).
export const messages = {
  book: "Hi! I'd like to book a day pass at Leisure Land. When are you available?",
  checkDate: "Hi! I'd like to check a date for a day pass.",
  ropeWalk: "Hi! I want to try the rope walk, tell me more.",
  stay: "Hi! We're looking to stay. Our dates and group size:",
  finalCta: "Hi! We're in Galle for a few days, can you help us plan?",
  directions: "Hi! Can you help me get to Leisure Land, maybe arrange a tuk tuk pickup?",
  aFrame: "Hi! I'm interested in the A-Frame Villa. Our dates and group size:",
  natureWalk: "Hi! We're looking to stay, and we'd love the nature walk too. Our dates and group size:",
} as const;

/** Per-room deep link message. */
export function roomMessage(roomName: string): string {
  return `Hi! I'm interested in the ${roomName}. Our dates and group size:`;
}

/** Build a wa.me click-to-chat link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "hello@leisureland.lk",
  hours: "Open 9 am to 10 pm, every day of the year",
  // Shown verbatim in the footer until the real number lands.
  whatsappDisplay: "+94 7X XXX XX XX",
};

export type Tone = "jungle" | "water" | "food" | "gold";

// Room data (prices centralized here per the handoff).
export const rooms: { name: string; meta: string; price: string; tone: Tone; shot: string; img: string }[] = [
  { name: "Standard family room", meta: "the bungalow · sleeps 4", price: "from $85 a night", tone: "jungle", shot: "shot 13: room, morning light, portrait", img: "/assets/photos/room-bungalow-bed.jpg" },
  { name: "Spacious family room", meta: "the bungalow · sleeps 5", price: "from $110 a night", tone: "gold", shot: "shot 14: bed, paddy view, portrait", img: "/assets/photos/room-balcony.jpg" },
  { name: "The A-frame suite", meta: "three connected rooms · sleeps 7", price: "from $310 a night", tone: "jungle", shot: "shot 15: the A-frame at dusk, portrait", img: "/assets/photos/room-aframe.jpg" },
];

// Day pass pricing by height (Doc 05). The full table renders on /day-outing;
// the homepage shows only the adult headline price.
export const dayPricing = [
  { height: "Below 0.8 m", price: "Free", note: "the little ones come along free" },
  { height: "0.8 m to 1.3 m", price: "2,600 LKR", note: "about $9" },
  { height: "Above 1.3 m", price: "4,200 LKR", note: "about $14" },
] as const;

// Pool-only ticket (Doc 06, Option B). The founder fills the real price;
// until then the placeholder stays VISIBLE on the page by design. Never
// invent this number.
export const poolOnlyEntry = "[PRICE]";

// Hours per Doc 05 (day-outing pricing section). The founder still needs to
// reconcile these with the 9 am to 10 pm line used in the footer and FAQ.
export const dayHours = {
  regular: "Open 9 am to 5 pm, every day",
  evening: "Evening session 2 pm to 9 pm, on request",
} as const;

// The current buffet menu (Doc 05). Shown on /day-outing and /food until the
// new menu lands; descriptions stay short and factual.
export const menu = [
  { dish: "Rice", note: "the centre of the table, Sri Lankan style" },
  { dish: "Dhal curry", note: "lentils slow-cooked in coconut milk" },
  { dish: "Chicken curry", note: "the house curry, spicy or mild" },
  { dish: "Tempered potato", note: "soft, gently spiced" },
  { dish: "Mango chutney", note: "sweet against the curries" },
  { dish: "Fried fish", note: "crisp, fresh from the coast" },
  { dish: "Boiled eggs", note: "simple and always there" },
  { dish: "Coconut sambol", note: "the classic fresh coconut relish" },
  { dish: "Fried chilli", note: "for the brave plates" },
  { dish: "Papadam", note: "the crunch every plate needs" },
  { dish: "Vanilla ice cream", note: "dessert, loved by every age" },
] as const;

// Bungalow rooms by name (Doc 05). Prices are open items, so tiles say
// "message us for rates" until the founder fills realPrice in.
export const bungalowRooms: {
  name: string;
  capacity: string;
  personality: string;
  price: string;
  extraGuest?: string;
  tone: Tone;
  shot: string;
  img: string;
}[] = [
  {
    name: "Apartment Style Family Room",
    capacity: "3 available · sleeps 5",
    personality: "Space for the whole crew",
    price: "message us for rates",
    extraGuest: "extra guest 3,750 LKR",
    tone: "jungle",
    shot: "room set: bed made, natural light, portrait",
    img: "/assets/photos/room-bungalow-bed.jpg",
  },
  {
    name: "Apartment Style Triple Room",
    capacity: "1 available · sleeps 3",
    personality: "Cozy for three",
    price: "message us for rates",
    extraGuest: "extra guest 3,750 LKR",
    tone: "gold",
    shot: "room set: bed made, natural light, portrait",
    img: "/assets/photos/room-balcony.jpg",
  },
  {
    name: "Family Room with Paddy View",
    capacity: "1 available · sleeps 5",
    personality: "Wake up to the rice fields",
    price: "message us for rates",
    tone: "gold",
    shot: "room set: view from the window, portrait",
    img: "/assets/photos/room-balcony.jpg",
  },
  {
    name: "Family Room with Pool View",
    capacity: "2 available · sleeps 4",
    personality: "Roll out of bed, into the pool",
    price: "message us for rates",
    tone: "water",
    shot: "room set: view from the door, portrait",
    img: "/assets/photos/room-bungalow-bed.jpg",
  },
];

// Reviews stay hidden until real handles/listings exist (handoff §7).
export const REVIEWS_ENABLED = false;
