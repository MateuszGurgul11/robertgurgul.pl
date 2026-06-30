"use client";

import { useEffect, useRef } from "react";
import { HeartHandshake, Route, SearchCheck, Users } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const STEPS = [
  {
    icon: SearchCheck,
    title: "Audyt fermy",
    description:
      "Zaczynam od wizyty na miejscu — budynki, sprzęt, stado, dokumentacja. Bez tego nie ma dobrej diagnozy, tylko domysły.",
  },
  {
    icon: Route,
    title: "Plan żywienia i zootechniki",
    description:
      "Konkretny plan żywienia, mikroklimatu i opieki nad stadem dopasowany do Twojej fermy — nie kopia z szablonu.",
  },
  {
    icon: Users,
    title: "Wdrożenie i szkolenie",
    description:
      "Wprowadzam zmiany razem z Twoim zespołem i pokazuję, jak utrzymać je samodzielnie na co dzień.",
  },
  {
    icon: HeartHandshake,
    title: "Stałe wsparcie",
    description:
      "Zostaję w kontakcie po wdrożeniu — reaguję, gdy coś się zmienia na fermie, zanim zmieni się w problem.",
  },
] as const;

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-light-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Jak pracuję"
          title="Od audytu do spokojnej głowy"
          subtitle="Cztery kroki, które dzielą zwykłe doradztwo od realnej zmiany na fermie."
          tone="light"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-gold-deep/60 via-gold/60 to-gold-deep/60 lg:block"
          />
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px origin-left scale-x-0 bg-gold lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold-deep/50 bg-light-bg">
                    <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.6} />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-deep font-heading text-[10px] font-bold text-gold-light">
                      {i + 1}
                    </span>
                  </div>
                  <p className="font-heading text-lg font-semibold text-navy-deep">{title}</p>
                  <p className="text-sm leading-relaxed text-navy-mid">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
