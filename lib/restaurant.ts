// Single source of truth for restaurant info.
// Editing these values updates the site everywhere.
export const restaurant = {
  name: "Sushi Empire",
  kanji: "寿司帝国",
  tagline: "Where Tokyo meets Madeira.",
  cuisine: "Japanese & Chinese Fusion",
  priceRange: "€30–35 per person · all-you-can-eat",
  rating: { score: 4.2, count: 110, source: "Google" },

  address: {
    street: "Estrada Monumental 340H",
    area: "São Martinho",
    postal: "9000-250 Funchal",
    country: "Madeira, Portugal",
    full: "Estrada Monumental 340H, 9000-250 Funchal, Madeira",
  },

  phone: "+351 291 112 963",
  phoneDisplay: "291 112 963",

  // Opens 12:00, closes 23:00 daily. Edit here to change.
  hours: [
    { day: "Monday", open: "12:00", close: "23:00" },
    { day: "Tuesday", open: "12:00", close: "23:00" },
    { day: "Wednesday", open: "12:00", close: "23:00" },
    { day: "Thursday", open: "12:00", close: "23:00" },
    { day: "Friday", open: "12:00", close: "23:00" },
    { day: "Saturday", open: "12:00", close: "23:00" },
    { day: "Sunday", open: "12:00", close: "23:00" },
  ],

  socials: {
    // TODO: replace with the restaurant's real handles post-signing
    instagram: "https://www.instagram.com/",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Sushi+Empire+Estrada+Monumental+340H+Funchal",
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=Sushi+Empire+Funchal",
  },

  // Standard Google Maps embed — no API key required.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Estrada+Monumental+340H+Funchal&output=embed",
};

export type Restaurant = typeof restaurant;
