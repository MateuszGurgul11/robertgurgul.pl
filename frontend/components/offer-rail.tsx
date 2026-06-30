"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/lib/types";

function ServiceRow({
  service,
  index,
  active,
  open,
  onActivate,
  onToggle,
}: {
  service: Service;
  index: number;
  active: boolean;
  open: boolean;
  onActivate: () => void;
  onToggle: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="border-t border-gold/15 first:border-t-0">
      {/* Desktop: hover to preview in the side panel */}
      <button
        type="button"
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className={`hidden w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 lg:flex ${
          active ? "text-gold-light" : "text-offwhite"
        }`}
      >
        <span className="flex items-baseline gap-5">
          <span
            className={`font-heading text-lg font-bold transition-colors duration-200 ${
              active ? "text-gold" : "text-gold/30"
            }`}
          >
            {number}
          </span>
          <span className="font-heading text-2xl font-semibold">{service.title}</span>
        </span>
        <ArrowUpRight
          className={`h-5 w-5 shrink-0 transition-all duration-200 ${
            active ? "translate-x-0 translate-y-0 text-gold opacity-100" : "-translate-x-1 translate-y-1 text-gold opacity-0"
          }`}
        />
      </button>

      {/* Mobile: tap to expand an accordion */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left lg:hidden"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-heading text-sm font-bold text-gold/50">{number}</span>
          <span className="font-heading text-lg font-semibold text-offwhite">
            {service.title}
          </span>
        </span>
        <ArrowUpRight
          className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 pb-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <ServiceIcon title={service.title} className="h-5 w-5 text-gold" />
            </span>
            <p className="text-sm leading-relaxed text-slate-muted">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ service, index }: { service: Service; index: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex flex-col gap-6 rounded-[1.75rem] border border-gold/15 bg-navy-deepest/60 p-8"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
            <ServiceIcon title={service.title} className="h-6 w-6 text-gold" />
          </span>
          <span className="font-heading text-5xl font-bold text-gold/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="font-heading text-3xl font-semibold leading-snug text-offwhite">
          {service.title}
        </p>

        {service.description ? (
          <p className="text-base leading-relaxed text-slate-muted">{service.description}</p>
        ) : null}

        <Link
          href="#connect"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 font-heading text-sm font-semibold text-gold-light transition-colors duration-200 hover:bg-gold/10"
        >
          Zapytaj o tę usługę
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}

export function OfferRail({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const active = services[activeIndex] ?? services[0];

  return (
    <section id="offer" className="relative bg-navy-deep bg-dot-grid py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Robert Gurgul"
          title="Oferta"
          subtitle="Osiem obszarów wsparcia, które realnie przekładają się na wynik fermy — od doboru sprzętu po codzienną opiekę nad stadem."
          align="left"
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={i}
                active={i === activeIndex}
                open={openIndex === i}
                onActivate={() => setActiveIndex(i)}
                onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
              />
            ))}
            <div className="border-t border-gold/15" aria-hidden="true" />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-32">
              <Reveal>
                <DetailPanel service={active} index={activeIndex} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
