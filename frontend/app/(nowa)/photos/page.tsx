import type { Metadata } from "next";
import { photosApi } from "@/lib/api";
import { podstrony as p, odmiana } from "@/content/podstrony";
import { Podstrona, Komunikat } from "@/components/podstrona/podstrona";
import { GaleriaZdjec } from "@/components/podstrona/galeria-zdjec";

// Galeria zdjęć z CMS (/admin → Galeria – Zdjęcia), w kolejności ustawionej w panelu. Odświeżanie co 5 min.
export const revalidate = 300;

export const metadata: Metadata = {
  title: `${p.zdjecia.meta} | Robert Gurgul`,
  alternates: { canonical: "/photos" },
};

export default async function ZdjeciaPage() {
  const z = p.zdjecia;
  let zdjecia: Awaited<ReturnType<typeof photosApi.list>> = [];
  let blad = false;
  try {
    zdjecia = (await photosApi.list({ revalidate })).filter((f) => f.imageUrl).sort((a, b) => a.order - b.order);
  } catch {
    blad = true;
  }

  return (
    <Podstrona
      aktywna="/photos"
      etykieta={z.tytul}
      tytulLewy={z.tytulLewy}
      tytulPrawy={z.tytulPrawy}
      wstep={z.wstep}
      licznik={zdjecia.length ? `${zdjecia.length} ${odmiana(zdjecia.length, z.licznik)}` : undefined}
    >
      {blad ? (
        <Komunikat rodzaj="blad" tekst={z.blad} />
      ) : zdjecia.length === 0 ? (
        <Komunikat rodzaj="pusto" tekst={z.pusto} />
      ) : (
        <GaleriaZdjec zdjecia={zdjecia.map((f) => ({ id: f.id, src: f.imageUrl, alt: f.alt.trim() }))} />
      )}
    </Podstrona>
  );
}
