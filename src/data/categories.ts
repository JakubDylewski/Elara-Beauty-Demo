export interface Category {
  name: string;
  slug: string;
  priceFrom: number;
}

export const categories: Category[] = [
  { name: "Pielęgnacja twarzy", slug: "twarz", priceFrom: 150 },
  { name: "Stylizacja paznokci", slug: "paznokcie", priceFrom: 120 },
  { name: "Rzęsy i brwi", slug: "rzesy-brwi", priceFrom: 90 },
  { name: "Depilacja", slug: "depilacja", priceFrom: 60 },
  { name: "Ciało i masaże", slug: "cialo-masaze", priceFrom: 180 },
  { name: "Makijaż", slug: "makijaz", priceFrom: 200 },
];
