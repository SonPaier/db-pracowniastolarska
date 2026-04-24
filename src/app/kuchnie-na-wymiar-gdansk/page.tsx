import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kuchnie na Wymiar Gdańsk — Nowoczesne Meble Kuchenne od Producenta | D&B",
  description:
    "Kuchnie na wymiar Gdańsk — meble kuchenne na zamówienie od producenta. Bezpłatny pomiar, projekt 3D, montaż. Systemy Blum i Hettich. ☎ 504 688 396",
};

const faqItems = [
  {
    question: "Ile kosztuje kuchnia na wymiar w Gdańsku?",
    answer:
      "Cena kuchni na wymiar zależy od metrażu, materiałów i wyposażenia. Kuchnia w zabudowie typu L zaczyna się od ok. 15 000 zł, kuchnia z wyspą od ok. 25 000 zł. Fronty lakierowane i blaty kwarcowe podnoszą koszt. Bezpłatna wycena pozwala poznać dokładną cenę Twojego projektu — bez zobowiązań.",
  },
  {
    question: "Jaki jest czas oczekiwania na meble kuchenne?",
    answer:
      "Standardowy czas realizacji kuchni na wymiar to 4–6 tygodni od zatwierdzenia projektu. Kuchnie z frontami lakierowanymi lub fornirowanymi mogą wymagać do 8 tygodni. Dokładny harmonogram ustalamy indywidualnie przy podpisaniu umowy.",
  },
  {
    question: "Czy mogę zobaczyć wizualizację kuchni przed produkcją?",
    answer:
      "Tak — każdy projekt kuchni na wymiar prezentujemy w formie wizualizacji 3D. Zobaczysz układ szafek, kolorystykę frontów, rozmieszczenie AGD i oświetlenia. Wprowadzamy poprawki do momentu pełnej akceptacji.",
  },
  {
    question: "Jakie materiały stosujecie do produkcji kuchni?",
    answer:
      "Pracujemy z płytami Egger, Kronospan i Pfleiderer. Okucia i systemy szuflad od Blum i Hettich — cicho domykające, z wieloletnią gwarancją. Blaty: laminat HPL, kwarc, granit, marmur. Fronty: laminowane, lakierowane, fornirowane lub z ramką frezowaną.",
  },
  {
    question: "Czy realizujecie montaż kuchni w Gdyni i Sopocie?",
    answer:
      "Tak — montaż realizujemy na terenie całego Trójmiasta: Gdańsk, Gdynia, Sopot oraz w promieniu 50 km od naszej stolarni. Bezpłatny pomiar i dostawa w tym obszarze.",
  },
];

