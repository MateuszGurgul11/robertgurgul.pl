import type { Metadata } from "next";
import Link from "next/link";
import { servicesApi } from "@/lib/api";
import { DEFAULT_SERVICES } from "@/lib/offer";
import { PageHeader } from "@/components/page-header";
import { OfferCatalog } from "@/components/offer-catalog";
import { SpecialtyMarquee } from "@/components/specialty-marquee";
import { ProcessSection } from "@/components/process-section";

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Pełna oferta doradztwa zootechnicznego: wyposażenie ferm, odchów, mikroklimat, sprzedaż stada i ocena jakości drobiu.",
};

export default async function OfertaPage() {
  const services = await servicesApi.list({ revalidate: 300 }).catch(() => []);
  const items = services.length ? services : DEFAULT_SERVICES;

  return (
    <>
      <PageHeader title="Oferta" />
      <OfferCatalog services={items} />
      <div className="bg-navy-deep pb-20 pt-8 sm:pb-28 sm:pt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SpecialtyMarquee />
        </div>
      </div>
      <ProcessSection />
      <section className="bg-navy-deepest py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              Następny krok
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-offwhite sm:text-3xl">
              Dobierzemy zakres do Twojej fermy
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-muted">
              Napisz, na jakim etapie jest obiekt i stado — odpiszę z propozycją
              audytu albo konkretnej usługi.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-gold-deep to-gold px-8 py-3.5 font-heading text-sm font-semibold text-navy-deep transition-transform duration-200 hover:scale-[1.02]"
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </>
  );
}
