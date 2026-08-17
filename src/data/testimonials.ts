export interface Testimonial {
  name: string;
  stars: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Karolina N.",
    stars: 5,
    text: "Ola zrobiła najpiękniejsze migdałki w moim życiu. Trzymają się już czwarty tydzień, ani jednego odprysku.",
  },
  {
    name: "Agnieszka W.",
    stars: 5,
    text: "Magda i laminacja brwi — totalna zmiana spojrzenia. Umawiam się do niej regularnie, zawsze na czas i z klasą.",
  },
  {
    name: "Marta K.",
    stars: 5,
    text: "Oczyszczanie wodorowe u Kasi to inny poziom. Skóra po zabiegu wygląda jak po tygodniu urlopu.",
  },
  {
    name: "Dominika R.",
    stars: 5,
    text: "Depilacja laserowa u Natalii — bezboleśnie, szybko, zero czekania. Polecam każdej koleżance.",
  },
  {
    name: "Basia S.",
    stars: 5,
    text: "Masaż relaksacyjny u Ewy to godzina, po której naprawdę czuję różnicę. Wnętrze też robi klimat.",
  },
  {
    name: "Julia P.",
    stars: 5,
    text: "Zuzia zrobiła mi makijaż na wesele koleżanki — trzymał się do rana i wyglądał dokładnie tak, jak chciałam.",
  },
];
