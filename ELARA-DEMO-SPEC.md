# ELARA — INSTYTUT URODY · SPECYFIKACJA DEMO v2 (GRUPA 3: SALON BEAUTY)

> **TA WERSJA ZASTĘPUJE WSZYSTKIE POPRZEDNIE.** Jeden plik, jedna prawda. Jeśli w projekcie jest starszy `ELARA-DEMO-SPEC.md` lub osobna „sekcja 12" — usuń je i zostaw wyłącznie ten dokument.
>
> **Czym jest:** kompletna specyfikacja strony-demo fikcyjnego instytutu urody — drugie demo agencji Connectiva (pierwsze: Klinika Aurelia, medycyna estetyczna). Metodyka identyczna: budowa etapami w Claude Code, jeden etap naraz, `git commit` po każdym, audyt mobilny jako twardy wymóg.
>
> **Dla kogo to demo:** salony beauty i instytuty urody — wielousługowe (paznokcie, rzęsy, brwi, kosmetyka twarzy, depilacja, masaże), zespół kilku specjalistek.
>
> **Stan budowy:** etapy 1–5 UKOŃCZONE. Do zrobienia: 6–11.

---

## 0. KLUCZOWE RÓŻNICE WZGLĘDEM AURELII

| | AURELIA (klinika lekarska) | ELARA (salon beauty) |
|---|---|---|
| Klientka | NIE ZNA zabiegów, ma problem, decyduje tygodniami | WIE czego chce („hybryda"), decyduje w minuty |
| Ścieżka | problem → edukacja → konsultacja → zapis | usługa → cena → termin → rezerwacja |
| Serce strony | moduł „Dobierz zabieg" + strony edukacyjne | **cennik z filtrem na żywo** + szybka rezerwacja |
| Prawo | zakaz reklamy świadczeń (art. 14) | **reklama DOZWOLONA** — promocje, rabaty, odliczanie |
| Ton | spokojny, kliniczny, edukacyjny | ciepły, energiczny, sprzedażowy (wciąż premium) |
| Częstotliwość wizyt | raz na kilka miesięcy | co 3–4 tygodnie — stała klientka |
| Produkty dodatkowe | — | **vouchery, pakiety, eventy (panieńskie)** |
| Hero | typograficzne (pacjentka CZYTA) | **zdjęciowe, w ruchu** (klientka OGLĄDA) |

**Zasada nadrzędna:** klientka ma znaleźć usługę, cenę i drogę do rezerwacji w mniej niż 30 sekund.

---

## 1. MARKA

- **Nazwa:** ELARA — Instytut Urody
- **Miasto:** Gdynia, ul. Świętojańska 82 (fikcyjny adres)
- **Telefon demo:** 512 340 219 · e-mail: rezerwacje@elara-beauty.pl
- **Claim:** „Twój czas na piękno."
- **Charakter:** ciepły, kobiecy, nowoczesny premium. NIE kliniczny (vs Aurelia), NIE różowo-cukierkowy (vs tanie salony).

### 1.1 Paleta
- `--cream` #FBF7F2 — tło główne
- `--blush` #F2E2DA — tło sekcji naprzemiennych
- `--copper` #B5654A — akcent: przyciski, linki, **nić**
- `--copper-dark` #8F4E38 — hover, etykiety (kontrast ≥4.5:1)
- `--graphite` #2A2622 — tekst główny
- `--graphite-soft` #6B615A — tekst drugorzędny

### 1.2 Typografia
- Nagłówki: **Fraunces** (fontsource)
- Tekst: **Figtree** (fontsource)
- Skala `clamp()`, mobile-first

### 1.3 Sygnatura marki: LINIA Z KROPKĄ
Cienka pozioma linia zakończona (lub przecięta) małą kropką, kolor `--copper`. Komponent `DotLine.astro`.
Występuje: przy overline'ach sekcji, jako separator w pasie usług, w logo — **oraz jako „nić" przewijania (sekcja 12.4), która jest rozwinięciem tej samej sygnatury na całą stronę.**

### 1.4 Stack i infrastruktura
- Astro 5 + Tailwind CSS 4 + waniliowy JS, zero bibliotek UI
- Folder: `C:\Users\jakdy\Documents\Elara Instytut Urody Demo`
- GitHub: `Elara-Beauty-Demo` (main) · Cloudflare **Pages** → `elara-beauty-demo.pages.dev`
- Zdjęcia: `public/images/` (wyjątek: kafelki hero → `src/assets/` dla srcset)
- Rytm: jeden etap → sprawdzenie → commit → push → następny

---

## 2. ARCHITEKTURA STRON

```
/                          strona główna
/uslugi                    cennik-katalog z filtrem na żywo (serce)
/uslugi/[kategoria]        6 stron kategorii
/vouchery                  vouchery + pakiety
/promocje                  aktualne promocje
/zespol                    zespół z przypisaniem specjalizacji
/o-nas                     wnętrza, filozofia, marki kosmetyków
/pierwsza-wizyta           jak wygląda wizyta (lżejszy ton niż Aurelia)
/kontakt                   rezerwacja (formularz z kontekstem) + mapa
/jak-pozyskujemy-klientki  manifest systemu dla właścicielki salonu
/beauty-[slug]             10 lądowisk SEO (sekcja 8)
```

---

## 3. STRONA GŁÓWNA — struktura

Kolejność sekcji, tła naprzemienne cream/blush:

1. **Górny pasek** (graphite): godziny `Pon–Sob 9:00–20:00` · telefon klikalny · `Zarezerwuj`
2. **HERO** — mozaika trójkątna + efekt ucieczki (sekcja 12)
3. **Pas nazw usług** (marquee, 12.3)
4. **Pasek zaufania** (blush): `8 lat w Gdyni` · `4,9/5 — 380 opinii` · `12 000+ zabiegów` · `6 specjalistek` — z licznikami (12.5)
5. **USŁUGI — 6 kategorii** (cream) z kotwicami cenowymi; na desktopie sekcja przypięta (12.6): Pielęgnacja twarzy `od 150 zł` · Stylizacja paznokci `od 120 zł` · Rzęsy i brwi `od 90 zł` · Depilacja `od 60 zł` · Ciało i masaże `od 180 zł` · Makijaż `od 200 zł`
6. **„NA KAŻDĄ OKAZJĘ"** (blush) — 4 karty intencji: `Dla siebie` → /uslugi · `Na prezent` → /vouchery · `Na wielkie wyjście` → /uslugi/makijaz · `Na panieński` → /kontakt?cel=event
7. **PROMOCJA MIESIĄCA** (cream) — etykieta, opis, **odliczanie**, przycisk `Rezerwuję w tej cenie`; dane z `promo.ts`
8. **GALERIA PRAC** (blush) — 6 zdjęć z podpisami kategorii
9. **ZESPÓŁ — skrót** (cream) — 3 karty + `Poznaj cały zespół →`
10. **OPINIE** (blush) — format Google, `Imię N.`, `opinia Google`; treści wymieniają usługi i imiona specjalistek
11. **VOUCHER — zajawka** (cream) — `Podaruj komuś godzinę dla siebie` + `Skomponuj prezent →`
12. **CTA końcowe** (blush) — `Twój termin czeka.` + `Zarezerwuj wizytę` + telefon

**Pływający przycisk** `Zarezerwuj` — prawy dolny róg, po 400px przewinięcia, ukryty na `/kontakt`.

---

## 4. CENNIK-KATALOG `/uslugi` — SERCE STRONY

- **Pole filtra na żywo** (sticky): `Wpisz, czego szukasz — np. hybryda, laminacja, oczyszczanie…`
- Filtr po nazwie ORAZ ukrytych synonimach („hybryda" → Manicure hybrydowy; „migdałki" → przedłużanie żelowe; „pedi" → pedicure)
- 6 kategorii w akordeonach (otwarte na desktop, zwinięte na mobile)
- Każda pozycja: nazwa · czas · **konkretna cena** · przycisk `Rezerwuj` → `/kontakt?usluga=[nazwa]`
- `services.ts`: ~50 usług, pola: nazwa, kategoria, czas, cena, synonimy, opis 1 zdanie
- Ceny realne (Trójmiasto 2026): hybryda 120–140, żel 160–190, laminacja brwi 110–130, lifting rzęs 130–150, oczyszczanie wodorowe 180–220, masaż 60 min 180–220

**Strony kategorii:** H1, wstęp 2–3 zdania, lista usług z cenami i przyciskami, galeria 3–4 prac, FAQ (3 pytania), CTA.

---

## 5. VOUCHERY I PAKIETY `/vouchery`

- H1: `Podaruj czas na piękno`
- **Vouchery kwotowe:** 150 / 300 / 500 zł + dowolna kwota, wizualizacja karty
- **Pakiety:** `Dzień dla Niej` (twarz + manicure + masaż, −15%), `Przed wielkim dniem` (brwi + rzęsy + makijaż próbny), `Mama i córka`
- Drobnym drukiem: ważność 12 miesięcy, rezerwacja telefonicznie/formularzem
- Zamówienie: formularz `?voucher=[typ]`
- CTA: `Planujesz wieczór panieński? Napisz — ułożymy program dla całej ekipy`

---

## 6. REZERWACJA `/kontakt` (bez kalendarza)

- Formularz czyta parametry `usluga`, `cel`, `promo`, `voucher`
- Pola: Imię* · Telefon* · Usługa (select, prewypełniony) · Preferowany termin (najbliższe dni / w tygodniu / elastycznie) · Preferowana specjalistka (opcjonalnie) · Uwagi · RODO*
- Ukryte pola przekazują kontekst — salon dostaje: kto, telefon, jaka usługa, u kogo, kiedy woli
- Web3Forms (`TODO_WEB3FORMS_KEY`)
- Obok: telefon (duży, klikalny), godziny, mapa, adres
- Adnotacja: `Oddzwaniamy tego samego dnia roboczego i potwierdzamy termin.`

---

## 7. STRONA SYSTEMU `/jak-pozyskujemy-klientki`

- H1: `Nie budujemy stron. Budujemy grafik pełny rezerwacji.`
- Warstwa 1 (DZIAŁA): cennik z filtrem — klientka znajduje usługę w 5 sekund
- Warstwa 2 (DZIAŁA): rezerwacja z kontekstem
- Warstwa 3 (DZIAŁA): promocje podmieniane w 2 minuty
- Warstwa 4 (DZIAŁA): vouchery i pakiety — drugi strumień przychodu
- Warstwa 5 (DZIAŁA): lądowiska SEO na dzielnice i miasta
- Warstwa 6 (MAKIETA): wizytówka Google — etykieta `PRZYKŁAD`
- Warstwa 7 (MAKIETA): raport miesięczny — `PRZYKŁADOWY RAPORT — DANE DEMONSTRACYJNE`
- **Blok „0% prowizji":** rzeczowo — rezerwacje przez własną stronę nie mają prowizji pośredników; widżet Booksy można wpiąć równolegle. Bez atakowania Booksy: „własny kanał + Booksy, nie zamiast".
- CTA `Chcę taki system`

---

## 8. LĄDOWISKA SEO `/beauty-[slug]`

Szablon LEKKI („drzwi, nie dom"): breadcrumb → H1 `Salon beauty [Miejsce]` → unikalny lead 2–3 zdania z dojazdem → akapit o instytucie → lista kategorii jako linki → **przycisk `Zobacz pełną ofertę →` na stronę główną** → mapa → lista pozostałych lokalizacji.

**10 lokalizacji:** Gdynia-Centrum, Gdynia-Orłowo, Gdynia-Chylonia, Gdynia-Witomino, Rumia, Reda, Wejherowo, Sopot, Gdańsk-Oliwa, Gdańsk-Wrzeszcz.

Zdanie obowiązkowe (generowane, z poprawnym dopełniaczem): `Nasz instytut mieści się w Gdyni przy ul. Świętojańskiej — klientki z [Miejsca] dojeżdżają do nas w ok. X minut.`

UKRYTE w nawigacji (brak linków z menu/stopki/strony głównej), obecne w `sitemap.xml`, `robots: index, follow`, wzajemne linkowanie między lokalizacjami. JSON-LD `BeautySalon` z `areaServed`; adres zawsze Gdynia.

---

## 9. ZGODNOŚĆ I UCZCIWOŚĆ DEMO

- **Popup przy wejściu** (wzorzec Aurelii, `DemoNoticeModal.astro`): raz na sesję (`sessionStorage`), modal wyśrodkowany, overlay, zamykanie przyciskiem/Escape/kliknięciem w tło, focus trap, pełne ARIA.
  - H2: `To jest strona demonstracyjna`
  - Akapit 1: `Instytut ELARA nie istnieje — to fikcyjna marka stworzona przez Connectivę, aby pokazać, jak może wyglądać profesjonalna strona dla salonu beauty. Wszystkie dane, usługi, ceny i opinie są wymyślone.`
  - Akapit 2 (wyróżniony): `Prowadzisz salon lub instytut urody? Taką stronę — wraz z systemem pozyskiwania klientek — zbudujemy również dla Ciebie.`
  - Przycisk 1: `Chcę taką stronę` → `https://connectiva-website.pages.dev` (nowa karta) — *docelowo podmiana na stronę portfolio*
  - Przycisk 2 (ghost): `Rozumiem, chcę zobaczyć demo`
- Wszystkie makiety z etykietą `PRZYKŁAD`
- Salon beauty NIE podlega zakazowi reklamy medycznej — promocje legalne. ALE bez obietnic zdrowotnych („leczy", „usuwa trwale"); przy przed/po adnotacja o indywidualności efektu.
- Stopka: `© 2026 ELARA · Strona demonstracyjna Connectiva · Polityka prywatności`

---

## 10. ZDJĘCIA (Higgsfield, osobna sesja)

~14 sztuk: 3 kafelki hero (twarz 3:4, paznokcie 1:1, brwi/rzęsy 4:5), wnętrze recepcji, 2× stanowiska, 6× prace, 3× zespół (**BEZ tekstu na ubraniach** — lekcja z fartuchów Aurelii), 1× flat-lay vouchera.
Styl wspólny: ciepłe światło, kremowe i pudrowe tony, premium beauty, `photorealistic, no text`.
Do czasu zdjęć: placeholder z kodu (tło `--blush`, linia z kropką, nazwa kategorii).

---

## 11. ETAPY BUDOWY

**UKOŃCZONE:** Etap 1 (fundament), 2 (strona główna), 3 (cennik-katalog), 4 (strony kategorii), 5 (vouchery + promocje).

**ETAP 6 — Zespół, O nas, Pierwsza wizyta:** `/zespol` (6 specjalistek z przypisanymi usługami), `/o-nas`, `/pierwsza-wizyta`. Build, STOP.

**ETAP 7 — Rezerwacja z kontekstem:** `/kontakt` wg sekcji 6, parametry i ukryte pola. Build, STOP.

**ETAP 8 — Strona systemu:** `/jak-pozyskujemy-klientki` wg sekcji 7, makiety z etykietami. Build, STOP.

**ETAP 9 — Lądowiska SEO:** `cities.ts` + 10 stron wg sekcji 8, wzajemne linkowanie, sitemap. Build, wypisz adresy. STOP.

**ETAP 10 — Popup demo + SEO:** `DemoNoticeModal` wg sekcji 9, meta/OG/JSON-LD całości, `robots.txt`, `404`. Build, STOP.

**ETAP 11 — HERO I WARSTWA RUCHU:** pełna sekcja 12. Build, Lighthouse mobile, raport. STOP.

**ETAP 12 — Audyt końcowy:** desktop + mobile (360/390/414px), Lighthouse mobile i desktop (cel ≥90 Performance, 100 Accessibility), sprawdzenie że animacje nie psują przewijania na telefonie. Napraw znalezione. Build, raport. STOP.

---

# 12. HERO I WARSTWA RUCHU

> **Cel:** ELARA nie może wyglądać jak Aurelia w innych kolorach. Różnica wynika z klientki: pacjentka kliniki CZYTA, klientka salonu OGLĄDA. Stąd hero zdjęciowe i strona, która żyje pod palcem.
>
> **Dyscyplina:** ruch ma być elegancki, nie cyrkowy. Zero bounce, migania, animowanych gradientów. Lighthouse Performance ≥90 mobile pozostaje twardym wymogiem.

---

### 12.1 HERO — MOZAIKA TRÓJKĄTNA

Zdjęcia zajmują **to samo miejsce co obecne pojedyncze zdjęcie** (prawa strefa hero, ~50% szerokości na desktopie) — ale zamiast jednego prostokąta są **trzy mniejsze kafelki w układzie trójkąta**.

**Układ (desktop ≥1024px):**
- **Kafelek A — GÓRA** (wierzchołek trójkąta): format 4:5, wyśrodkowany poziomo względem strefy, największy z trzech. Motyw: pielęgnacja twarzy / klientka w relaksie.
- **Kafelek B — DÓŁ LEWY**: format 1:1, mniejszy. Motyw: stylizacja paznokci (detal dłoni).
- **Kafelek C — DÓŁ PRAWY**: format 1:1, mniejszy, przesunięty w dół o ~24px względem B (lekka asymetria — trójkąt ma nie być idealnie równoramienny, to wygląda projektowo).
- Odstęp między kafelkami: 16px. Promień 4px, delikatny cień.
- Cała mozaika mieści się w obrysie dotychczasowego zdjęcia — nie rozpycha hero.
- Tekst po lewej (~45%) bez zmian w treści: overline → H1 `Twój czas na piękno.` → jedno zdanie → przycisk `Zarezerwuj wizytę` → `lub zadzwoń: 512 340 219`.
- Wysokość hero: max 82vh.

**Układ (mobile <768px):**
- Kolejność pionowa: overline → H1 → zdanie → przycisk → telefon → **mozaika trójkątna zmniejszona** (A na górze wyśrodkowany, B i C obok siebie pod spodem), łącznie max 38vh.
- Zachowujemy trójkąt także na telefonie — to sygnatura układu, nie ozdoba desktopu.

**Obrazy:** z `src/assets/`, `srcset` (480/720/1080). Kafelek A: `loading="eager"`, `fetchpriority="high"`. B i C: `lazy`. Do czasu zdjęć — placeholdery z kodu.

---

### 12.2 EFEKT UCIECZKI HERO (dwa przeciwbieżne ruchy)

Główny efekt interaktywny hero. Aktywowany **wyłącznie przewijaniem** — w spoczynku hero jest nieruchome.

**Mechanika:**
- Postęp `p` liczony od 0 do 1 w zakresie przewinięcia **0 → 65vh**.
- **TEKST ucieka w LEWO:** `translateX(-220px × p)` na desktopie, `-120px × p` na mobile.
- **KAFELKI uciekają w PRAWO:** `translateX(+260px × p)` bazowo — ale **każdy kafelek z inną prędkością**, żeby rozjechały się wachlarzem zamiast sunąć jak jedna płyta:
  - Kafelek A (góra): mnożnik **1.0** → +260px × p
  - Kafelek B (dół lewy): mnożnik **0.72** → +187px × p
  - Kafelek C (dół prawy): mnożnik **1.28** → +333px × p
  - Ten rozjazd zastępuje osobny parallax — kafelki i tak się rozdzielają.
- **Towarzyszące zanikanie, ale niepełne:** `opacity: 1 → 0.15` (nie do zera — elementy mają UCIEC za krawędź, nie rozpłynąć się w powietrzu).
- **Lekkie oddalenie:** `scale(1 → 0.94)` — dodaje głębi, jakby odjeżdżały w tło.
- Krzywa: `easeOutQuad` na `p` — szybko na starcie, zwolnienie na końcu.
- **Ruch odwracalny:** przewijanie w górę przywraca elementy dokładnie tą samą ścieżką.
- Hero i jego wrapper: `overflow-x: hidden` — nic nie może wystawać poza ekran ani powodować przewijania poziomego.
- Wyłącznie `transform` i `opacity`, obliczenia w `requestAnimationFrame`, listener `passive: true`.

---

### 12.3 PAS NAZW USŁUG (marquee)

Wąski pas pod hero, nad paskiem zaufania.
- Tło `--blush`, tekst `--copper-dark`, wysokość ~56px desktop / 44px mobile.
- Treść w nieskończonej pętli, elementy oddzielone **sygnaturą marki (kropką)**:
  `MANICURE HYBRYDOWY · LAMINACJA BRWI · LIFTING RZĘS · OCZYSZCZANIE WODOROWE · MASAŻ GORĄCYMI KAMIENIAMI · PRZEDŁUŻANIE RZĘS · HENNA PUDROWA · DEPILACJA WOSKIEM · MAKIJAŻ OKOLICZNOŚCIOWY`
- Ruch bazowy: ciągły, w lewo, ~40s pełna pętla (CSS `@keyframes` + `translateX`).
- **Reakcja na przewijanie:** przy scrollu pas przyspiesza (mnożnik do 2.5×), po zatrzymaniu płynnie wraca do prędkości bazowej. Realizacja: zmienna CSS `--marquee-speed` aktualizowana z JS w `requestAnimationFrame`.
- Duplikat treści w drugim kontenerze — pętla bezszwowa.
- `overflow: hidden` na wrapperze; pas nie może powodować przewijania poziomego strony.

---

### 12.4 NIĆ — LINIA Z KROPKĄ PRZEZ CAŁĄ STRONĘ

> **To jest sygnatura marki ELARY (linia z kropką) rozwinięta na całą wysokość strony.** Nie jest to efekt doklejony — to logo w ruchu. Element, który klient zapamięta.

**Wygląd:**
- Pionowa **nić wijąca się slalomem** przez całą wysokość strony: raz odchyla się w lewo, raz w prawo, łagodnymi łukami (krzywe Béziera, amplituda ~14% szerokości okna, pełna fala co ~90vh).
- Kolor `--copper`, grubość bazowa **1.5px**. Delikatna, nie dominuje.
- **Warstwa: pod sekcjami** (`z-index: -1`). Sekcje mają pełne tła (`--cream` / `--blush`), więc nić **jest widoczna wyłącznie w przerwach między sekcjami** — wygląda, jakby zszywała stronę jak nić materiał. To jest zamierzony efekt: nie pasek z boku, tylko element pomiędzy.
- Aby nić była widoczna, między sekcjami muszą istnieć **przerwy oddechowe 48–72px** z tłem strony — uwzględnić przy układzie.

**Kropka:**
- Po nici wędruje **kropka** o średnicy 9px, wypełniona `--copper`, z bardzo delikatną poświatą.
- Pozycja kropki = postęp przewinięcia strony (0% na górze, 100% na dole). Przewijasz w dół — kropka jedzie w dół. Zatrzymujesz — stoi.
- Realizacja: `path.getTotalLength()` + `getPointAtLength(progress × total)`, aktualizacja w `requestAnimationFrame`.

**Zgrubienie wokół kropki („wąż, który połknął mysz"):**
- **Druga ścieżka SVG**, identyczna geometrycznie, grubość **4px**, rysowana pod kropką.
- Odsłaniana wyłącznie w **oknie ~140px długości ścieżki wokół bieżącej pozycji kropki** — przez `stroke-dasharray` + `stroke-dashoffset` sterowane tą samą wartością postępu.
- Krawędzie okna wygaszane (`stroke-linecap: round` + gradient przezroczystości na końcach), żeby zgrubienie **narastało i zanikało płynnie**, a nie pojawiało się skokiem.
- Efekt: wraz z przewijaniem wzdłuż nici wędruje pogrubienie — dokładnie jak przesuwające się wybrzuszenie.

**Mobile:** amplituda slalomu zmniejszona do ~8% szerokości, grubości 1px / 3px, kropka 7px. Nić pozostaje — jest sygnaturą, nie ozdobą desktopu.

**Wydajność:** jeden element SVG na całą stronę, `position: absolute` względem kontenera strony (nie `fixed`), bez przeliczania układu przy przewijaniu. Aktualizowane wyłącznie atrybuty `cx`/`cy` kropki i `stroke-dashoffset` — obie właściwości nie wymuszają przeliczenia układu strony.

---

### 12.5 LICZNIKI W PASKU ZAUFANIA

- Cztery liczby dobijają od 0 do wartości docelowej, gdy sekcja wejdzie w ekran (IntersectionObserver, threshold 0.4).
- Czas 1200ms, wygładzenie `easeOutCubic`, **animacja tylko raz**.
- Wartość końcowa obecna w HTML od początku (czytniki ekranu, SEO) — JS podmienia wyłącznie wyświetlanie w trakcie.
- `4,9/5` animuje część liczbową z jednym miejscem po przecinku.

---

### 12.6 PRZYPIĘTA SEKCJA KATEGORII

**Desktop (≥1024px):**
- Sekcja usług przypięta (`position: sticky`) na ~300vh przewijania.
- Podział ekranu: lewa połowa — duże zdjęcie kategorii; prawa — lista sześciu kategorii z cenami „od".
- W miarę przewijania aktywna kategoria zmienia się kolejno (1→6): zdjęcie przechodzi crossfadem (250ms), pozycja listy podświetla się (`--copper`, kropka-sygnatura przed nazwą, przesunięcie o 8px w prawo).
- Cienki pasek postępu przy prawej krawędzi — klientka widzi, ile zostało, i nie czuje się uwięziona.
- Każda pozycja **klikalna** → strona kategorii. Przypięcie nie może blokować kliknięć.

**Mobile (<1024px):**
- **Bez przypinania.** Sześć kafelków wjeżdża kaskadowo (80ms odstępu) przy wejściu w ekran.
- Powód: przypięte sekcje psują naturalne przewijanie na telefonie, a klientka salonu ogląda głównie z telefonu.

**Realizacja:** IntersectionObserver na znacznikach kroków wewnątrz przypiętego kontenera. Przełączanie klasą CSS, crossfade na `opacity`.

---

### 12.7 WEJŚCIA ELEMENTÓW (kaskada)

- Sekcje poniżej hero: `fade + translateY(14px)`, 450ms `ease-out`, IntersectionObserver threshold 0.15, **tylko raz**.
- W siatkach: opóźnienie **80ms** między kolejnymi elementami. Maksymalne łączne opóźnienie 480ms — powyżej elementy pojawiają się razem.

---

### 12.8 WYDAJNOŚĆ I DOSTĘPNOŚĆ — WYMOGI TWARDE

- **`prefers-reduced-motion: reduce`** wyłącza WSZYSTKO: efekt ucieczki (hero statyczne), marquee (pas nieruchomy), nić (linia widoczna, kropka na górze, bez ruchu), liczniki (od razu wartość końcowa), przypinanie (sekcja zwykła), kaskady (elementy widoczne od razu). Obowiązkowo.
- Animować wyłącznie `transform` i `opacity`. Zero animacji `width`, `height`, `top`, `margin`.
- `will-change` tylko na elementach aktualnie animowanych, zdejmowane po zakończeniu.
- Wszystkie nasłuchy przewijania przez `requestAnimationFrame`, listenery `passive: true`. **Jeden wspólny nasłuch scrolla** dla wszystkich efektów (ucieczka, marquee, nić) — nie trzy osobne.
- Na słabszych urządzeniach (`navigator.hardwareConcurrency <= 4`): wyłączyć przyspieszanie marquee i zgrubienie nici; reszta zostaje.
- Treść w pełni czytelna i klikalna **bez JavaScriptu** — ruch to warstwa dodana, nie warunek działania.
- Zero przewijania poziomego na jakiejkolwiek szerokości.

**Drabinka awaryjna (jeśli Lighthouse Performance < 90 mobile):** upraszczaj po kolei — (1) zgrubienie nici, (2) przyspieszanie marquee, (3) przypięta sekcja → wersja kaskadowa także na desktopie, (4) efekt ucieczki → sam fade bez przesunięcia. Nić i kropka zostają do końca — to sygnatura marki.

---

*Specyfikacja ELARA v2 — kompletna, zastępuje wszystkie wcześniejsze wersje. Demo fikcyjne, oznaczone popupem. Metodyka: jeden etap naraz, commit po każdym.*







## POPRAWKA 12.4 — NIĆ CIĄGŁA (zastępuje dotychczasową nić)

> **Co się zmienia i dlaczego.** Dotychczasowa nić była schowana ZA sekcjami (`z-index: -1`) i widoczna tylko w przerwach między nimi — więc wyglądała jak poszatkowana: kawałek linii, sekcja bez linii, znowu kawałek. Nowa nić ma być **jedną ciągłą linią biegnącą po wierzchu całej strony**, nieprzerwanie od góry do dołu, przez wszystkie sekcje. To jest sygnatura marki przeszywająca stronę jak nić materiał.

---

### A. WARSTWY (kluczowa zmiana)

Nić przestaje być pod sekcjami. Nowa kolejność warstw (od najniższej do najwyższej), spójna na CAŁEJ stronie:

1. **Tła sekcji** (`--cream` / `--blush`) — najniżej
2. **NIĆ** (linia + zgrubienie + kropka) — nad tłami, widoczna zawsze
3. **Teksty, nagłówki, listy** — nad nicią, ale ich **tło jest przezroczyste**, więc nić prześwituje między/za literami
4. **Kafelki zdjęć i placeholdery** — najwyżej; nić przechodzi POD nimi (chowa się pod zdjęciami i wynurza za nimi — to daje wrażenie przeszywania)

Realizacja: pojedynczy element SVG rozpięty na całą wysokość dokumentu (`position: absolute`, względem kontenera strony, nie `fixed`), z `z-index` ustawionym tak, by leżał nad tłami sekcji, a pod warstwą kafelków. Sekcje **nie mogą mieć nieprzezroczystego tła nałożonego na całą szerokość ponad nicią** — tło ma być na najniższej warstwie, nie przykrywać linii.

---

### B. CIĄGŁOŚĆ (bez przerw)

- Nić to **jedna nieprzerwana ścieżka** (`<path>`) od samej góry strony (y=0) do samego dołu (pełna wysokość dokumentu).
- **Nie ma już logiki „przerw między sekcjami".** Odstępy 64px między sekcjami przestają być potrzebne do pokazania nici (mogą zostać dla oddechu, ale nić nie zależy już od nich).
- Linia biegnie slalomem przez ŚRODEK strony (nie z boku): łagodne łuki lewo-prawo, amplituda ~12% szerokości okna, pełna fala co ~90vh. Ma wić się centralnie, przechodząc pod kafelkami zdjęć w kolejnych sekcjach.
- Ponieważ wysokość strony jest znana dopiero po złożeniu layoutu — geometrię ścieżki generować po `load` i przeliczać przy zmianie rozmiaru okna (ResizeObserver na kontenerze strony).

---

### C. KROPKA — ŁEZKA (zmiana kształtu)

- Kropka przestaje być okrągłym punktem z poświatą. Ma być **łezką** (kształt kropli): zaokrąglona z jednej strony, zwężona w szpic z drugiej, zorientowana **wzdłuż kierunku ruchu nici** (szpic z tyłu, jakby ciągnęła ogon).
- **Bez poświaty/glow.** Czysty, pełny kształt w kolorze `--copper`. Ma być elegancka, nie świecąca.
- Rozmiar: ~10×16px (dłuższa niż szersza, bo to łezka).
- Orientacja łezki obraca się zgodnie ze styczną do ścieżki w bieżącym punkcie (żeby szpic zawsze wskazywał wzdłuż linii).
- Pozycja = postęp przewinięcia strony (0% góra, 100% dół). Przewijasz w dół — łezka jedzie w dół.

---

### D. ZGRUBIENIE — „WĄŻ, KTÓRY POŁKNĄŁ MYSZ" (zostaje, dopracować)

- Wokół łezki linia **grubieje i wraca do cienkości** — wybrzuszenie wędrujące razem z kropką. To zostaje, bo działa.
- Realizacja jak dotychczas: druga ścieżka o większej grubości (4px), odsłaniana w oknie ~140px długości wokół pozycji kropki przez `stroke-dasharray`/`stroke-dashoffset`, krawędzie wygaszane, żeby narastało płynnie.
- **Bez glow na zgrubieniu** — samo pogrubienie linii, czysto.
- Efekt docelowy: po całej stronie płynnie wędruje jedno wybrzuszenie z łezką na czele — nieprzerwanie, przez wszystkie sekcje.

---

### E. CZYTELNOŚĆ (wymóg — pilnować)

Przezroczyste tła tekstów odsłaniają nić, ale nie mogą utrudnić czytania:
- Linia bazowa jest **cienka (1.5px)** i miedziana — pod tekstem ma prześwitywać delikatnie, nie przecinać liter w poprzek w sposób męczący.
- Jeśli w którejś sekcji nić trafia dokładnie w kolumnę tekstu i szkodzi czytelności — dopuszczalne jest lokalne odchylenie amplitudy slalomu, tak by linia przechodziła raczej obok bloków tekstu / pod kafelkami niż przez sam środek akapitu. Priorytet: (1) ciągłość linii, (2) czytelność tekstu, (3) przejście pod kafelkami.
- Naprzemienne tła sekcji (`--cream`/`--blush`) **zostają** — nić leży nad nimi, ale tła nadal dają rytm strony. (Nie robić całej strony jednolicie przezroczystej — chodzi o to, że nić jest NAD tłem, a nie że tła znikają.)

---

### F. WYDAJNOŚĆ (bez zmian względem 12.8)

- Jeden SVG na stronę, aktualizowane tylko: pozycja i rotacja łezki oraz `stroke-dashoffset` zgrubienia. Bez przeliczania layoutu przy przewijaniu.
- `requestAnimationFrame`, listener `passive`, wspólny nasłuch scrolla z resztą efektów.
- `prefers-reduced-motion`: nić widoczna (ciągła), łezka na górze, bez ruchu i bez wędrującego zgrubienia.
- Cel Lighthouse Performance ≥90 mobile pozostaje.

---

### G. ETAP

**ETAP 11B — Przebudowa nici na ciągłą:** przebuduj nić wg tej poprawki — warstwy (A), ciągłość bez przerw (B), łezka zamiast kropki z poświatą (C), zgrubienie bez glow (D), z pilnowaniem czytelności (E). Usuń logikę zależną od przerw między sekcjami. Zweryfikuj, że linia jest nieprzerwana od góry do dołu strony i przechodzi pod kafelkami zdjęć. Build, Lighthouse mobile, podsumuj. STOP.

*Licznik w pasku zaufania (12.5) działa i zostaje bez zmian — nie ruszać.*

---

*Poprawka 12.4 — nić ciągła po wierzchu strony. Sygnatura marki przeszywająca całą stronę nieprzerwanie.*








# 13. ROZSTĘPUJĄCE SIĘ SEKCJE (ruch boczny przy przewijaniu)

> **Motyw:** cała strona ELARY „rozstępuje się" przy przewijaniu — tak jak hero (tekst w lewo, kafelki w prawo). Ten sam gest powtórzony w trzech kolejnych sekcjach tworzy spójny, zapamiętywalny charakter. Element rozjeżdża się, gdy sekcja przewija się przez ekran, i wraca, gdy przewijamy w drugą stronę.
>
> **Zasada:** ruch jest sterowany pozycją sekcji względem ekranu (scroll-linked), nie jednorazowym wyzwoleniem. Płynny, odwracalny, elegancki — nie skokowy.

---

### 13.1 MECHANIKA WSPÓLNA (dla wszystkich trzech sekcji)

- Postęp `p` liczony od pozycji sekcji w oknie: `p = 0`, gdy sekcja dopiero wchodzi od dołu ekranu; `p ≈ 1`, gdy jest wyśrodkowana / wychodzi górą. Zakres dobrać tak, by efekt rozgrywał się, gdy sekcja jest dobrze widoczna (np. od momentu, gdy górna krawędź sekcji minie 85% wysokości okna, do momentu gdy minie 35%).
- Elementy rozjeżdżają się od pozycji docelowej (0) do przesunięcia maksymalnego wraz z `p`. Przy `p=0` wszystko na swoim miejscu (sekcja czytelna), przesunięcie rośnie w miarę przewijania.
- **Ruch odwracalny:** przewijanie w górę cofa elementy tą samą ścieżką.
- Wyłącznie `transform: translate3d()`. Zero zmian layoutu, zero animacji szerokości/wysokości.
- **Element nie może zniknąć całkowicie ani powodować przewijania poziomego** — maksymalne przesunięcia dobrane tak, by karty wyjeżdżały częściowo poza kadr, ale sekcja nigdy nie generowała poziomego scrolla (`overflow-x: hidden` na wrapperze sekcji jako zabezpieczenie).
- Krzywa: liniowa lub delikatny `easeOut` na `p` — ruch ma podążać za przewijaniem naturalnie.

---

### 13.2 GALERIA PRAC (6 zdjęć, układ 3+3)

- Układ: dwa rzędy po 3 zdjęcia (desktop). 
- **Górny rząd (3 zdjęcia): ucieka w LEWO** — `translateX(-160px × p)` (desktop), `-90px × p` (mobile).
- **Dolny rząd (3 zdjęcia): ucieka w PRAWO** — `translateX(+160px × p)` (desktop), `+90px × p` (mobile).
- Opcjonalnie subtelne domknięcie: `opacity 1 → 0.6` przy krawędziach (nie do zera — mają wyjeżdżać, nie znikać).
- Podpisy kategorii pod zdjęciami jadą razem ze swoim rzędem.

---

### 13.3 ZESPÓŁ (3 zdjęcia, ruch rozbieżny)

- Układ: 3 karty w rzędzie (desktop).
- **Lewa karta: ucieka w LEWO** — `translateX(-140px × p)`.
- **Prawa karta: ucieka w PRAWO** — `translateX(+140px × p)`.
- **Środkowa karta: ucieka w GÓRĘ** — `translateY(-120px × p)`.
- Efekt: trójka „rozchodzi się" w trzech kierunkach — lewo, prawo, góra. To najbardziej wyrazisty moment z tej trójki, więc może mieć nieco większą amplitudę.
- Mobile: karty ustawione w pionie (1 kolumna) — wtedy zamiast rozjazdu bocznego zastosować lekkie naprzemienne wejście (lewa z lewej, prawa z prawej, środkowa od dołu), amplituda ~60px, bo poziomy rozjazd na wąskim ekranie nie ma sensu.

---

### 13.4 OPINIE (6 kart, układ 3+3)

- Układ: dwa rzędy po 3 karty opinii (desktop).
- **Górny rząd: ucieka w LEWO** — `translateX(-160px × p)`.
- **Dolny rząd: ucieka w PRAWO** — `translateX(+160px × p)`.
- Identyczny wzorzec jak galeria (13.2) — celowo, żeby obie sekcje „rymowały się" wizualnie.
- Gwiazdki, treść, podpis (`Imię N.`, `opinia Google`) jadą razem z kartą.

---

### 13.5 SEKCJE STATYCZNE (bez zmian — nie ruszać)

Dla jasności — te sekcje NIE dostają ruchu bocznego:
- „Na każdą okazję" (4 karty) — zostaje statyczna.
- Pasek zaufania z licznikami — zostaje (liczniki działają).
- Promocja miesiąca, cennik-zajawka, voucher-zajawka, CTA — bez ruchu bocznego (mają własne wejścia kaskadowe z 12.7).

---

### 13.6 WYDAJNOŚĆ I DOSTĘPNOŚĆ

- **Wspólny nasłuch scrolla** — te trzy sekcje podpinają się pod ten sam mechanizm `requestAnimationFrame` co hero i nić (nie tworzyć osobnych listenerów scrolla dla każdej sekcji).
- Każda sekcja liczona tylko, gdy jest w okolicy ekranu (IntersectionObserver włącza/wyłącza jej udział w pętli) — sekcje poza ekranem nie liczą transformacji.
- `will-change: transform` tylko na elementach aktualnie w ruchu (gdy sekcja jest w oknie), zdejmowane po wyjściu.
- **`prefers-reduced-motion: reduce`** → żadnego ruchu bocznego; elementy pojawiają się normalnie (ewentualnie samo delikatne fade z 12.7).
- Zero przewijania poziomego na każdej szerokości (360/390/414/desktop).
- Cel Lighthouse Performance ≥90 mobile pozostaje.

---

### 13.7 ETAP

**ETAP 13 — Rozstępujące się sekcje:** dodaj scroll-linked ruch boczny do trzech sekcji strony głównej wg 13.2 (galeria: górny rząd w lewo, dolny w prawo), 13.3 (zespół: lewa w lewo, prawa w prawo, środkowa w górę) i 13.4 (opinie: górny rząd w lewo, dolny w prawo). Wspólna mechanika z 13.1, wszystkie zabezpieczenia z 13.6. Podłącz pod istniejący wspólny nasłuch scrolla (ten sam co hero/nić). Sekcje z 13.5 zostaw statyczne. Build, Lighthouse mobile, sprawdź brak przewijania poziomego, podsumuj. STOP.

---

*Sekcja 13 — rozstępujące się sekcje. Ten sam gest co hero, powtórzony trzykrotnie, buduje spójny charakter strony.*