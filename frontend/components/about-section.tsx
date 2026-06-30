"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { AboutIllustration } from "@/components/illustrations";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const PARAGRAPHS = [
  "Pracuję z fermami kurczaków rzeźnych, kur niosek i kaczek piżmowych (Barbarie) — hodowlami, które należą do najbardziej wymagających w branży. Moja rola nie polega na sprzedaniu jednego rozwiązania, ale na dopasowaniu żywienia, mikroklimatu i opieki zootechnicznej do konkretnej fermy, jej budynków i celu produkcyjnego.",
  "Nowe obiekty hodowlane są dziś wyposażane w coraz lepsze, mniej obciążające środowisko urządzenia — moim zadaniem jest pomóc wykorzystać je w pełni w codziennej produkcji. To, co robię, ma znaczenie tam, gdzie liczy się jednocześnie dobrostan ptaków, jakość mięsa i odpowiedzialność za środowisko.",
];

const PRINCIPLES = [
  {
    title: "Jakość",
    description: "Normy hodowlane traktuję jako punkt wyjścia, nie formalność do odhaczenia.",
  },
  {
    title: "Środowisko",
    description: "Mniej emisji, lepsze wykorzystanie zasobów — bez kompromisu w produkcji.",
  },
  {
    title: "Partnerstwo",
    description: "Jestem na fermie wtedy, kiedy jest taka potrzeba — nie tylko przy podpisywaniu umowy.",
  },
];

const STATS = [
  { label: "lat doświadczenia w terenie" },
  { label: "obsłużonych ferm drobiu" },
  { label: "obszar działania" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };

      if (textColRef.current) {
        gsap.to(textColRef.current, { yPercent: -6, ease: "none", scrollTrigger });
      }
      if (imageColRef.current) {
        gsap.to(imageColRef.current, { yPercent: 10, ease: "none", scrollTrigger });
      }
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="overflow-hidden bg-light-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={textColRef}>
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center rounded-full border border-gold-deep/40 bg-gold/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  O Firmie
                </span>
                <h2
                  ref={headingRef}
                  className="heading-underline font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] text-navy-deep"
                >
                  O Firmie
                </h2>

                <div className="flex flex-col gap-4">
                  {PARAGRAPHS.map((paragraph, i) => (
                    <Reveal key={i} delay={0.05 + i * 0.1}>
                      <p className="max-w-[68ch] text-base leading-7 text-navy-mid sm:leading-8">
                        {paragraph}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.3}>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {PRINCIPLES.map((principle) => (
                      <div
                        key={principle.title}
                        className="rounded-xl border border-gold-deep/15 bg-white/60 p-4"
                      >
                        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-deep">
                          {principle.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-navy-mid">
                          {principle.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>

          <div ref={imageColRef}>
            <Reveal delay={0.15}>
              <div className="relative rounded-[2rem] border border-gold-deep/25 p-1.5 shadow-xl shadow-navy-deep/10">
                <AboutIllustration className="aspect-[4/3] w-full rounded-[1.6rem]" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-navy-mid/10 pt-10 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="inline-block border-b border-dashed border-gold-deep/40 font-heading text-3xl font-bold text-navy-deep/40 sm:text-4xl">
                  —
                </p>
                <p className="mt-1 text-sm text-navy-mid/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
