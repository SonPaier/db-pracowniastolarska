import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Panele Ścienne na Wymiar Gdańsk — Fornirowane, Drewniane, Tapicerowane | D&B",
  description:
    "Panele ścienne na wymiar Gdańsk — panele fornirowane, drewniane lamele, zabudowy ścienne. Montaż i projekt. D&B Pracownia Stolarska. ☎ 504 688 396",
};

const faqItems = [
  {
    question: "Jakie rodzaje paneli ściennych oferujecie?",
    answer:
      "Oferujemy panele ścienne fornirowane (dąb, orzech, jesion, dąb bielony), drewniane lamele o różnym rozstawie i profilu, panele lakierowane w pełnej palecie RAL/NCS oraz panele z kasetkami — zarówno fornirowane, jak i z MDF lakierowanego w półmacie. Każdy projekt jest indywidualny i dostosowany do wnętrza.",
  },
  {
    question: "Czy panele ścienne można montować na każdej ścianie?",
    answer:
      "Tak — montujemy panele na ścianach murowanych, kartonowo-gipsowych, betonowych i drewnianych. Stosujemy podkonstrukcję, która wyrównuje nierówności i umożliwia prowadzenie instalacji za panelem (np. oświetlenie LED, okablowanie).",
  },
  {
    question: "Jak przygotować ścianę pod montaż paneli?",
    answer:
      "Ściana powinna być sucha, stabilna i w miarę równa. Nie musi być idealnie gładka — stosujemy podkonstrukcję z listew, która kompensuje nierówności do kilku centymetrów. Przy ścianach gipsowo-kartonowych wzmacniamy mocowania w profilu nośnym.",
  },
  {
    question: "Ile trwa realizacja paneli ściennych na wymiar?",
    answer:
      "Od złożenia zamówienia do montażu zazwyczaj mija 4–6 tygodni. Czas zależy od dostępności forniru, złożoności projektu i harmonogramu prac na budowie. Montaż jednej ściany akcentowej trwa zwykle 1–2 dni.",
  },
  {
    question: "Czy panele ścienne można łączyć z zabudową meblową?",
    answer:
      "Tak — to jedno z naszych najmocniejszych rozwiązań. Panele ścienne tworzą spójną całość z szafkami RTV, zabudową za łóżkiem, półkami czy komodami. Wszystko produkujemy z tych samych materiałów, co gwarantuje idealną ciągłość wykończenia.",
  },
  {
    question: "Panele drewniane czy fornirowane — co wybrać?",
    answer:
      "Panele fornirowane (MDF + naturalna okleina) są lżejsze, stabilniejsze wymiarowo i tańsze niż lite drewno. Efekt wizualny jest identyczny. Lite drewno wybieramy tam, gdzie zależy na fakturze i ekstremalnej trwałości — np. w przestrzeniach komercyjnych.",
  },
  {
    question: "Czy panele ścienne poprawiają akustykę pomieszczenia?",
    answer:
      "Tak — drewno i fornir naturalnie tłumią pogłos. Oferujemy również panele z perforowanym rdzeniem MDF i wkładką akustyczną, które skutecznie redukują hałas. To popularne rozwiązanie w salonach z otwartą kuchnią, biurach i salach konferencyjnych.",
  },
  {
    question: "W jakim obszarze realizujecie montaż paneli ściennych?",
    answer:
      "Realizujemy projekty w całym Trójmieście — Gdańsk, Gdynia, Sopot — oraz w okolicach: Rumia, Reda, Wejherowo, Pruszcz Gdański, Kolbudy. Bezpłatny pomiar w promieniu 50 km od Gdańska.",
  },
];

