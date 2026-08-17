# ELARA — INSTYTUT URODY · SPECYFIKACJA DEMO (GRUPA 3: SALON BEAUTY)

> **Czym jest ten dokument:** kompletna specyfikacja strony-demo dla fikcyjnego instytutu urody, budowanej jako drugi produkt demonstracyjny agencji Connectiva (pierwszy: Klinika Aurelia — medycyna estetyczna). Metodyka identyczna jak przy Aurelii: budowa etapami w Claude Code, jeden etap naraz, commit po każdym, audyt mobilny jako twardy wymóg.
>
> **Grupa docelowa klientów agencji:** salony beauty i instytuty urody — wielousługowe (paznokcie, rzęsy, brwi, kosmetyka twarzy, depilacja, masaże), z zespołem kilku specjalistek. Z listy leadów: Mi Bella, Instytut BeYOUtiful, House of Beauty, Balola, Blossom, Essence Beauty, Cosmetic Masters.
>
> **Podstawa projektowa:** analiza strony J'ADORE Instytut (czołówka rankingów, wzorzec premium w tej niszy) + rankingi salonów 2026 + wcześniejszy research rynku (Lokal360, WebyJuice — produktyzacja „strona + rezerwacja bez prowizji").

---

## 0. KLUCZOWE RÓŻNICE WZGLĘDEM AURELII (przeczytaj zanim zbudujesz cokolwiek)

| | AURELIA (klinika lekarska) | ELARA (salon beauty) |
|---|---|---|
| Klientka | NIE ZNA zabiegów, ma problem, decyduje tygodniami | WIE czego chce („hybryda", „laminacja brwi"), decyduje w minuty |
| Ścieżka | problem → edukacja → konsultacja → zapis | usługa → cena → termin → rezerwacja |
| Serce strony | moduł „Dobierz zabieg" + strony edukacyjne | **CENNIK z filtrem na żywo** + szybka rezerwacja |
| Prawo | zakaz reklamy świadczeń (art. 14) — tylko informacja | **reklama DOZWOLONA** — promocje, pakiety, rabaty, zegary |
| Ton | spokojny, kliniczny, edukacyjny | ciepły, energiczny, sprzedażowy (ale wciąż premium, nie bazarowy) |
| Częstotliwość wizyt | raz na kilka miesięcy | co 3–4 tygodnie (paznokcie, brwi) — stała klientka |
| Produkty dodatkowe | — | **vouchery prezentowe, pakiety/karnety, eventy (panieńskie)** |
| Rezerwacja | formularz + konsultacja | formularz z wyborem usługi (docelowo: widżet Booksy klienta) |

**Zasada nadrzędna:** klientka ma znaleźć usługę, cenę i drogę do rezerwacji w mniej niż 30 sekund. Wszystko inne jest dodatkiem.

---

## 1. MARKA (fikcyjna)

- **Nazwa:** ELARA — Instytut Urody *(nazwa dystynktywna; przed użyciem u klienta sprawdzić kolizje lokalne)*
- **Miasto:** Gdynia, ul. Świętojańska 82 (fikcyjny adres na głównej ulicy handlowej — teren sprzedażowy Connectivy: Trójmiasto)
- **Telefon demo:** 512 340 219 · e-mail: rezerwacje@elara-beauty.pl (fikcyjne)
- **Claim:** „Twój czas na piękno."
- **Charakter:** ciepły, kobiecy, nowoczesny premium — NIE kliniczny (to różnica vs Aurelia), NIE różowo-cukierkowy (to różnica vs tanie salony)

### 1.1 Paleta (INNA niż Aurelia — żeby portfolio pokazywało zakres)
- `--cream` #FBF7F2 — tło główne (ciepła kość słoniowa)
- `--blush` #F2E2DA — tło sekcji naprzemiennych (pudrowy, przygaszony róż)
- `--copper` #B5654A — akcent (miedź/terakota): przyciski, linki, detale
- `--copper-dark` #8F4E38 — hover, etykiety (kontrast ≥4.5:1 na cream)
- `--graphite` #2A2622 — tekst główny
- `--graphite-soft` #6B615A — tekst drugorzędny
- Sygnatura graficzna: **cienka pozioma linia z kropką** (zamiast złotego łuku Aurelii) — minimalistyczny „akcent oddechu" przy overline'ach

