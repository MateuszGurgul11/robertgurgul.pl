import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "wordmark";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <Link
        href="/#home"
        className={cn(
          "font-heading text-sm font-bold uppercase tracking-[0.28em] text-offwhite transition-colors duration-200 hover:text-gold-light sm:text-base lg:text-lg",
          className
        )}
      >
        Robert Gurgul
      </Link>
    );
  }

  return (
    <Link
      href="/#home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 bg-navy-deep font-heading text-base font-bold text-gold transition-colors duration-200 group-hover:bg-gold group-hover:text-navy-deep">
        RG
      </span>
      <span className="font-heading text-sm font-semibold tracking-wide text-offwhite sm:text-base">
        Robert Gurgul
      </span>
    </Link>
  );
}
