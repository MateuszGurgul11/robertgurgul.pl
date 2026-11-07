// Treści strony głównej. Edytuj teksty tutaj, komponenty w components/strona/ tylko je wyświetlają.
// Zdjęcia, dokumenty i filmy do galerii dodaje się w panelu CMS (/admin).

export const tresci = {
  kontakt: {
    telefon: "+48 502 592 194",
    telefonHref: "tel:+48502592194",
    email: "r.gurgul@interia.pl",
    emailHref: "mailto:r.gurgul@interia.pl",
    adres: "PHU Robert Gurgul, 18A, 63-040 Klęka",
    adresLinia1: "PHU Robert Gurgul",
    adresLinia2: "18A, 63-040 Klęka",
    mapa: "https://www.google.com/maps/search/?api=1&query=K%C5%82%C4%99ka+18A,+63-040",
  },
  nazwa: "ROBERT GURGUL",
  preloader: {
    motto1: "Zdrowe stado zaczyna się",
    motto2: "od      dobrego planu",
    ladowanie1: "Wczytywanie strony",
    ladowanie2: "Proszę czekać",
    etykieta1: "Doradztwo",
    etykieta2: "zootechniczne",
    wczytano: "wczytano",
  },
  naglowek: {
    menu: [
      {
        etykieta: "O mnie",
        href: "#about",
      },
      {
        etykieta: "Oferta",
        href: "#benefits",
      },
      {
        etykieta: "Jak pracuję",
        href: "#commissioning",
      },
      {
        etykieta: "Z ferm",
        href: "#gallery",
      },
      {
        etykieta: "Kontakt",
        href: "#footer",
      },
    ],
    // Zakładka z rozwijaną listą podstron mediów (przed „Kontakt”)
    media: {
      etykieta: "Media",
      href: "/media",
      linki: [
        { etykieta: "Zdjęcia", href: "/photos" },
        { etykieta: "Dokumenty", href: "/docs" },
        { etykieta: "Filmy", href: "/videos" },
      ],
    },
    cta: "Porozmawiajmy",
  },
  hero: {
    etykieta: "Doradztwo zootechniczne dla ferm drobiu",
    // prawa góra: duże liczby z podpisem: rok startu i liczba ferm, z którymi współpracuję.
    liczby: [
      { liczba: "1997", opis1: "doradzam", opis2: "od tego roku" },
      { liczba: "128", opis1: "ferm", opis2: "we współpracy" },
    ],
    // lewy dół: hasło w trzech wierszach
    haslo: ["Drób nie wybacza", "przypadkowych", "decyzji"],
    // dolny rząd: dwa wiersze, wyróżniony fragment w „chipie” (wyroznij: 1 = pierwszy wiersz, 2 = drugi)
    info: [
      { wiersz1: "PHU Robert Gurgul", wiersz2: "Klęka", wyroznij: 2, href: "" },
      { wiersz1: "Pierwszy krok", wiersz2: "audyt na fermie", wyroznij: 2, href: "" },
      { wiersz1: "Zadzwoń", wiersz2: "+48 502 592 194", wyroznij: 2, href: "tel:+48502592194" },
    ],
    ctaMobile: "Umów audyt",
    cta: "Umów audyt fermy",
  },
  motto: {
    etykieta: "Co jest stawką",
    cytat: "W kurniku błąd rzadko widać od razu. Zła receptura, rozregulowany mikroklimat albo nierówny odchów wychodzą dopiero pod koniec cyklu, kiedy strata już się utrwaliła. Moja praca polega na tym, żeby zobaczyć to wcześniej.",
    przycisk: "Zobacz, jak pracuję",
    link: "#commissioning",
  },
  oMnie: {
    etykieta: "O mnie",
    imie: "Robert Gurgul",
    rola: "doradca zootechniczny",
    lead: "Od 1997 roku współpracuję ze 128 fermami kurczaków rzeźnych, kur niosek i kaczek piżmowych: hodowlami, które należą do najbardziej wymagających w branży.",
    kolumny: [
      {
        numer: "01",
        tytul: "Moja rola",
        tekst: "Nie sprzedaję jednego rozwiązania dla wszystkich. Dopasowuję żywienie, mikroklimat i opiekę zootechniczną do konkretnej fermy, jej budynków, stada i celu produkcyjnego.",
      },
      {
        numer: "02",
        tytul: "Nowoczesne fermy",
        tekst: "Nowe obiekty hodowlane mają coraz lepsze, mniej obciążające środowisko urządzenia. Pomagam wykorzystać je w pełni w codziennej produkcji, tam, gdzie liczy się jednocześnie dobrostan ptaków, jakość mięsa i odpowiedzialność za środowisko.",
      },
    ],
    przycisk: "Umów audyt fermy",
    filmy: "Filmy z ferm",
    filmyLink: "/videos",
  },
  lokalizacja: {
    naglowek: "Zaczynam od wizyty na fermie",
    pinezki: {
      ferma1: "Ferma",
      ferma2: "Wolica Kozia 48",
      wolicaKozia: "Wolica Kozia",
      debno: "Dębno",
      hermanow: "Hermanów",
      lutynia: "Lutynia",
      lutyniaOdleglosc: "3,7 km",
      noweMiasto: "Nowe Miasto nad Wartą",
      noweMiastoOdleglosc: "3,4 km",
      wolicaNowa: "Wolica Nowa",
      sroda: "Środa Wielkopolska",
      srodaOdleglosc: "20 km",
      jarocin: "Jarocin",
      jarocinOdleglosc: "13 km",
    },
    tekst: "Bez wizyty na miejscu nie ma dobrej diagnozy, tylko domysły. Oglądam budynki, sprzęt, stado i dokumentację, a potem rozmawiamy o planie, bez zobowiązań.",
    specjalizacjeTytul: "Z czym pracuję",
    specjalizacje: [
      {
        numer: "01",
        etykieta: "specjalizacja",
        nazwa: "Kurczęta rzeźne",
      },
      {
        numer: "02",
        etykieta: "specjalizacja",
        nazwa: "Kury nioski",
      },
      {
        numer: "03",
        etykieta: "specjalizacja",
        nazwa: "Kaczki piżmowe (Barbarie)",
      },
      {
        numer: "04",
        etykieta: "specjalizacja",
        nazwa: "Tucz kogutów",
      },
      {
        numer: "05",
        etykieta: "specjalizacja",
        nazwa: "Odchów kur niosek",
      },
      {
        numer: "06",
        etykieta: "specjalizacja",
        nazwa: "Jakość mięsa i jaj",
      },
    ],
    adresEtykieta: "Lokalizacja",
    przycisk: "Umów audyt fermy",
    przycisk2: "Umów audyt fermy",
  },
  oferta: {
    etykieta: "Oferta",
    tytul: "W czym pomagam",
    uslugi: [
      {
        tytul: "Usługa zootechniczna",
        wstep: "Stałe wsparcie na każdym etapie odchowu, od pierwszego dnia piskląt do dnia, w którym stado opuszcza fermę.",
        punkty: ["Regularna opieka od wstawienia piskląt do końca cyklu.", "Kontrola przyrostów, zdrowia, paszy i mikroklimatu.", "Korekty na bieżąco, w trakcie cyklu.", "Kontakt między wizytami, żeby korekta nie czekała na kolejny audyt."],
        zdjecie: {
          src: "/assets/media/cms-44-1600.webp",
          srcSet: "/assets/media/cms-44-800.webp 800w, /assets/media/cms-44-1280.webp 1280w, /assets/media/cms-44-1600.webp 1600w",
          alt: "Ferma Kogut",
        },
      },
      {
        tytul: "Ocena jakości drobiu",
        wstep: "Przegląd stada i warunków hodowli, jasny obraz tego, co działa, a co wymaga zmiany.",
        punkty: ["Przegląd stada, warunków hodowli i jakości tuszy lub jaj.", "Jasny raport: co działa, co kosztuje za dużo i co zmienić przed kolejnym cyklem.", "Ocena na miejscu, ptaki, budynek i dokumentacja, nie kontrola „na papierze”."],
        zdjecie: {
          src: "/assets/media/cms-10-1920.webp",
          srcSet: "/assets/media/cms-10-800.webp 800w, /assets/media/cms-10-1280.webp 1280w, /assets/media/cms-10-1920.webp 1920w",
          alt: "Ferma Niosek",
        },
      },
      {
        tytul: "Sterowanie mikroklimatem",
        wstep: "Temperatura, wilgotność i wymiana powietrza dopasowane do cyklu odchowu, mikroklimat, który chroni ptaki i wynik fermy.",
        punkty: ["Temperatura, wilgotność, CO₂ i wymiana powietrza dopasowane do fazy odchowu i konstrukcji obiektu.", "Ustawienie sterowników, czujników i alarmów.", "Komfort stada niezależny od pogody za ścianą.", "Mniej stresu cieplnego, równy przyrost i niższe zużycie energii."],
        zdjecie: {
          src: "/assets/media/cms-36-1920.webp",
          srcSet: "/assets/media/cms-36-800.webp 800w, /assets/media/cms-36-1280.webp 1280w, /assets/media/cms-36-1920.webp 1920w",
          alt: "Koguty",
        },
      },
      {
        tytul: "Odchów kur niosek",
        wstep: "Żywienie, światło i zdrowie pod kontrolą od pierwszego dnia, tak by stado weszło w nieśność w pełnej formie.",
        punkty: ["Program odchowu od pierwszego dnia.", "Receptura, światło, gęstość i profilaktyka ustawione pod wejście w nieśność.", "Równa kondycja stada bez strat widocznych dopiero w szczycie nieśności.", "Na każdym etapie widać, co działa, a co wymaga korekty."],
        zdjecie: {
          src: "/assets/media/cms-59-1094.webp",
          srcSet: "/assets/media/cms-59-800.webp 800w, /assets/media/cms-59-1094.webp 1094w",
          alt: "Kury",
        },
      },
      {
        tytul: "Tucz kogutów",
        wstep: "Program tuczu dopasowany do tempa wzrostu i celu produkcyjnego, bez zgadywania i bez strat na końcu cyklu.",
        punkty: ["Receptura, gęstość i mikroklimat ustawione pod cel produkcyjny.", "Bez przepłacania za paszę na końcu cyklu.", "Wyrównane stado bez strat.", "Regularna ocena przyrostów i korekta planu, zanim strata się utrwali."],
        zdjecie: {
          src: "/assets/media/cms-22-1920.webp",
          srcSet: "/assets/media/cms-22-800.webp 800w, /assets/media/cms-22-1280.webp 1280w, /assets/media/cms-22-1920.webp 1920w",
          alt: "Koguty",
        },
      },
      {
        tytul: "Kompleksowe wyposażenie ferm drobiu",
        wstep: "Od linii pojenia po sterowniki klimatu, komplet urządzeń dobranych tak, by działały jako jeden system, nie zestaw przypadkowych elementów.",
        punkty: ["Dobór linii pojenia, karmienia, ogrzewania i sterowników klimatu.", "Ocena stanu budynków, przepływów powietrza i skali stada na miejscu.", "Specyfikacja dopasowana do Twojej fermy, a nie do katalogu producenta.", "Ustawienie urządzeń, szkolenie obsługi i kontrola po pierwszym cyklu."],
        zdjecie: {
          src: "/assets/media/cms-43-1920.webp",
          srcSet: "/assets/media/cms-43-800.webp 800w, /assets/media/cms-43-1280.webp 1280w, /assets/media/cms-43-1920.webp 1920w",
          alt: "Ferma drobiu",
        },
      },
      {
        tytul: "Sprzedaż urządzeń drobiarskich",
        wstep: "Sprzęt dobrany do skali i profilu Twojej fermy, z fachowym wdrożeniem, nie tylko do specyfikacji w katalogu.",
        punkty: ["Urządzenia dobrane do obsady, wieku stada i układu budynku.", "Sprzęt, który da się serwisować i rozbudować.", "Montaż, rozruch i instrukcja dla zespołu po dostawie.", "Urządzenie pracuje od pierwszego dnia."],
        zdjecie: {
          src: "/assets/media/cms-47-1920.webp",
          srcSet: "/assets/media/cms-47-800.webp 800w, /assets/media/cms-47-1280.webp 1280w, /assets/media/cms-47-1920.webp 1920w",
          alt: "Ferma",
        },
      },
      {
        tytul: "Sprzedaż kur niosek",
        wstep: "Zdrowe, sprawdzone stado nieśne dostarczone na fermę z pełnym wsparciem zootechnicznym od pierwszego dnia.",
        punkty: ["Ustalenie terminu i warunków transportu.", "Plan żywienia na pierwsze tygodnie w Twoim obiekcie.", "Wsparcie zootechniczne od wstawienia.", "Obecność przy stadzie na starcie, żeby nieśność nie zaczynała się od zgadywania."],
        zdjecie: {
          src: "/assets/media/cms-62-1920.webp",
          srcSet: "/assets/media/cms-62-800.webp 800w, /assets/media/cms-62-1280.webp 1280w, /assets/media/cms-62-1920.webp 1920w",
          alt: "Kura",
        },
      },
    ],
    pokazWiecej: "Pokaż więcej",
  },
  jakPracuje: {
    tytul1: "Jak",
    tytul2: "pracuję",
    od: "01",
    do: "04",
    kroki: [
      { tytul: "Audyt fermy", kiedy: "wizyta na miejscu" },
      { tytul: "Plan żywienia i zootechniki", kiedy: "dla Twojej fermy" },
      { tytul: "Wdrożenie i szkolenie", kiedy: "razem z zespołem" },
      { tytul: "Stałe wsparcie", kiedy: "po wdrożeniu" },
    ],
  },
  kompetencje: {
    tytul: "Na co patrzę na fermie",
    opis: "Wynik stada to suma kilku obszarów. Sprawdzam je na miejscu i pokazuję, gdzie leży problem i co zmienić przed kolejnym cyklem.",
    podpis: "Każdą decyzję opieram na tym, co widać w kurniku, nie na karcie wzorcowej.",
    zakladkiEtykieta: "obszary",
    obszary: [
      {
        klucz: "studio",
        zakladka: "Żywienie",
        numer: "01",
        tytul: "Żywienie i receptury",
        grupa: "Stado i produkcja",
        tagi: ["Receptury paszowe", "Faza odchowu", "Kurczęta rzeźne", "Kury nioski", "Kaczki piżmowe (Barbarie)", "Tucz kogutów"],
        opis: "Receptury paszowe dopasowane do fazy odchowu i celu produkcyjnego.",
        zdjecia: [
          {
            src: "/assets/media/cms-64-768.webp",
            srcSet: "/assets/media/cms-64-768.webp 768w",
            alt: "Kury",
          },
          {
            src: "/assets/media/cms-46-1920.webp",
            srcSet: "/assets/media/cms-46-800.webp 800w, /assets/media/cms-46-1280.webp 1280w, /assets/media/cms-46-1920.webp 1920w",
            alt: "Ferma drobiu",
          },
          {
            src: "/assets/media/cms-11-900.webp",
            srcSet: "/assets/media/cms-11-800.webp 800w, /assets/media/cms-11-900.webp 900w",
            alt: "Ferma Kurcząt",
          },
          {
            src: "/assets/media/cms-31-1920.webp",
            srcSet: "/assets/media/cms-31-800.webp 800w, /assets/media/cms-31-1280.webp 1280w, /assets/media/cms-31-1920.webp 1920w",
            alt: "Ferma kurcząt",
          },
        ],
      },
      {
        klucz: "deluxe",
        zakladka: "Mikroklimat",
        numer: "02",
        tytul: "Mikroklimat i wentylacja",
        grupa: "Środowisko i zdrowie",
        tagi: ["Temperatura", "Wilgotność", "CO₂", "Wymiana powietrza", "Sterowniki i czujniki"],
        opis: "Temperatura, wilgotność i wymiana powietrza pod kontrolą przez cały cykl.",
        zdjecia: [
          {
            src: "/assets/media/cms-53-1920.webp",
            srcSet: "/assets/media/cms-53-800.webp 800w, /assets/media/cms-53-1280.webp 1280w, /assets/media/cms-53-1920.webp 1920w",
            alt: "Kogut",
          },
          {
            src: "/assets/media/cms-50-640.webp",
            srcSet: "/assets/media/cms-50-640.webp 640w",
            alt: "Ferma",
          },
          {
            src: "/assets/media/cms-57-1200.webp",
            srcSet: "/assets/media/cms-57-800.webp 800w, /assets/media/cms-57-1200.webp 1200w",
            alt: "Kury",
          },
          {
            src: "/assets/media/cms-41-1920.webp",
            srcSet: "/assets/media/cms-41-800.webp 800w, /assets/media/cms-41-1280.webp 1280w, /assets/media/cms-41-1920.webp 1920w",
            alt: "Ferma Kogut",
          },
        ],
      },
      {
        klucz: "superior",
        zakladka: "Zdrowie",
        numer: "03",
        tytul: "Zdrowie i biosekuracja",
        grupa: "Środowisko i zdrowie",
        tagi: ["Biosekuracja", "Profilaktyka", "Obserwacja stada", "Dokumentacja", "Ograniczanie strat"],
        opis: "Ograniczam ryzyko strat, zanim stanie się widoczne w wynikach stada.",
        zdjecia: [
          {
            src: "/assets/media/cms-51-1920.webp",
            srcSet: "/assets/media/cms-51-800.webp 800w, /assets/media/cms-51-1280.webp 1280w, /assets/media/cms-51-1920.webp 1920w",
            alt: "Ferma",
          },
          {
            src: "/assets/media/cms-29-1920.webp",
            srcSet: "/assets/media/cms-29-800.webp 800w, /assets/media/cms-29-1280.webp 1280w, /assets/media/cms-29-1920.webp 1920w",
            alt: "Kaczki",
          },
          {
            src: "/assets/media/cms-55-1074.webp",
            srcSet: "/assets/media/cms-55-800.webp 800w, /assets/media/cms-55-1074.webp 1074w",
            alt: "Kury",
          },
          {
            src: "/assets/media/cms-56-848.webp",
            srcSet: "/assets/media/cms-56-800.webp 800w, /assets/media/cms-56-848.webp 848w",
            alt: "Kury",
          },
        ],
      },
      {
        klucz: "suite",
        zakladka: "Dobrostan",
        numer: "04",
        tytul: "Dobrostan i jakość stada",
        grupa: "Stado i produkcja",
        tagi: ["Dobrostan stada", "Jakość mięsa", "Jakość jaj", "Wyrównanie stada", "Przyrosty", "Gęstość obsady"],
        opis: "Spokojne, zdrowe ptaki to efekt widoczny w wadze i jakości mięsa.",
        zdjecia: [
          {
            src: "/assets/media/cms-02-1920.webp",
            srcSet: "/assets/media/cms-02-800.webp 800w, /assets/media/cms-02-1280.webp 1280w, /assets/media/cms-02-1920.webp 1920w",
            alt: "Ferma Kogut rzeźny",
          },
        ],
      },
      {
        klucz: "family",
        zakladka: "Audyt",
        numer: "05",
        tytul: "Audyt i koszty",
        grupa: "Doradztwo i wynik",
        tagi: ["Audyt fermy", "Optymalizacja kosztów", "Zużycie paszy", "Zużycie energii", "Raport i zalecenia"],
        opis: "Przegląd fermy pod kątem tego, co realnie wpływa na wynik finansowy.",
        zdjecia: [
          {
            src: "/assets/media/cms-65-768.webp",
            srcSet: "/assets/media/cms-65-768.webp 768w",
            alt: "Pióro",
          },
        ],
      },
      {
        klucz: "penthouse",
        zakladka: "Szkolenia",
        numer: "06",
        tytul: "Szkolenia i wdrożenie",
        grupa: "Doradztwo i wynik",
        tagi: ["Szkolenia zespołu", "Wyposażenie ferm", "Rozruch urządzeń", "Instrukcja obsługi", "Stałe wsparcie"],
        opis: "Wprowadzam zmiany razem z Twoim zespołem i pokazuję, jak utrzymać je samodzielnie na co dzień.",
        zdjecia: [
          {
            src: "/assets/media/cms-40-1920.webp",
            srcSet: "/assets/media/cms-40-800.webp 800w, /assets/media/cms-40-1280.webp 1280w, /assets/media/cms-40-1920.webp 1920w",
            alt: "Ferma Kogut",
          },
        ],
      },
    ],
    obszarEtykieta: "Obszar",
    zakladkaEtykieta: "obszar",
    przycisk: "Umów audyt fermy",
  },
  wspolpraca: {
    naglowek: "Współpraca",
    wynik: {
      etykieta: "Po audycie dostajesz",
      wartosc1: "raport",
      wartosc2: "i plan",
    },
    // Prawa kolumna: co dokładnie zawiera wynik audytu.
    zawartosc: [
      { etykieta: "Co działa:", wartosc: "stado, budynek, sprzęt" },
      { etykieta: "Co kosztuje za dużo:", wartosc: "pasza, energia, straty" },
      { etykieta: "Co zmienić:", wartosc: "przed kolejnym cyklem" },
      { etykieta: "Po wdrożeniu:", wartosc: "stały kontakt" },
    ],
    oczekiwania: {
      tytul: "Czego się spodziewać",
      diagnoza: "Diagnoza:",
      diagnozaWartosc: "na miejscu",
      plan: "Plan:",
      planWartosc: "na miarę fermy",
    },
    wartosci: {
      tytul: "Moje wartości",
      jakosc: "Jakość: normy hodowlane traktuję jako punkt wyjścia, nie formalność do odhaczenia.",
      srodowisko: "Środowisko: mniej emisji, lepsze wykorzystanie zasobów, bez kompromisu w produkcji.",
      partnerstwo: "Partnerstwo: jestem na fermie wtedy, kiedy jest taka potrzeba, nie tylko przy podpisywaniu umowy.",
    },
    przycisk: "Umów audyt fermy",
  },
  podejscie: {
    etykieta: "podejście",
    tytul: "Od audytu do spokojnej głowy",
    tekst: "Zostaję w kontakcie po wdrożeniu: reaguję, gdy coś się zmienia na fermie, zanim zmieni się w problem. Cztery kroki dzielą zwykłe doradztwo od realnej zmiany na fermie.",
    portret: "/assets/media/robert-gurgul-portret.webp",
    portretAlt: "Robert Gurgul, doradca zootechniczny",
    imie: "Robert",
    nazwisko: "Gurgul",
  },
  liczby: [
    {
      liczba: "8",
      opis: "zakresów usług: od wyposażenia fermy po tucz kogutów",
    },
    {
      liczba: "3",
      opis: "gatunki drobiu: kurczęta rzeźne, kury nioski i kaczki piżmowe",
    },
    {
      liczba: "4",
      opis: "kroki współpracy: od audytu do stałego wsparcia",
    },
    {
      liczba: "1",
      opis: "doradca, który odpowiada osobiście",
    },
  ],
  galeria: {
    tytul1: "galeria",
    tytul2: "z ferm",
    zapasowe: [
      {
        src: "/assets/media/cms-09-1920.webp",
        alt: "Ferma Kaczek",
      },
      {
        src: "/assets/media/cms-13-640.webp",
        alt: "Ferma Kurcząt",
      },
      {
        src: "/assets/media/cms-04-1920.webp",
        alt: "Ferma Olszewo",
      },
      {
        src: "/assets/media/cms-30-1920.webp",
        alt: "Kaczki",
      },
      {
        src: "/assets/media/cms-16-1920.webp",
        alt: "Ferma Kogut",
      },
      {
        src: "/assets/media/cms-20-1920.webp",
        alt: "Kura nioska",
      },
      {
        src: "/assets/media/cms-28-1920.webp",
        alt: "Kaczka",
      },
      {
        src: "/assets/media/cms-01-1672.webp",
        alt: "Ferma",
      },
      {
        src: "/assets/media/cms-12-546.webp",
        alt: "Ferma Kurcząt",
      },
      {
        src: "/assets/media/cms-63-1920.webp",
        alt: "Kury",
      },
      {
        src: "/assets/media/cms-48-1632.webp",
        alt: "Kaczor",
      },
      {
        src: "/assets/media/cms-14-1920.webp",
        alt: "Ferma Kogut",
      },
      {
        src: "/assets/media/cms-67-1920.webp",
        alt: "Kaczki",
      },
      {
        src: "/assets/media/cms-60-1920.webp",
        alt: "Koguty",
      },
    ],
    przycisk: "Umów audyt fermy",
    podsumowanie: "Zdrowe stado, dobry wynik i spokojna głowa. Do tego prowadzi dobry plan. Do zobaczenia na fermie.",
  },
  materialy: {
    etykieta: "Materiały",
    tytul: "Dokumenty i filmy z ferm",
    najnowsze: "Najnowsze:",
    zakladkaDokumenty: "Dokumenty",
    zakladkaFilmy: "Filmy",
    dokumentOpis: "Dokument PDF do podglądu i pobrania.",
    dokumentTyp: "PDF",
    dokumentyZapasowe: [
      {
        tytul: "Charakterystyka Fermy Drobiu",
        href: "/docs",
      },
      {
        tytul: "Rejestr wizyt",
        href: "/docs",
      },
      {
        tytul: "Instrukcja Dobrostanu",
        href: "/docs",
      },
    ],
    okladki: [
      {
        src: "/assets/media/cms-06-1920.webp",
        alt: "Karta Tuczu",
      },
      {
        src: "/assets/media/cms-07-1920.webp",
        alt: "Karta Tuczu nr2",
      },
      {
        src: "/assets/media/cms-05-1200.webp",
        alt: "Odzież ochronna",
      },
    ],
    linkiZapasowe: [
      {
        etykieta: "Film",
        tytul: "Odchowalnia, woliera",
        href: "/videos",
      },
      {
        etykieta: "Film",
        tytul: "Odchowalnia, woliera 2",
        href: "/videos",
      },
      {
        etykieta: "Film",
        tytul: "Koguty",
        href: "/videos",
      },
      {
        etykieta: "Film",
        tytul: "Pisklaki",
        href: "/videos",
      },
      {
        etykieta: "Zdjęcia",
        tytul: "Galeria zdjęć z ferm",
        href: "/photos",
      },
      {
        etykieta: "Oferta",
        tytul: "Pełna oferta usług",
        href: "#benefits",
      },
    ],
    zobaczWszystkie: "Zobacz wszystkie",
    dokumentyLink: "/docs",
    filmyLink: "/videos",
  },
  kontaktCta: {
    tekst: "Masz pytanie o żywienie, mikroklimat albo chcesz porozmawiać o swojej fermie? Napisz lub zadzwoń, odpowiadam osobiście.",
    tytul: "Porozmawiajmy o Twojej fermie",
    przycisk: "Umów audyt fermy",
    zdjecieAlt: "Kury nioski na wybiegu",
  },
  faq: {
    tytul1: "Odpowiedzi na",
    tytul2: "najczęstsze pytania",
    tytul3: "Wszystko, co",
    tytul4: "warto wiedzieć",
    pytania: [
      {
        pytanie: "Jak rozpocząć współpracę?",
        odpowiedz: "Zadzwoń lub napisz. Pierwszym krokiem jest audyt fermy, wizyta na miejscu, podczas której oglądam budynki, sprzęt, stado i dokumentację.",
      },
      {
        pytanie: "Czy możliwa jest stała opieka nad stadem?",
        odpowiedz: "Tak, w ramach usługi zootechnicznej: regularna opieka od wstawienia piskląt do końca cyklu i kontakt między wizytami.",
      },
      {
        pytanie: "Czy doradzasz przy zakupie urządzeń?",
        odpowiedz: "Tak. Dobieram urządzenia do obsady, wieku stada i układu budynku, a po dostawie jest montaż, rozruch i instrukcja dla zespołu.",
      },
      {
        pytanie: "Czy sprzedajesz kury nioski?",
        odpowiedz: "Tak. Ustalamy termin, warunki transportu i plan żywienia na pierwsze tygodnie, a na starcie zostaję przy stadzie.",
      },
      {
        pytanie: "Na czym polega ocena jakości drobiu?",
        odpowiedz: "To przegląd stada, warunków hodowli i jakości tuszy lub jaj. Dostajesz raport: co działa, co kosztuje za dużo i co zmienić przed kolejnym cyklem.",
      },
      {
        pytanie: "Jak szybko możesz przyjechać na fermę?",
        odpowiedz: "Termin wizyty ustalamy indywidualnie, zadzwoń lub napisz.",
      },
    ],
  },
  stopka: {
    lokalizacjaEtykieta: "lokalizacja",
    mediaEtykieta: "Media",
    mediaLink: "Zdjęcia, filmy i dokumenty",
    prawa: "© 2026 Robert Gurgul. Wszelkie prawa zastrzeżone",
    polityka: "Polityka prywatności",
  },
  menu: {
    linki: [
      {
        etykieta: "O mnie",
        href: "#about",
      },
      {
        etykieta: "Lokalizacja",
        href: "#location",
      },
      {
        etykieta: "Oferta",
        href: "#benefits",
      },
      {
        etykieta: "Kompetencje",
        href: "#apartments",
      },
      {
        etykieta: "Współpraca",
        href: "#finance",
      },
      {
        etykieta: "Galeria",
        href: "#gallery",
      },
      {
        etykieta: "Zdjęcia",
        href: "/photos",
      },
      {
        etykieta: "Dokumenty",
        href: "/docs",
      },
      {
        etykieta: "Filmy",
        href: "/videos",
      },
      {
        etykieta: "Kontakt",
        href: "#footer",
      },
    ],
    telefonEtykieta: "Telefon",
    emailEtykieta: "E-mail",
    przycisk: "Umów audyt fermy",
  },
  formularz: {
    naglowek: "Napisz kilka słów o swojej fermie, a ustalimy termin audytu",
    pola: {
      imie: "Imię",
      nazwisko: "Nazwisko",
      email: "E-mail",
      telefon: "Telefon",
      wiadomosc: "Wiadomość",
    },
    zgoda: "Klikając przycisk, akceptujesz",
    polityka: "politykę prywatności",
    wyslij: "Wyślij zapytanie",
    wysylanie: "Wysyłanie…",
    sukcesTytul: "Dziękuję!",
    sukcesTekst: "Odezwę się wkrótce, żeby ustalić termin wizyty na fermie.",
    blad: "Ups! Nie udało się wysłać formularza. Spróbuj ponownie lub zadzwoń.",
    bledy: {
      wymagane: "To pole jest wymagane.",
      email: "Podaj prawidłowy adres e-mail.",
      telefon: "Podaj prawidłowy numer telefonu.",
      wiadomosc: "Napisz kilka słów (min. 5 znaków).",
    },
  },
  okna: {
    przeciagnij: "Przeciągnij",
  },
  cookies: {
    tytul: "Pliki cookie",
    tekst: "Korzystając dalej ze strony, akceptujesz",
    link: "politykę prywatności",
    ok: "OK",
  },
};

export type Tresci = typeof tresci;
