import type { Metadata } from "next";
import { docsApi } from "@/lib/api";
import { podstrony as p, odmiana } from "@/content/podstrony";
import { Podstrona, Komunikat } from "@/components/podstrona/podstrona";
import { ListaDokumentow } from "@/components/podstrona/lista-dokumentow";

// Dokumenty z CMS (/admin → Galeria – Dokumenty PDF). Odświeżanie co 5 min.
export const revalidate = 300;

export const metadata: Metadata = {
  title: `${p.dokumenty.meta} | Robert Gurgul`,
  alternates: { canonical: "/docs" },
};

export default async function DokumentyPage() {
  const d = p.dokumenty;
  let dokumenty: Awaited<ReturnType<typeof docsApi.list>> = [];
  let blad = false;
  try {
    dokumenty = (await docsApi.list({ revalidate })).filter((x) => x.url).sort((a, b) => a.order - b.order);
  } catch {
    blad = true;
  }

  return (
    <Podstrona
      etykieta={d.tytul}
      tytulLewy={d.tytulLewy}
      tytulPrawy={d.tytulPrawy}
      wstep={d.wstep}
      licznik={dokumenty.length ? `${dokumenty.length} ${odmiana(dokumenty.length, d.licznik)}` : undefined}
    >
      {blad ? (
        <Komunikat rodzaj="blad" tekst={d.blad} />
      ) : dokumenty.length === 0 ? (
        <Komunikat rodzaj="pusto" tekst={d.pusto} />
      ) : (
        <ListaDokumentow dokumenty={dokumenty} />
      )}
    </Podstrona>
  );
}
