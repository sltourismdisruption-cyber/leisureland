import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "redesign-v5",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live homepage for click-on-the-page editing.
          router: () => "/",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "home" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero — Main Background Image",
            uploadDir: () => "home/hero",
          },
          {
            type: "string",
            name: "videoId",
            label: "Watch Section — Vimeo Video ID (digits only, e.g. 1205956354)",
          },
          {
            type: "image",
            name: "activitiesSpotlight",
            label: "Activities — Rope Walk Spotlight",
          },
          {
            type: "image",
            name: "activitiesTiles",
            label:
              "Activities — Tile Grid (6: Kotta Pora, Tarzan jump, Paddy swings, Waterfall pools, Tree house, Slides)",
            list: true,
          },
          {
            type: "image",
            name: "foodHero",
            label: "Food — Buffet Hero",
            uploadDir: () => "home/food",
          },
          {
            type: "image",
            name: "foodDetails",
            label: "Food — Detail Tiles (3: curry pots, string hoppers, from our gardens)",
            list: true,
          },
          {
            type: "image",
            name: "stayRooms",
            label: "Stay — Room Tiles (3: standard, spacious, A-frame suite)",
            list: true,
          },
          {
            type: "image",
            name: "stayExperiences",
            label: "Stay — Hands-on Experiences (4: cinnamon, tea, hibiscus, fruit)",
            list: true,
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "home/final-cta",
          },
        ],
      },
      {
        name: "dayOuting",
        label: "Day Outing Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live /day-outing page for click-on-the-page editing.
          router: () => "/day-outing",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "day-outing" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            uploadDir: () => "day-outing/hero",
          },
          {
            type: "image",
            name: "moments",
            label: "Day-flow Moments (6, in page order)",
            list: true,
          },
          {
            type: "image",
            name: "activities",
            label: "Activities (12, in page order)",
            list: true,
          },
          {
            type: "image",
            name: "buffetHero",
            label: "Buffet — Wide Spread",
          },
          {
            type: "image",
            name: "spicyPlate",
            label: "Buffet — Spicy Plate",
          },
          {
            type: "image",
            name: "mildPlate",
            label: "Buffet — Mild Plate",
          },
          {
            type: "image",
            name: "foodShots",
            label: "Food Detail Shots (3)",
            list: true,
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "day-outing/final-cta",
          },
        ],
      },
      {
        name: "accommodation",
        label: "Accommodation Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live /accommodation page so editors can click images
          // directly on the page (contextual / visual editing).
          router: () => "/accommodation",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "accommodation" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero — Main Background Image",
            uploadDir: () => "accommodation/hero",
          },
          {
            type: "object",
            name: "rooms",
            label: "Rooms",
            list: true,
            ui: {
              itemProps: (item: { roomName?: string }) => ({
                label: item?.roomName || "Room",
              }),
            },
            fields: [
              {
                type: "string",
                name: "roomName",
                label: "Room Name",
              },
              {
                type: "image",
                name: "gallery",
                label: "Gallery (add, remove or reorder photos)",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "wholeVilla",
            label: "Whole A-Frame Villa",
            fields: [
              {
                type: "image",
                name: "gallery",
                label: "Gallery (add, remove or reorder photos)",
                list: true,
              },
            ],
          },
          {
            type: "image",
            name: "natureWalk",
            label: "Nature Walk Photos",
            list: true,
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "accommodation/final-cta",
          },
        ],
      },
      {
        name: "food",
        label: "Food Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live /food page for click-on-the-page editing.
          router: () => "/food",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "food" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            uploadDir: () => "food/hero",
          },
          {
            type: "image",
            name: "spicyPlate",
            label: "Spicy Plate",
          },
          {
            type: "image",
            name: "mildPlate",
            label: "Mild Plate",
          },
          {
            type: "image",
            name: "buffetSpread",
            label: "Buffet — Wide Spread",
          },
          {
            type: "image",
            name: "showcase",
            label: "Eating the LL Way (3: buffet, evening tea, fruit)",
            list: true,
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "food/final-cta",
          },
        ],
      },
      {
        name: "events",
        label: "Events Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live /events page for click-on-the-page editing.
          router: () => "/events",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "events" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            uploadDir: () => "events/hero",
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "events/final-cta",
          },
        ],
      },
      {
        name: "ourStory",
        label: "Our Story Page",
        path: "content/pages",
        format: "json",
        ui: {
          // Opens the live /our-story page for click-on-the-page editing.
          router: () => "/our-story",
          allowedActions: { create: false, delete: false },
        },
        match: { include: "our-story" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero — The Land at Golden Hour (wide)",
            uploadDir: () => "our-story/hero",
          },
          {
            type: "image",
            name: "originImage",
            label: "Where It Began (hands & the land, portrait)",
          },
          {
            type: "image",
            name: "stayImage",
            label: "Stay Ethos — Not Just a Bed (portrait)",
          },
          {
            type: "image",
            name: "playImage",
            label: "Play Ethos — Adventure (portrait)",
          },
          {
            type: "image",
            name: "natureImage",
            label: "Nature as Partner (portrait)",
          },
          {
            type: "image",
            name: "kottaPora",
            label: "Tradition — Kotta Pora (log pillow fight)",
          },
          {
            type: "image",
            name: "ropes",
            label: "Tradition — Toddy Tapper's Ropes",
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
            uploadDir: () => "our-story/final-cta",
          },
        ],
      },
    ],
  },
});
