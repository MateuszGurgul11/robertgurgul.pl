"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

// next/image z zapasem: optymalizator Next pobiera oryginał ze Storage z limitem 7 s (na sztywno w Next.js).
// Przy dużych plikach i wielu zdjęciach naraz może przekroczyć limit (błąd 500) — wtedy ładujemy oryginał bezpośrednio.
export function Foto(props: ImageProps) {
  const [bezOptymalizacji, setBezOptymalizacji] = useState(false);
  return (
    <Image
      {...props}
      alt={props.alt}
      unoptimized={bezOptymalizacji || props.unoptimized}
      onError={(e) => {
        if (!bezOptymalizacji) setBezOptymalizacji(true);
        props.onError?.(e);
      }}
    />
  );
}
