import { servicesApi } from "@/lib/api";
import { OfferRail } from "@/components/offer-rail";
import { ParallaxBand } from "@/components/parallax-band";
import { SpecialtyMarquee } from "@/components/specialty-marquee";
import type { Service } from "@/lib/types";

const DEFAULT_OFFER: { title: string; description: string }[] = [
  {
    title: "Kompleksowe wyposażenie ferm drobiu",
    description:
      "Od linii pojenia po sterowniki klimatu — komplet urządzeń dobranych tak, by działały jako jeden system, nie zestaw przypadkowych elementów.",
  },
  {
    title: "Usługa zootechniczna",
    description:
      "Stałe wsparcie na każdym etapie odchowu — od pierwszego dnia piskląt do dnia, w którym stado opuszcza fermę.",
  },
  {
    title: "Sprzedaż urządzeń drobiarskich",
    description:
      "Sprzęt dobrany do skali i profilu Twojej fermy, z fachowym wdrożeniem — nie tylko do specyfikacji w katalogu.",
  },
  {
    title: "Odchów kur niosek",
    description:
      "Żywienie, światło i zdrowie pod kontrolą od pierwszego dnia, tak by stado weszło w nieśność w pełnej formie.",
  },
  {
    title: "Sterowanie mikroklimatem",
    description:
      "Temperatura, wilgotność i wymiana powietrza dopasowane do cyklu odchowu — mikroklimat, który chroni ptaki i wynik fermy.",
  },
  {
    title: "Sprzedaż kur niosek",
    description:
      "Zdrowe, sprawdzone stado nieśne dostarczone na fermę z pełnym wsparciem zootechnicznym od pierwszego dnia.",
  },
  {
    title: "Ocena jakości drobiu",
    description:
      "Niezależny przegląd stada i warunków hodowli — jasny obraz tego, co działa, a co wymaga zmiany.",
  },
  {
    title: "Tucz kogutów",
    description:
      "Program tuczu dopasowany do tempa wzrostu i celu produkcyjnego — bez zgadywania i bez strat na końcu cyklu.",
  },
];

const DEFAULT_SERVICES: Service[] = DEFAULT_OFFER.map(({ title, description }, i) => ({
  id: `default-${i}`,
  title,
  description,
  imageUrl: null,
  order: i,
}));

export async function OfferSection() {
  const services = await servicesApi.list().catch(() => []);
  const items = services.length ? services : DEFAULT_SERVICES;

  return (
    <>
      <OfferRail services={items} />
      <ParallaxBand />
      <div className="bg-navy-deep pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SpecialtyMarquee />
        </div>
      </div>
    </>
  );
}
