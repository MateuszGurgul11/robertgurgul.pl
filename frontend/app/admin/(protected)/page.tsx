"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Images,
  Mail,
  PlayCircle,
} from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { contactApi, docsApi, photosApi, videosApi } from "@/lib/api";

interface StatCard {
  label: string;
  href: string;
  icon: typeof Images;
  count: number | null;
}

export default function AdminDashboardPage() {
  const { getToken } = useAuth();
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [unread, setUnread] = useState<number | null>(null);

  useEffect(() => {
    Promise.all([
      photosApi.list().catch(() => []),
      videosApi.list().catch(() => []),
      docsApi.list().catch(() => []),
    ]).then(([photos, videos, docs]) => {
      setCounts({
        photos: photos.length,
        videos: videos.length,
        docs: docs.length,
      });
    });

    getToken()
      .then((token) => contactApi.list(token))
      .then((messages) => setUnread(messages.filter((m) => !m.read).length))
      .catch(() => setUnread(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cards: StatCard[] = [
    { label: "Zdjęcia", href: "/admin/gallery/photos", icon: Images, count: counts.photos ?? null },
    { label: "Filmy", href: "/admin/gallery/videos", icon: PlayCircle, count: counts.videos ?? null },
    { label: "Dokumenty", href: "/admin/gallery/docs", icon: FileText, count: counts.docs ?? null },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="border-b border-slate-200 pb-6">
        <p className="text-[11px] uppercase tracking-[0.08em] text-slate-500">[ Pulpit ]</p>
        <h1 className="mt-3 font-heading text-slate-800">Witaj w panelu</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
          Dodawaj zdjęcia, filmy i dokumenty do galerii strony robertgurgul.pl i odpowiadaj na wiadomości z formularza.
          Teksty strony są w repozytorium (content/strona-glowna.ts i content/podstrony.ts).
        </p>
      </div>

      <div className="grid grid-cols-3 border-l border-t border-slate-200">
        {cards.map(({ label, href, icon: Icon, count }, i) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-6 border-b border-r border-slate-200 bg-card p-4 sm:gap-8 sm:p-6 transition-colors duration-150 hover:bg-light-bg"
          >
            <span className="flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-slate-500">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <Icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-navy-deep" strokeWidth={1.5} />
            </span>
            <span className="font-heading text-5xl leading-none text-navy-deep sm:text-6xl">{count ?? "–"}</span>
            <span className="flex items-center justify-between border-t border-slate-200 pt-3 text-[11px] uppercase tracking-[0.08em] text-slate-600 sm:text-xs">
              {label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/admin/messages"
        className="group flex flex-col gap-4 bg-navy-deep p-6 text-offwhite transition-colors hover:bg-navy-mid sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="flex items-center gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-offwhite/25 text-gold">
            <Mail className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <div>
            <p className="font-heading text-2xl uppercase leading-tight">
              {unread === null ? "–" : unread} {unread === 1 ? "nieprzeczytana wiadomość" : "nieprzeczytanych wiadomości"}
            </p>
            <p className="mt-1 text-sm text-offwhite/60">Wiadomości z formularza kontaktowego na stronie</p>
          </div>
        </div>
        <span className="flex items-center gap-3 self-start bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy-deep sm:self-auto">
          Otwórz skrzynkę <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
}
