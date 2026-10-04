import type { Metadata } from "next";
import { photosApi, videosApi, docsApi } from "@/lib/api";
import { podstrony as p } from "@/content/podstrony";
import { Podstrona } from "@/components/podstrona/podstrona";
import { HubMediow, type DzialMediow } from "@/components/podstrona/hub-mediow";

// Hub mediów: liczba i podgląd najnowszych zdjęć, filmów i dokumentów z CMS + przejście do podstron.
export const revalidate = 300;

export const metadata: Metadata = {
  title: `${p.media.meta} | Robert Gurgul`,
  alternates: { canonical: "/media" },
};

async function zCms<T extends { order: number }>(pobierz: () => Promise<T[]>): Promise<T[] | null> {
  try {
    return (await pobierz()).sort((a, b) => a.order - b.order);
  } catch {
    return null;
  }
}

export default async function MediaPage() {
  const m = p.media;
  const [zdjecia, filmy, dokumenty] = await Promise.all([
    zCms(() => photosApi.list({ revalidate })),
    zCms(() => videosApi.list({ revalidate })),
    zCms(() => docsApi.list({ revalidate })),
  ]);

  const dzialy: DzialMediow[] = [
    {
      klucz: "zdjecia",
      liczba: zdjecia ? zdjecia.filter((f) => f.imageUrl).length : null,
      podglad: (zdjecia ?? []).filter((f) => f.imageUrl).slice(0, 3).map((f) => ({ src: f.imageUrl, tytul: f.alt.trim() })),
    },
    {
      klucz: "filmy",
      liczba: filmy ? filmy.filter((v) => v.videoUrl).length : null,
      podglad: (filmy ?? []).filter((v) => v.thumbnailUrl).slice(0, 2).map((v) => ({ src: v.thumbnailUrl ?? undefined, tytul: v.title.trim() })),
    },
    {
      klucz: "dokumenty",
      liczba: dokumenty ? dokumenty.filter((d) => d.url).length : null,
      podglad: (dokumenty ?? []).filter((d) => d.url).slice(0, 3).map((d) => ({ tytul: d.title.trim() })),
    },
  ];

  return (
    <Podstrona wMediach={false} etykieta={m.etykieta} tytulLewy={m.tytulLewy} tytulPrawy={m.tytulPrawy} wstep={m.wstep}>
      <HubMediow dzialy={dzialy} />
    </Podstrona>
  );
}
