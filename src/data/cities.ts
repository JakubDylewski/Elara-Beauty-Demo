export interface City {
  slug: string;
  name: string;
  genitive: string;
  travelMinutes: number;
  lead: string;
  metaDescription: string;
}

export const cities: City[] = [
  {
    slug: "gdynia-centrum",
    name: "Gdynia-Centrum",
    genitive: "centrum Gdyni",
    travelMinutes: 5,
    lead: "Jeśli pracujesz lub mieszkasz w centrum Gdyni, masz do nas dosłownie rzut beretem. Świętojańska to główna arteria miasta — trafisz do nas pieszo z okolic dworca albo w kilka minut autem z dowolnego punktu centrum.",
    metaDescription: "Salon beauty w centrum Gdyni — manicure, rzęsy, brwi, pielęgnacja twarzy i masaże. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
  {
    slug: "gdynia-orlowo",
    name: "Gdynia-Orłowo",
    genitive: "Orłowa",
    travelMinutes: 15,
    lead: "Orłowo kojarzy się z molem i klifem, ale to też kawałek Gdyni, z którego do centrum jest bliżej, niż się wydaje. Trasą nadmorską albo SKM dojedziesz do nas bez przesiadek.",
    metaDescription: "Salon beauty dla klientek z Orłowa — manicure hybrydowy, rzęsy, brwi i pielęgnacja twarzy w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę.",
  },
  {
    slug: "gdynia-chylonia",
    name: "Gdynia-Chylonia",
    genitive: "Chyloni",
    travelMinutes: 12,
    lead: "Chylonia leży po przeciwnej stronie miasta niż Śródmieście, ale dzięki dobrej komunikacji dojazd do Świętojańskiej to kwestia kilkunastu minut — autem obwodnicą lub pociągiem SKM.",
    metaDescription: "Salon beauty dla klientek z Chyloni — manicure, rzęsy, brwi i zabiegi na twarz w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
  {
    slug: "gdynia-witomino",
    name: "Gdynia-Witomino",
    genitive: "Witomina",
    travelMinutes: 15,
    lead: "Z Witomina do centrum Gdyni jest bliżej, niż sugeruje odległość na mapie — wystarczy zjechać w dół, w stronę morza, żeby trafić prosto na Świętojańską.",
    metaDescription: "Salon beauty dla klientek z Witomina — manicure, rzęsy, brwi, twarz i masaże w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
  {
    slug: "rumia",
    name: "Rumia",
    genitive: "Rumi",
    travelMinutes: 20,
    lead: "Rumia leży dosłownie za miedzą z Gdynią, a linia SKM łączy oba miasta bez przesiadek. Klientki z Rumi traktują wizytę u nas jak krótki wypad, nie wyprawę.",
    metaDescription: "Salon beauty dla klientek z Rumi — manicure hybrydowy, rzęsy, brwi i pielęgnacja twarzy w Gdyni, kilkanaście minut SKM. Zarezerwuj wizytę.",
  },
  {
    slug: "reda",
    name: "Reda",
    genitive: "Redy",
    travelMinutes: 25,
    lead: "Z Redy do Gdyni jedzie się tą samą trasą SKM, którą codziennie dojeżdżają do pracy mieszkanki miasta — wizyta u nas mieści się w drodze powrotnej bez większego nadkładania.",
    metaDescription: "Salon beauty dla klientek z Redy — manicure, rzęsy, brwi i zabiegi na twarz w Gdyni, dojazd SKM bez przesiadek. Sprawdź ofertę i zarezerwuj wizytę.",
  },
  {
    slug: "wejherowo",
    name: "Wejherowo",
    genitive: "Wejherowa",
    travelMinutes: 35,
    lead: "Wejherowo to kawałek dalej, ale dla wielu klientek regularna wizyta w Gdyni to okazja, żeby połączyć zabieg z zakupami czy spacerem po Śródmieściu. SKM jedzie bezpośrednio, bez przesiadek.",
    metaDescription: "Salon beauty dla klientek z Wejherowa — manicure, rzęsy, brwi i pielęgnacja twarzy w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
  {
    slug: "sopot",
    name: "Sopot",
    genitive: "Sopotu",
    travelMinutes: 20,
    lead: "Sopot i Gdynia to sąsiedzi przez jeden przystanek SKM — wiele naszych klientek z Sopotu umawia się na popołudniowe wizyty po pracy, bez większego kluczenia.",
    metaDescription: "Salon beauty dla klientek z Sopotu — manicure hybrydowy, rzęsy, brwi i masaże w Gdyni, kilkanaście minut SKM. Sprawdź ofertę i zarezerwuj wizytę.",
  },
  {
    slug: "gdansk-oliwa",
    name: "Gdańsk-Oliwa",
    genitive: "Oliwy",
    travelMinutes: 30,
    lead: "Z Oliwy do Gdyni jedzie się tą samą trasą, którą znasz z dojazdów nad morze — SKM albo obwodnica, bez konieczności przejeżdżania przez centrum Gdańska.",
    metaDescription: "Salon beauty dla klientek z Oliwy — manicure, rzęsy, brwi i pielęgnacja twarzy w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
  {
    slug: "gdansk-wrzeszcz",
    name: "Gdańsk-Wrzeszcz",
    genitive: "Wrzeszcza",
    travelMinutes: 35,
    lead: "Wrzeszcz to jedna z lepiej skomunikowanych części Trójmiasta — SKM do Gdyni jedzie stąd sprawnie, bez przesiadek i bez stania w centrum Gdańska.",
    metaDescription: "Salon beauty dla klientek z Wrzeszcza — manicure, rzęsy, brwi i zabiegi na twarz w Gdyni. Sprawdź ofertę ELARA i zarezerwuj wizytę online.",
  },
];
