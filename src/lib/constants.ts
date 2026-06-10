/**
 * Leisure Land — single source of truth for contact details, prefilled
 * WhatsApp messages, prices and hours.
 *
 * 👉 NON-TECHNICAL NOTE: edit values here once and they update across the site.
 *    The CMS phase will read from this same shape, so keep it tidy.
 */

// ⚠️ PLACEHOLDER — replace with the real WhatsApp Business number.
// Country code + number, digits only (no +, spaces or dashes). e.g. "94771234567"
export const WHATSAPP_NUMBER = "94000000000";

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

// Reviews stay hidden until real handles/listings exist (handoff §7).
export const REVIEWS_ENABLED = false;
