import Link from "next/link";
import GalleryCarousel from "./GalleryCarousel";

const galleryImages = [
  { src: "/realizacje/pogorze-gdynia/kuchnia-na-wymiar-gdynia-widok-ogolny.webp", alt: "Kuchnia na wymiar Gdynia — wyspa z blatem kamiennym i zabudowa do sufitu" },
  { src: "/realizacje/dom-matemblewo/salon-z-kuchnia-sufit-kasetonowy-debowy.webp", alt: "Salon z kuchnią pod dębowym sufitem kasetonowym — dom w stylu angielskim, Gdańsk Matemblewo" },
  { src: "/realizacje/realizacje-3.webp", alt: "Tarasy Bałtyku — kuchnia na wymiar, widok ogólny" },
  { src: "/realizacje/dom-matemblewo/kuchnia-w-stylu-angielskim-niebieskie-fronty.webp", alt: "Kuchnia w stylu angielskim z niebieskimi frontami płycinowymi" },
  { src: "/realizacje/pogorze-gdynia/garderoba-walk-in-na-wymiar-gdynia.webp", alt: "Garderoba walk-in na wymiar — Gdynia" },
  { src: "/realizacje/garderoba-1.webp", alt: "Garderoba walk-in z systemem organizacji" },
  { src: "/realizacje/pogorze-gdynia/lazienka-na-wymiar-gdynia-fornir-ciemny.webp", alt: "Łazienka na wymiar Gdynia — ciemna zabudowa fornirowana" },
  { src: "/realizacje/azienka-8.webp", alt: "Łazienka główna — ciemna zabudowa" },
  { src: "/realizacje/dom-matemblewo/drzwi-dwuskrzydlowe-debowe-plycinowe.webp", alt: "Drzwi dwuskrzydłowe dębowe z płycinami — dom w stylu angielskim" },
  { src: "/realizacje/pogorze-gdynia/przedpokoj-komoda-fornirowana-gdynia.webp", alt: "Przedpokój — komoda fornirowana z blatem kamiennym, Gdynia" },
  { src: "/realizacje/lazienka-i-wc-4.webp", alt: "Łazienka gościnna — jasne drewno" },
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

        {/* Karuzela zdjęć — kliknięcie powiększa */}
        <GalleryCarousel images={galleryImages} />

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
