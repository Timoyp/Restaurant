// Curated Unsplash placeholders. All marked for replacement with real
// photography post-signing. Each `src` is a base URL; use `img()` to
// request a sized version.
// TODO: replace all URLs with real Sushi Empire photography post-signing.

type ImageEntry = { id: string; alt: string };

const base = (id: string) => `https://images.unsplash.com/${id}`;

export const img = (id: string, w = 1600, q = 80) =>
  `${base(id)}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: {
    id: "photo-1579584425555-c3ce17fd4351",
    alt: "Close-up of nigiri sushi plated under warm directional light.",
  },
  interior: {
    id: "photo-1514933651103-005eec06c04b",
    alt: "Dark, moody restaurant interior with green ambient lighting.",
  },
  chefSelection: {
    id: "photo-1611143669185-af224c5e3252",
    alt: "Assorted sashimi platter with maki rolls, plated on dark slate.",
  },

  // Dish imagery, mapped by dish id
  dishes: {
    // Warm Chinese dishes — close-ups of stir-fries, duck, prawns
    P1: { id: "photo-1623689046286-01d812bcd279", alt: "Spicy chicken stir-fry in a black bowl." },
    P2: { id: "photo-1582878826629-29b7ad1cdc43", alt: "Sweet and sour chicken over white rice." },
    P3: { id: "photo-1585032226651-759b368d7246", alt: "Chicken with bamboo shoots and mushrooms." },
    P4: { id: "photo-1603133872878-684f208fb84b", alt: "Chicken with toasted almonds." },
    P5: { id: "photo-1606756790138-261d2b21cd75", alt: "Lemon chicken with crisp coating." },
    P6: { id: "photo-1544025162-d76694265947", alt: "Beef with bamboo and mushrooms." },
    P7: { id: "photo-1534422298391-e4f8c172dddb", alt: "Spicy beef stir-fry with chili." },
    P9: { id: "photo-1525755662778-989d0524087e", alt: "Peking duck slices with scallion." },
    P10: { id: "photo-1582450871972-ab5ca641643d", alt: "Duck breast with orange glaze." },
    P11: { id: "photo-1625944228741-61cbd27d1bff", alt: "Clams in a garlic broth." },
    P12: { id: "photo-1625938144755-6539fe4b4473", alt: "Salt and pepper prawns." },
    P16: { id: "photo-1559339352-11d035aa65de", alt: "Garlic prawns with parsley." },

    // Hot pot
    PF1: { id: "photo-1541833172-e7c8e74ef0e1", alt: "Hot pot with prawns." },
    PF2: { id: "photo-1552611052-33e04de081de", alt: "Beef hot pot, bubbling." },
    PF3: { id: "photo-1511690743698-d9d85f2fbf38", alt: "Vegetable hot pot with leafy greens." },

    // Sushi / sashimi
    SN: { id: "photo-1617196701537-7329482cc9fe", alt: "Salmon nigiri on a wooden board." },
    TN: { id: "photo-1553830591-fddf7f1ff85d", alt: "Tuna nigiri, bright red over rice." },
    EN: { id: "photo-1589778655375-3e622a9fc91c", alt: "Prawn (ebi) nigiri." },
    DR: { id: "photo-1617196039897-c96cda37826e", alt: "Dragon roll with avocado scales." },
    RR: { id: "photo-1563612116625-3012372fccce", alt: "Rainbow roll with assorted fish on top." },
    ST: { id: "photo-1607247098740-64beaec3a3f4", alt: "Spicy tuna roll cut into rounds." },
    SS: { id: "photo-1534482421-64566f976cfa", alt: "Salmon sashimi fanned on ice." },
    CP: { id: "photo-1579952363873-27f3bade9f55", alt: "Chef's sushi platter, large presentation." },
  } satisfies Record<string, ImageEntry>,
};
