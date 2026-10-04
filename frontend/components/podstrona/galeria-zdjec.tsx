"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Foto } from "./foto";
import { podstrony as p } from "@/content/podstrony";
import { Linia, PrzyciskStrzalka, PrzyciskZamknij } from "./szablon-ui";

export type Zdjecie = { id: string; src: string; alt: string };

const nr = (n: number) => String(n).padStart(2, "0");

export function GaleriaZdjec({ zdjecia }: { zdjecia: Zdjecie[] }) {
  const okno = useRef<HTMLDialogElement>(null);
  const [aktywne, setAktywne] = useState<number | null>(null);
  const z = p.zdjecia;

  const otworz = (i: number) => {
    setAktywne(i);
    okno.current?.showModal();
  };
  const zamknij = () => okno.current?.close();
  const przesun = useCallback(
    (o: number) => setAktywne((i) => (i === null ? null : (i + o + zdjecia.length) % zdjecia.length)),
    [zdjecia.length],
  );

  useEffect(() => {
    if (aktywne === null) return;
    const klawisz = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") przesun(-1);
      if (e.key === "ArrowRight") przesun(1);
    };
    window.addEventListener("keydown", klawisz);
    return () => window.removeEventListener("keydown", klawisz);
  }, [aktywne, przesun]);

  const biezace = aktywne !== null ? zdjecia[aktywne] : null;

  return (
    <>
      <ul className="rgp-photos">
        {zdjecia.map((f, i) => (
          <li key={f.id} className="rgp-photo">
            <button type="button" className="rgp-photo_btn rgp-btn-reset" onClick={() => otworz(i)} aria-label={`${z.powieksz}: ${f.alt || nr(i + 1)}`}>
              <span className="rgp-photo_img img-w">
                <Foto src={f.src} alt={f.alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1100px) 33vw, 25vw" />
              </span>
              <span className="u-16" />
              <Linia />
              <span className="u-12" />
              <span className="rgp-photo_meta">
                <span className="p6 text-gray">{nr(i + 1)}</span>
                {f.alt ? <span className="p6 text-dark rgp-photo_alt">{f.alt}</span> : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={okno}
        data-lenis-prevent=""
        className="rgp-lightbox"
        aria-label={biezace?.alt || z.powieksz}
        onClose={() => setAktywne(null)}
        onClick={(e) => e.target === e.currentTarget && zamknij()}
      >
        {biezace ? (
          <div className="rgp-lightbox_in theme_on-dark">
            <div className="rgp-lightbox_bar">
              <span className="p6 text-gray">{nr(aktywne! + 1)} / {nr(zdjecia.length)}</span>
              <PrzyciskZamknij etykieta={z.zamknij} onClick={zamknij} />
            </div>
            <div className="rgp-lightbox_img">
              <Foto key={biezace.id} src={biezace.src} alt={biezace.alt} fill sizes="(max-width: 1600px) 100vw, 1600px" />
            </div>
            <div className="rgp-lightbox_bar">
              <PrzyciskStrzalka kierunek="lewo" etykieta={z.poprzednie} onClick={() => przesun(-1)} />
              <p className="p6 text-dark rgp-lightbox_alt">{biezace.alt}</p>
              <PrzyciskStrzalka kierunek="prawo" etykieta={z.nastepne} onClick={() => przesun(1)} />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
