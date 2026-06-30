"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
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
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/offer", label: "Oferta", icon: ListChecks },
  { href: "/admin/gallery/photos", label: "Galeria — Zdjęcia", icon: Images },
  { href: "/admin/gallery/videos", label: "Galeria — Filmy", icon: PlayCircle },
  { href: "/admin/gallery/docs", label: "Galeria — Dokumenty PDF", icon: FileText },
  { href: "/admin/messages", label: "Wiadomości", icon: Mail },
];

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
              active
                ? "bg-navy-deep text-gold-light"
                : "text-slate-600 hover:bg-slate-100"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
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
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
        <div className="mb-8 flex items-center gap-2.5 px-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-deep bg-navy-deep font-heading text-sm font-bold text-gold">
            RG
          </span>
          <span className="font-heading text-sm font-semibold text-slate-800">
            Panel CMS
          </span>
        </div>
        <NavLinks pathname={pathname} />
        <div className="mt-auto flex flex-col gap-2 px-2 pt-6">
          <p className="truncate text-xs text-slate-400">{user?.email}</p>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Wyloguj
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
          <span className="font-heading text-sm font-semibold text-slate-800">
            Panel CMS
          </span>
          <Sheet>
            <SheetTrigger
              aria-label="Otwórz menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 cursor-pointer"
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetTitle className="px-4 pt-4">Panel CMS</SheetTitle>
              <div className="px-4">
                <NavLinks pathname={pathname} />
              </div>
              <div className="mt-auto flex flex-col gap-2 px-4 pb-4">
                <p className="truncate text-xs text-slate-400">{user?.email}</p>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Wyloguj
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 bg-slate-50 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
