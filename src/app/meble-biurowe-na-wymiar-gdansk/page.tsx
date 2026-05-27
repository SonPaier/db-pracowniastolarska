import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meble Biurowe na Wymiar Gdańsk — Biurka, Regały, Recepcje",
  description:
    "Meble biurowe na wymiar Gdańsk — biurka, regały, lady recepcyjne, meble do home office. Produkcja i montaż. D&B Pracownia Stolarska. ☎ 504 688 396",
  alternates: { canonical: "/meble-biurowe-na-wymiar-gdansk" },
};

const faqItems = [
  {
    question: "Ile kosztują meble biurowe na wymiar w Gdańsku?",
    answer:
      "Cena zależy od zakresu zabudowy i materiałów. Biurko na wymiar to koszt od ok. 3 000 zł, lada recepcyjna od ok. 5 000 zł, komplet mebli biurowych od ok. 8 000 zł. Każdy projekt wyceniamy indywidualnie po pomiarze.",
  },
  {
    question: "Czy wykonujecie meble do przestrzeni komercyjnych?",
    answer:
      "Tak, realizujemy meble do biur, gabinetów lekarskich, kancelarii, klinik, salonów i recepcji. Projektujemy lady recepcyjne, zabudowy konferencyjne i regały ekspozycyjne. Obsługujemy klientów B2B w całym Trójmieście.",
  },
  {
    question: "Jak długo trwa realizacja mebli biurowych?",
    answer:
      "Standardowy czas realizacji to 3 do 6 tygodni od zatwierdzenia projektu. Proste biurka i regały realizujemy w 2-3 tygodnie. Lady recepcyjne i złożone zabudowy mogą wymagać do 6 tygodni.",
  },
  {
    question: "Czy wykonujecie biurka z regulacją wysokości?",
    answer:
      "Tak, wykonujemy biurka z elektryczną regulacją wysokości na wymiar. Blat produkujemy w naszej stolarni (fornir, lakier, laminat), a stelaż dobieramy od sprawdzonego producenta mechanizmów. Praca na stojąco i siedząco w jednym biurku.",
  },
];

export default function MebleBiuroweGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Meble biurowe na wymiar Gdańsk" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                D&B Pracownia Stolarska
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-6">
                Meble Biurowe na Wymiar Gdańsk
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Projektujemy i produkujemy{" "}
                <strong>meble biurowe dla firm i home office</strong> w Gdańsku.
                Biurka, regały, zabudowy biurowe i lady recepcyjne na zamówienie.
                Od pomiaru po montaż. Bezpłatna wycena w Trójmieście.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors">
                  Bezpłatna wycena
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a href="tel:+48504688396" className="inline-flex items-center justify-center bg-transparent text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm border border-text-on-dark/20 hover:bg-white/10 transition-colors">
                  504 688 396
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Meble biurowe dla firm i home office */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Meble biurowe dla firm i home office w Gdańsku
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Dobrze zaprojektowane miejsce pracy wpływa na produktywność
                  i komfort. Tworzymy <strong>meble do biura na zamówienie</strong>,
                  dopasowane do przestrzeni, stylu pracy i budżetu. Od pojedynczego
                  biurka po kompletne wyposażenie biura lub gabinetu.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Obsługujemy zarówno klientów indywidualnych urządzających{" "}
                  <strong>domowe biuro (home office)</strong>, jak i firmy
                  potrzebujące mebli do przestrzeni komercyjnych: gabinetów
                  lekarskich, kancelarii, klinik i salonów. Każdy projekt
                  realizujemy od pomysłu po montaż w naszej stolarni.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/meble-biurowe-na-wymiar-gdansk-gabinet.webp"
                    alt="Meble biurowe na wymiar Gdańsk: gabinet z zabudową fornirowaną"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Co wykonujemy */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Meble biurowe na zamówienie: co wykonujemy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Biurko na wymiar: narożne i proste",
                  desc: "Biurka dopasowane do pomieszczenia i stylu pracy. Przelotki na kable, kontenerki, szuflady. Blaty fornirowane, lakierowane lub z laminatu HPL.",
                },
                {
                  title: "Biurko z regulacją wysokości na wymiar",
                  desc: "Elektryczna regulacja: praca na siedząco i stojąco. Blat produkujemy w naszej stolarni, stelaż od sprawdzonego producenta. Trend 2025/2026 w ergonomii pracy.",
                },
                {
                  title: "Regały i zabudowy biurowe",
                  desc: "Regały na dokumenty, zabudowy ścienne, witryny ekspozycyjne. Otwarte, zamykane lub z drzwiami przeszklonymi. Zabudowa od podłogi do sufitu.",
                },
                {
                  title: "Lada recepcyjna na wymiar",
                  desc: "Lady recepcyjne do biur, klinik, hoteli i salonów. Podświetlenie LED, blat roboczy, półki i szuflady. Materiały: fornir, lakier, Corian, spieki.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2: Home office */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Meble do domowego biura na wymiar w Gdańsku
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Praca zdalna wymaga wygodnego i funkcjonalnego miejsca. Projektujemy{" "}
                <strong>biurka na wymiar do małego pokoju</strong>, zabudowy
                biurowe w sypialni, niszach i pod schodami. Biurko, regał
                i kontenerk mogą stanowić spójną całość, schowaną za drzwiami
                szafy, gdy nie pracujesz.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Stosujemy rozwiązania do zarządzania kablami, wbudowane
                gniazdka USB i oświetlenie LED pod półkami. Fronty
                dopasowujemy do reszty mebli w pomieszczeniu, by biurko
                nie wyglądało jak ciało obce w salonie czy sypialni.
              </p>
            </div>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                Pytania o meble biurowe na zamówienie
              </h2>
              <div className="space-y-2">
                {faqItems.map((faq, i) => (
                  <details key={i} className="bg-white rounded-sm group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-serif text-base font-semibold text-primary pr-8">{faq.question}</h3>
                      <svg className="w-5 h-5 text-text-light shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm text-text-muted leading-relaxed font-sans">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
                Zamów meble biurowe na wymiar
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w Gdańsku i Trójmieście. Projekt,
                produkcja i montaż. Obsługujemy firmy i klientów
                indywidualnych.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Meble biurowe na wymiar Gdańsk",
                provider: { "@type": "LocalBusiness", name: "D&B Pracownia Stolarska", telephone: "+48504688396" },
                areaServed: [{ "@type": "City", name: "Gdańsk" }, { "@type": "City", name: "Gdynia" }, { "@type": "City", name: "Sopot" }],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracownia-stolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracownia-stolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Meble biurowe na wymiar Gdańsk", item: "https://db-pracownia-stolarska.pl/meble-biurowe-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
