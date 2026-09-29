// Sekcja strony głównej. Teksty: content/strona-glowna.ts. Klasy i atrybuty (hover=, slider=, parallax=…)
// pochodzą z szablonu i sterują animacjami w public/assets/js/site.js — nie zmieniaj ich bez potrzeby.
import { Faq } from "@/components/strona/faq";
import { Galeria } from "@/components/strona/galeria";
import { Hero } from "@/components/strona/hero";
import { JakPracuje } from "@/components/strona/jak-pracuje";
import { Kompetencje } from "@/components/strona/kompetencje";
import { KontaktCta } from "@/components/strona/kontakt";
import { Liczby } from "@/components/strona/liczby";
import { Lokalizacja } from "@/components/strona/lokalizacja";
import { Materialy } from "@/components/strona/materialy";
import { Motto } from "@/components/strona/motto";
import { Naglowek } from "@/components/strona/naglowek";
import { PrzejscieOMnie, OMnie } from "@/components/strona/o-mnie";
import { OfertaWstep, Oferta } from "@/components/strona/oferta";
import { Podpowiedzi, OknoFormularza, OknoWideo, OknoMenu, Cookies } from "@/components/strona/okna";
import { Podejscie } from "@/components/strona/podejscie";
import { Preloader } from "@/components/strona/preloader";
import { MasterPreloader, Szum, Przejscie, ObrocTelefon } from "@/components/strona/ramy";
import { Stopka } from "@/components/strona/stopka";
import { Wspolpraca } from "@/components/strona/wspolpraca";

type Props = {
  zdjecia: { src: string; alt: string }[];
  dokumenty: { tytul: string; href: string }[];
  linki: { etykieta: string; tytul: string; href: string }[];
};

export function SzkieletStrony({ zdjecia, dokumenty, linki }: Props) {
  return (
    <div data-barba="wrapper" className="transition-wrapper">
      <MasterPreloader />
      <Szum />
      <Preloader />
      <Przejscie />
      <div data-barba-namespace="home" data-barba="container" className="transition-container clip">
        <Naglowek />
        <Hero />
        <Motto />
        <PrzejscieOMnie />
        <OMnie />
        <Lokalizacja />
        <OfertaWstep />
        <Oferta />
        <JakPracuje />
        <Kompetencje />
        <Wspolpraca />
        <Podejscie />
        <Liczby />
        <Galeria zdjecia={zdjecia} />
        <Materialy dokumenty={dokumenty} linki={linki} />
        <KontaktCta />
        <Faq />
        <Stopka />
        <Podpowiedzi />
        <OknoFormularza />
        <OknoWideo />
        <OknoMenu />
        <Cookies />
      </div>
      <ObrocTelefon />
    </div>
  );
}
