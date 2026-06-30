"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Images,
  ListChecks,
  Mail,
  PlayCircle,
} from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { contactApi, docsApi, photosApi, servicesApi, videosApi } from "@/lib/api";

interface StatCard {
  label: string;
  href: string;
  icon: typeof ListChecks;
  count: number | null;
}

export default function AdminDashboardPage() {
  const { getToken } = useAuth();
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [unread, setUnread] = useState<number | null>(null);

  useEffect(() => {
    Promise.all([
      servicesApi.list().catch(() => []),
      photosApi.list().catch(() => []),
      videosApi.list().catch(() => []),
      docsApi.list().catch(() => []),
    ]).then(([services, photos, videos, docs]) => {
      setCounts({
        services: services.length,
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
    { label: "Usługi w Ofercie", href: "/admin/offer", icon: ListChecks, count: counts.services ?? null },
    { label: "Zdjęcia w galerii", href: "/admin/gallery/photos", icon: Images, count: counts.photos ?? null },
    { label: "Filmy w galerii", href: "/admin/gallery/videos", icon: PlayCircle, count: counts.videos ?? null },
    { label: "Dokumenty PDF", href: "/admin/gallery/docs", icon: FileText, count: counts.docs ?? null },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-slate-800">
          Witaj w panelu CMS
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Zarządzaj ofertą, galerią i wiadomościami ze strony robertgurgul.pl.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ label, href, icon: Icon, count }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-150 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/5 text-navy-deep">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-2xl font-semibold text-slate-800">
              {count ?? "—"}
            </p>
            <p className="text-sm text-slate-500">{label}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/admin/messages"
        className="flex items-center gap-4 rounded-xl border border-gold-deep/30 bg-gold/5 p-5 transition-shadow duration-150 hover:shadow-md"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <p className="font-heading text-base font-semibold text-slate-800">
            {unread === null ? "—" : unread} nieprzeczytanych wiadomości
          </p>
          <p className="text-sm text-slate-500">
            Przejdź do skrzynki wiadomości z formularza kontaktowego
          </p>
        </div>
      </Link>
    </div>
  );
}
