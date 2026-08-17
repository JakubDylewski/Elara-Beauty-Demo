export interface CategoryContent {
  intro: string;
  faq: { question: string; answer: string }[];
  gallery: string[];
}

export const categoryContent: Record<string, CategoryContent> = {
  twarz: {
    intro:
      "Skóra twarzy zasługuje na regularną pielęgnację dopasowaną do jej aktualnych potrzeb. Łączymy nowoczesne technologie z klasycznymi zabiegami kosmetologicznymi, by efekt był widoczny od pierwszej wizyty. Dobierzemy zabieg razem z Tobą — od głębokiego oczyszczenia po lifting bez skalpela.",
    faq: [
      {
        question: "Jak często warto robić zabiegi na twarz?",
        answer:
          "Zależnie od zabiegu i typu skóry — zwykle raz na 4–6 tygodni, a przy pielęgnacji przeciwtrądzikowej częściej.",
      },
      {
        question: "Czy zabiegi są bolesne?",
        answer:
          "Większość zabiegów jest bezbolesna lub lekko odczuwalna; o ewentualnym dyskomforcie zawsze informujemy przed rozpoczęciem.",
      },
      {
        question: "Jak długo utrzymuje się efekt po zabiegu?",
        answer:
          "W zależności od rodzaju zabiegu efekt utrzymuje się od kilku dni do kilku tygodni — dobierzemy plan pielęgnacji, który go przedłuży.",
      },
    ],
    gallery: ["Oczyszczanie wodorowe", "Peeling chemiczny", "Mezoterapia mikroigłowa", "Zabieg liftingujący RF"],
  },
  paznokcie: {
    intro:
      "Manicure i pedicure to u nas coś więcej niż lakier — to precyzja, trwałość i higiena na najwyższym poziomie. Stylistki pracują na sprawdzonych markach produktów i dbają o zdrowie płytki paznokcia przy każdej wizycie. Wybierz kolor, kształt i technikę — resztą zajmiemy się my.",
    faq: [
      {
        question: "Ile trzyma się manicure hybrydowy?",
        answer: "Zwykle 3–4 tygodnie, w zależności od tempa odrostu i pielęgnacji na co dzień.",
      },
      {
        question: "Czy przedłużanie żelem niszczy naturalną płytkę?",
        answer: "Nie, jeśli jest prawidłowo wykonane i zdejmowane — dbamy o bezpieczne aplikacje i zdejmowanie stylizacji.",
      },
      {
        question: "Jak często robić uzupełnienie?",
        answer: "Rekomendujemy co 3–4 tygodnie, aby paznokcie wyglądały estetycznie i zachowały zdrowie płytki.",
      },
    ],
    gallery: ["Manicure hybrydowy", "Przedłużanie żelem", "Zdobienia i cieniowanie", "Pedicure spa"],
  },
  "rzesy-brwi": {
    intro:
      "Wyrazisty wzrok to jeden z najszybszych sposobów na odświeżenie całej twarzy. Laminujemy, przedłużamy i stylizujemy rzęsy oraz brwi metodami dobranymi do naturalnego kształtu Twojej twarzy. Efekt utrzymuje się tygodniami — bez codziennego tuszowania.",
    faq: [
      {
        question: "Czym różni się laminacja od liftingu?",
        answer:
          "Laminacja dotyczy brwi (przyczesanie i utrwalenie włosków), lifting — rzęs (uniesienie i podkręcenie); często łączy się je w jednej wizycie.",
      },
      {
        question: "Czy przedłużanie rzęs jest bezpieczne?",
        answer:
          "Tak, przy prawidłowej aplikacji i dobrej jakości materiałach — używamy hipoalergicznego kleju i dbamy o kondycję rzęs naturalnych.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer:
          "Laminacja brwi i lifting rzęs utrzymują się 6–8 tygodni, przedłużanie rzęs wymaga uzupełnień co 2–3 tygodnie.",
      },
    ],
    gallery: ["Laminacja brwi", "Lifting rzęs", "Przedłużanie rzęs 1:1", "Makijaż permanentny brwi"],
  },
  depilacja: {
    intro:
      "Gładka skóra na dłużej — depilację woskiem, cukrem i laserem wykonujemy z dbałością o komfort i higienę. Dobierzemy metodę do Twojego typu skóry i oczekiwanego efektu, od pojedynczego zabiegu po pełną serię laserową.",
    faq: [
      {
        question: "Która metoda depilacji jest najbardziej trwała?",
        answer:
          "Depilacja laserowa daje najbardziej długotrwały efekt redukcji owłosienia, ale wymaga serii kilku–kilkunastu zabiegów.",
      },
      {
        question: "Czy depilacja woskiem boli?",
        answer:
          "Odczucia są indywidualne, zwykle to krótki dyskomfort — stosujemy wosk niskotemperaturowy, który minimalizuje podrażnienia.",
      },
      {
        question: "Jak przygotować się do depilacji laserowej?",
        answer:
          "Warto unikać opalania i wyskubywania włosków przed zabiegiem — szczegółowe zalecenia przekażemy przy rezerwacji.",
      },
    ],
    gallery: ["Depilacja woskiem", "Depilacja laserowa", "Depilacja cukrowa"],
  },
  "cialo-masaze": {
    intro:
      "Chwila oddechu w środku tygodnia albo pełny rytuał relaksu na weekend — masaże i zabiegi na ciało dopasowujemy do Twojego celu: odprężenia, modelowania sylwetki albo poprawy kondycji skóry. Pracujemy w spokojnych, kameralnych gabinetach.",
    faq: [
      {
        question: "Jaki masaż wybrać na start?",
        answer:
          "Jeśli szukasz relaksu — klasyczny masaż całego ciała; przy napięciu mięśni polecamy masaż bańką chińską lub gorącymi kamieniami.",
      },
      {
        question: "Ile zabiegów potrzeba na efekt antycellulitowy?",
        answer:
          "Zwykle rekomendujemy serię 8–10 zabiegów co 5–7 dni, by uzyskać widoczną poprawę jędrności skóry.",
      },
      {
        question: "Czy masaż drenujący jest bolesny?",
        answer: "Nie, to delikatna technika — działa poprzez łagodny, rytmiczny ucisk pobudzający krążenie limfy.",
      },
    ],
    gallery: ["Masaż relaksacyjny", "Masaż gorącymi kamieniami", "Zabieg antycellulitowy", "Owinięcie algowe"],
  },
  makijaz: {
    intro:
      "Makijaż okolicznościowy, ślubny albo na sesję zdjęciową — stylizujemy tak, by trzymał się cały dzień i dobrze wyglądał na zdjęciach. Dobieramy technikę do typu urody i charakteru wydarzenia, zawsze zaczynając od rozmowy o oczekiwaniach.",
    faq: [
      {
        question: "Czy warto zrobić próbny makijaż ślubny?",
        answer: "Zdecydowanie — pozwala dopracować szczegóły i uniknąć niespodzianek w dniu ślubu.",
      },
      {
        question: "Jak długo trzyma się makijaż wieczorowy?",
        answer: "Przy prawidłowej pielęgnacji skóry i utrwaleniu — nawet 8–10 godzin.",
      },
      {
        question: "Czy robicie makijaż dla grup (np. druhen)?",
        answer: "Tak, organizujemy stylizacje grupowe — umów termin z wyprzedzeniem, zwłaszcza w sezonie ślubnym.",
      },
    ],
    gallery: ["Makijaż dzienny", "Makijaż wieczorowy", "Makijaż ślubny", "Sesja zdjęciowa"],
  },
};
