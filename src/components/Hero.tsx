import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background image */}
      <Image
        src="/hero-kuchnia.webp"
        alt="Nowoczesna kuchnia na wymiar — realizacja D&B Pracownia Stolarska Gdańsk"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/75" />

      <div className="container-editorial relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
            Pracownia Stolarska w Gdańsku
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-8">
            Meble na Wymiar
            <br />
            <span className="text-secondary">Gdańsk</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-on-dark/80 leading-relaxed max-w-xl mb-12 font-sans">
            Projektujemy i&nbsp;wykonujemy kuchnie, szafy wnękowe oraz meble
            łazienkowe i&nbsp;biurowe. Rzemiosło, precyzja i&nbsp;indywidualny
            projekt — od&nbsp;pomysłu do&nbsp;montażu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
            >
              Bezpłatna wycena
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/realizacje-zabudowy-meblowe-gdansk"
              className="inline-flex items-center justify-center bg-transparent text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm border border-text-on-dark/30 hover:bg-white/10 transition-colors"
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
