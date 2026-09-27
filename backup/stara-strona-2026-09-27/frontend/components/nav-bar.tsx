"use client";

import { useEffect, useState } from "react";
import { MenuOverlay, NavBarRow } from "@/components/menu-overlay";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {!menuOpen && (
        <header className="fixed inset-x-0 top-0 z-50">
          <NavBarRow
            onMenuToggle={() => setMenuOpen(true)}
            menuOpen={false}
            scrolled={scrolled}
          />
        </header>
      )}

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
