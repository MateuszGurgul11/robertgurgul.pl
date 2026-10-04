// Treści podstron galerii (/photos, /videos, /docs). Edytuj teksty tutaj.
// Same zdjęcia, filmy i dokumenty dodaje się w panelu CMS (/admin) — podstrony pobierają je z bazy.

export const podstrony = {
  okruszki: "Strona główna",
  media: {
    tytul: "Media",
    meta: "Media z ferm — zdjęcia, filmy i dokumenty",
    etykieta: "Media",
    tytulLewy: "Media",
    tytulPrawy: "z ferm",
    wstep: "Zdjęcia, nagrania i dokumenty z ferm, na których pracuję — wybierz, co chcesz zobaczyć.",
    zobacz: "Zobacz wszystkie",
    dzialy: {
      zdjecia: {
        tytul: "Zdjęcia",
        opis: "Kurniki, stada i wyposażenie ferm — z audytów i codziennej opieki zootechnicznej.",
        href: "/photos",
      },
      filmy: {
        tytul: "Filmy",
        opis: "Krótkie nagrania z ferm i wizyt — jak wygląda praca w kurniku z bliska.",
        href: "/videos",
      },
      dokumenty: {
        tytul: "Dokumenty",
        opis: "Wzory dokumentów, instrukcje i materiały szkoleniowe do podglądu lub pobrania.",
        href: "/docs",
      },
    },
  },
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
    nieObslugiwany: "Ta przeglądarka nie odtwarza tego formatu filmu.",
    pobierzFilm: "Pobierz film",
  },
  dokumenty: {
    tytul: "Dokumenty",
    meta: "Dokumenty i materiały do pobrania",
    etykieta: "Do pobrania",
    tytulLewy: "Dokumenty",
    tytulPrawy: "do pobrania",
    wstep: "Wzory dokumentów, instrukcje i materiały szkoleniowe dla ferm drobiu — do podglądu online lub pobrania.",
    licznik: ["dokument", "dokumenty", "dokumentów"],
    pusto: "Dokumenty pojawią się wkrótce.",
    blad: "Nie udało się pobrać dokumentów. Spróbuj ponownie za chwilę.",
    podglad: "Podgląd",
    pobierz: "Pobierz",
    otworz: "Otwórz",
    typPlik: "PDF",
    typLink: "Link",
  },
};

/** Polska odmiana liczebnika: 1 zdjęcie, 2 zdjęcia, 5 zdjęć. */
export function odmiana(n: number, [jeden, kilka, wiele]: string[]) {
  if (n === 1) return jeden;
  const d = n % 10;
  const s = n % 100;
  return d >= 2 && d <= 4 && (s < 12 || s > 14) ? kilka : wiele;
}
