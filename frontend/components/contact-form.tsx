"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactApi } from "@/lib/api";
import type { ContactFormInput } from "@/lib/types";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().trim().min(2, "Podaj imię"),
  lastName: z.string().trim().min(2, "Podaj nazwisko"),
  email: z.string().trim().email("Podaj prawidłowy adres e-mail"),
  phone: z
    .string()
    .trim()
    .min(9, "Podaj prawidłowy numer telefonu")
    .max(20, "Podaj prawidłowy numer telefonu"),
  message: z.string().trim().min(10, "Wiadomość jest zbyt krótka"),
});

type FormStatus = "idle" | "sending" | "success" | "error";

function FloatingField({
  id,
  label,
  error,
  as = "input",
  rows,
  registration,
}: {
  id: string;
  label: string;
  error?: string;
  as?: "input" | "textarea";
  rows?: number;
  registration: ReturnType<ReturnType<typeof useForm<FormValues>>["register"]>;
}) {
  const sharedClass = cn(
    "peer w-full rounded-lg border bg-white px-4 pt-5 pb-2 text-sm text-navy-deep outline-none transition-colors duration-200 placeholder:text-transparent focus:ring-2",
    error
      ? "border-red-400 focus:border-red-400 focus:ring-red-200"
      : "border-navy-mid/20 focus:border-gold-deep focus:ring-gold/25"
  );
  const labelClass = cn(
    "pointer-events-none absolute left-4 top-3.5 text-sm transition-all duration-150",
    "peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold-deep",
    "peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs",
    error ? "text-red-500" : "text-navy-mid/60"
  );

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder=" "
          rows={rows ?? 4}
          className={cn(sharedClass, "resize-none pt-5")}
          {...registration}
        />
      ) : (
        <input id={id} placeholder=" " className={sharedClass} {...registration} />
      )}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {error ? (
        <p role="alert" className="mt-1 text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      await contactApi.submit(values as ContactFormInput);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FloatingField
            id="firstName"
            label="Imię"
            error={errors.firstName?.message}
            registration={register("firstName")}
          />
          <FloatingField
            id="lastName"
            label="Nazwisko"
            error={errors.lastName?.message}
            registration={register("lastName")}
          />
        </div>
        <FloatingField
          id="email"
          label="E-mail"
          error={errors.email?.message}
          registration={register("email")}
        />
        <FloatingField
          id="phone"
          label="Numer telefonu"
          error={errors.phone?.message}
          registration={register("phone")}
        />
        <FloatingField
          id="message"
          label="Wiadomość"
          as="textarea"
          rows={4}
          error={errors.message?.message}
          registration={register("message")}
        />

        <button
          type="submit"
          disabled={sending}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-deep to-gold font-heading text-sm font-semibold text-navy-deep transition-all duration-200 hover:scale-[1.02] hover:from-gold hover:to-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10 cursor-pointer"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wysyłanie...
            </>
          ) : (
            "Wyślij!"
          )}
        </button>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-medium text-gold-deep"
              role="status"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-deep" />
              Wiadomość została wysłana prawidłowo!
            </motion.div>
          ) : null}
          {status === "error" ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
              role="alert"
            >
              Spróbuj ponownie!
            </motion.div>
          ) : null}
        </AnimatePresence>
      </form>
    </div>
  );
}
