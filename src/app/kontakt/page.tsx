import Image from "next/image";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontakt — D&B Pracownia Stolarska | Meble na Wymiar Gdańsk",
  description:
    "Skontaktuj się z D&B Pracownią Stolarską. Bezpłatny pomiar i wycena mebli na wymiar w Gdańsku i Trójmieście. Tel. 504 688 396, biuro@db-pracowniastolarka.pl",
};

export default function KontaktPage() {
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
                Kontakt
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Porozmawiajmy o&nbsp;Twoim projekcie
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Bezpłatna wycena i&nbsp;pomiar
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans">
                Zadzwoń, napisz lub odwiedź nas w&nbsp;warsztacie. Chętnie doradzimy,
                pokażemy próbki materiałów i&nbsp;pomożemy zaplanować Twoje meble na&nbsp;wymiar.
              </p>
            </div>
          </div>
        </section>

        {/* Dane kontaktowe + formularz */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Lewa — dane */}
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
                  Dane kontaktowe
                </h2>

                {/* Osoba kontaktowa */}
                <div className="mb-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                    Osoba kontaktowa
                  </p>
                  <p className="font-serif text-lg font-semibold text-primary">Dmytro Ivanets</p>
                  <p className="text-sm text-text-muted font-sans mt-1">Właściciel, D&B Pracownia Stolarska</p>
                </div>

                {/* Telefon i email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                      Telefon
                    </p>
                    <a href="tel:+48504688396" className="font-serif text-lg font-semibold text-primary hover:text-secondary transition-colors">
                      504 688 396
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                      E-mail
                    </p>
                    <a href="mailto:biuro@db-pracowniastolarka.pl" className="font-serif text-base font-semibold text-primary hover:text-secondary transition-colors break-all">
                      biuro@db-pracowniastolarka.pl
                    </a>
                  </div>
                </div>

                {/* Adres */}
                <div className="mb-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                    Adres stolarni
                  </p>
                  <p className="text-sm text-text-muted font-sans leading-relaxed">
                    D&B Pracownia Stolarska<br />
                    ul. Klonowa 2<br />
                    83-031 Cieplewo
                  </p>
                </div>

                {/* Godziny otwarcia */}
                <div className="mb-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                    Godziny otwarcia
                  </p>
                  <div className="space-y-2 text-sm font-sans">
                    <div className="flex justify-between max-w-xs">
                      <span className="text-text-muted">Poniedziałek — Piątek</span>
                      <span className="font-medium text-primary">8:00 — 16:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="text-text-muted">Sobota</span>
                      <span className="font-medium text-primary">po umówieniu</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span className="text-text-muted">Niedziela</span>
                      <span className="text-text-light">zamknięte</span>
                    </div>
                  </div>
                </div>

                {/* Dane firmy */}
                <div className="bg-surface-50 p-6 rounded-sm">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-3">
                    Dane firmy
                  </p>
                  <div className="text-sm text-text-muted font-sans space-y-1">
                    <p className="font-medium text-primary">Best-meble Manufaktura</p>
                    <p>D&B Pracownia Stolarska</p>
                    <p>ul. Klonowa 2, 83-031 Cieplewo</p>
                    <p>NIP: 5842754587</p>
                    <p>REGON: 524036475</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text-light hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-light hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
              </div>

              {/* Prawa — formularz */}
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
                  Wyślij zapytanie
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Mapa — full width */}
        <section className="relative w-full h-[50vh] lg:h-[60vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.5!2d18.567!3d54.317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDE5JzAxLjIiTiAxOMKwMzQnMDEuMiJF!5e0!3m2!1spl!2spl!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D&B Pracownia Stolarska — ul. Klonowa 2, 83-031 Cieplewo"
          />
          {/* Floating card on map */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white p-6 rounded-sm shadow-lg max-w-sm">
            <p className="font-serif text-base font-semibold text-primary mb-1">
              D&B Pracownia Stolarska
            </p>
            <p className="text-sm text-text-muted font-sans mb-3">
              ul. Klonowa 2, 83-031 Cieplewo
            </p>
            <a
              href="https://maps.google.com/?q=Klonowa+2,+83-031+Cieplewo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-secondary font-sans"
            >
              Wyznacz trasę
              <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "D&B Pracownia Stolarska",
            alternateName: "Best-meble Manufaktura",
            url: "https://db-pracowniastolarska.pl",
            telephone: "+48504688396",
            email: "biuro@db-pracowniastolarka.pl",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ul. Klonowa 2",
              addressLocality: "Cieplewo",
              postalCode: "83-031",
              addressRegion: "pomorskie",
              addressCountry: "PL",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "16:00",
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 54.317,
              longitude: 18.567,
            },
          }),
        }}
      />
    </>
  );
}
