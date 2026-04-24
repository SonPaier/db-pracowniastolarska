import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/realizacje/realizacje-3.webp", alt: "Tarasy Bałtyku — kuchnia, widok ogólny" },
  { src: "/realizacje/box-oferta-kuchnia.webp", alt: "Kuchnia — detale frontów" },
  { src: "/realizacje/garderoba-1.webp", alt: "Garderoba walk-in z systemem organizacji" },
  { src: "/realizacje/azienka-8.webp", alt: "Łazienka główna — ciemna zabudowa" },
  { src: "/realizacje/lazienka-i-wc-4.webp", alt: "Łazienka gościnna — jasne drewno" },
  { src: "/realizacje/drzwi-wewnetrzne-fornirowane-9.webp", alt: "Drzwi fornirowane — detal" },
];

export default function Gallery() {
  return (
    <section className="section-padding bg-white" id="realizacje">
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Nasze realizacje mebli na wymiar
          </h2>
          <p className="text-text-muted leading-relaxed font-sans">
            Każdy projekt to&nbsp;indywidualne podejście. Zobacz wybrane
            realizacje kuchni, szaf i&nbsp;mebli łazienkowych, które wykonaliśmy
            dla naszych klientów w&nbsp;Trójmieście.
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] rounded-sm overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/realizacje-zabudowy-meblowe-gdansk"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors font-sans"
          >
            Zobacz wszystkie realizacje
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
