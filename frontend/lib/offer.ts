import type { Service } from "@/lib/types";

const DEFAULT_OFFER: { title: string; description: string }[] = [
  {
    title: "Kompleksowe wyposażenie ferm drobiu",
    description:
      "Od linii pojenia po sterowniki klimatu - komplet urządzeń dobranych tak, by działały jako jeden system, nie zestaw przypadkowych elementów.",
  },
  {
    title: "Usługa zootechniczna",
    description:
      "Stałe wsparcie na każdym etapie odchowu - od pierwszego dnia piskląt do dnia, w którym stado opuszcza fermę.",
  },
  {
    title: "Sprzedaż urządzeń drobiarskich",
    description:
      "Sprzęt dobrany do skali i profilu Twojej fermy, z fachowym wdrożeniem - nie tylko do specyfikacji w katalogu.",
  },
  {
    title: "Odchów kur niosek",
    description:
      "Żywienie, światło i zdrowie pod kontrolą od pierwszego dnia, tak by stado weszło w nieśność w pełnej formie.",
  },
  {
    title: "Sterowanie mikroklimatem",
    description:
      "Temperatura, wilgotność i wymiana powietrza dopasowane do cyklu odchowu - mikroklimat, który chroni ptaki i wynik fermy.",
  },
  {
    title: "Sprzedaż kur niosek",
    description:
      "Zdrowe, sprawdzone stado nieśne dostarczone na fermę z pełnym wsparciem zootechnicznym od pierwszego dnia.",
  },
  {
    title: "Ocena jakości drobiu",
    description:
      "Niezależny przegląd stada i warunków hodowli - jasny obraz tego, co działa, a co wymaga zmiany.",
  },
  {
    title: "Tucz kogutów",
    description:
      "Program tuczu dopasowany do tempa wzrostu i celu produkcyjnego - bez zgadywania i bez strat na końcu cyklu.",
  },
];

export const DEFAULT_SERVICES: Service[] = DEFAULT_OFFER.map(
  ({ title, description }, i) => ({
    id: `default-${i}`,
    title,
    description,
    imageUrl: null,
    order: i,
  })
);

/** Longer copy for the /oferta catalog, keyed by service title. */
export const OFFER_DETAILS: Record<string, string> = {
  "Kompleksowe wyposażenie ferm drobiu":
    "Dobieram linie pojenia, karmienia, ogrzewania i sterowniki klimatu tak, by pracowały jako jeden układ. Na miejscu sprawdzam stan budynków, przepływy powietrza i skalę stada — potem układam specyfikację, która pasuje do Twojej fermy, a nie do katalogu producenta. Wdrożenie obejmuje ustawienie, szkolenie obsługi i kontrolę po pierwszym cyklu.",
  "Usługa zootechniczna":
    "Regularna opieka od wstawienia piskląt do dnia, w którym stado opuszcza obiekt. Śledzę przyrosty, zdrowie, paszę i mikroklimat, a decyzje podejmuję na podstawie tego, co widać w kurniku — nie z arkusza wzorcowego. Zostaję w kontakcie między wizytami, żeby korekta nie czekała na kolejny audyt.",
  "Sprzedaż urządzeń drobiarskich":
    "Urządzenia dobrane do obsady, wieku stada i układu budynku. Pomagam wybrać sprzęt, który da się serwisować i rozbudować, a nie tylko „domknąć ofertę”. Po dostawie jest montaż, rozruch i instrukcja dla zespołu — tak, by urządzenie pracowało od pierwszego dnia.",
  "Odchów kur niosek":
    "Program odchowu od pierwszego dnia: receptura, światło, gęstość i profilaktyka ustawione pod wejście w nieśność. Pilnuję, żeby ptaki weszły w produkcję w równej kondycji, bez strat, które widać dopiero w szczycie nieśności. Na każdym etapie widać, co działa, a co wymaga korekty.",
  "Sterowanie mikroklimatem":
    "Temperatura, wilgotność, CO₂ i wymiana powietrza dopasowane do fazy odchowu i konstrukcji obiektu. Ustawiam sterowniki, czujniki i alarmy tak, by komfort stada nie zależał od pogody za ścianą. Efekt: mniej stresu cieplnego, równy przyrost i niższe zużycie energii.",
  "Sprzedaż kur niosek":
    "Zdrowe, sprawdzone stado nieśne z pełnym wsparciem zootechnicznym od wstawienia. Ustalamy termin, warunki transportu i plan żywienia na pierwsze tygodnie w Twoim obiekcie. Po dostawie zostaję przy stadzie na starcie — żeby nieśność nie zaczynała się od zgadywania.",
  "Ocena jakości drobiu":
    "Niezależny przegląd stada, warunków hodowli i jakości tuszy lub jaj. Dostajesz jasny raport: co działa, co kosztuje za dużo i co zmienić przed kolejnym cyklem. To nie kontrola „na papierze” — oglądam ptaki, budynek i dokumentację na miejscu.",
  "Tucz kogutów":
    "Program tuczu dopasowany do tempa wzrostu i celu produkcyjnego. Receptura, gęstość i mikroklimat ustawione tak, by nie przepłacać za paszę na końcu cyklu i nie tracić na wyrównaniu stada. Regularna ocena przyrostów pozwala skorygować plan, zanim strata się utrwali.",
};

export function offerDetailsFor(service: Service): string {
  const fromMap = OFFER_DETAILS[service.title];
  if (fromMap) return fromMap;
  return service.description?.trim() || "";
}
