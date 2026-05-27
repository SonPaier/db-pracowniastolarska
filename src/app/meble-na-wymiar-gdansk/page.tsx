import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meble na Wymiar Gdańsk — Kuchnie, Szafy, Zabudowy",
  description:
    "Meble na wymiar Gdańsk — kuchnie, szafy wnękowe, garderoby, meble łazienkowe i biurowe. Własna stolarnia i lakiernia. Bezpłatny pomiar w Trójmieście. ☎ 504 688 396",
  alternates: {
    canonical: "/meble-na-wymiar-gdansk",
  },
  openGraph: {
    title: "Meble na Wymiar Gdańsk — Kuchnie, Szafy, Zabudowy | D&B",
    description: "Meble na wymiar Gdańsk — kuchnie, szafy, garderoby. Własna stolarnia i lakiernia. Bezpłatny pomiar.",
    url: "/meble-na-wymiar-gdansk",
  },
};

const services = [
  {
    href: "/kuchnie-na-wymiar-gdansk",
    title: "Kuchnie na wymiar",
    city: "Gdańsk",
    description: "Zabudowy kuchenne, wyspy, fronty lakierowane i fornirowane. Projekt 3D, systemy Blum.",
    src: "/realizacje/kuchnia-na-wymiar-gdansk-fronty-lakierowane.webp",
    alt: "Nowoczesna kuchnia na wymiar w Gdańsku z frontami lakierowanymi i blatem HPL",
  },
  {
    href: "/szafy-na-wymiar-gdansk",
    title: "Szafy na wymiar",
    city: "Gdańsk",
    description: "Szafy wnękowe, garderoby walk-in, zabudowy pod skosy. Systemy organizacji i LED.",
    src: "/realizacje/szafa-wnekowa-na-wymiar-gdansk-garderoba.webp",
    alt: "Szafa wnękowa przesuwna na wymiar Gdańsk z podświetleniem LED",
  },
  {
    href: "/meble-lazienkowe-na-wymiar-gdansk",
    title: "Meble łazienkowe",
    city: "Gdańsk",
    description: "Szafki pod umywalkę, zabudowy pralki, meble łazienkowe z drewna i forniru.",
    src: "/realizacje/meble-lazienkowe-na-wymiar-gdansk-zabudowa.webp",
    alt: "Meble łazienkowe na wymiar Gdańsk — szafka pod umywalkę z blatem fornirowanym",
  },
  {
    href: "/garderoby-na-wymiar-gdansk",
    title: "Garderoby na wymiar",
    city: "Gdańsk",
    description: "Garderoby walk-in, systemy organizacji, oświetlenie czujnikowe. Okucia Blum i Hettich.",
    src: "/realizacje/garderoba-walk-in-na-wymiar-gdansk.webp",
    alt: "Garderoba walk-in na wymiar Gdańsk z systemem organizacji Blum",
  },
  {
    href: "/meble-biurowe-na-wymiar-gdansk",
    title: "Meble biurowe",
    city: "Gdańsk",
    description: "Biurka, regały, zabudowy biurowe i recepcje. Ergonomia i estetyka w miejscu pracy.",
    src: "/realizacje/meble-biurowe-na-wymiar-gdansk-gabinet.webp",
    alt: "Meble biurowe na wymiar Gdańsk — gabinet z zabudową fornirowaną",
  },
  {
    href: "/panele-sufitowe-na-wymiar-gdansk",
    title: "Panele sufitowe",
    city: "Gdańsk",
    description: "Sufity fornirowane, lamele drewniane, panele akustyczne. Produkcja i montaż na wymiar.",
    src: "/realizacje/sufit-fornirowany-lamele-japonski-gdansk.webp",
    alt: "Sufit fornirowany dębowy na wymiar Gdańsk — lamele w stylu japońskim",
  },
  {
    href: "/panele-scienne-na-wymiar-gdansk",
    title: "Panele ścienne",
    city: "Gdańsk",
    description: "Panele fornirowane, lamele, zabudowy ścienne. Ściana akcentowa, zabudowa TV, panel za łóżkiem.",
    src: "/realizacje/panele-scienne-fornirowane-na-wymiar-gdansk.webp",
    alt: "Panele ścienne fornirowane na wymiar Gdańsk — lamele za telewizorem",
  },
];

