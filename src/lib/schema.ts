/**
 * Leisure Land — JSON-LD structured data (SEO Plan doc 09, Phase 3).
 *
 * Builders return plain objects rendered as <script type="application/ld+json">
 * by <JsonLd> (src/components/JsonLd.tsx). One physical venue with three facets,
 * so each deep page carries the schema type that matches it:
 *   - Accommodation → LodgingBusiness
 *   - Day Outing    → AmusementPark (a LocalBusiness subtype: keeps NAP/hours
 *                     valid and is more specific than bare TouristAttraction)
 *   - Food          → Restaurant
 *   - Home          → Organization + WebSite (site-level identity)
 *
 * ⚠️ [CONFIRM] — these are deliberately NOT invented (see doc 09 SD1). Until the
 * founder supplies them, the markup omits them rather than guessing:
 *   • streetAddress / addressLocality / postalCode
 *   • geo latitude & longitude
 *   • openingHours — the site publicly states 9am–10pm daily (contact.hours),
 *     but that conflicts with the day-outing 9am–5pm line; reconcile before trusting.
 *
 * ⚠️ aggregateRating is intentionally ABSENT (doc 09 SD2). Do NOT paste the
 * Facebook/TripAdvisor review counts — Google only permits aggregateRating for
 * reviews collected on THIS site. Enable it only once first-party reviews exist:
 *
 *   // aggregateRating: {
 *   //   "@type": "AggregateRating",
 *   //   ratingValue: "<from on-site reviews>",
 *   //   reviewCount: "<from on-site reviews>",
 *   // },
 */
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIAL_LINKS } from "@/lib/seo";
import { contact, GOOGLE_REVIEWS_URL } from "@/lib/constants";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

// Official profiles (see SOCIAL_LINKS in seo.ts), emitted as sameAs.
const SAME_AS: string[] = SOCIAL_LINKS.map((l) => l.href);

// Shared name/address/phone/hours (NAP) for the venue's business facets.
function businessCore(opts: {
  url: string;
  image: string;
  description: string;
}) {
  return {
    name: SITE_NAME,
    url: opts.url,
    image: abs(opts.image),
    description: opts.description,
    telephone: contact.whatsappDisplay, // +94 77 757 2785
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressRegion: "Southern Province", // near Galle
      // streetAddress / addressLocality / postalCode: [CONFIRM]
    },
    // geo: [CONFIRM] — no coordinates on record; omitted, not invented.
    // Ties the site to the Google Business Profile (same place_id as reviews).
    hasMap: GOOGLE_REVIEWS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00", // [CONFIRM]
      },
    ],
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

export function lodgingBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/accommodation/#lodging`,
    ...businessCore({
      url: `${SITE_URL}/accommodation/`,
      image:
        "/images/accommodation/rooms/family-room-pool-view/poolview-pool-paddy-pro.jpg",
      description:
        "Ten nature rooms tucked into the jungle near Galle — paddy and pool views and a private-jacuzzi A-frame villa, with full water park access on every stay.",
    }),
    // checkinTime / checkoutTime: [CONFIRM]
  };
}

export function amusementParkLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AmusementPark",
    "@id": `${SITE_URL}/day-outing/#park`,
    ...businessCore({
      url: `${SITE_URL}/day-outing/`,
      image: "/images/day-outing/final-cta/pool-paddy-fields-professional.jpg",
      description:
        "A nature-immersed water park day outing near Galle: water slides, waterfall pools, traditional Sri Lankan games and an all-you-can-eat buffet.",
    }),
  };
}

// Events page: a bookable group venue. Multi-typed so it keeps the
// LocalBusiness NAP/hours fields while saying what the page is about.
export function eventVenueLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    "@id": `${SITE_URL}/events/#venue`,
    ...businessCore({
      url: `${SITE_URL}/events/`,
      image: "/images/events/final-cta/aerial-topdown-pools-2019.jpg",
      description:
        "Group venue near Galle for corporate day outings, outbound training, school trips, birthdays and private celebrations, with a water park and Sri Lankan buffet.",
    }),
  };
}

export function restaurantLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/food/#restaurant`,
    ...businessCore({
      url: `${SITE_URL}/food/`,
      image: "/images/sri-lankan-buffet-spread_2.jpg",
      description:
        "Real Sri Lankan food near Galle, cooked from scratch with no artificial flavors — one buffet your way, spicy or mild, plus à la carte all day.",
    }),
    servesCuisine: "Sri Lankan",
    hasMenu: `${SITE_URL}/food/`,
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs("/assets/logo/leisureland-black.png"),
    image: abs(DEFAULT_OG_IMAGE),
    telephone: contact.whatsappDisplay,
    email: contact.email,
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
