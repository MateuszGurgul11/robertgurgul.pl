import type { Metadata, Viewport } from "next";
// Kolejność jak kaskada w szablonie: styl Webflow, style z <head>, poprawki lokalne, czcionki, paleta,
// style osadzone w treści i drugi arkusz Webflow, a na końcu własne układy sekcji.
import "@/public/assets/css/3f7cba4a07.css";
import "@/public/assets/css/szablon-inline.css";
import "@/public/assets/css/local.css";
import "@/public/assets/css/czcionki.css";
import "@/public/assets/css/kolory.css";
import "@/public/assets/css/szablon-embed.css";
import "@/public/assets/css/84657b9fac.css";
import "@/public/assets/css/uklad.css";

// Główny układ strony głównej i podstron galerii (/photos, /videos, /docs). Bez Tailwinda i bez układu poprzedniej strony — style i skrypty
// animacji pochodzą z szablonu (public/assets), treść z components/strona + content/strona-glowna.ts.
// Czcionki: @font-face w czcionki.css, pliki w public/assets/fonts.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robertgurgul.pl";
const title = "Robert Gurgul: Doradztwo zootechniczne dla ferm drobiu";
const description =
  "Profesjonalne doradztwo żywieniowe i zootechniczne dla ferm drobiu: żywienie, mikroklimat, wyposażenie ferm i stała opieka nad stadem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: "/assets/media/favicon-32.webp", apple: "/assets/media/favicon-256.webp" },
  openGraph: {
    title,
    description,
    locale: "pl_PL",
    type: "website",
    images: ["/assets/media/cms-01-1672.webp"],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e2b24",
};

// Małe pliki (razem ok. 40 KB): tekst hero jest głównym elementem strony, więc czcionki pobieramy od razu.
const CZCIONKI = ["archivo-latin", "archivo-pl", "source-sans-latin", "source-sans-pl"];

// Skrypt Webflow z <head>: klasy w-mod-js / w-mod-touch na <html> przed pierwszym malowaniem.
const WEBFLOW_MODS =
  '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);';

export default function NowaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pl"
      data-wf-domain="robertgurgul.pl"
      data-wf-page="6940a0abd735a1e3a640d032"
      data-wf-site="6940a0abd735a1e3a640d042"
      suppressHydrationWarning
    >
      <head>
        {CZCIONKI.map((nazwa) => (
          <link key={nazwa} rel="preload" href={`/assets/fonts/${nazwa}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        <script dangerouslySetInnerHTML={{ __html: WEBFLOW_MODS }} />
      </head>
      <body className="body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
