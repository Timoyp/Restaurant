export type Review = {
  author: string;
  meta: string; // "Local Guide · 12 reviews" etc.
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  lang?: "en" | "pt";
};

export const reviews: Review[] = [
  {
    author: "C. K.",
    meta: "travelck · Local Guide",
    when: "a month ago",
    rating: 5,
    quote:
      "I didn't expect this from Madeira. Super fast service, all-you-can-eat for a decent price, and an incredible variety. Came back the next night.",
    lang: "en",
  },
  {
    author: "Svetlana “Kamui” Quindt",
    meta: "Local Guide",
    when: "3 months ago",
    rating: 5,
    quote:
      "Excellent sushi and Chinese cuisine with outstanding quality and flavour. The all-you-can-eat menu is very affordable and offers an impressively wide selection — sushi, sashimi, grilled items, warm dishes, and a generous range of options.",
    lang: "en",
  },
  {
    author: "Ricardo M.",
    meta: "24 reviews",
    when: "2 weeks ago",
    rating: 5,
    quote:
      "O interior é de cinema — cabines verdes, espelhos, luz neon. A comida acompanha o cenário. Peçam o pato e o camarão com alho.",
    lang: "pt",
  },
];
