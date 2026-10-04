"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/use-auth";
import { Monogram } from "@/components/admin/monogram";

const pole =
  "peer h-12 w-full border-0 border-b border-slate-300 bg-transparent px-0 pt-4 text-base text-slate-800 outline-none transition-colors placeholder:text-transparent focus:border-navy-deep";
const etykieta =
  "pointer-events-none absolute left-0 top-0 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500 transition-colors peer-focus:text-navy-deep";

export default function AdminLoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pokazHaslo, setPokazHaslo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) router.replace("/admin");
  }, [loading, user, router]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      router.replace("/admin");
    } catch {
      setError("Nieprawidłowy e-mail lub hasło.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
      {/* Lewa strona: zdjęcie fermy w ciemnej masce, jak hero strony głównej */}
      <aside className="relative hidden overflow-hidden bg-navy-deep text-offwhite lg:flex lg:flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/media/cms-01-1672.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/30" />
        <div className="relative flex items-center gap-5 border-b border-offwhite/20 px-12 py-8">
          <Monogram />
        </div>
        <div className="relative mt-auto px-12 pb-12">
          <p className="text-[11px] uppercase tracking-[0.08em] text-offwhite/60">[ Panel CMS ]</p>
          <p className="mt-5 max-w-[12ch] font-heading text-[clamp(2.75rem,4.6vw,5rem)] uppercase leading-[0.95] tracking-[-0.02em]">
            Zdrowe stado zaczyna się od dobrego planu
          </p>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-offwhite/70">
            Zdjęcia, filmy i dokumenty dodane tutaj pojawią się w galerii na stronie robertgurgul.pl.
          </p>
        </div>
      </aside>

      {/* Prawa strona: formularz */}
      <main className="flex flex-col bg-slate-50 px-6 py-8 sm:px-12">
        <div className="flex items-center justify-between lg:justify-end">
          <span className="lg:hidden">
            <Monogram ciemny />
          </span>
          <Link
            href="/"
            className="border-b border-slate-300 py-2 text-[11px] uppercase tracking-[0.08em] text-slate-600 transition-colors hover:border-navy-deep hover:text-navy-deep"
          >
            ← Strona główna
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <p className="text-[11px] uppercase tracking-[0.08em] text-slate-500">[ Logowanie ]</p>
          <h1 className="mt-4 font-heading text-5xl uppercase leading-none tracking-[-0.02em] text-navy-deep">
            Panel CMS
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Zaloguj się, aby zarządzać galerią i wiadomościami.
          </p>

          <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-7">
            <div className="relative">
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={pole}
              />
              <label htmlFor="email" className={etykieta}>
                E-mail
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                type={pokazHaslo ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${pole} pr-10`}
              />
              <label htmlFor="password" className={etykieta}>
                Hasło
              </label>
              <button
                type="button"
                onClick={() => setPokazHaslo((v) => !v)}
                aria-label={pokazHaslo ? "Ukryj hasło" : "Pokaż hasło"}
                className="absolute bottom-2 right-0 flex h-8 w-8 cursor-pointer items-center justify-center text-slate-500 hover:text-navy-deep"
              >
                {pokazHaslo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {error ? (
              <p role="alert" className="border-l-2 border-destructive pl-3 text-sm text-destructive">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="group mt-2 flex h-12 cursor-pointer items-center justify-between bg-gold px-5 text-xs font-semibold uppercase tracking-[0.08em] text-navy-deep transition-colors hover:bg-gold-light disabled:cursor-wait disabled:opacity-70"
            >
              <span>{submitting ? "Logowanie…" : "Zaloguj się"}</span>
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </form>
        </div>

        <p className="text-[11px] uppercase tracking-[0.08em] text-slate-400">
          © 2026 Robert Gurgul
        </p>
      </main>
    </div>
  );
}
