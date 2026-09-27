import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
  pictogram: {
    src: "/logo/piktogram.png",
    width: 58,
    height: 58,
    alt: "Robert Gurgul",
  },
  horizontal: {
    src: "/logo/poziom.png",
    width: 291,
    height: 74,
    alt: "Robert Gurgul — Profesjonalne doradztwo zootechniczne",
  },
  vertical: {
    src: "/logo/pion.png",
    width: 211,
    height: 145,
    alt: "Robert Gurgul — Profesjonalne doradztwo zootechniczne",
  },
} as const;

const HEIGHT: Record<keyof typeof VARIANTS, string> = {
  pictogram: "h-10",
  horizontal: "h-9",
  vertical: "h-32",
};

type LogoProps = {
  className?: string;
  variant?: keyof typeof VARIANTS | "wordmark";
  priority?: boolean;
};

export function Logo({
  className,
  variant = "horizontal",
  priority = false,
}: LogoProps) {
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

  const asset = VARIANTS[variant];

  return (
    <Link
      href="/#home"
      className={cn("inline-flex shrink-0 items-center", HEIGHT[variant], className)}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
