import { Bird, Building2, MessageCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Hand-built brand illustration system used wherever the CMS has no real
 * photo yet (the whole site starts with an empty Firestore — see README).
 * Deliberately abstract (wheat motif + radii + a centerpiece icon) instead
 * of literal photography stand-ins, so it reads as designed rather than
 * "missing image".
 */

function WheatSprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 140" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 132 C 27 100, 25 66, 30 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 18 + i * 17;
        const side = i % 2 === 0 ? 1 : -1;
        return (
          <ellipse
            key={i}
            cx={30 + side * 11}
            cy={y}
            rx="8"
            ry="3.4"
            transform={`rotate(${side * 38} ${30 + side * 11} ${y})`}
            stroke="currentColor"
            strokeWidth="1.4"
          />
        );
      })}
    </svg>
  );
}

function RadialRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="110" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="155" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="198" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" fill="none" />
    </svg>
  );
}

interface IllustrationPanelProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

function IllustrationPanel({ icon: Icon, label, className }: IllustrationPanelProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deep bg-dot-grid",
        className
      )}
    >
      <RadialRings className="absolute h-[150%] w-[150%] text-gold" />
      <WheatSprig className="absolute left-5 top-5 h-20 w-10 text-gold/25 sm:left-7 sm:top-7 sm:h-28 sm:w-14" />
      <WheatSprig className="absolute -bottom-3 right-5 h-20 w-10 rotate-180 text-gold/25 sm:right-7 sm:h-28 sm:w-14" />

      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-navy-deep/60 shadow-[0_0_50px_-5px_rgba(212,175,55,0.5)] backdrop-blur-sm sm:h-24 sm:w-24">
        <Icon className="h-9 w-9 text-gold sm:h-10 sm:w-10" strokeWidth={1.4} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deepest/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
    </div>
  );
}

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <IllustrationPanel
      icon={Bird}
      label="Specjalista zootechniczny w terenie na fermie drobiu"
      className={className}
    />
  );
}

export function AboutIllustration({ className }: { className?: string }) {
  return (
    <IllustrationPanel
      icon={Building2}
      label="Obiekt hodowlany drobiu"
      className={className}
    />
  );
}

export function ConnectIllustration({ className }: { className?: string }) {
  return (
    <IllustrationPanel
      icon={MessageCircle}
      label="Kontakt z doradcą zootechnicznym"
      className={className}
    />
  );
}
