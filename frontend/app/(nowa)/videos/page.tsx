import type { Metadata } from "next";
import { videosApi } from "@/lib/api";
import { podstrony as p, odmiana } from "@/content/podstrony";
import { Podstrona, Komunikat } from "@/components/podstrona/podstrona";
import { ListaFilmow } from "@/components/podstrona/lista-filmow";

// Filmy z CMS (/admin → Galeria – Filmy). Odświeżanie co 5 min.
export const revalidate = 300;

export const metadata: Metadata = {
  title: `${p.filmy.meta} | Robert Gurgul`,
  alternates: { canonical: "/videos" },
};

export default async function FilmyPage() {
  const f = p.filmy;
  let filmy: Awaited<ReturnType<typeof videosApi.list>> = [];
  let blad = false;
  try {
    filmy = (await videosApi.list({ revalidate })).filter((v) => v.videoUrl).sort((a, b) => a.order - b.order);
  } catch {
    blad = true;
  }

  return (
    <Podstrona
      etykieta={f.tytul}
      tytulLewy={f.tytulLewy}
      tytulPrawy={f.tytulPrawy}
      wstep={f.wstep}
      licznik={filmy.length ? `${filmy.length} ${odmiana(filmy.length, f.licznik)}` : undefined}
    >
      {blad ? (
        <Komunikat rodzaj="blad" tekst={f.blad} />
      ) : filmy.length === 0 ? (
        <Komunikat rodzaj="pusto" tekst={f.pusto} />
      ) : (
        <ListaFilmow filmy={filmy} />
      )}
    </Podstrona>
  );
}
