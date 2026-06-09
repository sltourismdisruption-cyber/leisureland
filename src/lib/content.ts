/* ============================================================
   Leisure Land — page content (from the Master Content Brief v1.0)
   Edit copy, prices and lists here in one place.
   ============================================================ */

export const PHOTO = "/assets/photos/";

export type Activity = { img: string; kind: "water" | "jungle" | "culture"; tag: string; title: string; body: string };

export const ACTIVITIES: Activity[] = [
  { img: "slide.jpg", kind: "water", tag: "Big thrill", title: "Speed Slide", body: "For the adrenaline chasers — drop fast and land in the pool." },
  { img: "aerial-pools.jpg", kind: "water", tag: "All ages", title: "Family Slide", body: "Gentler, wider and just as fun — perfect for the little ones." },
  { img: "waterfall-jump.jpg", kind: "water", tag: "Cool off", title: "Waterfall Pools", body: "Bathe under flowing water in our spring-fed jungle pools." },
  { img: "pool-volleyball.jpg", kind: "water", tag: "Team it up", title: "Pool Volleyball & Basketball", body: "Net across the water and a floating hoop — pick your side." },
  { img: "natural-waterfall.jpg", kind: "jungle", tag: "Adventure", title: "Cable Bridges", body: "Walk through the jungle canopy on swaying rope bridges." },
  { img: "coconut-climb.jpg", kind: "jungle", tag: "Adventure", title: "Tree House", body: "Just because every jungle needs one. Climb up and take it in." },
  { img: "rope-swing.jpg", kind: "culture", tag: "Traditional", title: "Traditional Rope Walking", body: "The ancient toddy-tapper balance walk — feet on one rope, hands on the top, across like our ancestors did." },
  { img: "hero-lagoon.jpg", kind: "jungle", tag: "Adventure", title: "Paddy-Field Swings", body: "Swing out over the rice fields with the valley below you." },
  { img: "rope-swing.jpg", kind: "water", tag: "Classic", title: "Tarzan Jump", body: "Grab the rope, swing out and let go straight into the pool." },
  { img: "pool-volleyball.jpg", kind: "culture", tag: "Traditional", title: "Kotta Pora — Pillow Fight", body: "The Sri Lankan New Year game: balance on a trunk over the pool and pillow-fight till one of you falls in." },
];

export const STAY_EXPERIENCES = [
  { icon: "leaf", title: "Pluck Ceylon cinnamon", body: "Straight from the tree — Sri Lanka's gift to the world." },
  { icon: "cup-soda", title: "Pick & brew Ceylon tea", body: "Pick true tea leaves by hand and brew your own cup of green tea." },
  { icon: "flower-2", title: "Make a shoe-flower drink", body: "Traditional hibiscus drink, made from scratch with your own hands." },
  { icon: "apple", title: "Pluck tropical fruit", body: "Eat it straight off the tree, picked from our own land." },
  { icon: "footprints", title: "Guided nature walks", body: "Wander our jungle property with someone who knows every leaf." },
  { icon: "chef-hat", title: "Cook your own meals", body: "Cook in your villa, or have us cook for you. Your call." },
];

export type Lodge = {
  img: string; name: string; place: string; sleeps: string;
  price: string; lkr: string; peak: string; tags: string[];
};

export const LODGES: Lodge[] = [
  { img: "room-bungalow-bed.jpg", name: "Standard Family Room", place: "The Bungalow", sleeps: "Sleeps up to 4", price: "$85", lkr: "LKR 20,000", peak: "Peak season from $135", tags: ["Paddy-field view", "Fan + net", "Hot water"] },
  { img: "room-balcony.jpg", name: "Spacious Family Room", place: "The Bungalow", sleeps: "Sleeps up to 5", price: "$110", lkr: "LKR 25,000", peak: "Peak season from $160", tags: ["Private balcony", "Kitchenette", "Jungle view"] },
  { img: "room-aframe.jpg", name: "The A-Frame Suite", place: "3 connected rooms", sleeps: "Sleeps up to 7", price: "$310", lkr: "LKR 63,000", peak: "Peak season from $470", tags: ["Whole A-frame", "Rent by room", "Canopy views"] },
];

