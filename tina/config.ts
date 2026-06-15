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
        name: "ourStory",
        label: "Our Story Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: "our-story" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            uploadDir: () => "our-story/hero",
          },
          {
            type: "image",
            name: "landImage",
            label: "The Land",
          },
          {
            type: "image",
            name: "teamImage",
            label: "The Team / People",
          },
        ],
      },
    ],
  },
});
