"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { podstrony as p } from "@/content/podstrony";

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
            <button type="button" className="rgp-photo_btn" onClick={() => otworz(i)} aria-label={`${z.powieksz}: ${f.alt || nr(i + 1)}`}>
              <span className="rgp-photo_img">
                <Image src={f.src} alt={f.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw" />
              </span>
              <span className="rgp-photo_meta">
                <span>{nr(i + 1)}</span>
                {f.alt ? <span className="rgp-photo_alt">{f.alt}</span> : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={okno}
        className="rgp-lightbox"
        aria-label={biezace?.alt || z.powieksz}
        onClose={() => setAktywne(null)}
        onClick={(e) => e.target === e.currentTarget && zamknij()}
      >
        {biezace ? (
          <div className="rgp-lightbox_in">
            <div className="rgp-lightbox_bar">
              <span className="rgp-label">{nr(aktywne! + 1)} / {nr(zdjecia.length)}</span>
              <button type="button" className="rgp-bracket" onClick={zamknij} aria-label={z.zamknij}>
                [ <span>x</span> ]
              </button>
            </div>
            <div className="rgp-lightbox_img">
              <Image key={biezace.id} src={biezace.src} alt={biezace.alt} fill sizes="(max-width: 1600px) 100vw, 1600px" />
            </div>
            <div className="rgp-lightbox_bar">
              <button type="button" className="rgp-bracket" onClick={() => przesun(-1)} aria-label={z.poprzednie}>
                [ ← ]
              </button>
              <p className="rgp-lightbox_alt">{biezace.alt}</p>
              <button type="button" className="rgp-bracket" onClick={() => przesun(1)} aria-label={z.nastepne}>
                [ → ]
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
