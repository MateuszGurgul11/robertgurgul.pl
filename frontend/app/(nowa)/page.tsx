import { photosApi, docsApi, videosApi } from "@/lib/api";
import { tresci as t } from "@/content/strona-glowna";
import { SzkieletStrony } from "@/components/strona/szkielet";
import { SzablonSkrypty } from "@/components/szablon/szablon-skrypty";
import { SKRYPTY } from "@/components/szablon/skrypty";

// Strona główna. Teksty: content/strona-glowna.ts. Zdjęcia, dokumenty i filmy: panel CMS (/admin),
// z zapasową zawartością z pliku treści, gdy API jest niedostępne. Odświeżanie danych z CMS co 5 min.
export const revalidate = 300;

const LIMIT_GALERII = 16;

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
