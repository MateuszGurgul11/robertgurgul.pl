import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const QUICK_LINKS = [
  { label: "Strona główna", href: "/#home" },
  { label: "Oferta", href: "/#offer" },
  { label: "Zdjęcia", href: "/photos" },
  { label: "Filmy", href: "/videos" },
  { label: "Dokumentacja PDF", href: "/docs" },
  { label: "Kontakt", href: "/#connect" },
];

function FooterContent() {
  return (
    <div className="flex min-h-[85vh] flex-col bg-navy-deepest bg-dot-grid">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 pt-8 sm:px-6 sm:pt-10">
        <Logo />
        <Link
          href="/#connect"
          className="rounded-full border border-gold/40 px-4 py-2 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-offwhite/80 transition-colors hover:bg-gold/10 hover:text-gold-light sm:px-5 sm:py-2.5"
        >
          Kontakt
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-7 px-4 py-16 text-center sm:px-6">
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
          Gotowy na zmianę na swojej fermie?
        </span>
        <h2 className="font-heading text-[clamp(2.75rem,9vw,7.5rem)] font-bold leading-[0.95] text-offwhite">
          Porozmawiajmy
        </h2>
        <Button
          render={<Link href="/#connect" />}
          nativeButton={false}
          className="h-auto rounded-full bg-gradient-to-r from-gold-deep to-gold px-8 py-4 font-heading text-sm font-semibold text-navy-deep transition-transform duration-200 hover:scale-[1.02] hover:from-gold hover:to-gold-light"
        >
          Napisz do mnie
        </Button>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-t border-gold/10 pt-10 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-muted">
              Profesjonalne doradztwo żywieniowe i zootechniczne dla ferm
              drobiu.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">
              Szybkie linki
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-muted transition-colors duration-200 hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">
              Kontakt
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-muted">
              <li>Verkap Plus, Wolica Kozia 48</li>
              <li>63-040 Nowe Miasto nad Wartą</li>
              <li className="pt-1 text-slate-muted/60">
                telefon i e-mail dostępne wkrótce
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gold-deep/10 py-6">
          <p className="text-center text-xs text-slate-muted/70">
            © {new Date().getFullYear()} Robert Gurgul. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <FooterContent />
    </footer>
  );
}
