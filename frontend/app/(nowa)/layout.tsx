import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

// Główny układ nowej strony (projekt przeniesiony z Szablon/). Bez Tailwinda i bez
// układu poprzedniej strony — style i skrypty pochodzą z public/assets (generuje je
// Szablon/scripts/eksport-nextjs.py). Czcionki hostowane lokalnie przez next/font.

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robertgurgul.pl";
const title = "Robert Gurgul — Doradztwo zootechniczne dla ferm drobiu";
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

// Kolejność jak w szablonie: styl Webflow, style z <head>, poprawki lokalne, paleta, czcionki.
const STYLESHEETS = [
  "/assets/css/3f7cba4a07.css",
  "/assets/css/szablon-inline.css",
  "/assets/css/84657b9fac.css",
  "/assets/css/local.css",
  "/assets/css/kolory.css",
  "/assets/css/czcionki.css",
];

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
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} precedence="szablon" />
        ))}
        <script dangerouslySetInnerHTML={{ __html: WEBFLOW_MODS }} />
      </head>
      <body className="body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
