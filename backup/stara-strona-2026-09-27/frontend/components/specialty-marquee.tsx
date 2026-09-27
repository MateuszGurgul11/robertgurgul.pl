import { Reveal } from "@/components/reveal";

/**
 * Indeks specjalizacji — editorial "table of contents" treatment.
 *
 * The twelve specialties are a *taxonomy*, not a sequence, so they are grouped
 * into three honest domains and set as a specimen index rather than a scrolling
 * ticker. The roman markers label the domains; the count tag states the scope.
 */
const GROUPS: { marker: string; title: string; items: string[] }[] = [
  {
    marker: "I",
    title: "Stado i produkcja",
    items: [
      "Kurczęta rzeźne",
      "Kury nioski",
      "Kaczki piżmowe (Barbarie)",
      "Jakość mięsa",
    ],
  },
  {
    marker: "II",
    title: "Środowisko i zdrowie",
    items: [
      "Żywienie i receptury",
      "Mikroklimat i wentylacja",
      "Biosekuracja",
      "Dobrostan stada",
    ],
  },
  {
    marker: "III",
    title: "Doradztwo i wynik",
    items: [
      "Audyt fermy",
      "Optymalizacja kosztów",
      "Wyposażenie ferm",
      "Szkolenia zespołu",
    ],
  },
];

const TOTAL = GROUPS.reduce((sum, g) => sum + g.items.length, 0);

export function SpecialtyMarquee() {
  return (
    <div>
      {/* Section masthead — eyebrow, editorial title, scope tag. */}
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-gold-light/70">
            Obszary specjalizacji
          </span>
          <h3 className="max-w-2xl font-heading text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.05] text-offwhite">
            Dwanaście kierunków,
            <span className="text-gold-light"> jeden spójny system pracy</span>
          </h3>
          <span className="inline-flex items-center gap-2 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-light/60">
            <span className="h-px w-6 bg-gold/40" aria-hidden="true" />
            {TOTAL} kierunków · 3 domeny
            <span className="h-px w-6 bg-gold/40" aria-hidden="true" />
          </span>
        </div>
      </Reveal>

      {/* The index — three domains as columns, items as ruled entries. */}
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div>
              {/* Domain header — roman marker + title over a gold hairline. */}
              <div className="flex items-baseline gap-3 border-b border-gold/25 pb-4">
                <span className="font-heading text-sm font-bold text-gold/50">
                  {group.marker}
                </span>
                <h4 className="font-heading text-lg font-semibold uppercase tracking-[0.05em] text-offwhite">
                  {group.title}
                </h4>
              </div>

              {/* Entries — hover draws a gold rule and nudges the row. */}
              <ul className="mt-2">
                {group.items.map((name) => (
                  <li key={name}>
                    <span className="group/item flex items-center gap-3 border-l-2 border-transparent py-3 pl-0 transition-all duration-200 hover:border-gold hover:pl-3">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/40 transition-colors duration-200 group-hover/item:bg-gold"
                        aria-hidden="true"
                      />
                      <span className="font-heading text-base font-medium text-offwhite/85 transition-colors duration-200 group-hover/item:text-gold-light sm:text-lg">
                        {name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
