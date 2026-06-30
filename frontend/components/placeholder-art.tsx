import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderArtProps {
  icon: LucideIcon;
  className?: string;
  label?: string;
  badgeClassName?: string;
}

export function PlaceholderArt({
  icon: Icon,
  className,
  label,
  badgeClassName,
}: PlaceholderArtProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deep bg-dot-grid",
        className
      )}
      role="img"
      aria-label={label ?? "Grafika zastępcza — zdjęcie zostanie dodane przez CMS"}
    >
      <Icon
        aria-hidden
        className="absolute -bottom-8 -right-8 h-2/3 w-2/3 text-gold/10"
        strokeWidth={1}
      />
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-navy-deep/40 shadow-[0_0_30px_-5px_rgba(212,175,55,0.45)] sm:h-20 sm:w-20",
          badgeClassName
        )}
      >
        <Icon
          aria-hidden
          className="h-8 w-8 text-gold sm:h-9 sm:w-9"
          strokeWidth={1.5}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deepest/50 via-transparent to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
    </div>
  );
}
