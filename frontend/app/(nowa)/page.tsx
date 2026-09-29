import { photosApi, docsApi, videosApi } from "@/lib/api";
import { tresci as t } from "@/content/strona-glowna";
import { SzkieletStrony } from "@/components/strona/szkielet";
import { SzablonSkrypty, type SzablonSkrypt } from "@/components/szablon/szablon-skrypty";

// Strona główna. Teksty: content/strona-glowna.ts. Zdjęcia, dokumenty i filmy: panel CMS (/admin),
// z zapasową zawartością z pliku treści, gdy API jest niedostępne. Odświeżanie danych z CMS co 5 min.
export const revalidate = 300;

const LIMIT_GALERII = 16;

// Skrypty szablonu w kolejności ładowania (animacje, slidery, okna, sceny WebGL).
const SKRYPTY: SzablonSkrypt[] = [
  { src: "/assets/js/local.js", module: false, async: false, attrs: {} },
  { src: "/assets/vendor/422d678bf8.js", module: false, async: false, attrs: {} }, // jQuery
  { src: "/assets/vendor/bf62e18edd.js", module: false, async: false, attrs: {} }, // Webflow
  { src: "/assets/vendor/bf074f10e1.js", module: false, async: false, attrs: {} },
  { src: "/assets/vendor/bab7830ec9.js", module: false, async: true, attrs: { "fs-cc-mode": "informational" } }, // cookies
  { src: "/assets/vendor/76e251ff54.js", module: false, async: false, attrs: {} }, // GSAP
  { src: "/assets/vendor/a834d0a572.js", module: false, async: false, attrs: {} }, // ScrollTrigger
  { src: "/assets/vendor/5c7ca340d2.js", module: false, async: false, attrs: {} }, // CustomEase
  { src: "/assets/vendor/2d1ce64424.js", module: false, async: false, attrs: {} }, // SplitText
  { src: "/assets/vendor/f4b743bae5.js", module: false, async: false, attrs: {} }, // Flip
  { src: "/assets/vendor/e4caa31af9.js", module: false, async: false, attrs: {} }, // Lenis
  { src: "/assets/vendor/13cf11a418.js", module: false, async: false, attrs: {} }, // Swiper
  { src: "/assets/js/site.js", module: true, async: false, attrs: {} },
];

async function zCms<T>(pobierz: () => Promise<T[]>): Promise<T[]> {
  try {
    return await pobierz();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const [zdjeciaCms, dokumentyCms, filmyCms] = await Promise.all([
    zCms(() => photosApi.list({ revalidate })),
    zCms(() => docsApi.list({ revalidate })),
    zCms(() => videosApi.list({ revalidate })),
  ]);

  // Slider na stronie głównej: pierwsze zdjęcia w kolejności z panelu (pełna galeria: /photos).
  const zdjeciaZUrl = zdjeciaCms.filter((p) => p.imageUrl);
  const zdjecia = zdjeciaZUrl.length
    ? [...zdjeciaZUrl].sort((a, b) => a.order - b.order).slice(0, LIMIT_GALERII)
        .map((p) => ({ src: p.imageUrl, alt: p.alt.trim() }))
    : t.galeria.zapasowe;

  const dokumentyZUrl = dokumentyCms.filter((d) => d.url);
  const dokumenty = dokumentyZUrl.length
    ? [...dokumentyZUrl].sort((a, b) => a.order - b.order).slice(0, 3).map((d) => ({ tytul: d.title, href: d.url }))
    : t.materialy.dokumentyZapasowe;

  // Lista „Filmy”: najnowsze filmy z CMS + stałe linki (galeria zdjęć, oferta) z pliku treści.
  const stale = t.materialy.linkiZapasowe.filter((l) => l.etykieta !== "Film");
  const linki = filmyCms.length
    ? [
        ...[...filmyCms].sort((a, b) => a.order - b.order).slice(0, 4)
          .map((v) => ({ etykieta: "Film", tytul: v.title, href: t.materialy.filmyLink })),
        ...stale,
      ]
    : t.materialy.linkiZapasowe;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Robert Gurgul — Profesjonalne Doradztwo Zootechniczne",
    description: "Profesjonalne doradztwo żywieniowe i zootechniczne dla ferm drobiu.",
    url: "https://www.robertgurgul.pl/",
    telephone: t.kontakt.telefonHref.replace("tel:", ""),
    email: t.kontakt.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wolica Kozia 48",
      addressLocality: "Nowe Miasto nad Wartą",
      postalCode: "63-040",
      addressCountry: "PL",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SzkieletStrony zdjecia={zdjecia} dokumenty={dokumenty} linki={linki} />
      <SzablonSkrypty scripts={SKRYPTY} />
    </>
  );
}
