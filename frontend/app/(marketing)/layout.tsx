import "../globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Preloader } from "@/components/preloader";
import { Cursor } from "@/components/cursor";
import { OldRootHtml, siteMetadata, siteViewport } from "@/lib/stara-strona-root";

// Główny układ podstron (oferta, zdjęcia, filmy, dokumenty, kontakt) i kopii
// poprzedniej strony głównej pod /stara-strona.
export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OldRootHtml>
      <SmoothScrollProvider>
        <Preloader />
        <Cursor />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </OldRootHtml>
  );
}
