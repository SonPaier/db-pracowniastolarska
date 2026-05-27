import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Szafy na Wymiar Gdańsk — Wnękowe, Przesuwne, Zabudowy",
  description:
    "Szafy na wymiar Gdańsk — szafy wnękowe, przesuwne, zabudowy pod skosy. Okucia Blum i Hettich. Bezpłatny pomiar w Trójmieście. D&B Pracownia Stolarska. ☎ 504 688 396",
  alternates: { canonical: "/szafy-na-wymiar-gdansk" },
};

const faqItems = [
  {
    question: "Jaka jest cena szafy wnękowej na wymiar w Gdańsku?",
    answer:
      "Szafa wnękowa na wymiar w Gdańsku to koszt od ok. 5 000 zł za prostą zabudowę z drzwiami przesuwnymi do ponad 15 000 zł za garderobę z systemami organizacji Blum. Cena za metr bieżący zależy od materiałów, rodzaju drzwi i wyposażenia wewnętrznego. Bezpłatna wycena po pomiarze.",
  },
  {
    question: "Ile trwa realizacja szafy na zamówienie?",
    answer:
      "Realizacja szafy na wymiar trwa 3 do 6 tygodni od zatwierdzenia projektu. Czas zależy od złożoności zabudowy i rodzaju wykończenia. Szafy lakierowane mogą wymagać dodatkowego tygodnia. Montaż trwa zwykle 1 dzień.",
  },
  {
    question: "Jaką głębokość powinna mieć szafa na wymiar?",
    answer:
      "Standardowa głębokość szafy na ubrania na wieszakach to 60 cm. Przy szafach przesuwnych warto doliczyć 5-7 cm na mechanizm drzwi. Do szaf w przedpokoju na buty i kurtki wystarczy 45 cm. Każdy projekt dopasowujemy do dostępnej przestrzeni.",
  },
  {
    question: "Szafa na wymiar czy gotowa z salonu: co wybrać?",
    answer:
      "Szafa na wymiar wykorzystuje 100% dostępnej przestrzeni, od podłogi do sufitu. Gotowe szafy zostawiają luki i nie pasują do nieregularnych wnęk. Przy szafie na wymiar sam decydujesz o podziale wewnętrznym, materiałach i kolorach. Okucia Blum i Hettich gwarantują trwałość na lata, czego nie oferują szafy z marketów.",
  },
];

