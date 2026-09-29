"use client";

import { useState } from "react";
import Image from "next/image";
import { podstrony as p } from "@/content/podstrony";
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
  const f = p.filmy;
  const e = osadzenie(film.videoUrl);

  return (
    <li className="rgp-film">
      <div className="rgp-film_media">
        {gra ? (
          e.typ === "iframe" ? (
            <iframe src={e.src} title={film.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          ) : (
            <video src={e.src} controls autoPlay playsInline />
          )
        ) : (
          <button type="button" className="rgp-film_poster" onClick={() => setGra(true)} aria-label={`${f.odtworz}: ${film.title}`}>
            {film.thumbnailUrl ? (
              <Image src={film.thumbnailUrl} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
            ) : e.typ === "video" ? (
              <video src={`${e.src}#t=0.5`} muted playsInline preload="metadata" aria-hidden="true" />
            ) : null}
            <span className="rgp-film_play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
          </button>
        )}
      </div>
      <div className="rgp-film_meta">
        <span className="rgp-label">{nr(i + 1)}</span>
        <h2 className="rgp-film_title">{film.title}</h2>
        {gra ? (
          <button type="button" className="rgp-bracket" onClick={() => setGra(false)}>[ {f.zamknij} ]</button>
        ) : (
          <button type="button" className="rgp-bracket" onClick={() => setGra(true)}>[ {f.odtworz} ]</button>
        )}
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