### 1.2 Typografia
- Nagłówki: **Fraunces** (fontsource; serif o ciepłym, współczesnym charakterze — wyraźnie inny niż Cormorant Aurelii)
- Tekst: **Figtree** (fontsource; czysty, przyjazny sans)
- Skala jak w Aurelii (clamp, mobile-first)

### 1.3 Stack i infrastruktura (identyczne jak Aurelia)
- Astro 5 + Tailwind CSS 4 + waniliowy JS, zero bibliotek UI
- Nowy folder lokalny: `C:\Users\jakdy\Documents\Elara Beauty Demo`
- Nowe repozytorium GitHub: `Elara-Beauty-Demo` (branch main)
- Nowy projekt Cloudflare **Pages** (Connect to Git → Astro → `npm run build` → `dist`)
- Zdjęcia: `public/images/` (wyjątek hero → `src/assets/` dla srcset)
- Rytm pracy: jeden etap → sprawdzenie → commit → push → następny

---

## 2. ARCHITEKTURA STRON

```
/                         strona główna
/uslugi                   CENNIK-KATALOG z filtrem na żywo (serce strony)
/uslugi/[kategoria]       6 stron kategorii (twarz, paznokcie, rzęsy-brwi, depilacja, cialo-masaze, makijaz)
/vouchery                 vouchery prezentowe + pakiety (produkt, nie dodatek)
/promocje                 aktualne promocje (mechanizm sezonowy)
/zespol                   zespół z przypisaniem specjalizacji
/o-nas                    wnętrza, filozofia, marki kosmetyków
/pierwsza-wizyta          jak wygląda wizyta (wzorzec z Aurelii, lżejszy ton)
/kontakt                  rezerwacja (formularz z kontekstem) + mapa + godziny
/jak-pozyskujemy-klientki strona systemu dla właścicielki salonu (manifest sprzedażowy)
/beauty-[miasto]          lądowiska SEO: Gdynia + dzielnice + Trójmiasto (sekcja 8)
```

---

## 3. STRONA GŁÓWNA — struktura (wzorce J'ADORE zaadaptowane do jednego salonu)

Kolejność sekcji (tła naprzemienne cream/blush):

**1. Górny pasek** (graphite, jasny tekst): godziny `Pon–Sob 9:00–20:00` · telefon klikalny · przycisk `Zarezerwuj` → /kontakt

**2. HERO** (cream) — typograficzny 60/40 jak Aurelia, ale cieplejszy:
- Overline: `INSTYTUT URODY · GDYNIA ŚWIĘTOJAŃSKA`
- H1: `Twój czas na piękno.`
- Sub (1 zdanie): `Paznokcie, rzęsy, twarz i ciało — pod jednym dachem, w rękach specjalistek, które robią to od lat.`
- JEDEN przycisk: `Zarezerwuj wizytę` + pod spodem drobnym: `lub zadzwoń: 512 340 219`
- Zdjęcie 4:5 pionowe (srcset z src/assets), wnętrze/klientka w relaksie

**3. Pasek zaufania** (blush): `8 lat w Gdyni` · `4,9/5 — 380 opinii Google` · `12 000+ wykonanych zabiegów` · `6 specjalistek`

