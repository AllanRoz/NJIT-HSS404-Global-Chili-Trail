export const tradeRoutes = [
  // PRIMARY ORIGIN ROUTES
  { fromId: 1, toId: 7 }, // Mesoamerica → Spain
  { fromId: 1, toId: 13 }, // Mesoamerica → Caribbean
  { fromId: 1, toId: 14 }, // Mesoamerica → Peru
  { fromId: 1, toId: 17 }, // Mesoamerica → Argentina

  // EUROPEAN COLONIAL ROUTES
  { fromId: 7, toId: 6 }, // Spain → Portugal
  { fromId: 7, toId: 12 }, // Spain → Italy

  // PORTUGUESE GLOBAL CHILI DIFFUSION (main hub)
  { fromId: 6, toId: 3 }, // Portugal → India (Goa)
  { fromId: 6, toId: 8 }, // Portugal → West Africa
  { fromId: 6, toId: 16 }, // Portugal → Morocco
  { fromId: 6, toId: 21 }, // Portugal → Indonesia
  { fromId: 6, toId: 19 }, // Portugal → Philippines

  // ASIAN OVERLAND + REGIONAL DIFFUSION
  { fromId: 3, toId: 2 }, // India → Thailand
  { fromId: 3, toId: 4 }, // India → Sichuan, China
  { fromId: 3, toId: 10 }, // India → Korea

  // NATIVE AMERICAS ROUTES
  { fromId: 13, toId: 20 }, // Caribbean → Chile region

  // AFRICAN INTERNAL SPREAD
  { fromId: 8, toId: 18 }, // West Africa → Nigeria
];
