/**
 * Leisure Land — single source of truth for contact details, prefilled
 * WhatsApp messages, prices and hours.
 *
 * 👉 NON-TECHNICAL NOTE: edit values here once and they update across the site.
 *    The CMS phase will read from this same shape, so keep it tidy.
 */

// WhatsApp Business number, digits only (country code + number, no +/spaces).
// +94 77 757 2785 (Doc 07, confirmed for all buttons).
export const WHATSAPP_NUMBER = "94777572785";

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

// Prefilled WhatsApp messages (founder may adjust wording). Each one is
// context-matched to the button it sits behind (Doc 07 G2).
export const messages = {
  // Day outing / day pass booking (nav, hero, footer, day-outing, food)
  book: "Hi! I'd like to book a day outing. Date: ___ · Number of people: ___ · Name: ___",
  // Checking a date for a day outing
  checkDate: "Hi! I'd like to check a date for a day outing. Date: ___ · Number of people: ___ · Name: ___",
  // Pool-only ticket (day-outing pricing)
  poolOnly: "Hi! I'd like a pool-only ticket. Date: ___ · Number of people: ___ · Name: ___",
  // Rope walking interest (short, context-matching)
  ropeWalk: "Hi! I'd love to try the rope walking, tell me more?",
  // General stay enquiry
  stay: "Hi! I'd like to book a stay at Leisure Land. Dates: ___ · Guests: ___ · Name: ___",
  // General planning help
  finalCta: "Hi! We're in Galle for a few days, can you help us plan a visit?",
  // Directions / transfers (we can arrange a vehicle pickup)
  directions: "Hi! Can you help me get to Leisure Land, maybe arrange a vehicle pickup?",
  // Whole-villa booking (real name per Doc 07 S1)
  wholeVilla: "Hi! I'd like to book the entire A-Frame Villa with Private Jacuzzi. Dates: ___ · Guests: ___ · Name: ___",
  // Nature walk add-on (short, context-matching)
  natureWalk: "Hi! I'd like to add the nature walk to our stay. Dates: ___ · Guests: ___ · Name: ___",
  // Group / corporate outing quote (Doc 07 H5)
  group: "Hi! I'd like a quote for a group/corporate outing. Group size: ___ · Date: ___",
} as const;

/** Per-room deep link message (Doc 07 G2). */
export function roomMessage(roomName: string): string {
  return `Hi! I'm interested in the ${roomName}. Dates: ___ · Guests: ___ · Name: ___`;
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
  { name: "Standard family room", meta: "sleeps 4", price: "from $85 a night", tone: "jungle", shot: "shot 13: room, morning light, portrait", img: "/assets/photos/room-bungalow-bed.jpg" },
  { name: "Spacious family room", meta: "sleeps 5", price: "from $110 a night", tone: "gold", shot: "shot 14: bed, paddy view, portrait", img: "/assets/photos/room-balcony.jpg" },
  { name: "The A-frame suite", meta: "the whole villa · sleeps 7", price: "from $310 a night", tone: "jungle", shot: "shot 15: the A-frame at dusk, portrait", img: "/assets/photos/room-aframe.jpg" },
];

// Day pass pricing by height (Doc 05). The full table renders on /day-outing;
// the homepage shows only the adult headline price.
export const dayPricing = [
  { height: "Below 0.8 m", price: "Free", note: "the little ones come along free" },
  { height: "0.8 m to 1.3 m", price: "2,600 LKR", note: "about $9" },
  { height: "Above 1.3 m", price: "4,200 LKR", note: "about $14" },
] as const;

// Pool-only ticket pricing by height (Doc 07 D4). Same height bands as the day
// pass. These are the real founder-provided numbers.
export const poolPricing = [
  { height: "Below 0.8 m", price: "Free", note: "the little ones come along free" },
  { height: "0.8 m to 1.3 m", price: "2,200 LKR", note: "pool access, all day" },
  { height: "Above 1.3 m", price: "3,200 LKR", note: "pool access, all day" },
] as const;

// Shown prominently with the pool-only ticket (Doc 07 D4).
export const poolSpecialNote =
  "This ticket is available on non-holidays, and on holidays only if check-in is after 2 PM.";

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

// Room listings (Doc 07 S1): the final six room types, each its own standalone
// listing. Occupancy and availability are the real founder-confirmed numbers.
// No prices are shown on rooms (Doc 07 S2) — guests message us for rates.
export const roomListings: {
  name: string;
  description: string;
  features?: string;
  occupancy: string;
  count: string;
  tone: Tone;
  img: string;
}[] = [
  {
    name: "Family Room with Paddy View",
    description: "Wake up to the rice fields.",
    features: "Paddy view",
    occupancy: "5",
    count: "1",
    tone: "gold",
    img: "/assets/photos/room-balcony.jpg",
  },
  {
    name: "Family Room with Pool View",
    description: "Roll out of bed and into the pool.",
    features: "Pool view",
    occupancy: "4",
    count: "2",
    tone: "water",
    img: "/assets/photos/room-bungalow-bed.jpg",
  },
  {
    name: "Apartment Style Family Room",
    description: "Apartment-style space for the whole crew.",
    features: "Apartment style",
    occupancy: "5",
    count: "3",
    tone: "jungle",
    img: "/assets/photos/room-bungalow-bed.jpg",
  },
  {
    name: "Apartment Style Triple Room",
    description: "Apartment-style comfort, made for three.",
    features: "Apartment style",
    occupancy: "3",
    count: "1",
    tone: "gold",
    img: "/assets/photos/room-bungalow-bed.jpg",
  },
  {
    name: "A-Frame Villa Double Room",
    description: "A private double under the iconic A-frame roof.",
    features: "A-frame villa",
    occupancy: "2",
    count: "2",
    tone: "jungle",
    img: "/assets/photos/room-aframe.jpg",
  },
  {
    name: "A-Frame Villa Triple Room",
    description: "A private triple under the iconic A-frame roof.",
    features: "A-frame villa",
    occupancy: "3",
    count: "1",
    tone: "gold",
    img: "/assets/photos/room-aframe.jpg",
  },
];

// Reviews stay hidden until real handles/listings exist (handoff §7).
export const REVIEWS_ENABLED = false;
