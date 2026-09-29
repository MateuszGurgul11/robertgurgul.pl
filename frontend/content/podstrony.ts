// Treści podstron galerii (/photos, /videos, /docs). Edytuj teksty tutaj.
// Same zdjęcia, filmy i dokumenty dodaje się w panelu CMS (/admin) — podstrony pobierają je z bazy.

export const podstrony = {
  nawigacja: [
    { etykieta: "Strona główna", href: "/" },
    { etykieta: "Zdjęcia", href: "/photos" },
    { etykieta: "Filmy", href: "/videos" },
    { etykieta: "Dokumenty", href: "/docs" },
    { etykieta: "Kontakt", href: "/#footer" },
  ],
  zadzwon: "Zadzwoń",
  okruszki: "Strona główna",
  zdjecia: {
    tytul: "Zdjęcia",
    meta: "Zdjęcia z ferm drobiu — galeria",
    etykieta: "Galeria",
    tytulLewy: "Zdjęcia",
    tytulPrawy: "z ferm",
    wstep: "Kurniki, stada i wyposażenie ferm, na których pracuję — zdjęcia z audytów i codziennej opieki zootechnicznej.",
    licznik: ["zdjęcie", "zdjęcia", "zdjęć"],
    pusto: "Galeria zdjęć zostanie uzupełniona wkrótce.",
    blad: "Nie udało się pobrać zdjęć. Spróbuj ponownie za chwilę.",
    powieksz: "Powiększ zdjęcie",
    zamknij: "Zamknij",
    poprzednie: "Poprzednie zdjęcie",
    nastepne: "Następne zdjęcie",
  },
  filmy: {
    tytul: "Filmy",
    meta: "Filmy z ferm drobiu",
    etykieta: "Materiały wideo",
    tytulLewy: "Filmy",
    tytulPrawy: "z ferm",
    wstep: "Nagrania z ferm, wizyt i szkoleń — jak wygląda praca w kurniku z bliska.",
    licznik: ["film", "filmy", "filmów"],
    pusto: "Filmy pojawią się wkrótce.",
    blad: "Nie udało się pobrać filmów. Spróbuj ponownie za chwilę.",
    odtworz: "Odtwórz",
    zamknij: "Zamknij",
  },
  dokumenty: {
    tytul: "Dokumenty",
    meta: "Dokumenty i materiały do pobrania",
    etykieta: "Do pobrania",
    tytulLewy: "Doku",
    tytulPrawy: "menty",
    wstep: "Artykuły, opracowania i materiały dla hodowców drobiu — do przeczytania online lub pobrania.",
    licznik: ["dokument", "dokumenty", "dokumentów"],
    pusto: "Dokumenty pojawią się wkrótce.",
    blad: "Nie udało się pobrać dokumentów. Spróbuj ponownie za chwilę.",
    podglad: "Podgląd",
    pobierz: "Pobierz",
    otworz: "Otwórz",
    typPlik: "PDF",
    typLink: "Link",
  },
  stopka: {
    haslo: "Zdrowe stado zaczyna się od dobrego planu",
    powrot: "Wróć na stronę główną",
    prawa: "© 2026 Robert Gurgul. Wszelkie prawa zastrzeżone",
  },
};

/** Polska odmiana liczebnika: 1 zdjęcie, 2 zdjęcia, 5 zdjęć. */
export function odmiana(n: number, [jeden, kilka, wiele]: string[]) {
  if (n === 1) return jeden;
  const d = n % 10;
  const s = n % 100;
  return d >= 2 && d <= 4 && (s < 12 || s > 14) ? kilka : wiele;
}
