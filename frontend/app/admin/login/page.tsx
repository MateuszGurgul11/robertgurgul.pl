"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader2, Lock } from "lucide-react";
import { getFirebaseAuth } from "@/lib/firebase/client";
import { useAuth } from "@/lib/firebase/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy-deep via-navy-deep to-navy-mid px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gold/20 bg-navy-deep/60 p-8 shadow-2xl backdrop-blur">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="font-heading text-xl font-semibold text-offwhite">
            Panel CMS
          </h1>
          <p className="text-sm text-slate-muted">
            Robert Gurgul — zaloguj się, aby zarządzać treścią
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-offwhite/80">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gold/20 bg-navy-deep/40 text-offwhite focus-visible:border-gold focus-visible:ring-gold/30"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password" className="text-offwhite/80">
              Hasło
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gold/20 bg-navy-deep/40 text-offwhite focus-visible:border-gold focus-visible:ring-gold/30"
            />
          </div>
          {error ? (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          ) : null}
          <Button
            type="submit"
            disabled={submitting}
            className="mt-2 h-11 rounded-full bg-gradient-to-r from-gold-deep to-gold font-heading font-semibold text-navy-deep hover:from-gold hover:to-gold-light"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Zaloguj się"
            )}
          </Button>
        </form>

        <Link
          href="/"
          className="mt-6 block text-center text-xs text-slate-muted hover:text-gold-light"
        >
          ← Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
