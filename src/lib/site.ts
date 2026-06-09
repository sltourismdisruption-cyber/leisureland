/**
 * Central site settings for Leisure Land.
 *
 * 👉 NON-TECHNICAL NOTE: This is the one file to edit when contact details change.
 *    Update the WhatsApp number below once and every button on the site updates.
 */

export const site = {
  name: "Leisure Land",
  tagline: "Sri Lanka's Nature-Inspired Water Park",

  // ⚠️ PLACEHOLDER — replace with the real WhatsApp Business number.
  // Format: country code + number, digits only, no "+", spaces, or dashes.
  // Example for Sri Lanka: "94771234567"
  whatsappNumber: "94000000000",

  email: "hello@leisureland.lk",
  domain: "leisureland.lk",
} as const;

/**
 * Builds a "click to chat" WhatsApp link with a pre-filled message.
 * Opens WhatsApp (app or web) with the message already typed in.
 */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

// Pre-filled messages used by CTA buttons around the site.
export const whatsappMessages = {
  bookDay:
    "Hi! I'd like to book a day pass at Leisure Land. When are you available?",
} as const;
