"use client";

import { useEffect } from "react";

export type SzablonSkrypt = {
  src: string;
  module: boolean;
  async: boolean;
  attrs: Record<string, string>;
};

// Ładuje skrypty szablonu (jQuery, Webflow, GSAP, Lenis, site.js…) po kolei, po starcie Reacta.
// Kolejność ma znaczenie: każdy kolejny skrypt korzysta z globali poprzednich.
// Skrypty „async” (np. baner cookies) nie blokują kolejki.
export function SzablonSkrypty({ scripts }: { scripts: SzablonSkrypt[] }) {
  useEffect(() => {
    const w = window as Window & { __szablonSkrypty?: boolean };
    if (w.__szablonSkrypty) return; // Strict Mode wywołuje efekt dwukrotnie — ładujemy raz
    w.__szablonSkrypty = true;

    const load = (s: SzablonSkrypt) =>
      new Promise<void>((resolve) => {
        const el = document.createElement("script");
        el.src = s.src;
        if (s.module) el.type = "module";
        for (const [k, v] of Object.entries(s.attrs)) el.setAttribute(k, v);
        el.onload = () => resolve();
        el.onerror = () => {
          console.error("Nie udało się wczytać skryptu:", s.src);
          resolve();
        };
        document.body.appendChild(el);
      });

    (async () => {
      for (const s of scripts) {
        if (s.async) void load(s);
        else await load(s);
      }
    })();
  }, [scripts]);

  return null;
}
