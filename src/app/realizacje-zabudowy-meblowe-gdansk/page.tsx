import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Realizacje — Meble na Wymiar Gdańsk Gdynia | D&B Pracownia Stolarska",
  description:
    "Galeria realizacji mebli na wymiar — kuchnie, szafy, garderoby, meble łazienkowe. Zobacz nasze projekty w Gdańsku, Gdyni i Trójmieście.",
};

const featuredProjects = [
  {
    href: "/realizacje-zabudowy-meblowe-gdansk/nowe-kolibki-gdynia-orlowo",
    title: "Nowe Kolibki, Gdynia Orłowo",
    category: "Kompleksowa realizacja",
    location: "Gdynia, Orłowo",
    description: "Mieszkanie 80 m² — kompletna zabudowa meblowa w stylu japońskim. Okleina dębowa na ścianach, sufitach i meblach, okucia Blum, system przesuwany Bortolussi.",
    src: "/realizacje/nowe-kolibki/kuchnia-bar-salon.jpg",
    alt: "Nowe Kolibki Gdynia Orłowo — kuchnia i salon z fornirowanym sufitem",
  },
  {
    href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk",
    title: "Tarasy Bałtyku, Gdańsk",
    category: "Kompleksowa realizacja",
    location: "Gdańsk, Przymorze",
    designerName: "KONZEPT",
    designerUrl: "https://konzept.com.pl/",
    description: "Apartament 105,6 m² — kuchnia, garderoba, dwie łazienki, szafy wnękowe, panele ścienne i drzwi fornirowane.",
    src: "/realizacje/realizacje-3.webp",
    alt: "Tarasy Bałtyku Gdańsk — kuchnia na wymiar",
  },
];

const galleryImages = [
  { src: "/realizacje/nowe-kolibki/salon-sufit-fornirowany-kasety.jpg", alt: "Nowe Kolibki — salon z fornirowanym sufitem japońskim" },
  { src: "/realizacje/nowe-kolibki/drzwi-eklysa-pelna-wysokosc.jpg", alt: "Drzwi fornirowane eklysa od podłogi po sufit" },
  { src: "/realizacje/nowe-kolibki/lazienka-fornirowana-umywalka-led.jpg", alt: "Łazienka fornirowana z lustrem LED — Nowe Kolibki" },
  { src: "/realizacje/realizacje-3.webp", alt: "Tarasy Bałtyku — kuchnia, widok ogólny" },
  { src: "/realizacje/box-oferta-kuchnia.webp", alt: "Kuchnia — detale frontów" },
  { src: "/realizacje/garderoba-1.webp", alt: "Garderoba walk-in z systemem organizacji" },
  { src: "/realizacje/nowe-kolibki/kumiko-zwienczenie-szafy.jpg", alt: "Detal kumiko — zwieńczenie szafy japońskiej" },
  { src: "/realizacje/azienka-8.webp", alt: "Łazienka główna — ciemna zabudowa" },
  { src: "/realizacje/nowe-kolibki/przedpokoj-zabudowa-regal.jpg", alt: "Przedpokój fornirowany z regałem — Nowe Kolibki" },
  { src: "/realizacje/drzwi-wewnetrzne-fornirowane-9.webp", alt: "Drzwi fornirowane — detal" },
  { src: "/realizacje/panele-scienne-fornirowane-8.webp", alt: "Panele ścienne fornirowane" },
  { src: "/realizacje/sufity-fornirowane-w-stylu-japonskim-6.webp", alt: "Sufit fornirowany — styl japoński" },
];

export default function RealizacjePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Portfolio
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Nasze realizacje
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Meble na wymiar — Gdańsk, Gdynia, Trójmiasto
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans">
                Każdy projekt to&nbsp;indywidualna historia. Kuchnie, szafy, garderoby,
                łazienki i&nbsp;zabudowy nietypowe — zobacz, jak zmieniamy wnętrza
                naszych klientów.
              </p>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        {featuredProjects.map((project, index) => (
          <section key={project.href} className={`section-padding ${index % 2 === 0 ? "bg-surface-50" : "bg-white"}`}>
            <div className="container-editorial">
              <Link href={project.href} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="60vw"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-[0.65rem] uppercase tracking-[0.2em] font-sans font-medium px-3 py-1.5 rounded-sm">
                      Wyróżniona realizacja
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-2">
                    {project.category}
                  </p>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-xs text-text-light font-sans mb-4">
                    {project.location}
                    {project.designerName && (
                      <span> · Projekt: {project.designerName}</span>
                    )}
                  </p>
                  <p className="text-text-muted leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary-light transition-colors font-sans">
                    Zobacz case study
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </section>
        ))}

        {/* Galeria realizacji */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Galeria realizacji
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {galleryImages.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] rounded-sm overflow-hidden group">
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
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
                Zaplanuj swoją realizację
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar, indywidualny projekt i&nbsp;wycena.
                Zadzwoń lub napisz — porozmawiajmy o&nbsp;Twoim projekcie.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/kontakt" className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors w-full sm:w-auto">
                  Umów bezpłatny pomiar
                </Link>
                <a href="tel:+48504688396" className="inline-flex items-center justify-center bg-transparent text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm border border-text-on-dark/20 hover:bg-text-on-dark/5 transition-colors w-full sm:w-auto">
                  504 688 396
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
