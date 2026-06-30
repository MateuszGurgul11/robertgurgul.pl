"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlaceholderArt } from "@/components/placeholder-art";
import type { GalleryPhoto } from "@/lib/types";

const ASPECTS = ["aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]"];

function PhotoTile({
  photo,
  aspect,
  onOpen,
}: {
  photo: GalleryPhoto;
  aspect: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-xl border border-gold/10 ${aspect}`}
      aria-label={`Powiększ zdjęcie: ${photo.alt}`}
    >
      {photo.imageUrl ? (
        <Image
          src={photo.imageUrl}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <PlaceholderArt
          icon={ImageIcon}
          label={photo.alt}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deepest/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="font-heading text-sm font-medium text-offwhite">
          {photo.alt}
        </p>
      </div>
    </button>
  );
}

export function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const active = activeIndex !== null ? photos[activeIndex] : null;

  const goPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const goNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {photos.map((photo, i) => (
          <div key={photo.id} className="break-inside-avoid">
            <PhotoTile
              photo={photo}
              aspect={ASPECTS[i % ASPECTS.length]}
              onOpen={() => setActiveIndex(i)}
            />
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(next) => !next && setActiveIndex(null)}>
        <DialogContent
          showCloseButton
          className="max-w-3xl border-gold/20 bg-navy-deep p-2 sm:p-3"
        >
          <DialogTitle className="sr-only">
            {active?.alt ?? "Podgląd zdjęcia"}
          </DialogTitle>
          {active ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              {active.imageUrl ? (
                <Image
                  src={active.imageUrl}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              ) : (
                <PlaceholderArt
                  icon={ImageIcon}
                  label={active.alt}
                  className="h-full w-full"
                />
              )}
            </div>
          ) : null}

          <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={goPrev}
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/80 text-gold cursor-pointer hover:bg-gold/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={goNext}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/80 text-gold cursor-pointer hover:bg-gold/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
