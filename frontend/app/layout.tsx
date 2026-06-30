import type { Metadata, Viewport } from "next";
import { Cinzel, Exo_2 } from "next/font/google";
import "./globals.css";

// Free OFL stand-ins for the (licensed) Kyiv Type Foundry fonts:
//   Cinzel  ≈ KTF Metro Roman    — inscriptional Roman capitals (headings)
//   Exo 2   ≈ KTF Metro Blueline — wide geometric, Eurostile-adjacent (body)
// The real KTF names stay first in the CSS stack (globals.css), so dropping in
// the licensed files later takes over automatically with no code change.
const headingFont = Cinzel({
  variable: "--font-heading-fallback",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const bodyFont = Exo_2({
  variable: "--font-body-fallback",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://robertgurgul.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Robert Gurgul - Profesjonalne Doradztwo Zootechniczne",
    template: "%s | Robert Gurgul",
  },
  description:
    "Profesjonalne doradztwo żywieniowe i zootechniczne dla ferm drobiu",
  openGraph: {
    title: "Robert Gurgul - Profesjonalne Doradztwo Zootechniczne",
    description:
      "Profesjonalne doradztwo żywieniowe i zootechniczne dla ferm drobiu",
    locale: "pl_PL",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C2824",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-deepest text-navy-deep font-body">
        {children}
      </body>
    </html>
  );
}
