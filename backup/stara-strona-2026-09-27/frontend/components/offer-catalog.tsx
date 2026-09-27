import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal } from "@/components/reveal";
import { offerDetailsFor } from "@/lib/offer";
import type { Service } from "@/lib/types";

export function OfferCatalog({ services }: { services: Service[] }) {
  return (
    <section className="bg-navy-deep bg-dot-grid py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="max-w-2xl text-base leading-relaxed text-slate-muted sm:text-lg">
          Każdy obszar poniżej to osobny zakres pracy na fermie — od doboru
          sprzętu po codzienną opiekę nad stadem. Na stronie głównej widać
          skrót; tutaj jest pełny opis tego, co wdrażam i jak wygląda współpraca.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={Math.min(i * 0.05, 0.2)}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gold/15 bg-navy-deepest/60">
                {service.imageUrl ? (
                  <div className="relative aspect-[16/10] w-full bg-navy-deep">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                      <ServiceIcon
                        title={service.title}
                        className="h-5 w-5 text-gold"
                      />
                    </span>
                    <span className="font-heading text-3xl font-bold text-gold/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl font-semibold leading-snug text-offwhite">
                    {service.title}
                  </h2>

                  <p className="flex-1 text-sm leading-relaxed text-slate-muted sm:text-base">
                    {offerDetailsFor(service)}
                  </p>

                  <Link
                    href="/kontakt"
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 font-heading text-sm font-semibold text-gold-light transition-colors duration-200 hover:bg-gold/10"
                  >
                    Zapytaj o tę usługę
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
