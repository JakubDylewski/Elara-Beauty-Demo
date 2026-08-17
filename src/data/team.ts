export interface TeamMember {
  name: string;
  specialization: string;
  slug: string;
  categorySlug: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Ola",
    specialization: "Stylizacja paznokci",
    slug: "ola",
    categorySlug: "paznokcie",
    bio: "Manicure i pedicure hybrydowy, przedłużanie żelem — precyzyjna, cierpliwa, uwielbia detale.",
  },
  {
    name: "Magda",
    specialization: "Rzęsy i brwi",
    slug: "magda",
    categorySlug: "rzesy-brwi",
    bio: "Laminacje, lifting rzęs i przedłużanie — dba, żeby efekt był naturalny, nie sztuczny.",
  },
  {
    name: "Kasia",
    specialization: "Kosmetologia",
    slug: "kasia",
    categorySlug: "twarz",
    bio: "Pielęgnacja twarzy i zabiegi liftingujące — tłumaczy skórę językiem, który rozumie każda klientka.",
  },
  {
    name: "Natalia",
    specialization: "Depilacja",
    slug: "natalia",
    categorySlug: "depilacja",
    bio: "Depilacja woskiem, laserem i cukrem — szybko, delikatnie, bez niezręcznych sytuacji.",
  },
  {
    name: "Ewa",
    specialization: "Masaże i rytuały ciała",
    slug: "ewa",
    categorySlug: "cialo-masaze",
    bio: "Masaże relaksacyjne i zabiegi na ciało — jej stanowisko to najcichszy kąt salonu.",
  },
  {
    name: "Zuzia",
    specialization: "Makijaż i stylizacje",
    slug: "zuzia",
    categorySlug: "makijaz",
    bio: "Makijaż dzienny, wieczorowy i ślubny — od próby po sam wielki dzień.",
  },
];
