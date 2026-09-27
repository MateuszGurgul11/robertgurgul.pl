import { FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { GalleryDoc } from "@/lib/types";

export function DocList({ docs }: { docs: GalleryDoc[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {docs.map((doc, i) => (
        <Reveal key={doc.id} delay={(i % 6) * 0.07}>
          <div className="flex flex-col gap-4 rounded-2xl border border-gold/15 bg-navy-deep/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-navy-deepest/40">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <FileText className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="font-heading text-base font-semibold leading-snug text-offwhite">
              {doc.title}
            </p>
            <div className="mt-auto flex gap-3">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-gold/50 px-4 py-2 text-center text-sm font-semibold text-gold-light transition-colors duration-200 hover:bg-gold/10"
              >
                Podgląd
              </a>
              <a
                href={doc.url}
                download
                className="flex-1 rounded-full bg-gradient-to-r from-gold-deep to-gold px-4 py-2 text-center text-sm font-semibold text-navy-deep transition-transform duration-200 hover:scale-[1.02]"
              >
                Pobierz
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
