export const voucherAmounts = [150, 300, 500];

export interface VoucherPackage {
  slug: string;
  name: string;
  includes: string[];
  regularPrice: number;
  packagePrice: number;
  discountLabel: string;
}

export const voucherPackages: VoucherPackage[] = [
  {
    slug: "dzien-dla-niej",
    name: "Dzień dla Niej",
    includes: ["Oczyszczanie manualne twarzy", "Manicure hybrydowy", "Peeling i masaż całego ciała"],
    regularPrice: 590,
    packagePrice: 502,
    discountLabel: "−15%",
  },
  {
    slug: "przed-wielkim-dniem",
    name: "Przed wielkim dniem",
    includes: ["Laminacja brwi + henna", "Lifting rzęs", "Makijaż ślubny próbny"],
    regularPrice: 510,
    packagePrice: 434,
    discountLabel: "−15%",
  },
  {
    slug: "mama-i-corka",
    name: "Mama i córka",
    includes: ["Oczyszczanie manualne twarzy — Mama", "Oczyszczanie manualne twarzy — Córka"],
    regularPrice: 360,
    packagePrice: 306,
    discountLabel: "−15%",
  },
];
