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
          },
          {
            type: "image",
            name: "ctaImage",
            label: "Final CTA — Background Image",
          },
        ],
      },
      {
        name: "dayOuting",
        label: "Day Outing Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: "day-outing" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "image",
            name: "junglePlungeImage",
            label: "Activity — Jungle Plunge",
          },
          {
            type: "image",
            name: "tarzanJumpImage",
            label: "Activity — Tarzan Jump",
          },
          {
            type: "image",
            name: "ropeWalkingImage",
            label: "Activity — Rope Walking",
          },
          {
            type: "image",
            name: "waterfallsImage",
            label: "Activity — Waterfalls",
          },
          {
            type: "image",
            name: "coconutClimbImage",
            label: "Activity — Coconut Tree Climbing",
          },
          {
            type: "image",
            name: "kottaPoraImage",
            label: "Activity — Kotta Pora",
          },
          {
            type: "image",
            name: "twisterImage",
            label: "Activity — The Twister",
          },
          {
            type: "image",
            name: "paaruwaImage",
            label: "Activity — Paaruwa Bamboo Raft",
          },
          {
            type: "image",
            name: "treeHouseImage",
            label: "Activity — Tree House",
          },
          {
            type: "image",
            name: "paddySwingsImage",
            label: "Activity — Paddy Field Swings",
          },
          {
            type: "image",
            name: "poolVolleyballImage",
            label: "Activity — Pool Volleyball",
          },
          {
            type: "image",
            name: "poolBasketballImage",
            label: "Activity — Pool Basketball",
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
          },
        ],
      },
      {
        name: "food",
        label: "Food Page",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        match: { include: "food" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "image",
            name: "spicyBuffetImage",
            label: "Spicy Buffet Spread",
          },
          {
            type: "image",
            name: "mildBuffetImage",
            label: "Mild Buffet Spread",
          },
          {
            type: "image",
            name: "kitchenImage",
            label: "Kitchen / Behind the Scenes",
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
