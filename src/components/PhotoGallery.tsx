"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { type LightboxImage } from "./Lightbox";

interface PhotoGalleryProps {
  images: LightboxImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Powiększ zdjęcie: ${img.alt}`}
            className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Ikona lupy — sygnał, że zdjęcie da się powiększyć */}
            <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-primary/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 110-14 7 7 0 010 14zM11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
