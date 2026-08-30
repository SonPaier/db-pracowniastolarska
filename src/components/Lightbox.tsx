"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Indeks otwartego zdjęcia; null = lightbox zamknięty */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  // Nawigacja klawiaturą
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  // Blokada przewijania strony pod overlayem
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  if (index === null) return null;

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Powiększone zdjęcie realizacji"
      className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Zamknij */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Zamknij powiększenie"
        className="absolute top-4 right-4 lg:top-6 lg:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Licznik */}
      {images.length > 1 && (
        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-sans tabular-nums">
          {index + 1} / {images.length}
        </p>
      )}

      {/* Zdjęcie */}
      <div
        className="relative w-[92vw] h-[78vh] lg:w-[86vw] lg:h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="92vw"
          priority
        />
      </div>

      {/* Podpis */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[80vw] text-center text-white/70 text-sm font-sans">
        {current.alt}
      </p>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Następne zdjęcie"
            className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
