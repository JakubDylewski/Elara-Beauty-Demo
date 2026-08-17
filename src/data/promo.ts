export interface Promo {
  slug: string;
  label: string;
  title: string;
  description: string;
  endDate: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

export const promos: Promo[] = [
  {
    slug: "laminacja-henna",
    featured: true,
    label: "Promocja miesiąca",
    title: "Sierpień: laminacja brwi + henna −20%",
    description:
      "Podkreśl spojrzenie przed jesienią — pakiet zabiegów w cenie niższej o jedną piątą.",
    endDate: "2026-08-31",
    ctaLabel: "Rezerwuję w tej cenie",
    ctaHref: "/kontakt?promo=laminacja-henna",
  },
  {
    slug: "kolezanka-manicure",
    label: "Promocja",
    title: "Przyprowadź koleżankę — drugi manicure hybrydowy −15%",
    description: "Umówcie się razem na tę samą wizytę, a druga stylizacja kosztuje mniej.",
    endDate: "2026-08-31",
    ctaLabel: "Umawiam wizytę",
    ctaHref: "/kontakt?promo=kolezanka-manicure",
  },
  {
    slug: "laser-pakiet",
    label: "Promocja sezonowa",
    title: "Depilacja laserowa — pakiet 6 zabiegów w cenie 5",
    description: "Zaplanuj pełną serię i zaoszczędź na ostatnim zabiegu w pakiecie.",
    endDate: "2026-09-30",
    ctaLabel: "Pytam o pakiet",
    ctaHref: "/kontakt?promo=laser-pakiet",
  },
];

export const featuredPromo = promos.find((promo) => promo.featured) ?? promos[0];

export function daysUntil(endDate: string): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.ceil((new Date(endDate).getTime() - Date.now()) / msPerDay));
}
