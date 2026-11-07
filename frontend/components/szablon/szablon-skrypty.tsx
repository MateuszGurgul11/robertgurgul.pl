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
        el.async = s.async; // async=false: pobieranie równoległe, wykonanie w kolejności
        for (const [k, v] of Object.entries(s.attrs)) el.setAttribute(k, v);
        el.onload = () => resolve();
        el.onerror = () => {
          console.error("Nie udało się wczytać skryptu:", s.src);
          resolve();
        };
        document.body.appendChild(el);
      });

    // React nie renderuje atrybutu `muted` po stronie serwera — bez wyciszenia przeglądarki
    // blokują autoodtwarzanie. Wyciszamy wszystkie filmy przed uruchomieniem skryptów szablonu.
    document.querySelectorAll("video").forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      if (v.autoplay) void v.play().catch(() => {});
    });

    // Szablon (GSAP, sceny, animacje) startuje przy pierwszej interakcji albo chwilę po wczytaniu strony.
    // Treść jest gotowa w HTML, więc strona jest widoczna od razu, a główny wątek nie jest blokowany na starcie.
    const ZDARZENIA = ["pointerdown", "pointermove", "touchstart", "wheel", "scroll", "keydown"];
    const OPOZNIENIE_MS = 4000;
    let timer: number | undefined;
    let wystartowal = false;
    let klikniety: HTMLElement | null = null;

    // Klik w przycisk okna przed startem szablonu: zapamiętujemy go i powtarzamy, gdy szablon będzie gotowy.
    const zapamietajKlik = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>("[modal-cta-open], [modal-menu-open]");
      if (!el) return;
      e.preventDefault();
      klikniety = el;
    };

    const uruchom = async () => {
      if (wystartowal) return;
      wystartowal = true;
      window.clearTimeout(timer);
      ZDARZENIA.forEach((z) => window.removeEventListener(z, uruchom));
      window.removeEventListener("load", odliczaj);
      document.documentElement.classList.add("rg-start");
      // animacje tekstu (SplitText) mierzą litery — czekamy na czcionki, żeby podział był poprawny
      await document.fonts.ready;
      await Promise.all(scripts.filter((s) => !s.module).map(load));
      for (const s of scripts.filter((s) => s.module)) await load(s);
      document.removeEventListener("click", zapamietajKlik, true);
      if (klikniety) window.setTimeout(() => klikniety?.click(), 100);
    };
    const odliczaj = () => {
      timer = window.setTimeout(uruchom, OPOZNIENIE_MS);
    };

    document.addEventListener("click", zapamietajKlik, true);
    ZDARZENIA.forEach((z) => window.addEventListener(z, uruchom, { passive: true }));
    if (document.readyState === "complete") odliczaj();
    else window.addEventListener("load", odliczaj);
  }, [scripts]);

  return null;
}
