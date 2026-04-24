import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Garderoby na Wymiar Gdańsk — Walk-in, Szafy Garderobiane | D&B",
  description:
    "Garderoby na wymiar Gdańsk — garderoby walk-in, systemy organizacji, oświetlenie LED. Okucia Blum i Hettich. Bezpłatny pomiar. D&B Pracownia Stolarska. ☎ 504 688 396",
};

const faqItems = [
  {
    question: "Ile kosztuje garderoba na wymiar w Gdańsku?",
    answer:
      "Cena garderoby na wymiar zależy od powierzchni, systemu organizacji i materiałów. Garderoba walk-in zaczyna się od ok. 8 000 zł, mała garderoba wnękowa od ok. 4 000 zł. Bezpłatna wycena pozwala poznać dokładny koszt.",
  },
  {
    question: "Jaka jest minimalna powierzchnia na garderobę walk-in?",
    answer:
      "Funkcjonalną garderobę walk-in można zaprojektować już od 4 m². Przy mniejszych przestrzeniach proponujemy garderobę wnękową z drzwiami przesuwnymi lub system organizacji w szafie na całą ścianę.",
  },
  {
    question: "Czy montujecie oświetlenie w garderobach?",
    answer:
      "Tak — montujemy oświetlenie LED czujnikowe (włączane przy otwarciu drzwi lub wykrywające ruch), podświetlenie półek, drążków i szuflad. Koordynujemy prace z elektrykiem.",
  },
  {
    question: "Jakie systemy organizacji stosujecie?",
    answer:
      "Stosujemy systemy Blum i Hettich — szuflady z wkładami filcowymi, wysuwane wieszaki na spodnie, obrotowe półki na buty, kosze na bieliznę. Każdy element dobieramy do Twoich potrzeb.",
  },
];

