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
          allowedActions: { create: false, delete: false },
        },
        match: { include: "accommodation" },
        fields: [
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "image",
            name: "paddyViewRoomImage",
            label: "Room — Family Room Paddy View",
          },
          {
            type: "image",
            name: "poolViewRoomImage",
            label: "Room — Family Room Pool View",
          },
          {
            type: "image",
            name: "apartmentRoomImage",
            label: "Room — Apartment Style Family Room",
          },
          {
            type: "image",
            name: "tripleRoomImage",
            label: "Room — Apartment Style Triple Room",
          },
          {
            type: "image",
            name: "aframeDoubleImage",
            label: "Room — A-Frame Villa Double Room",
          },
          {
            type: "image",
            name: "aframeTripleImage",
            label: "Room — A-Frame Villa Triple Room",
          },
          {
            type: "image",
            name: "aframeVillaImage",
            label: "Room — A-Frame Villa with Jacuzzi (full villa)",
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
