import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Panele Sufitowe na Wymiar Gdańsk — Sufity Fornirowane i Drewniane | D&B",
  description:
    "Panele sufitowe na wymiar Gdańsk — sufity fornirowane, drewniane lamele, panele akustyczne. Montaż i projekt. D&B Pracownia Stolarska. ☎ 504 688 396",
};

const faqItems = [
  {
    question: "Jakie rodzaje paneli sufitowych oferujecie?",
    answer:
      "Oferujemy panele sufitowe fornirowane (dąb, orzech, jesion i inne gatunki), lamele drewniane, panele akustyczne z rdzeniem MDF oraz sufity z litego drewna. Każdy projekt dostosowujemy indywidualnie do wnętrza.",
  },
  {
    question: "Czy panele sufitowe można montować na podwieszanym suficie?",
    answer:
      "Tak — montujemy panele zarówno bezpośrednio na stropie, jak i na konstrukcji podwieszanej. Przy sufitach podwieszanych koordynujemy prace z ekipą budowlaną, aby zapewnić odpowiednią nośność i estetykę.",
  },
  {
    question: "Ile kosztują panele sufitowe na wymiar?",
    answer:
      "Cena zależy od rodzaju forniru lub drewna, powierzchni do pokrycia i złożoności montażu. Orientacyjnie panele fornirowane to koszt od ok. 400 zł/m². Dokładną wycenę przygotowujemy po poznaniu szczegółów projektu.",
  },
  {
    question: "Czy panele sufitowe mają właściwości akustyczne?",
    answer:
      "Tak — oferujemy panele z perforowanym rdzeniem MDF i wkładką akustyczną, które skutecznie tłumią pogłos. Idealne do salonów z otwartą kuchnią, biur i sal konferencyjnych.",
  },
];

export default function PaneleSufitowePage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Panele sufitowe Gdańsk" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Oferta / Panele sufitowe
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Panele Sufitowe na&nbsp;Wymiar
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Fornir, drewno, lamele — sufity z&nbsp;charakterem
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Projektujemy i&nbsp;produkujemy panele sufitowe, które nadają wnętrzom
                ciepło i&nbsp;głębię. Fornirowane, z&nbsp;litego drewna lub jako lamele —
                każdy sufit wykonujemy na&nbsp;wymiar w&nbsp;naszej stolarni w&nbsp;Gdańsku.
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
                <a
                  href="tel:+48504688396"
                  className="inline-flex items-center justify-center bg-transparent text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm border border-text-on-dark/20 hover:bg-white/10 transition-colors"
                >
                  504 688 396
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — Sufit jako element wnętrza */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Sufit, który robi wrażenie
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Sufit to&nbsp;piąta ściana — często pomijana, a&nbsp;mająca ogromny wpływ
                  na&nbsp;charakter wnętrza. Fornirowane panele sufitowe ocieplają przestrzeń,
                  tłumią pogłos i&nbsp;budują spójną kompozycję z&nbsp;meblami i&nbsp;podłogą.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Realizujemy sufity fornirowane w&nbsp;stylu japońskim, klasyczne panele
                  drewniane, nowoczesne lamele i&nbsp;rozwiązania akustyczne. Każdy projekt
                  dopasowujemy do&nbsp;wysokości pomieszczenia, oświetlenia i&nbsp;materiałów
                  użytych w&nbsp;całym wnętrzu.
                </p>

                <blockquote className="border-l-2 border-secondary pl-6 py-2 my-8">
                  <p className="text-sm text-text-muted italic font-serif leading-relaxed">
                    &ldquo;Drewniany sufit zmienia akustykę i&nbsp;klimat
                    pomieszczenia — to&nbsp;jeden z&nbsp;najefektowniejszych
                    zabiegów wykończeniowych.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/sufity-fornirowane-w-stylu-japonskim-6.webp"
                    alt="Panele sufitowe fornirowane w stylu japońskim — realizacja D&B"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Materiały i technologia (dark card) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Materiały i&nbsp;wykończenia
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-8">
                    Panele sufitowe produkujemy z&nbsp;rdzeniem MDF lub sklejkowym,
                    pokrytym naturalnym fornirem lub lakierem w&nbsp;dowolnym kolorze
                    RAL/NCS. Posiadamy własną lakiernię — kontrolujemy jakość
                    wykończenia na&nbsp;każdym etapie.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Forniry</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Dąb, orzech, jesion, sosna — dobrane pod kątem usłojenia
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Lamele</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Listwy drewniane o różnym rozstawie i profilu
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Akustyka</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Perforowany MDF z wkładką tłumiącą pogłos
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Lakier</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        MDF lakierowany w dowolnym RAL/NCS, mat lub połysk
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/panele-scienne-fornirowane-8.webp"
                      alt="Detal panelu fornirowanego — rzemiosło stolarskie"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Typy paneli sufitowych */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Rodzaje paneli sufitowych
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sufity fornirowane",
                  desc: "Panele MDF pokryte naturalnym fornirem dębowym, orzechowym lub jesionowym. Ciepły, naturalny wygląd z zachowaniem stabilności wymiarowej.",
                },
                {
                  title: "Lamele sufitowe",
                  desc: "Równoległe listwy drewniane o regulowanym rozstawie. Tworzą efekt głębi i rytmu na suficie. Idealne do salonów i przestrzeni otwartych.",
                },
                {
                  title: "Panele akustyczne",
                  desc: "Perforowane panele z rdzeniem MDF i wkładką akustyczną. Tłumią pogłos i poprawiają komfort akustyczny — biura, sale konferencyjne, salony.",
                },
                {
                  title: "Sufity lakierowane",
                  desc: "Gładkie panele MDF lakierowane w dowolnym kolorze RAL/NCS. Mat, satyna lub połysk. Minimalistyczny, nowoczesny efekt.",
                },
                {
                  title: "Kasetonowe sufity drewniane",
                  desc: "Klasyczne kasetony z litego drewna lub forniru. Elegancja i prestiż — do gabinetów, jadalni i reprezentacyjnych wnętrz.",
                },
                {
                  title: "Sufity w stylu japońskim",
                  desc: "Cienkie lamele z naturalnego drewna, tworzące delikatną, geometryczną strukturę. Inspirowane japońskim minimalizmem — wabi-sabi na suficie.",
                },
              ].map((type) => (
                <div key={type.title} className="bg-surface-50 p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">
                    {type.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                Często zadawane pytania — panele sufitowe
              </h2>
              <div className="space-y-2">
                {faqItems.map((faq, i) => (
                  <details key={i} className="bg-white rounded-sm group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-serif text-base font-semibold text-primary pr-8">
                        {faq.question}
                      </h3>
                      <svg className="w-5 h-5 text-text-light shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
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
                Zamów panele sufitowe na&nbsp;wymiar
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w&nbsp;Gdańsku i&nbsp;okolicach. Projekt, produkcja
                i&nbsp;montaż — wszystko w&nbsp;jednym miejscu.
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
                name: "Panele sufitowe na wymiar Gdańsk",
                provider: { "@type": "LocalBusiness", name: "D&B Pracownia Stolarska", telephone: "+48504688396" },
                areaServed: [{ "@type": "City", name: "Gdańsk" }, { "@type": "City", name: "Gdynia" }],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((faq) => ({
                  "@type": "Question", name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracowniastolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracowniastolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Panele sufitowe Gdańsk", item: "https://db-pracowniastolarska.pl/oferta/panele-sufitowe-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
