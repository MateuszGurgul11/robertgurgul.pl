"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  FileText,
  Images,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Mail,
  Menu,
  PlayCircle,
} from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Monogram } from "@/components/admin/monogram";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Pulpit", icon: LayoutDashboard },
  { href: "/admin/gallery/photos", label: "Zdjęcia", icon: Images },
  { href: "/admin/gallery/videos", label: "Filmy", icon: PlayCircle },
  { href: "/admin/gallery/docs", label: "Dokumenty", icon: FileText },
  { href: "/admin/offer", label: "Oferta", icon: ListChecks },
  { href: "/admin/messages", label: "Wiadomości", icon: Mail },
];

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col">
      {NAV.map(({ href, label, icon: Icon }, i) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 border-b border-offwhite/10 py-3.5 pl-4 pr-2 text-xs uppercase tracking-[0.08em] transition-colors duration-150",
              active ? "text-offwhite" : "text-offwhite/55 hover:text-offwhite"
            )}
          >
            <span
              className={cn(
                "absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 bg-gold transition-opacity",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              )}
            />
            <span className="w-5 text-[10px] text-offwhite/35">{String(i + 1).padStart(2, "0")}</span>
            <Icon className="h-4 w-4" strokeWidth={1.5} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

function Stopka({ email, onSignOut }: { email?: string | null; onSignOut: () => void }) {
  return (
    <div className="flex flex-col gap-1 border-t border-offwhite/10 pt-5">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between py-2 text-xs uppercase tracking-[0.08em] text-offwhite/70 transition-colors hover:text-gold"
      >
        Zobacz stronę
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <button
        type="button"
        onClick={onSignOut}
        className="flex cursor-pointer items-center justify-between py-2 text-xs uppercase tracking-[0.08em] text-offwhite/70 transition-colors hover:text-gold"
      >
        Wyloguj
        <LogOut className="h-4 w-4" strokeWidth={1.5} />
      </button>
      <p className="mt-2 truncate text-[11px] text-offwhite/40">{email}</p>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col bg-navy-deep px-6 py-7 lg:flex">
        <Link href="/admin" className="mb-10 transition-opacity hover:opacity-80" title="Pulpit">
          <Monogram podpis={"Panel\nCMS"} />
        </Link>
        <p className="mb-3 text-[10px] uppercase tracking-[0.1em] text-offwhite/35">[ Menu ]</p>
        <NavLinks pathname={pathname} />
        <div className="mt-auto">
          <Stopka email={user?.email} onSignOut={handleSignOut} />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between bg-navy-deep px-4 py-3 lg:hidden">
          <Link href="/admin" title="Pulpit">
            <Monogram podpis={"Panel\nCMS"} />
          </Link>
          <Sheet>
            <SheetTrigger
              aria-label="Otwórz menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-offwhite/25 text-offwhite"
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 border-0 bg-navy-deep px-6 py-7 text-offwhite">
              <SheetTitle className="sr-only">Menu panelu</SheetTitle>
              <div className="mb-8">
                <Monogram podpis={"Panel\nCMS"} />
              </div>
              <NavLinks pathname={pathname} />
              <div className="mt-auto">
                <Stopka email={user?.email} onSignOut={handleSignOut} />
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 bg-slate-50 px-4 py-6 sm:px-8 lg:px-12 lg:py-10">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