export const NEARBY = [
  { icon: "umbrella", name: "Unawatuna Beach", time: "~15 min" },
  { icon: "landmark", name: "Galle Fort (UNESCO)", time: "~20 min" },
  { icon: "shell", name: "Turtle Hatchery", time: "~20 min" },
  { icon: "palmtree", name: "Coconut Tree Hill", time: "~25 min" },
  { icon: "trees", name: "Jungle Beach", time: "~20 min" },
  { icon: "fish", name: "Stilt fishermen", time: "~25 min" },
];

export const ARRANGE = [
  { icon: "car-taxi-front", text: "Tuk tuks & taxi trips to anywhere in Galle" },
  { icon: "bike", text: "Bicycle rentals (arrange ahead — just let us know)" },
  { icon: "map", text: "Insider tips on hidden spots most tourists never find" },
  { icon: "compass", text: "Custom day plans — tell us what you like" },
];

export const REVIEWS = [
  { name: "Hannah M.", from: "United Kingdom", stars: 5, quote: "Genuinely magical. The kids did not want to leave — slides, rope swings and the friendliest staff. Felt completely surrounded by jungle." },
  { name: "Tomáš K.", from: "Czechia", stars: 5, quote: "A hidden gem 10 minutes from Galle. We came for the day and ended up staying two nights. Best food I had in Sri Lanka — and I didn't cry once!" },
  { name: "Aisha R.", from: "Sri Lanka", stars: 5, quote: "Took the whole family for my son's birthday. Safe shallow pool for the little one, big slides for the teens, and we learned to walk the toddy rope. Brilliant." },
];

export const FAQS = [
  { q: "What should I bring?", a: "Swimwear, towel, sunscreen and a change of clothes. Lockers are available on site." },
  { q: "Is it safe for kids?", a: "Yes — kid-friendly pools, lifeguards on duty, and family slides kept separate from the speed slides." },
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome, but WhatsApp ahead to guarantee a spot on weekends and holidays." },
  { q: "What time are you open?", a: "The water park is open 9 AM to 10 PM daily. The 10-foot deep pool closes at 6 PM for safety (it gets too dark)." },
  { q: "Is the food really not spicy?", a: "We run a non-spicy buffet line specifically for foreign guests — plus spicy options if you're feeling brave." },
  { q: "Vegetarian, vegan or gluten-free?", a: "All accommodated. Just message us in advance and we'll sort it out for you." },
  { q: "Do you serve alcohol?", a: "Yes — but no adventure pool or activity access after drinking. Safety first. Day guests can drink after 2 PM." },
  { q: "Are there quiet hours for accommodation guests?", a: "Yes — no loud sounds after 10 PM. We protect the calm so everyone can enjoy the nature." },
  { q: "What if it rains?", a: "We handle it case by case — just WhatsApp us and we'll sort you out fairly." },
  { q: "Can I rent a bicycle to explore?", a: "Yes — bicycle rentals are available with advance arrangement. Let us know on WhatsApp and we'll have one ready." },
  { q: "Is there parking?", a: "Yes, free on-site parking." },
  { q: "How do I book accommodation?", a: "WhatsApp us with your dates and group size. Booking direct saves you up to 30% vs the OTAs." },
];

export const DIRECTIONS = [
  { from: "Galle Fort", time: "~20 min", note: "Rs. 1,500 by tuk tuk" },
  { from: "Unawatuna", time: "~30 min", note: "Easy coast run" },
  { from: "Mirissa", time: "~45 min", note: "Straight down the coast" },
  { from: "Colombo", time: "~2 hrs", note: "Southern Expressway · 10 min from the exit" },
];

export const WA = {
  book: "Hi! I'd like to book a day pass at Leisure Land. When are you available?",
  galle: "Hi! We'll be in Galle for a few days — can you help us plan things to do?",
  directions: "Hi! Could you send me a location pin / arrange a tuk tuk pickup to Leisure Land?",
};