**4. USŁUGI — 6 kafelków kategorii** (cream) — zaraz pod zaufaniem, z KOTWICAMI CENOWYMI (wzorzec J'ADORE):
- Pielęgnacja twarzy `od 150 zł` · Stylizacja paznokci `od 120 zł` · Rzęsy i brwi `od 90 zł` · Depilacja `od 60 zł` · Ciało i masaże `od 180 zł` · Makijaż `od 200 zł`
- Każdy kafelek klikalny → strona kategorii. Pod siatką: `Zobacz pełny cennik →` /uslugi

**5. „NA KAŻDĄ OKAZJĘ" — 4 karty segmentacji po intencji** (blush) — wzorzec wprost od lidera:
- `Dla siebie` — zabieg dobrany do Ciebie → /uslugi
- `Na prezent` — voucher, który zachwyca → /vouchery
- `Na wielkie wyjście` — makijaż i stylizacja na event → /uslugi/makijaz
- `Na panieński` — wieczór piękna dla całej ekipy → /kontakt?cel=event

**6. PROMOCJA MIESIĄCA** (cream) — mechanizm, którego Aurelia mieć nie mogła:
- Wyróżniony pas z etykietą `PROMOCJA MIESIĄCA` + przykład: `Wrzesień: laminacja brwi + henna −20%` + `do końca zostało: [odliczanie dni]` + przycisk `Rezerwuję w tej cenie`
- Dane promocji w `src/data/promo.ts` (łatwa podmiana co miesiąc — argument sprzedażowy: „strona, którą aktualizujesz w 2 minuty")

**7. METAMORFOZY / GALERIA PRAC** (blush): siatka 6 zdjęć prac (paznokcie, brwi, makijaż) — w beauty pokazuje się PRACE, nie tylko przed/po. Podpis kategorii przy każdym.

**8. ZESPÓŁ — skrót** (cream): 3 karty (zdjęcie, imię, specjalizacja: „Ola — stylizacja paznokci", „Magda — rzęsy i brwi", „Kasia — kosmetologia") + `Poznaj cały zespół →`

**9. OPINIE** (blush): format Google — gwiazdki, treść, `Imię N.`, `opinia Google`. 6 sztuk. **W opiniach wymieniać usługi i imiona specjalistek** („Ola zrobiła najpiękniejsze migdałki w moim życiu") — tak wyglądają prawdziwe opinie salonów.

**10. VOUCHER — zajawka** (cream): `Podaruj komuś godzinę dla siebie` + `Voucher ważny 12 miesięcy, elegancko zapakowany` + przycisk `Skomponuj prezent →`

**11. CTA końcowe** (blush): `Twój termin czeka.` + przycisk `Zarezerwuj wizytę` + telefon

**Pływający przycisk** `Zarezerwuj` (wzorzec z Aurelii E17; ukryty na /kontakt).

---

## 4. CENNIK-KATALOG `/uslugi` — SERCE STRONY

> To jest odpowiednik modułu „Dobierz zabieg" z Aurelii — tylko odwrócony. Tam klientka nie znała zabiegu; tu ZNA i chce go znaleźć w 5 sekund.

- **Pole filtra na żywo na górze** (sticky): placeholder `Wpisz, czego szukasz — np. hybryda, laminacja, oczyszczanie…`
- Filtr działa po nazwie usługi ORAZ ukrytych synonimach (np. „hybryda" → Manicure hybrydowy; „migdałki" → przedłużanie żelowe; „pedi" → pedicure)
- Usługi pogrupowane w 6 kategorii (akordeony, wszystkie otwarte na desktop, zwinięte na mobile)
- **Każda pozycja cennika:** nazwa · czas trwania · cena (konkretna, nie tylko „od") · przycisk `Rezerwuj` → /kontakt?usluga=[nazwa]
- Dane w `src/data/services.ts`: ~45–55 usług (realistyczny katalog salonu), każda z polami: nazwa, kategoria, czas, cena, synonimy, opis 1 zdanie
- Ceny realne rynkowo (Trójmiasto 2026): hybryda 120–140, żel 160–190, laminacja brwi 110–130, lifting rzęs 130–150, oczyszczanie wodorowe 180–220, masaż 60 min 180–220 itd.

**Strony kategorii `/uslugi/[kategoria]`:** H1 kategorii, 2–3 zdania wstępu, lista usług tej kategorii z cenami i przyciskami, galeria 3–4 prac, FAQ kategorii (3 pytania), CTA. Lżejsze niż strony zabiegowe Aurelii — tu nie trzeba edukować o rekonwalescencji, wystarczy konkret.

---

## 5. VOUCHERY I PAKIETY `/vouchery` (produkt, nie ozdobnik)

- H1: `Podaruj czas na piękno`
- **Vouchery kwotowe:** karty 150 / 300 / 500 zł + „dowolna kwota" — z wizualizacją eleganckiej karty podarunkowej
- **Pakiety-przeżycia:** `Dzień dla Niej` (twarz + manicure + masaż, cena pakietowa −15%), `Przed wielkim dniem` (brwi + rzęsy + makijaż próbny), `Mama i córka` (2× pielęgnacja)
- Zasady drobnym drukiem: ważność 12 mies., rezerwacja terminu telefonicznie/formularzem
- Zamówienie: formularz (voucher=[typ]) — klientka zostawia kontakt, salon dzwoni. (Docelowo u klienta: płatność online — wpisane w ofercie jako rozszerzenie)
- CTA na panieńskie/eventy: `Planujesz wieczór panieński? Napisz — ułożymy program dla całej ekipy`

---

## 6. REZERWACJA `/kontakt` (bez kalendarza — zgodnie z decyzją)

- Formularz z kontekstem (wzorzec Aurelia E11): czyta parametry `usluga`, `cel` (event/voucher), `promo`
- Pola: Imię* · Telefon* · Usługa (select z pełnej listy — prewypełniony z parametru) · Preferowany termin (select: najbliższe dni/tydzień/elastycznie) · Preferowana specjalistka (opcjonalnie, select) · Uwagi · RODO*
- Ukryte pola przekazują kontekst — salon dostaje: kto, telefon, jaka usługa, u kogo, kiedy woli
- Web3Forms (placeholder TODO_WEB3FORMS_KEY, jak Aurelia)
- Obok formularza: telefon (duży, klikalny), godziny, mapa, adres
- Adnotacja: `Oddzwaniamy tego samego dnia roboczego i potwierdzamy termin.`

---

## 7. STRONA SYSTEMU `/jak-pozyskujemy-klientki` (manifest dla właścicielki salonu)

Adaptacja wzorca Aurelii — warstwy, część DZIAŁA, część MAKIETA (etykiety `PRZYKŁAD` obowiązkowe):
- H1: `Nie budujemy stron. Budujemy grafik pełny rezerwacji.`
- Warstwa 1 (DZIAŁA): cennik z filtrem — klientka znajduje usługę w 5 sekund
- Warstwa 2 (DZIAŁA): rezerwacja z kontekstem — wiesz, kto, na co i do kogo chce przyjść
- Warstwa 3 (DZIAŁA): promocje sezonowe podmieniane w 2 minuty
- Warstwa 4 (DZIAŁA): vouchery i pakiety — drugi strumień przychodu
- Warstwa 5 (DZIAŁA): lądowiska SEO na dzielnice/miasta Trójmiasta
- Warstwa 6 (MAKIETA): wizytówka Google — `PRZYKŁAD`
- Warstwa 7 (MAKIETA): raport miesięczny — `PRZYKŁADOWY RAPORT — DANE DEMONSTRACYJNE`
- **Blok „0% prowizji":** rzeczowe porównanie — rezerwacje przez własną stronę nie mają prowizji pośredników; widżet Booksy można wpiąć równolegle (bez hejtu na Booksy — to partner, nie wróg; narracja: „własny kanał + Booksy, nie zamiast")
- CTA `Chcę taki system` → popup/link Connectiva

---

## 8. LĄDOWISKA SEO (wzorzec Aurelia 18.8 poprawione — lekkie drzwi, nie dom)

Ścieżka `/beauty-[slug]`, szablon LEKKI (breadcrumb, H1 `Salon beauty [Miasto/Dzielnica]`, unikalny lead 2–3 zdania z dojazdem, akapit o instytucie, lista kategorii usług jako linki, przycisk `Zobacz pełną ofertę →` na główną, mapa, lista pozostałych lokalizacji, JSON-LD BeautySalon z areaServed, adres zawsze Gdynia Świętojańska):

Gdynia (centrum) · Gdynia-Orłowo · Gdynia-Chylonia · Gdynia-Witomino · Rumia · Reda · Wejherowo · Sopot · Gdańsk-Oliwa · Gdańsk-Wrzeszcz — **10 lądowisk**

Zdanie obowiązkowe: `Nasz instytut mieści się w Gdyni przy ul. Świętojańskiej — klientki z [Miejsce] dojeżdżają do nas w ok. X minut.` UKRYTE w nawigacji, obecne w sitemapie, wzajemne linkowanie.

---

## 9. ZGODNOŚĆ I UCZCIWOŚĆ DEMO

- **Popup przy wejściu** (wzorzec Aurelia): `To jest strona demonstracyjna — Instytut ELARA nie istnieje; to projekt pokazowy Connectivy` + przycisk `Chcę taką stronę` → https://connectiva-website.pages.dev + `Rozumiem, chcę zobaczyć demo`
- Wszystkie makiety (wizytówka, raport) z etykietą `PRZYKŁAD`
- Salon beauty NIE podlega zakazowi reklamy medycznej — promocje/rabaty legalne. ALE: bez obietnic zdrowotnych („leczy", „usuwa trwale") przy zabiegach kosmetycznych; efekty z adnotacją indywidualną przy przed/po
- Stopka: `© 2026 ELARA · Strona demonstracyjna Connectiva · Polityka prywatności`

---

## 10. ZDJĘCIA (Higgsfield — osobna sesja, po zbudowaniu szkieletu)

Lista docelowa (~14): hero (klientka relaks/wnętrze, 4:5), wnętrze recepcja z logo ELARA, 2× wnętrze stanowiska, 6× prace (2 paznokcie, 2 brwi/rzęsy, 1 makijaż, 1 pielęgnacja), 3× zespół (portrety, ciepłe tło, BEZ tekstu na ubraniach — lekcja z fartuchów Aurelii!), 1× voucher/pakiet prezentowy flat-lay. Do czasu zdjęć: placeholder z kodu (cream tło + linia z kropką + nazwa kategorii — wzorzec Aurelia E16).

---

## 11. ETAPY BUDOWY (dla Claude Code — jeden etap naraz, STOP po każdym)

**ETAP 1 — Fundament:** projekt Astro 5 + Tailwind 4, fonty Fraunces/Figtree, zmienne palety, Base.astro, Header (górny pasek + menu: Usługi ▾ | Vouchery | Promocje | Zespół | O nas | Kontakt + przycisk Zarezerwuj), Footer, komponent linii-z-kropką, pływający przycisk. Build, STOP.

**ETAP 2 — Strona główna:** wszystkie sekcje wg pkt 3 (z placeholderami zdjęć), promo.ts z przykładową promocją i odliczaniem. Build, STOP.

**ETAP 3 — Cennik-katalog:** services.ts (~50 usług z synonimami), /uslugi z filtrem na żywo i akordeonami, przyciski Rezerwuj z parametrem. Build, STOP.

**ETAP 4 — Strony kategorii:** 6 stron /uslugi/[kategoria] wg szablonu pkt 4. Build, STOP.

**ETAP 5 — Vouchery + Promocje:** /vouchery wg pkt 5, /promocje (lista aktualnych z promo.ts). Build, STOP.

**ETAP 6 — Zespół, O nas, Pierwsza wizyta:** /zespol (6 specjalistek z przypisaniem usług), /o-nas, /pierwsza-wizyta (lżejszy ton niż Aurelia). Build, STOP.

**ETAP 7 — Rezerwacja z kontekstem:** /kontakt wg pkt 6, parametry usluga/cel/promo, ukryte pola. Build, STOP.

**ETAP 8 — Strona systemu:** /jak-pozyskujemy-klientki wg pkt 7 z makietami i etykietami PRZYKŁAD. Build, STOP.

**ETAP 9 — Lądowiska SEO:** cities.ts + 10 stron wg pkt 8, wzajemne linkowanie, sitemap. Build, STOP.

**ETAP 10 — Popup demo + SEO + audyt mobilny:** DemoNoticeModal, meta/OG/JSON-LD całości, pełny audyt mobilny (checklista jak Aurelia 15.4), Lighthouse (cel ≥90 mobile). Build, raport. STOP.

---

*Specyfikacja ELARA v1 — Grupa 3 (salon beauty). Wzorce: J'ADORE Instytut + rynek 2026. Metodyka: identyczna jak Aurelia. Demo fikcyjne, oznaczone popupem.*
