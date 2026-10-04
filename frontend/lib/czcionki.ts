import { Bodoni_Moda, Manrope } from "next/font/google";

// Czcionki nowej strony (i panelu CMS): Bodoni Moda — nagłówki, Manrope — tekst. Hostowane lokalnie przez next/font.
export const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