const faqItems = [
  {
    question: "Ile kosztują meble na wymiar w Gdańsku?",
    answer:
      "Cena mebli na wymiar zależy od rodzaju mebla, materiałów, okuć i złożoności projektu. Orientacyjnie: kuchnia na wymiar to koszt od ok. 15 000 zł, szafa wnękowa od ok. 5 000 zł, garderoba od ok. 8 000 zł. Każde zamówienie wyceniamy indywidualnie. Bezpłatna wycena po pomiarze.",
  },
  {
    question: "Czy opłaca się robić kuchnię na wymiar?",
    answer:
      "Tak, kuchnia na wymiar pozwala wykorzystać 100% dostępnej przestrzeni, dobrać materiały i okucia pod siebie oraz dopasować zabudowę do sprzętu AGD. W dłuższej perspektywie jest trwalsza i bardziej funkcjonalna niż gotowe zestawy. Różnica w cenie jest mniejsza niż się wydaje, szczególnie gdy doliczy się koszt montażu mebli gotowych.",
  },
  {
    question: "Ile kosztuje szafa na wymiar w Gdańsku?",
    answer:
      "Szafa wnękowa na wymiar w Gdańsku to koszt od ok. 5 000 zł za prostą zabudowę do ponad 15 000 zł za garderobę walk-in z systemami organizacji Blum. Cena zależy od wymiarów, rodzaju drzwi (przesuwne, rozwierane), materiałów i wyposażenia wewnętrznego.",
  },
  {
    question: "Jak długo trwa realizacja mebli na wymiar?",
    answer:
      "Standardowy czas realizacji to 4–8 tygodni od zatwierdzenia projektu. Termin zależy od złożoności projektu, rodzaju wykończenia (lakierowanie trwa dłużej niż okleina) i dostępności materiałów. Dokładny harmonogram ustalamy indywidualnie przy podpisaniu umowy.",
  },
  {
    question: "Jak długo trwa wykonanie kuchni na zamówienie?",
    answer:
      "Realizacja kuchni na zamówienie trwa zazwyczaj 5–8 tygodni. W tym czasie wykonujemy pomiar, przygotowujemy projekt 3D, produkujemy meble w naszej stolarni i montujemy je u klienta. Kuchnie lakierowane mogą wymagać dodatkowego tygodnia na utwardzenie lakieru.",
  },
  {
    question: "Czy oferujecie bezpłatny pomiar w Trójmieście?",
    answer:
      "Tak, bezpłatny pomiar wykonujemy na terenie Gdańska, Gdyni, Sopotu i okolic (do 50 km). Pomiar trwa ok. 30–60 minut i obejmuje dokładne wymiary pomieszczenia, konsultację materiałową oraz wstępne ustalenie budżetu.",
  },
  {
    question: "W jakich stylach wykonujecie meble?",
    answer:
      "Realizujemy meble w każdym stylu: nowoczesnym, klasycznym, loftowym, skandynawskim i minimalistycznym. Fronty mogą być lakierowane (mat, połysk), fornirowane (dąb, orzech, jesion) lub z okleiny. Styl dobieramy wspólnie z klientem na etapie projektu.",
  },
  {
    question: "Czy realizujecie projekty w Gdyni i Sopocie?",
    answer:
      "Tak, obsługujemy całe Trójmiasto: Gdańsk, Gdynię, Sopot, a także Pruszcz Gdański, Rumię, Redę i okolice. Bezpłatny pomiar i montaż w cenie na terenie do 50 km od naszej stolarni.",
  },
];

export default function MebleNaWymiarGdanskPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 lg:pt-40 pb-12 lg:pb-16 bg-primary relative overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                D&B Pracownia Stolarska
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-6">
                Meble na Wymiar Gdańsk
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-4">
                Tworzymy <strong>meble na zamówienie</strong> w Gdańsku
                i całym Trójmieście: od kuchni i szaf wnękowych po zabudowy
                biurowe i panele ścienne. Jako lokalna{" "}
                <strong>stolarnia z własną lakiernią</strong> oferujemy
                kompleksową realizację: projekt, produkcję i montaż.
              </p>
              <p className="text-base text-text-on-dark/50 leading-relaxed max-w-2xl font-sans mb-10">
                Nasza stolarnia mieści się w Cieplewie (k. Pruszcza
                Gdańskiego). Lakierujemy fronty MDF w dowolnym kolorze
                RAL/NCS: mat, satyna, połysk. Bezpłatny pomiar
                i darmowa wycena w Gdańsku, Gdyni i Sopocie.
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

        {/* H2: Co wykonujemy na wymiar */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
                Oferta
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Meble na zamówienie: co wykonujemy
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Jako <strong>producent mebli</strong> i{" "}
                <strong>stolarz w Gdańsku</strong> oferujemy{" "}
                <strong>szeroki wybór mebli</strong> do każdego pomieszczenia.{" "}
                <strong>Projektujemy kuchnie</strong>, szafy, garderoby,{" "}
                <strong>meble salonowe</strong>, łazienkowe i biurowe.
                Wykonujemy również <strong>regały na wymiar</strong>,
                komody, szafki RTV i zabudowy na zamówienie.
              </p>
            </div>

            {/* Kafelki usługowe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative rounded-sm overflow-hidden aspect-[3/2]"
                >
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8a6a3a]/85 via-[#8a6a3a]/25 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-2">
                      {service.city}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed max-w-md mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-medium text-secondary font-sans">
                      Dowiedz się więcej
                      <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Opisy tekstowe pod kafelkami */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  Kuchnie na wymiar Gdańsk
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  <strong>Projekt kuchni</strong> zaczynamy od konsultacji
                  i pomiarów. Projektujemy{" "}
                  <strong>funkcjonalne meble kuchenne</strong>,{" "}
                  <strong>idealnie dopasowane</strong> do każdej przestrzeni:
                  od małych <strong>zabudów kuchni</strong> w bloku (w tym
                  popularnych <strong>kuchni pod zabudowę</strong> pod sufit)
                  po kuchnie z wyspą w domach jednorodzinnych.{" "}
                  <strong>Fronty lakierowane</strong>, fornirowane
                  lub bezuchwytowe. Blaty kamienne, kompaktowe HPL i spieki
                  kwarcowe. Dobór sprzętu AGD i oświetlenia meblowego w cenie.{" "}
                  <strong>Nowoczesne meble</strong> kuchenne i klasyczne.{" "}
                  <Link href="/kuchnie-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Zobacz kuchnie na wymiar →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  Szafy na wymiar i garderoby walk-in Gdańsk
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  <strong>Szafy wnękowe na wymiar</strong>,{" "}
                  <strong>garderoby walk-in</strong>, zabudowy pod skosy poddasza
                  i szafy przesuwne z lustrem lub grafiką.{" "}
                  <strong>Meble dopasowane</strong> do milimetra dzięki{" "}
                  <strong>wysokiej jakości</strong> systemom organizacji
                  Blum i Hettich. Oświetlenie LED czujnikowe. Każdy{" "}
                  <strong>projekt zabudowy</strong> to maksymalne wykorzystanie
                  przestrzeni.{" "}
                  <Link href="/szafy-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Zobacz szafy na wymiar →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  Meble łazienkowe na wymiar Gdańsk
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Wykonujemy odporne na wilgoć{" "}
                  <strong>meble łazienkowe na wymiar</strong>: szafki pod umywalkę
                  z blatami z konglomeratu, funkcjonalne{" "}
                  <strong>zabudowy pralki i suszarki</strong>, szafki nad stelaż WC,
                  słupki łazienkowe. Materiały: płyty laminowane wodoodporne,{" "}
                  <strong>MDF lakierowany</strong>, forniry zabezpieczone lakierem.
                  Lustra w ramach na wymiar z podświetleniem LED.{" "}
                  <Link href="/meble-lazienkowe-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Zobacz meble łazienkowe →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  Meble biurowe i gabinetowe na wymiar
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  <strong>Biurka narożne na wymiar</strong>, regały, zabudowy
                  biurowe, kontenerki pod biurko,{" "}
                  <strong>lady recepcyjne na wymiar</strong>.{" "}
                  <strong>Funkcjonalne meble</strong> do{" "}
                  <strong>domowego biura (home office)</strong> i przestrzeni
                  komercyjnych: gabinetów, klinik, kancelarii. Nowoczesny{" "}
                  <strong>styl loftowy</strong>, klasyczny lub minimalistyczny.{" "}
                  <Link href="/meble-biurowe-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Zobacz meble biurowe →
                  </Link>
                </p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  Panele ścienne i sufitowe na wymiar. Unikalny design w Trójmieście
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans max-w-2xl">
                  <strong>Panele fornirowane</strong>,{" "}
                  <strong>lamele drewniane</strong>, zabudowy ścienne z ukrytymi
                  drzwiami, <strong>ściany akcentowe za TV</strong> i za łóżkiem.{" "}
                  <strong>Sufity fornirowane</strong> w stylu japońskim, lamele
                  sufitowe, panele akustyczne do biur i salonów. Wszystko
                  produkujemy na wymiar z naturalnych fornirów (dąb, orzech,
                  jesion) lub lakierowanego MDF. To nasza specjalność, której
                  nie znajdziesz u innych stolarzy w Gdańsku.{" "}
                  <Link href="/panele-scienne-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Panele ścienne →
                  </Link>
                  {" / "}
                  <Link href="/panele-sufitowe-na-wymiar-gdansk" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                    Panele sufitowe →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Materiały i wykończenia */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Materiały i wykończenia
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                <strong>Produkcja mebli na wymiar</strong> wymaga{" "}
                <strong>materiałów najwyższej jakości</strong>. Pracujemy
                wyłącznie ze sprawdzonymi systemami renomowanych producentów.
                Dzięki temu <strong>jakość wykonania</strong> naszych mebli
                gwarantuje trwałość na lata, niezależnie od stylu i budżetu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-sm">
                <h3 className="font-serif text-base font-semibold text-primary mb-3">
                  Okucia i systemy: Blum, Hettich
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Stosujemy <strong>okucia Blum i Hettich</strong> z dożywotnią
                  gwarancją producenta: cicho domykające zawiasy, szuflady
                  Tandembox i Legrabox, systemy Servo-Drive i LeMans.
                  Akcesoria Peka, Häfele i Italiana Ferramenta do organizacji
                  wnętrza szafek.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm">
                <h3 className="font-serif text-base font-semibold text-primary mb-3">
                  Płyty i blaty: Egger, Kronospan
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  Płyty meblowe Egger i Kronospan w pełnej palecie
                  dekorów. Blaty kompaktowe HPL, spieki kwarcowe, Corian
                  i granit. Dobieramy materiał do przeznaczenia —
                  wodoodporny do łazienki, odporny na zarysowania
                  do kuchni.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm">
                <h3 className="font-serif text-base font-semibold text-primary mb-3">
                  Własna lakiernia: RAL/NCS
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  <strong>Lakierowanie frontów MDF</strong> w dowolnym kolorze
                  z palety <strong>RAL lub NCS</strong>. Mat, satyna
                  lub wysoki połysk. Nie jesteśmy zależni
                  od podwykonawców, lepiej kontrolujemy terminy i jakość
                  wykończenia. Oferujemy również <strong>forniry naturalne</strong>:
                  dąb, orzech, jesion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Jak powstają Twoje meble */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Jak powstają Twoje meble krok po kroku
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                <strong>Realizacja mebli</strong> od pierwszego kontaktu
                do <strong>montażu kuchni</strong> lub szafy trwa 4–8 tygodni.
                Każdy etap kontrolujemy osobiście, bo{" "}
                <strong>wykonujemy meble</strong> we własnej stolarni.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Konsultacje i pomiary",
                  desc: "Przyjeżdżamy na bezpłatny pomiar w Gdańsku, Gdyni lub Sopocie. Omawiamy potrzeby, styl i budżet. Pomiar trwa 30–60 minut.",
                },
                {
                  step: "02",
                  title: "Indywidualny projekt mebli",
                  desc: "Przygotowujemy projekt mebli z wizualizacją 3D. Projektowanie mebli obejmuje dobór materiałów, kolorów, okuć i akcesoriów.",
                },
                {
                  step: "03",
                  title: "Produkcja w stolarni",
                  desc: "Meble produkujemy w naszej stolarni w Gdańsku. Lakierowanie, fornirowanie, montaż okuć. Wszystko pod jednym dachem.",
                },
                {
                  step: "04",
                  title: "Montaż mebli",
                  desc: "Dostarczamy i montujemy meble w ustalonym terminie montażu mebli. Podłączamy sprzęt AGD, regulujemy okucia. Gwarantowany termin realizacji.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-surface-50 p-6 rounded-sm">
                  <span className="font-serif text-3xl font-semibold text-secondary/30">{item.step}</span>
                  <h3 className="font-serif text-base font-semibold text-primary mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Realizacja — Tarasy Bałtyku */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
              Case study
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-12">
              Zobacz, jak wygląda nasza realizacja
            </h2>
            <Link href="/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/meble-na-wymiar-gdansk-tarasy-baltyku-realizacja.webp"
                    alt="Meble na wymiar Gdańsk Przymorze — realizacja apartamentu Tarasy Bałtyku"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-4">
                  Tarasy Bałtyku, Gdańsk Przymorze
                </h3>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Kompleksowe wyposażenie apartamentu premium: kuchnia
                  fornirowana z wyspą, szafy wnękowe, garderoba walk-in,
                  meble łazienkowe i panele ścienne. Wszystko zaprojektowane
                  i wykonane na wymiar w naszej stolarni.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Fornir dębowy", "Blum Legrabox", "Lakier mat RAL", "Spieki kwarcowe"].map((tag) => (
                    <span key={tag} className="text-xs font-sans text-text-light bg-surface-100 px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors font-sans">
                  Zobacz pełną realizację
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* H2: Meble na wymiar czy gotowe */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Meble na wymiar czy gotowe: co wybrać?
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-10">
                <strong>Koszt mebli na wymiar</strong> jest wyższy niż{" "}
                <strong>meble gotowe</strong> z salonu, ale różnica jest mniejsza
                niż się wydaje. Szczególnie gdy doliczy się{" "}
                <strong>cenę wykonania mebli</strong> gotowych: dopasowanie,
                montaż i reklamacje. Oto porównanie, które pomoże Ci podjąć
                decyzję.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm font-sans">
                  <thead>
                    <tr className="border-b border-surface-200">
                      <th className="text-left py-4 pr-6 font-serif font-semibold text-primary"></th>
                      <th className="text-left py-4 px-6 font-serif font-semibold text-secondary">Na wymiar</th>
                      <th className="text-left py-4 pl-6 font-serif font-semibold text-text-light">Gotowe</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-muted">
                    {[
                      ["Dopasowanie do pomieszczenia", "Idealne, co do milimetra", "Standardowe wymiary, mogą nie pasować"],
                      ["Wykorzystanie przestrzeni", "100%: zabudowa pod sufit, w narożniki, pod skosy", "Luki, niewykorzystane miejsca"],
                      ["Wybór materiałów i kolorów", "Dowolny: RAL/NCS, forniry, spieki", "Ograniczony do katalogu producenta"],
                      ["Jakość okuć", "Premium: Blum, Hettich z gwarancją", "Podstawowe, bez gwarancji producenta"],
                      ["Trwałość", "10–20+ lat", "3–7 lat"],
                      ["Montaż", "Profesjonalny, w cenie, z gwarancją", "Dodatkowy koszt, bez odpowiedzialności"],
                      ["Czas realizacji", "4–8 tygodni", "Dostępne od ręki"],
                      ["Cena", "Wyższa, ale z pełną obsługą", "Niższa, ale bez dopasowania"],
                    ].map(([label, custom, ready]) => (
                      <tr key={label} className="border-b border-surface-100">
                        <td className="py-4 pr-6 font-medium text-primary">{label}</td>
                        <td className="py-4 px-6">{custom}</td>
                        <td className="py-4 pl-6 text-text-light">{ready}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-10">
                Najczęściej zadawane pytania
              </h2>
              <div className="space-y-2">
                {faqItems.map((faq, i) => (
                  <details key={i} className="bg-surface-50 rounded-sm group">
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
                Zamów meble na wymiar w Gdańsku
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar w Gdańsku, Gdyni i Sopocie.
                Projekt 3D i wycena. Zadzwoń lub napisz —
                odezwiemy się w ciągu 24h.
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
                  504 688 396
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema.org — LocalBusiness + Service + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://db-pracownia-stolarska.pl/#organization",
                name: "D&B Pracownia Stolarska",
                alternateName: "Best-meble Manufaktura",
                url: "https://db-pracownia-stolarska.pl",
                telephone: "+48504688396",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ul. Klonowa 2",
                  addressLocality: "Cieplewo",
                  postalCode: "83-031",
                  addressRegion: "pomorskie",
                  addressCountry: "PL",
                },
                areaServed: [
                  { "@type": "City", name: "Gdańsk" },
                  { "@type": "City", name: "Gdynia" },
                  { "@type": "City", name: "Sopot" },
                ],
                description:
                  "Meble na wymiar Gdańsk — kuchnie, szafy wnękowe, garderoby, meble łazienkowe i biurowe. Własna stolarnia i lakiernia. Bezpłatny pomiar w Trójmieście.",
                priceRange: "$$",
              },
              {
                "@type": "Service",
                serviceType: "Meble na wymiar",
                provider: { "@id": "https://db-pracownia-stolarska.pl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Gdańsk" },
                  { "@type": "City", name: "Gdynia" },
                  { "@type": "City", name: "Sopot" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Meble na wymiar",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kuchnie na wymiar Gdańsk" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Szafy na wymiar Gdańsk" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garderoby na wymiar Gdańsk" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meble łazienkowe na wymiar" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meble biurowe na wymiar" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panele ścienne na wymiar" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Panele sufitowe na wymiar" } },
                  ],
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracownia-stolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar Gdańsk", item: "https://db-pracownia-stolarska.pl/meble-na-wymiar-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
