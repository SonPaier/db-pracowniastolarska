"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Lightbox, { type LightboxImage } from "./Lightbox";

interface GalleryCarouselProps {
  images: LightboxImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="relative group">
        <div className="overflow-hidden rounded-sm" ref={emblaRef}>
          <div className="flex -ml-3">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="pl-3 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_38%] min-w-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Powiększ zdjęcie: ${img.alt}`}
                  className="relative block w-full aspect-[4/3] rounded-sm overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 38vw"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Prev */}
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity shadow-sm"
          aria-label="Poprzednie zdjęcie"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity shadow-sm"
          aria-label="Następne zdjęcie"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Kropki */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Przejdź do zdjęcia ${i + 1}`}
            aria-current={i === selected}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-6 bg-secondary" : "w-1.5 bg-primary/20 hover:bg-primary/40"
            }`}
          />
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
