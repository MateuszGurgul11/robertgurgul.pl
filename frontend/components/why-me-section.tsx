import {
  Calculator,
  HeartPulse,
  ShieldPlus,
  Wheat,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const SKILLS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Żywienie i receptury",
    description: "Receptury paszowe dopasowane do fazy odchowu, nie z karty wzorcowej.",
    icon: Wheat,
  },
  {
    title: "Mikroklimat i wentylacja",
    description: "Temperatura, wilgotność i wymiana powietrza pod kontrolą przez cały cykl.",
    icon: Wind,
  },
  {
    title: "Zdrowie i biosekuracja",
    description: "Ograniczam ryzyko strat, zanim stanie się widoczne w wynikach stada.",
    icon: ShieldPlus,
  },
  {
    title: "Dobrostan i jakość stada",
    description: "Spokojne, zdrowe ptaki to efekt widoczny w wadze i jakości mięsa.",
    icon: HeartPulse,
  },
  {
    title: "Audyt i koszty",
    description: "Przegląd fermy pod kątem tego, co realnie wpływa na wynik finansowy.",
    icon: Calculator,
  },
];

export function WhyMeSection() {
  return (
    <section className="relative overflow-hidden bg-navy-mid bg-dot-grid py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader eyebrow="Dlaczego ja" title="Moje kompetencje" tone="dark" />

        <div className="mt-14 flex flex-col">
          {SKILLS.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 border-t border-gold/15 py-7 transition-colors duration-300 first:border-t-0 sm:grid-cols-[3.5rem_auto_1fr_auto] sm:items-center sm:gap-x-8">
                <span className="font-heading text-2xl font-bold text-gold/30 transition-colors duration-300 group-hover:text-gold/60 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="font-heading text-2xl font-semibold text-offwhite transition-colors duration-300 group-hover:text-gold-light sm:text-3xl">
                  {title}
                </p>

                <p className="col-span-2 max-w-md text-sm leading-relaxed text-slate-muted sm:col-span-1 sm:text-base">
                  {description}
                </p>

                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/15 sm:flex">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-gold/15" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
