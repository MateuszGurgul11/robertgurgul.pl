import { Fraunces, Manrope } from "next/font/google";

// Czcionki nowej strony (i panelu CMS): Fraunces — nagłówki, Manrope — tekst. Hostowane lokalnie przez next/font.
export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
