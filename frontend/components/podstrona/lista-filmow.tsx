"use client";

import { useState } from "react";
import { Foto } from "./foto";
import { podstrony as p } from "@/content/podstrony";
import { Linia, Przycisk } from "./szablon-ui";
import type { GalleryVideo } from "@/lib/types";

// Filmy z CMS: YouTube / Vimeo (osadzenie) albo plik wgrany do Storage (<video>).
function osadzenie(url: string): { typ: "iframe" | "video"; src: string } {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/)?.[1];
    return { typ: "iframe", src: id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : url };
  }
  if (url.includes("vimeo.com")) {
    const id = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
    return { typ: "iframe", src: id ? `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1` : url };
  }
  return { typ: "video", src: url };
}

const nr = (n: number) => String(n).padStart(2, "0");

function Film({ film, i }: { film: GalleryVideo; i: number }) {
  const [gra, setGra] = useState(false);
  const [bladOdtwarzania, setBladOdtwarzania] = useState(false);
  const f = p.filmy;
  const e = osadzenie(film.videoUrl);
  const tytul = film.title.trim();

  return (
    <li className="rgp-film">
      <div className="rgp-film_media">
        {gra ? (
          e.typ === "iframe" ? (
            <iframe src={e.src} title={tytul} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          ) : (
            bladOdtwarzania ? (
              <div className="rgp-film_fallback theme_on-dark" role="alert">
                <p className="p4 text-dark">{f.nieObslugiwany}</p>
                <Przycisk href={e.src} nowaKarta>{f.pobierzFilm}</Przycisk>
              </div>
            ) : (
              // Pliki .mov z iPhone'a bywają w HEVC — gdy przeglądarka go nie dekoduje, pokazujemy link do pliku.
              <video
                src={e.src}
                controls
                autoPlay
                playsInline
                onError={() => setBladOdtwarzania(true)}
                onLoadedMetadata={(ev) => ev.currentTarget.videoWidth === 0 && setBladOdtwarzania(true)}
              />
            )
          )
        ) : (
          <button type="button" className="rgp-film_poster rgp-btn-reset theme_on-dark" onClick={() => setGra(true)} aria-label={`${f.odtworz}: ${tytul}`}>
            {film.thumbnailUrl ? (
              <Foto src={film.thumbnailUrl} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
            ) : e.typ === "video" ? (
              <video src={`${e.src}#t=0.5`} muted playsInline preload="metadata" aria-hidden="true" />
            ) : null}
            <span className="btn-circle rgp-film_play" aria-hidden="true">
              <span className="btn-circle_bg" />
              <span className="btn-circle_label">
                <span className="btn-circle_label_text">
                  <span className="p6 text-dark">{f.odtworz}</span>
                </span>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="u-24" />
      <Linia />
      <div className="u-16" />
      <div className="rgp-film_meta">
        <span className="p6 text-gray">{nr(i + 1)}</span>
        <h4 className="h5 text-dark rgp-film_title">{tytul}</h4>
        <button type="button" className="p6 text-dark rgp-btn-reset rgp-film_akcja" onClick={() => setGra(!gra)}>
          [ {gra ? f.zamknij : f.odtworz} ]
        </button>
      </div>
    </li>
  );
}

export function ListaFilmow({ filmy }: { filmy: GalleryVideo[] }) {
  return (
    <ul className="rgp-films">
      {filmy.map((film, i) => (
        <Film key={film.id} film={film} i={i} />
      ))}
    </ul>
  );
}
