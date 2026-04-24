import Image from "next/image";

const photos = [
  { src: "/realizacje/realizacje-3.webp", alt: "Kuchnia na wymiar — nowoczesna zabudowa z wyspą" },
  { src: "/realizacje/azienka-8.webp", alt: "Łazienka premium — zabudowa z wanną wolnostojącą" },
  { src: "/realizacje/lazienka-i-wc-4.webp", alt: "Meble łazienkowe na wymiar — zabudowa drewniana" },
  { src: "/realizacje/drzwi-wewnetrzne-fornirowane-9.webp", alt: "Drzwi wewnętrzne fornirowane na wymiar" },
];

export default function PhotoStrip() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-surface-200">
      {photos.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] overflow-hidden group">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover grayscale sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}
    </section>
  );
}
