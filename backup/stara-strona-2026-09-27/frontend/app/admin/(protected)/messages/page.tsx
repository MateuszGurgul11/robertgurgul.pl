"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Mail, MailOpen } from "lucide-react";
import { useAuth } from "@/lib/firebase/use-auth";
import { contactApi } from "@/lib/api";
import type { ContactMessage } from "@/lib/types";
import { Switch } from "@/components/ui/switch";

export default function AdminMessagesPage() {
  const { getToken } = useAuth();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const token = await getToken();
      const data = await contactApi.list(token);
      data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setMessages(data);
    } catch {
      toast.error("Nie udało się wczytać wiadomości.");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial fetch on mount
    refresh();
  }, [refresh]);

  async function toggleRead(message: ContactMessage) {
    try {
      const token = await getToken();
      const updated = await contactApi.markRead(message.id, !message.read, token);
      setMessages((prev) => prev.map((m) => (m.id === message.id ? updated : m)));
    } catch {
      toast.error("Nie udało się zaktualizować statusu.");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-slate-800">
          Wiadomości
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Zgłoszenia z formularza kontaktowego na stronie głównej.
        </p>
      </div>

      {loading ? (
        <p className="text-sm text-slate-400">Wczytywanie...</p>
      ) : messages.length === 0 ? (
        <p className="text-sm text-slate-400">Brak wiadomości.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col gap-3 rounded-xl border bg-white p-5 sm:flex-row sm:items-start sm:justify-between ${
                message.read ? "border-slate-200" : "border-gold-deep/40 bg-gold/5"
              }`}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-heading text-base font-semibold text-slate-800">
                    {message.firstName} {message.lastName}
                  </p>
                  {!message.read ? (
                    <span className="rounded-full bg-gold-deep/15 px-2 py-0.5 text-xs font-medium text-gold-deep">
                      Nowa
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 text-sm text-slate-500">
                  {message.email} · {message.phone}
                </p>
                <p className="mt-2 max-w-2xl whitespace-pre-wrap text-sm text-slate-700">
                  {message.message}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {new Date(message.createdAt).toLocaleString("pl-PL")}
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center">
                {message.read ? (
                  <MailOpen className="h-4 w-4 text-slate-400" />
                ) : (
                  <Mail className="h-4 w-4 text-gold-deep" />
                )}
                <Switch
                  checked={message.read}
                  onCheckedChange={() => toggleRead(message)}
                  aria-label="Oznacz jako przeczytane"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
