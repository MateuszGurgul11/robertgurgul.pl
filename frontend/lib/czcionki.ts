import { Archivo, Source_Sans_3 } from "next/font/google";

// Czcionki panelu CMS, hostowane lokalnie przez next/font. Strona publiczna ma lżejsze pliki: public/assets/css/czcionki.css.
// Archivo — nagłówki: mocny, techniczny grotesk. Source Sans 3 — tekst: czytelny przy długich opisach.
export const naglowkowa = Archivo({
  variable: "--font-naglowki",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

export const tekstowa = Source_Sans_3({
  variable: "--font-tekst",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