export default function SzafyGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Szafy na wymiar Gdańsk" },
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
                Szafy na Wymiar Gdańsk
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Projektujemy i produkujemy{" "}
                <strong>szafy wnękowe, przesuwne i zabudowy</strong> dopasowane
                do milimetra. Każda szafa powstaje w naszej stolarni
                i montowana jest przez nasz zespół. Bezpłatny pomiar
                w Gdańsku, Gdyni i Sopocie.
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

        {/* H2: Szafy na wymiar w Gdańsku: wnękowe i przesuwne */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Szafy na wymiar w Gdańsku: wnękowe i przesuwne
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  <strong>Szafa wnękowa na wymiar</strong> to najlepszy sposób na
                  zagospodarowanie niszy, wnęki lub całej ściany. Zabudowujemy
                  przestrzeń od podłogi do sufitu, eliminując luki i martwe strefy.
                  Realizujemy projekty w mieszkaniach na Przymorzu, Zaspie, Oliwie
                  i w całym Gdańsku.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  <strong>Szafa przesuwna na wymiar</strong> sprawdza się tam, gdzie
                  brakuje miejsca na otwieranie drzwi. Drzwi przesuwne wykonujemy
                  z lustrem, lacobelem, grafiką na szkle lub płytą melaminowaną.
                  Mechanizmy Hettich zapewniają cichą i płynną pracę przez lata.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Projektujemy również <strong>szafy na poddasze</strong> dopasowane
                  do skosów, szafy narożne i zabudowy nietypowych przestrzeni.
                  Każdy projekt wizualizujemy w 3D, zanim rozpoczniemy produkcję.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/szafa-wnekowa-na-wymiar-gdansk-garderoba.webp"
                    alt="Szafa wnękowa na wymiar Gdańsk z systemem organizacji i podświetleniem LED"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Systemy organizacji i okucia */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Systemy organizacji i okucia do szaf na wymiar
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Wnętrze szafy jest równie ważne jak jej wygląd. Stosujemy{" "}
                    <strong>okucia Blum i Hettich</strong> z dożywotnią gwarancją
                    producenta: cicho domykające szuflady Legrabox, systemy
                    wysuwane, wieszaki na spodnie i kosze na bieliznę.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-8">
                    <strong>Oświetlenie LED</strong> z czujnikiem ruchu włącza się
                    automatycznie po otwarciu drzwi. Drążki, pantografy i wysuwane
                    półki na buty dobieramy indywidualnie do Twoich potrzeb.
                    Każdy centymetr szafy pracuje.
                  </p>
                  <div className="flex items-center gap-8 pt-6 border-t border-text-on-dark/10">
                    <Image src="/loga/blum.jpg" alt="Blum" width={80} height={30} className="h-6 w-auto brightness-0 invert opacity-60" />
                    <Image src="/loga/hettich.jpg" alt="Hettich" width={80} height={30} className="h-6 w-auto brightness-0 invert opacity-60" />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/szafa-przesuwna-na-wymiar-gdynia.webp"
                      alt="Szafa przesuwna na wymiar z systemem organizacji Blum"
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

        {/* H2: Szafy do różnych pomieszczeń */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Szafy na wymiar do różnych pomieszczeń
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Szafa do sypialni na wymiar",
                  desc: "Zabudowa od ściany do ściany, od podłogi do sufitu. Drzwi przesuwne lub rozwierane. Ciche domykanie, podświetlenie LED, podział na strefę wiszącą i składaną.",
                },
                {
                  title: "Szafa w przedpokoju na wymiar",
                  desc: "Szafa na buty, kurtki i akcesoria. Zabudowa wnęki lub całej ściany. Lustro na drzwiach optycznie powiększa przestrzeń. Szuflady na klucze, rękawiczki i drobiazgi.",
                },
                {
                  title: "Szafa cargo do przedpokoju",
                  desc: "Wąska szafa wysuwana z boku zabudowy, idealna do przechowywania butów, parasoli i torebek. Zajmuje minimum miejsca, a daje maksimum pojemności.",
                },
                {
                  title: "Szafa na poddasze i pod skosy",
                  desc: "Zabudowa dopasowana do skosów dachu. Wykorzystujemy każdy centymetr przestrzeni pod pochyłym sufitem, tam gdzie standardowe meble nie pasują.",
                },
                {
                  title: "Szafa z lustrem na wymiar",
                  desc: "Drzwi przesuwne z lustrem na całą wysokość. Optycznie powiększają pomieszczenie i eliminują potrzebę osobnego lustra. Idealne do sypialni i przedpokoju.",
                },
                {
                  title: "Szafa z drzwiami przesuwnymi",
                  desc: "Mechanizmy Hettich zapewniają cichą i płynną pracę. Drzwi z płyty, lustra, lacobelu lub szkła z grafiką. Dowolna liczba skrzydeł i szerokość zabudowy.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-surface-50 p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                O co pytają klienci zamawiający szafy w Gdańsku
              </h2>
              <div className="space-y-2">
                {faqItems.map((faq, i) => (
                  <details key={i} className="bg-surface-50 rounded-sm group">
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
                Zamów szafę na wymiar w Gdańsku
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w Trójmieście. Projekt 3D i wycena
                bez zobowiązań. Zadzwoń lub napisz.
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
                name: "Szafy na wymiar Gdańsk",
                provider: { "@type": "LocalBusiness", name: "D&B Pracownia Stolarska", telephone: "+48504688396" },
                areaServed: [{ "@type": "City", name: "Gdańsk" }, { "@type": "City", name: "Gdynia" }, { "@type": "City", name: "Sopot" }],
                description: "Szafy na wymiar w Gdańsku: szafy wnękowe, przesuwne, zabudowy pod skosy. Okucia Blum i Hettich. Bezpłatny pomiar w Trójmieście.",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracownia-stolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracownia-stolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Szafy na wymiar Gdańsk", item: "https://db-pracownia-stolarska.pl/szafy-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
