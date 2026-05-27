import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meble Łazienkowe na Wymiar Gdańsk — Szafki, Zabudowy",
  description:
    "Meble łazienkowe na wymiar Gdańsk — szafki pod umywalkę, zabudowy pralki i suszarki, szafki nad stelaż WC. Materiały odporne na wilgoć. D&B Pracownia Stolarska. ☎ 504 688 396",
  alternates: { canonical: "/meble-lazienkowe-na-wymiar-gdansk" },
};

const faqItems = [
  {
    question: "Ile kosztują meble łazienkowe na wymiar w Gdańsku?",
    answer:
      "Cena mebli łazienkowych na wymiar zależy od zakresu zabudowy, materiałów i akcesoriów. Szafka pod umywalkę to koszt od ok. 3 000 zł, zabudowa pralki od ok. 2 500 zł, komplet mebli łazienkowych od ok. 6 000 zł. Bezpłatna wycena po pomiarze.",
  },
  {
    question: "Jakie materiały sprawdzą się w łazience?",
    answer:
      "Do mebli łazienkowych na wymiar stosujemy materiały odporne na wilgoć: MDF lakierowany wodoodporny, płyty laminowane z rdzeniem wodoodpornym (zielonym), forniry zabezpieczone lakierem poliuretanowym oraz blaty z konglomeratu i Corianu. Okucia Blum i Hettich sprawdzają się nawet w warunkach dużej wilgotności.",
  },
  {
    question: "Czy wykonujecie lustra w ramach na wymiar?",
    answer:
      "Tak, wykonujemy lustra w ramach drewnianych lub lakierowanych na wymiar, z opcjonalnym podświetleniem LED. Lustro może być zintegrowane z szafką łazienkową lub stanowić samodzielny element wystroju.",
  },
  {
    question: "Czy meble łazienkowe można zamontować na ścianie?",
    answer:
      "Tak, wykonujemy zarówno meble wiszące (podwieszane), jak i stojące. Szafki wiszące ułatwiają sprzątanie podłogi i optycznie powiększają małą łazienkę. Montaż na ścianie wymaga odpowiedniego podłoża, co weryfikujemy podczas pomiaru.",
  },
];

export default function MebleLazienkoweGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Meble łazienkowe na wymiar Gdańsk" },
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
                Meble Łazienkowe na Wymiar Gdańsk
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Wykonujemy <strong>meble łazienkowe odporne na wilgoć</strong>,
                dopasowane do każdej łazienki. Szafki pod umywalkę, zabudowy
                pralki, słupki i szafki wiszące. Materiały wodoodporne,
                okucia Blum. Bezpłatny pomiar w Gdańsku i Trójmieście.
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

        {/* H2: Meble łazienkowe na wymiar w Gdańsku: szafki i zabudowy */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Meble łazienkowe na wymiar w Gdańsku: szafki i zabudowy
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Łazienka to pomieszczenie, w którym liczy się każdy centymetr.
                  Gotowe meble rzadko pasują do nietypowych wymiarów, instalacji
                  hydraulicznych i skosów. Dlatego{" "}
                  <strong>szafka łazienkowa na wymiar</strong> to jedyne
                  rozwiązanie, które gwarantuje idealne dopasowanie.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Projektujemy i wykonujemy szafki pod umywalkę (nablatową
                  i wpuszczaną), zabudowy pralki i suszarki w jednej kolumnie,
                  szafki nad stelaż WC, słupki łazienkowe i półki. Każdy
                  element powstaje w naszej stolarni, z materiałów dobranych
                  specjalnie do warunków panujących w łazience.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/meble-lazienkowe-na-wymiar-gdansk-zabudowa.webp"
                    alt="Meble łazienkowe na wymiar Gdańsk: szafka pod umywalkę z blatem fornirowanym"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Typy zabudów */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
              Co wykonujemy do łazienki na wymiar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Szafka pod umywalkę na wymiar",
                  desc: "Wisząca lub stojąca, z szufladami lub drzwiczkami. Dopasowana do umywalki nablatowej, wpuszczanej lub podblatowej. Blat z konglomeratu, Corianu lub laminatu HPL.",
                },
                {
                  title: "Zabudowa pralki i suszarki",
                  desc: "Kolumna na pralkę i suszarkę z dodatkowymi półkami na detergenty. Drzwi zamykane lub otwarta nisza. Minimum 63 cm szerokości na standardową pralkę.",
                },
                {
                  title: "Szafka nad stelaż WC",
                  desc: "Zabudowa przestrzeni nad stelażem podtynkowym. Półki, drzwiczki i miejsce na przybory. Jeden z najczęściej zamawianych elementów w nowych mieszkaniach.",
                },
                {
                  title: "Meble łazienkowe do małej łazienki",
                  desc: "Wąskie słupki, szafki do 30 cm głębokości, zabudowy narożne. Lustro z podświetleniem LED. Maksymalne wykorzystanie przestrzeni w małych łazienkach w blokach.",
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

        {/* H2: Materiały odporne na wilgoć */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Materiały odporne na wilgoć do łazienki
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-6">
                W łazience panuje wysoka wilgotność, dlatego stosujemy wyłącznie
                materiały, które jej sprostają. Każdy element zabezpieczamy przed
                wnikaniem wody, parą i zmianami temperatury.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-50 p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">
                    MDF lakierowany wodoodporny
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    Fronty z MDF lakierowanego w naszej lakierni. Dowolny kolor
                    z palety RAL/NCS, mat lub połysk. Lakier tworzy szczelną
                    powłokę chroniącą przed wilgocią.
                  </p>
                </div>
                <div className="bg-surface-50 p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">
                    Forniry i blaty z konglomeratu
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    Forniry naturalne (dąb, orzech) zabezpieczone lakierem
                    poliuretanowym. Blaty z konglomeratu kwarcowego lub Corianu,
                    odporne na plamy i wodę. Również blaty HPL do budżetowych
                    realizacji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                Pytania o meble łazienkowe na wymiar w Gdańsku
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
                Zamów meble łazienkowe na wymiar
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w Gdańsku i Trójmieście.
                Projekt, produkcja i montaż. Zadzwoń lub napisz.
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
                name: "Meble łazienkowe na wymiar Gdańsk",
                provider: { "@type": "LocalBusiness", name: "D&B Pracownia Stolarska", telephone: "+48504688396" },
                areaServed: [{ "@type": "City", name: "Gdańsk" }, { "@type": "City", name: "Gdynia" }, { "@type": "City", name: "Sopot" }],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracownia-stolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracownia-stolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Meble łazienkowe na wymiar Gdańsk", item: "https://db-pracownia-stolarska.pl/meble-lazienkowe-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
