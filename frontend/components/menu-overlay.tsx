"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Strona główna", href: "/#home" },
  { label: "Oferta", href: "/#offer" },
  { label: "Zdjęcia", href: "/photos" },
  { label: "Filmy", href: "/videos" },
  { label: "Dokumentacja PDF", href: "/docs" },
  { label: "Kontakt", href: "/#connect" },
];

type NavBarRowProps = {
  onMenuToggle: () => void;
  menuOpen: boolean;
  scrolled: boolean;
  className?: string;
};

export function NavBarRow({
  onMenuToggle,
  menuOpen,
  scrolled,
  className,
}: NavBarRowProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 transition-all duration-300 lg:px-10",
        scrolled && !menuOpen
          ? "bg-navy-deep/85 backdrop-blur-md"
          : menuOpen
            ? "bg-transparent"
            : "bg-navy-deep/40",
        className
      )}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="group flex items-center gap-2.5 text-gold-light transition-colors hover:text-gold cursor-pointer"
        >
          {menuOpen ? (
            <X className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          )}
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.22em]">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
        <Link
          href="/#offer"
          onClick={menuOpen ? onMenuToggle : undefined}
          className="hidden font-body text-[11px] font-medium uppercase tracking-[0.22em] text-offwhite/80 transition-colors hover:text-gold-light sm:inline"
        >
          Oferta
        </Link>
      </div>

      <Logo variant="wordmark" className="justify-self-center text-center" />

      <div className="flex items-center justify-end">
        <Link
          href="/#connect"
          onClick={menuOpen ? onMenuToggle : undefined}
          className="rounded-full border border-gold/50 px-4 py-2 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-offwhite transition-colors hover:bg-gold/10 hover:text-gold-light sm:px-5 sm:py-2.5"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu nawigacji"
      className="fixed inset-0 z-[60] flex flex-col bg-navy-deepest bg-dot-grid"
    >
      <NavBarRow onMenuToggle={onClose} menuOpen scrolled={false} />

      <nav className="flex flex-1 flex-col items-center justify-center gap-4 px-6 sm:gap-5 lg:gap-6">
        {NAV_LINKS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-heading text-2xl uppercase tracking-[0.12em] text-offwhite transition-all duration-300 hover:text-gold-light sm:text-3xl lg:text-4xl animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards"
            style={{ animationDelay: `${80 + i * 40}ms` }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-2 gap-8 border-t border-gold/10 px-6 py-8 sm:px-10 lg:px-16">
        <div>
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-slate-muted">
            Telefon
          </p>
          <p className="mt-2 font-body text-sm text-offwhite/60">
            dane uzupełnione wkrótce
          </p>
        </div>
        <div className="text-right sm:text-left">
          <p className="font-body text-[10px] font-medium uppercase tracking-[0.22em] text-slate-muted">
            E-mail
          </p>
          <p className="mt-2 font-body text-sm text-offwhite/60">
            dane uzupełnione wkrótce
          </p>
        </div>
      </div>
    </div>
  );
}