export default function GarderobyGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Garderoby na wymiar Gdańsk" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Oferta / Garderoby na wymiar
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Garderoby na Wymiar Gdańsk
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Walk-in, systemy organizacji, oświetlenie LED
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Projektujemy i&nbsp;wykonujemy garderoby na&nbsp;wymiar, które porządkują
                przestrzeń i&nbsp;ułatwiają codzienne życie. Garderoby walk-in, zabudowy
                wnękowe, systemy organizacji z&nbsp;okuciami Blum — wszystko produkujemy
                w&nbsp;naszej stolarni w&nbsp;Gdańsku.
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

        {/* 01 — Garderoba dopasowana do Ciebie */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Garderoba dopasowana do&nbsp;Twojego stylu życia
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Każda garderoba na&nbsp;wymiar zaczyna się od&nbsp;analizy Twoich potrzeb.
                  Ile masz ubrań na&nbsp;wieszakach, ile składasz? Potrzebujesz miejsca na&nbsp;buty,
                  torebki, biżuterię? Czy garderoba ma&nbsp;służyć jednej osobie, czy dwóm?
                  Te pytania zadajemy na&nbsp;początku, żeby zaprojektować przestrzeń,
                  która naprawdę działa.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Projektujemy garderoby walk-in (od 4&nbsp;m²), garderoby wnękowe
                  z&nbsp;drzwiami przesuwnymi, zabudowy pod skosy poddasza i&nbsp;nisze.
                  Każdy projekt wizualizujemy w&nbsp;3D — widzisz dokładnie, jak będzie
                  wyglądać Twoja garderoba, zanim rozpoczniemy produkcję.
                </p>

                <blockquote className="border-l-2 border-secondary pl-6 py-2 my-8">
                  <p className="text-sm text-text-muted italic font-serif leading-relaxed">
                    &ldquo;Dobra garderoba to&nbsp;taka, w&nbsp;której rano nie musisz
                    szukać — wszystko ma&nbsp;swoje miejsce.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/garderoba-1.webp"
                    alt="Garderoba walk-in na wymiar — system organizacji z podświetleniem"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Systemy i okucia (dark floating card) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Systemy organizacji i&nbsp;okucia premium
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-8">
                    Stosujemy systemy szuflad i&nbsp;akcesoriów od&nbsp;Blum i&nbsp;Hettich
                    — cicho domykające, wytrzymałe, objęte wieloletnią gwarancją. Wkłady
                    filcowe, wysuwane wieszaki, obrotowe półki na&nbsp;buty, kosze
                    na&nbsp;bieliznę — każdy element dobieramy indywidualnie.
                  </p>

                  {/* Loga */}
                  <div className="flex items-center gap-8 pt-6 border-t border-text-on-dark/10">
                    <a href="https://www.blum.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/blum.jpg" alt="Blum" width={80} height={30} className="h-6 w-auto brightness-0 invert opacity-60" /></a>
                    <a href="https://www.hettich.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/hettich.jpg" alt="Hettich" width={80} height={30} className="h-6 w-auto brightness-0 invert opacity-60" /></a>
                    <a href="https://www.egger.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/egger.png" alt="Egger" width={80} height={30} className="h-6 w-auto brightness-0 invert opacity-60" /></a>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/box-oferta-szafy.webp"
                      alt="System organizacji garderoby — okucia Blum, podświetlenie LED"
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

        {/* 03 — Typy garderob */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Jakie garderoby realizujemy?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Garderoba walk-in",
                  desc: "Osobne pomieszczenie garderobiane od 4 m². Drążki, półki, szuflady, lustro i oświetlenie czujnikowe. Projektujemy układ na miarę Twoich potrzeb.",
                },
                {
                  title: "Garderoba wnękowa",
                  desc: "Zabudowa wnęki z drzwiami przesuwnymi lub rozwieranymi. Maksymalne wykorzystanie przestrzeni — idealna do sypialni i korytarzy.",
                },
                {
                  title: "Zabudowa pod skosy",
                  desc: "Garderoby dopasowane do poddaszy i skośnych ścian. Każdy centymetr wykorzystany — tam, gdzie standardowe szafy nie pasują.",
                },
                {
                  title: "Garderoba z lustrem",
                  desc: "Fronty z lustrem na całą wysokość — optycznie powiększają przestrzeń. Podświetlenie LED wokół lustra lub na krawędziach.",
                },
                {
                  title: "Garderoba dla dwojga",
                  desc: "Symetryczny lub asymetryczny podział przestrzeni. Osobne strefy wieszania, szuflad i przechowywania dla każdej osoby.",
                },
                {
                  title: "System przechowywania butów",
                  desc: "Wysuwane półki, obrotowe stojaki, szuflady z przegródkami. Oświetlenie czujnikowe podkreślające kolekcję.",
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

        {/* Powiązane realizacje */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Realizacje garderob na wymiar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Garderoba walk-in, Tarasy Bałtyku", location: "Gdańsk, Przymorze", src: "/realizacje/garderoba-1.webp" },
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Szafa wnękowa", location: "Gdańsk, Oliwa", src: "/realizacje/box-oferta-szafy.webp" },
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Garderoba walk-in", location: "Gdynia, Orłowo", src: "/realizacje/box-oferta-szafy.webp" },
              ].map((r) => (
                <Link key={r.title + r.location} href={r.href} className="group bg-surface-50 rounded-sm overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.src} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <p className="font-serif text-sm font-semibold text-primary">{r.title}</p>
                    <p className="text-xs text-text-light font-sans mt-1">{r.location}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/realizacje-zabudowy-meblowe-gdansk" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors font-sans">
                Zobacz wszystkie realizacje
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                Często zadawane pytania — garderoby na wymiar
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
                Zamów garderobę na wymiar
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w&nbsp;Gdańsku i&nbsp;okolicach. Projekt 3D
                i&nbsp;wycena. Zadzwoń lub napisz.
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
                name: "Garderoby na wymiar Gdańsk",
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
                  { "@type": "ListItem", position: 3, name: "Garderoby na wymiar Gdańsk", item: "https://db-pracowniastolarska.pl/oferta/garderoby-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