export default function PaneleSciennePage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Meble na wymiar", href: "/meble-na-wymiar-gdansk" },
          { label: "Panele ścienne Gdańsk" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Oferta / Panele ścienne
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Panele Ścienne na&nbsp;Wymiar
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Fornir, lamele, zabudowy — ściany z&nbsp;klasą
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Produkujemy panele ścienne, które zmieniają charakter każdego wnętrza.
                Fornirowane, drewniane, lakierowane — od&nbsp;pojedynczej ściany akcentowej
                po&nbsp;pełną zabudowę salonu. Wszystko na&nbsp;wymiar, z&nbsp;naszej stolarni
                w&nbsp;Gdańsku.
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

        {/* 01 — Ściana akcentowa */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Ściana, która definiuje wnętrze
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Jedna ściana wyłożona fornirem potrafi odmienić cały pokój. Panele
                  ścienne tworzą tło dla&nbsp;mebli, telewizora, łóżka — budują ciepło
                  i&nbsp;elegancję, której nie&nbsp;da się osiągnąć farbą ani tapetą.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Projektujemy panele ścienne jako samodzielne elementy wykończenia
                  lub jako integralną część zabudowy meblowej. Łączymy je z&nbsp;szafkami
                  RTV, komodami, półkami i&nbsp;oświetleniem LED — tworząc jednorodną,
                  spójną kompozycję.
                </p>

                <blockquote className="border-l-2 border-secondary pl-6 py-2 my-8">
                  <p className="text-sm text-text-muted italic font-serif leading-relaxed">
                    &ldquo;Panel ścienny to&nbsp;nie dekoracja — to&nbsp;element
                    architektoniczny, który nadaje wnętrzu charakter i&nbsp;porządek.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/panele-scienne-fornirowane-8.webp"
                    alt="Panele ścienne fornirowane — realizacja D&B Pracownia Stolarska"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Materiały i wykończenia (dark card) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Materiały i&nbsp;możliwości
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-8">
                    Panele ścienne produkujemy z&nbsp;rdzeniem MDF pokrytym naturalnym
                    fornirem lub lakierem. Posiadamy własną lakiernię — lakierujemy
                    w&nbsp;dowolnym kolorze RAL/NCS, mat lub połysk. Lamele wykonujemy
                    z&nbsp;litego drewna lub MDF fornirowanego.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Forniry naturalne</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Dąb, orzech, jesion, dąb bielony — pełna gama odcieni
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Lamele</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Pionowe lub poziome, różny rozstaw i profil listew
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Lakier RAL/NCS</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Gładkie panele w dowolnym kolorze, mat lub połysk
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Integracja z meblami</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Panele łączone z szafkami RTV, półkami, oświetleniem LED
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/drzwi-wewnetrzne-fornirowane-9.webp"
                      alt="Detal forniru — rzemiosło stolarskie D&B"
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

        {/* 03 — Typy paneli ściennych */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
              Rodzaje paneli ściennych
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Panele fornirowane",
                  desc: "MDF pokryty naturalnym fornirem. Ciągłość usłojenia na dużych powierzchniach. Idealny wybór do salonów, sypialni i gabinetów.",
                },
                {
                  title: "Lamele ścienne",
                  desc: "Pionowe lub poziome listwy drewniane z regulowanym rozstawem. Tworzą efekt rytmu i głębi. Popularne w salonach i strefach wejściowych.",
                },
                {
                  title: "Zabudowa ściany TV",
                  desc: "Panel ścienny zintegrowany z szafką RTV, półkami i oświetleniem LED. Jedna spójna kompozycja — bez widocznych kabli i urządzeń.",
                },
                {
                  title: "Ściana za łóżkiem",
                  desc: "Fornirowany lub tapicerowany panel za zagłówkiem, często łączony ze stolikami nocnymi i podświetleniem. Definiuje strefę snu.",
                },
                {
                  title: "Panele lakierowane",
                  desc: "Gładkie panele MDF w dowolnym kolorze RAL/NCS. Mat, satyna lub połysk. Nowoczesny, minimalistyczny efekt.",
                },
                {
                  title: "Okładziny korytarzy i hal",
                  desc: "Panele ścienne do przestrzeni wejściowych, korytarzy i klatek schodowych. Odporne na uszkodzenia, łatwe w utrzymaniu.",
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

        {/* 04 — Zastosowania */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Gdzie sprawdzają się panele ścienne na&nbsp;wymiar?
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Panele ścienne dekoracyjne to&nbsp;jedno z&nbsp;najefektowniejszych rozwiązań
                  wykończeniowych. W&nbsp;salonie tworzą eleganckie tło dla&nbsp;strefy TV
                  lub&nbsp;kominka. W&nbsp;sypialni — ciepły, przytulny zagłówek, który definiuje
                  całą aranżację. W&nbsp;korytarzu i&nbsp;holu dodają głębi i&nbsp;charakteru
                  przestrzeni, która często jest pomijana w&nbsp;projektach.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Coraz częściej realizujemy <strong>zabudowy ściany TV</strong> — panel
                  ścienny zintegrowany z&nbsp;szafką RTV, półkami i&nbsp;oświetleniem LED.
                  Wszystkie kable i&nbsp;urządzenia znikają za&nbsp;zabudową, a&nbsp;całość
                  tworzy jednorodną kompozycję. To&nbsp;rozwiązanie popularne
                  w&nbsp;nowoczesnych apartamentach w&nbsp;Gdańsku i&nbsp;Gdyni.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  <strong>Panele ścienne za&nbsp;łóżkiem</strong> to&nbsp;drugi najczęściej
                  zamawiany typ realizacji. Łączymy je ze&nbsp;stolikami nocnymi,
                  podświetleniem i&nbsp;tapicerowanym zagłówkiem — tworząc spójną strefę snu.
                  Materiał i&nbsp;kolor dobieramy pod resztę sypialni: podłogę, szafy, drzwi.
                </p>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-6">
                  Popularne zastosowania paneli ściennych
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Salon — ściana TV i strefa kominka",
                      desc: "Panel fornirowany lub z lameli, zintegrowany z meblami RTV. Ukryte kable, oświetlenie LED, spójna estetyka. Najpopularniejsze wykończenie nowoczesnych salonów.",
                    },
                    {
                      title: "Sypialnia — zagłówek i ściana za łóżkiem",
                      desc: "Fornir, lamele lub tapicerka łączona ze stolikami nocnymi. Ciepłe podświetlenie LED. Definiuje strefę snu i nadaje sypialni hotelowy charakter.",
                    },
                    {
                      title: "Korytarz i hol wejściowy",
                      desc: "Panele ścienne odporne na zarysowania, łatwe w utrzymaniu. Często łączone z wieszakami, półkami na buty i lustrem. Pierwsze wrażenie po wejściu do domu.",
                    },
                    {
                      title: "Gabinet i biuro domowe",
                      desc: "Panele akustyczne z perforowanym MDF — tłumią pogłos podczas wideokonferencji. Fornir lub lakier w ciemnych odcieniach buduje profesjonalną atmosferę.",
                    },
                    {
                      title: "Jadalnia i kuchnia otwarta",
                      desc: "Ściana akcentowa oddzielająca strefę jadalną od kuchennej. Lamele tworzą optyczny podział przestrzeni bez zamykania otwartego planu.",
                    },
                    {
                      title: "Przestrzenie komercyjne",
                      desc: "Recepcje, gabinety, sale konferencyjne, restauracje. Panele ścienne budują prestiżowy wizerunek i poprawiają akustykę.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-5 rounded-sm">
                      <h4 className="font-serif text-sm font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Proces realizacji */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">05</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Jak zamawiamy panele ścienne na&nbsp;wymiar?
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Każda realizacja zaczyna się od&nbsp;rozmowy — wysłuchujemy oczekiwań,
                analizujemy projekt wnętrza i&nbsp;doradzamy materiały. Następnie
                przyjeżdżamy na&nbsp;bezpłatny pomiar, podczas którego weryfikujemy
                stan ścian, wymiary i&nbsp;możliwości montażowe.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Na&nbsp;podstawie pomiaru przygotowujemy szczegółową wycenę z&nbsp;wizualizacją.
                Po&nbsp;akceptacji zamawiamy materiały — forniry dobieramy z&nbsp;jednej partii,
                by&nbsp;zachować ciągłość słojów na&nbsp;dużych powierzchniach. Produkcja
                paneli odbywa się w&nbsp;naszej stolarni pod Gdańskiem.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-8">
                Montaż realizujemy własną ekipą. Przy panelach z&nbsp;oświetleniem LED
                koordynujemy prace z&nbsp;elektrykiem. Cały proces — od&nbsp;pomiaru
                do&nbsp;zamontowanej ściany — trwa zwykle 4–6&nbsp;tygodni.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", label: "Rozmowa i pomiar", desc: "Bezpłatny pomiar w Gdańsku i okolicach" },
                  { step: "02", label: "Wycena i projekt", desc: "Dobór materiałów, wizualizacja, kosztorys" },
                  { step: "03", label: "Produkcja", desc: "4–5 tygodni w naszej stolarni" },
                  { step: "04", label: "Montaż", desc: "Własna ekipa, koordynacja z innymi branżami" },
                ].map((s) => (
                  <div key={s.step} className="bg-surface-50 p-5 rounded-sm">
                    <p className="font-serif text-lg font-semibold text-secondary mb-1">{s.step}</p>
                    <p className="font-serif text-sm font-semibold text-primary mb-1">{s.label}</p>
                    <p className="text-xs text-text-light font-sans">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Dlaczego panele na wymiar */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">06</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Panele ścienne na&nbsp;wymiar vs&nbsp;gotowe z&nbsp;marketu
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Panele ścienne dostępne w&nbsp;marketach budowlanych (Leroy Merlin, Castorama)
                sprawdzają się w&nbsp;prostych zastosowaniach. Ale&nbsp;gdy zależy Ci
                na&nbsp;idealnym dopasowaniu do&nbsp;wnętrza, ciągłości forniru na&nbsp;dużej
                powierzchni, integracji z&nbsp;meblami i&nbsp;oświetleniem — potrzebujesz
                paneli na&nbsp;wymiar.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                <strong>Fornir dobierany z&nbsp;jednej partii</strong> — to&nbsp;kluczowa różnica.
                W&nbsp;gotowych panelach każdy element może mieć inny odcień i&nbsp;rysunek
                słojów. U&nbsp;nas zamawiamy arkusze forniru z&nbsp;jednej dostawy
                i&nbsp;układamy je tak, by&nbsp;na&nbsp;ścianie tworzyły spójny,
                harmonijny wzór.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                <strong>Integracja z&nbsp;zabudową</strong> — panele na&nbsp;wymiar można
                połączyć z&nbsp;szafkami, półkami, oświetleniem, gniazdkami i&nbsp;włącznikami.
                Wszystko jest zaplanowane na&nbsp;etapie projektu, a&nbsp;instalacje
                schowane za&nbsp;podkonstrukcją.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                <strong>Milimetrowe dopasowanie</strong> — w&nbsp;starszych budynkach
                w&nbsp;Gdańsku ściany rzadko są idealnei proste. Panele na&nbsp;wymiar
                kompensują nierówności, skosy i&nbsp;niestandardowe wymiary
                — efekt końcowy jest zawsze perfekcyjny.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-10">
                Często zadawane pytania — panele ścienne
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
                Zamów panele ścienne na&nbsp;wymiar
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
                name: "Panele ścienne na wymiar Gdańsk",
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
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://db-pracownia-stolarska.pl" },
                  { "@type": "ListItem", position: 2, name: "Meble na wymiar", item: "https://db-pracownia-stolarska.pl/meble-na-wymiar-gdansk" },
                  { "@type": "ListItem", position: 3, name: "Panele ścienne Gdańsk", item: "https://db-pracownia-stolarska.pl/oferta/panele-scienne-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