export default function KuchnieGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Kuchnie na wymiar Gdańsk" },
        ]} />
        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          {/* Logo watermark */}
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image
              src="/logo.webp"
              alt=""
              width={600}
              height={600}
              className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]"
            />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Oferta / Kuchnie na wymiar
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Kuchnie na Wymiar Gdańsk
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Nowoczesne meble kuchenne od&nbsp;producenta
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Projektujemy i&nbsp;produkujemy kuchnie na&nbsp;wymiar, które łączą funkcjonalność
                z&nbsp;estetyką. Każda realizacja powstaje w&nbsp;naszej stolarni w&nbsp;Gdańsku
                — od&nbsp;indywidualnego projektu, przez dobór materiałów, po&nbsp;precyzyjny
                montaż w&nbsp;Twoim domu.
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

        {/* H2: Meble kuchenne na wymiar dopasowane do Twoich potrzeb */}
        <section id="meble-kuchenne" className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Meble kuchenne na wymiar dopasowane do&nbsp;Twoich potrzeb
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Meble kuchenne na&nbsp;wymiar to&nbsp;rozwiązanie dla każdego, kto ceni sobie
                  precyzję wykonania i&nbsp;dopasowanie do&nbsp;indywidualnych potrzeb. W&nbsp;D&B
                  Pracownia Stolarska specjalizujemy się w&nbsp;zabudowach kuchennych, które
                  maksymalnie wykorzystują dostępną przestrzeń — niezależnie od&nbsp;kształtu
                  i&nbsp;metrażu pomieszczenia.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Realizujemy projekty kuchni w&nbsp;zabudowie typu&nbsp;L, U, z&nbsp;wyspą,
                  jednorzędowe oraz kuchnie otwarte połączone z&nbsp;salonem. Każdy projekt
                  rozpoczynamy od&nbsp;bezpłatnego pomiaru i&nbsp;rozmowy o&nbsp;Twoich
                  oczekiwaniach — od&nbsp;stylu i&nbsp;kolorystyki, przez ergonomię stanowisk
                  roboczych, po&nbsp;dobór sprzętów AGD.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Projektujemy kuchnie, w&nbsp;których gotowanie to&nbsp;przyjemność. Dbamy
                  o&nbsp;prawidłowy trójkąt roboczy (zlew — kuchenka — lodówka), odpowiednie
                  wysokości blatów, pojemne szuflady i&nbsp;inteligentne rozwiązania do&nbsp;przechowywania.
                </p>

                <blockquote className="border-l-2 border-secondary pl-6 py-2 my-8">
                  <p className="text-sm text-text-muted italic font-serif leading-relaxed">
                    &ldquo;Dobrze zaprojektowana kuchnia to&nbsp;taka, w&nbsp;której wszystko jest
                    na&nbsp;wyciągnięcie ręki. Ergonomia i&nbsp;funkcjonalność są&nbsp;dla nas
                    równie ważne jak estetyka.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/box-oferta-kuchnia.webp"
                      alt="Kuchnia na wymiar Gdańsk — kuchnia klasyczna z niebieskimi frontami"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-8 bg-primary text-text-on-dark px-6 py-3 rounded-sm">
                    <p className="text-xs font-sans font-medium tracking-wide">
                      Bezpłatny projekt 3D
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Dlaczego warto wybrać kuchnie pod zabudowę od D&B? — floating dark card */}
        <section id="dlaczego-db" className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                  Dlaczego warto wybrać kuchnie pod zabudowę od&nbsp;D&B?
                </h2>

                <p className="text-text-on-dark/70 leading-relaxed font-sans mt-6">
                  Bezpłatny pomiar i&nbsp;projekt 3D. Systemy Blum i&nbsp;Hettich.
                  Płyty Egger i&nbsp;Kronospan. 24&nbsp;miesiące gwarancji.
                  Własna stolarnia — bez pośredników.
                </p>

                <div className="flex gap-8 mt-8 pt-6 border-t border-text-on-dark/10">
                  <div>
                    <p className="font-serif text-lg font-semibold text-secondary">Blum</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Systemy szuflad</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-secondary">Egger</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Płyty meblowe</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-secondary">24</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Miesiące gwarancji</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/realizacje-3.webp"
                    alt="Kuchnia nowoczesna — blat kwarcowy, fronty lakierowane mat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* H2: Nasze realizacje — kuchnie na zamówienie w różnych stylach */}
        <section id="realizacje" className="section-padding bg-white">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Nasze realizacje — kuchnie na&nbsp;zamówienie w&nbsp;różnych stylach
            </h2>

            {/* H3: Style kuchni */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <Image
                    src="/realizacje/realizacje-3.webp"
                    alt="Kuchnia nowoczesna minimalistyczna — Gdańsk"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                  Kuchnie nowoczesne i&nbsp;minimalistyczne
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Gładkie fronty lakierowane mat lub połysk, ukryte uchwyty, zintegrowane AGD.
                  Czyste linie i&nbsp;neutralna kolorystyka — biele, szarości, antracyty.
                  Blaty kwarcowe lub kompaktowe HPL.
                </p>
              </div>

              <div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <Image
                    src="/realizacje/box-oferta-kuchnia.webp"
                    alt="Kuchnia klasyczna angielska — fronty ramkowe, Gdańsk"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                  Kuchnie klasyczne, angielskie i&nbsp;skandynawskie
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Fronty frezowane z&nbsp;ramką, ozdobne uchwyty, ciepłe kolory. Styl ponadczasowy,
                  który sprawdza się zarówno w&nbsp;kamienicach, jak i&nbsp;nowoczesnych
                  apartamentach.
                </p>
              </div>

              <div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <Image
                    src="/realizacje/panele-scienne-fornirowane-8.webp"
                    alt="Kuchnia z elementami drewna — styl industrialny loftowy"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                  Kuchnie industrialne (loftowe)
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Połączenie surowych materiałów — drewno, metal, beton — z&nbsp;precyzją
                  wykonania na&nbsp;wymiar. Otwarte półki, stalowe detale i&nbsp;ciemna
                  kolorystyka.
                </p>
              </div>
            </div>

            {/* Powiązane realizacje kuchni */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {[
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Tarasy Bałtyku, Gdańsk", location: "Gdańsk, Przymorze", src: "/realizacje/realizacje-3.webp" },
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Kuchnia klasyczna", location: "Gdańsk, Wrzeszcz", src: "/realizacje/box-oferta-kuchnia.webp" },
                { href: "/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk", title: "Kuchnia nowoczesna", location: "Gdynia, Redłowo", src: "/realizacje/realizacje-db-5.webp" },
              ].map((r) => (
                <Link key={r.title} href={r.href} className="group bg-surface-50 rounded-sm overflow-hidden">
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

        {/* H2: Jak wygląda proces współpracy? */}
        <section id="proces" className="section-padding bg-primary">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">04</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-12">
              Jak wygląda proces współpracy? Od&nbsp;projektu po&nbsp;montaż
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Kontakt i pomiar",
                  desc: "Umawiamy się na bezpłatny pomiar w Twoim domu. Omawiamy potrzeby, styl, budżet. Przywozimy próbki materiałów i frontów.",
                },
                {
                  step: "02",
                  title: "Projekt 3D i wycena",
                  desc: "Przygotowujemy wizualizację 3D i szczegółową wycenę — bez ukrytych kosztów. Poprawki do pełnej akceptacji projektu.",
                },
                {
                  step: "03",
                  title: "Produkcja w stolarni",
                  desc: "Meble powstają w naszej stolarni w Gdańsku. Kontrolujemy jakość na każdym etapie — od cięcia po wykończenie. 4–6 tygodni.",
                },
                {
                  step: "04",
                  title: "Montaż i odbiór",
                  desc: "Montujemy kuchnię naszym zespołem w 1–2 dni. Regulujemy mechanizmy, instalujemy AGD i oświetlenie. Zostawiamy porządek.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <span className="font-serif text-4xl font-semibold text-secondary">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-text-on-dark mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-on-dark/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typy kuchni — dodatkowe SEO content */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Jakie kuchnie na wymiar realizujemy w&nbsp;Gdańsku?
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Wykonujemy zabudowy kuchenne w&nbsp;każdej konfiguracji. Niezależnie od&nbsp;tego,
                czy dysponujesz małą kuchnią w&nbsp;bloku, czy przestronnym domem jednorodzinnym
                — zaprojektujemy rozwiązanie, które w&nbsp;pełni wykorzysta potencjał Twojego
                wnętrza.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Kuchnia w zabudowie L",
                  desc: "Najpopularniejszy układ — dwa ciągi szafek pod kątem prostym. Idealny do średnich pomieszczeń, zapewnia wygodny trójkąt roboczy między zlewem, kuchenką i lodówką.",
                },
                {
                  title: "Kuchnia z wyspą",
                  desc: "Wyspa kuchenna to dodatkowa przestrzeń robocza i miejsce spotkań. Projektujemy wyspy z płytą indukcyjną, zlewozmywakiem lub jako bar śniadaniowy z hokerami.",
                },
                {
                  title: "Kuchnia w zabudowie U",
                  desc: "Trzy ciągi szafek maksymalnie wykorzystują przestrzeń. Sprawdza się zarówno w kuchniach zamkniętych, jak i otwartych na salon.",
                },
                {
                  title: "Kuchnia jednorzędowa",
                  desc: "Kompaktowe rozwiązanie do małych kuchni, aneksów i kawalerek. Funkcjonalność na minimalnej powierzchni — wszystko w jednym ciągu.",
                },
                {
                  title: "Kuchnia otwarta na salon",
                  desc: "Zabudowa zintegrowana z przestrzenią dzienną. Spójna stylistycznie z salonem — dbamy o estetykę widoczną z każdego kąta.",
                },
                {
                  title: "Kuchnia klasyczna z ramką",
                  desc: "Fronty frezowane w stylu klasycznym, angielskim lub prowansalskim. Ponadczasowa elegancja w połączeniu z nowoczesną funkcjonalnością i okuciami.",
                },
              ].map((type) => (
                <div key={type.title} className="bg-white p-6 rounded-sm">
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

        {/* H2: FAQ */}
        <section id="faq" className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">05</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
                Często zadawane pytania — kuchnie na&nbsp;wymiar
              </h2>

              <div className="space-y-2">
                {faqItems.map((faq, i) => (
                  <details key={i} className="bg-surface-50 rounded-sm group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-serif text-base font-semibold text-primary pr-8">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-text-light shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm text-text-muted leading-relaxed font-sans">
                        {faq.answer}
                      </p>
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
                Zamów kuchnię na wymiar w&nbsp;Gdańsku
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w&nbsp;Gdańsku i&nbsp;okolicach. Projekt 3D i&nbsp;wycena
                w&nbsp;48h. Zadzwoń lub napisz — doradzimy i&nbsp;pomożemy zaplanować Twoją
                wymarzoną kuchnię.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors w-full sm:w-auto"
                >
                  Umów bezpłatny pomiar
                </Link>
                <a
                  href="tel:+48504688396"
                  className="inline-flex items-center justify-center bg-transparent text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm border border-text-on-dark/20 hover:bg-text-on-dark/5 transition-colors w-full sm:w-auto"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  504 688 396
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Kuchnie na wymiar Gdańsk",
                provider: {
                  "@type": "LocalBusiness",
                  name: "D&B Pracownia Stolarska",
                  telephone: "+48504688396",
                  address: { "@type": "PostalAddress", addressLocality: "Gdańsk", addressRegion: "pomorskie", addressCountry: "PL" },
                },
                areaServed: [
                  { "@type": "City", name: "Gdańsk" },
                  { "@type": "City", name: "Gdynia" },
                  { "@type": "City", name: "Sopot" },
                ],
                description: "Kuchnie na wymiar w Gdańsku — meble kuchenne na zamówienie od producenta. Bezpłatny pomiar, projekt 3D, montaż.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracowniastolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracowniastolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Kuchnie na wymiar Gdańsk", item: "https://db-pracowniastolarska.pl/oferta/kuchnie-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
