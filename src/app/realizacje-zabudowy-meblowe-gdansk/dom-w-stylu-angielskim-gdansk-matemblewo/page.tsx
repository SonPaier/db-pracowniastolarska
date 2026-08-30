import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Realizacja — Dom w stylu angielskim, Gdańsk Matemblewo | D&B",
  description:
    "Dom 200 m² w Gdańsku Matemblewie — kompleksowa zabudowa stolarska w stylu angielskim. Dębowe sufity kasetonowe, drzwi płycinowe, boazeria, kuchnia z niebieskimi frontami. Case study.",
};

const carouselImages = [
  {
    src: "/realizacje/dom-matemblewo/salon-z-kuchnia-sufit-kasetonowy-debowy.webp",
    alt: "Salon z kuchnią i barem — dębowy sufit kasetonowy, dom w stylu angielskim, Gdańsk Matemblewo",
  },
  {
    src: "/realizacje/dom-matemblewo/salon-sufit-kasetonowy-debowy-detal.webp",
    alt: "Dębowy sufit kasetonowy w salonie — detal konstrukcji, Gdańsk Matemblewo",
  },
  {
    src: "/realizacje/dom-matemblewo/salon-strefa-wypoczynkowa-sufit-kasetonowy.webp",
    alt: "Strefa wypoczynkowa salonu pod dębowym sufitem kasetonowym",
  },
  {
    src: "/realizacje/dom-matemblewo/kuchnia-w-stylu-angielskim-niebieskie-fronty.webp",
    alt: "Kuchnia w stylu angielskim z niebieskimi frontami płycinowymi",
  },
  {
    src: "/realizacje/dom-matemblewo/drzwi-dwuskrzydlowe-debowe-plycinowe.webp",
    alt: "Drzwi dwuskrzydłowe dębowe z płycinami — dom w stylu angielskim",
  },
  {
    src: "/realizacje/dom-matemblewo/sypialnia-drzwi-debowe-plycinowe.webp",
    alt: "Sypialnia z dębowymi drzwiami płycinowymi i podwieszanym sufitem",
  },
  {
    src: "/realizacje/dom-matemblewo/lazienka-boazeria-debowa-lustro-led.webp",
    alt: "Łazienka z dębową boazerią i podświetlanym lustrem",
  },
  {
    src: "/realizacje/dom-matemblewo/detal-debowych-plycin-fronty.webp",
    alt: "Detal dębowych płycin — ramiaki i pola frontów",
  },
  {
    src: "/realizacje/dom-matemblewo/detal-debowej-kratownicy-regal.webp",
    alt: "Detal dębowej kratownicy w zabudowie regału",
  },
];

const scope = [
  { room: "Salon", work: "Dębowy sufit kasetonowy, zabudowa strefy wypoczynkowej, boazeria ścienna" },
  { room: "Kuchnia", work: "Fronty płycinowe lakierowane w kolorze niebieskim, zabudowa z barem" },
  { room: "Sypialnia", work: "Drzwi dębowe płycinowe, podwieszany sufit z drewna, zabudowa wnękowa" },
  { room: "Pokoje dziecięce (2)", work: "Zabudowa szaf i drzwi w spójnej stolarce dębowej" },
  { room: "Łazienki (2)", work: "Boazeria dębowa, zabudowa umywalki, podświetlane lustro" },
  { room: "Wiatrołap", work: "Zabudowa garderobiana i drzwi wewnętrzne w dębie" },
];

export default function DomMatemblewoPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs
          items={[
            { label: "Realizacje", href: "/realizacje-zabudowy-meblowe-gdansk" },
            { label: "Dom w stylu angielskim, Gdańsk Matemblewo" },
          ]}
        />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div
            className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/logo.webp"
              alt=""
              width={600}
              height={600}
              className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]"
              loading="lazy"
            />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Case study
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Dom w&nbsp;stylu angielskim, Gdańsk&nbsp;Matemblewo
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Dąb, płyciny i&nbsp;sufity kasetonowe
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Dom jednorodzinny 200&nbsp;m² z&nbsp;kompleksową stolarką w&nbsp;klasycznym,
                angielskim charakterze. Dębowe sufity kasetonowe, drzwi płycinowe
                i&nbsp;boazeria spinają salon, sypialnię, pokoje dziecięce, dwie łazienki
                i&nbsp;wiatrołap w&nbsp;jedną, konsekwentną całość.
              </p>

              {/* Location */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-text-on-dark/60 font-sans">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Gdańsk, Matemblewo
                </span>
              </div>

              {/* Project stats */}
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">200 m²</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">
                    Powierzchnia
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">7</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">
                    Pomieszczeń
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">Dąb</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">
                    Materiał wiodący
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">Angielski</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">
                    Styl wnętrza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width hero image */}
        <section className="relative w-full h-[50vh] lg:h-[60vh]">
          <Image
            src="/realizacje/dom-matemblewo/salon-z-kuchnia-sufit-kasetonowy-debowy.webp"
            alt="Salon połączony z kuchnią pod dębowym sufitem kasetonowym — dom w stylu angielskim, Gdańsk Matemblewo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </section>

        {/* Wyzwanie */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Wyzwanie
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Styl angielski żyje detalem — płyciną, ramiakiem, proporcją pola do&nbsp;listwy.
                W&nbsp;domu o&nbsp;powierzchni 200&nbsp;m² ten detal musiał powtórzyć się
                w&nbsp;siedmiu pomieszczeniach, na&nbsp;drzwiach, sufitach, boazerii
                i&nbsp;frontach mebli — bez rozjechania się rytmu.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Największym zadaniem był dębowy sufit kasetonowy w&nbsp;strefie dziennej.
                Podział kaset trzeba było zgrać z&nbsp;układem okien, oświetleniem szynowym
                i&nbsp;liniami zabudowy kuchennej, tak&nbsp;by siatka belek wyglądała
                na&nbsp;konstrukcję domu, a&nbsp;nie na&nbsp;dodaną później okładzinę.
              </p>
            </div>
          </div>
        </section>

        {/* Etap 1 — Salon */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Salon — dębowy sufit kasetonowy
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Sufit kasetonowy z&nbsp;dębu wyznacza charakter całej strefy dziennej.
                  Belki poprowadzone w&nbsp;regularnej siatce optycznie porządkują otwartą
                  przestrzeń i&nbsp;wyraźnie oddzielają część wypoczynkową od&nbsp;kuchennej,
                  bez stawiania ścian.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  W&nbsp;kasety wpuszczone zostały punkty oświetleniowe i&nbsp;szyny
                  magnetyczne, a&nbsp;ciepły odcień drewna równoważy chłodne, stonowane
                  tkaniny i&nbsp;duże przeszklenia wychodzące na&nbsp;ogród.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/dom-matemblewo/salon-strefa-wypoczynkowa-sufit-kasetonowy.webp"
                      alt="Strefa wypoczynkowa salonu pod dębowym sufitem kasetonowym — Gdańsk Matemblewo"
                      fill
                      className="object-cover"
                      sizes="35vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                    <Image
                      src="/realizacje/dom-matemblewo/salon-sufit-kasetonowy-debowy-detal.webp"
                      alt="Detal dębowego sufitu kasetonowego w salonie — Gdańsk Matemblewo"
                      fill
                      className="object-cover"
                      sizes="35vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 2 — Kuchnia */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/dom-matemblewo/kuchnia-w-stylu-angielskim-niebieskie-fronty.webp"
                    alt="Kuchnia w stylu angielskim z niebieskimi frontami płycinowymi — Gdańsk Matemblewo"
                    fill
                    className="object-cover"
                    sizes="60vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Kuchnia — niebieskie fronty płycinowe
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Serce angielskiego charakteru tego domu. Fronty płycinowe lakierowane
                  w&nbsp;głębokim, przygaszonym błękicie zestawiliśmy z&nbsp;jasnymi szafkami
                  górnymi i&nbsp;białym blatem — klasyczny, dwukolorowy podział, który
                  optycznie obniża zabudowę i&nbsp;dodaje jej lekkości.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Uchwyty muszelkowe, przeszklone witryny z&nbsp;szprosami i&nbsp;profilowany
                  okap dopełniają stylistykę. Wysokie szafki poprowadzone zostały
                  do&nbsp;samego sufitu, żeby wykorzystać całą dostępną kubaturę.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 3 — Drzwi i boazeria */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Drzwi płycinowe i&nbsp;boazeria
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Wszystkie drzwi wewnętrzne wykonaliśmy na&nbsp;wymiar z&nbsp;dębu,
                  w&nbsp;układzie płycinowym powtarzającym proporcje z&nbsp;sufitu
                  i&nbsp;frontów kuchennych. Skrzydła dwuskrzydłowe do&nbsp;strefy dziennej
                  sięgają pełnej wysokości ściany i&nbsp;dostały czarne, matowe okucia.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Ten sam rysunek płyciny przenieśliśmy na&nbsp;boazerię ścienną
                  — w&nbsp;wiatrołapie, na&nbsp;korytarzu i&nbsp;w&nbsp;łazienkach.
                  Dzięki temu stolarka czyta się jako jeden system, a&nbsp;nie zbiór
                  osobnych elementów.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/dom-matemblewo/drzwi-dwuskrzydlowe-debowe-plycinowe.webp"
                      alt="Drzwi dwuskrzydłowe dębowe z płycinami — dom w stylu angielskim, Gdańsk"
                      fill
                      className="object-cover"
                      sizes="35vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                    <Image
                      src="/realizacje/dom-matemblewo/detal-debowych-plycin-fronty.webp"
                      alt="Detal dębowych płycin — ramiaki i pola frontów"
                      fill
                      className="object-cover"
                      sizes="35vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 4 — Sypialnia, pokoje dziecięce, łazienki */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/dom-matemblewo/sypialnia-drzwi-debowe-plycinowe.webp"
                    alt="Sypialnia z dębowymi drzwiami płycinowymi i podwieszanym sufitem drewnianym"
                    fill
                    className="object-cover"
                    sizes="60vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Sypialnia, pokoje dziecięce i&nbsp;łazienki
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  W&nbsp;części prywatnej domu drewno pojawia się w&nbsp;spokojniejszej dawce.
                  Sypialnia dostała podwieszany sufit z&nbsp;dębu i&nbsp;pełnowymiarowe drzwi
                  płycinowe, a&nbsp;dwa pokoje dziecięce — zabudowę szaf w&nbsp;tej samej
                  stolarce, dopasowaną do&nbsp;skosów i&nbsp;wnęk.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  W&nbsp;obu łazienkach dębowa boazeria sięga do&nbsp;wysokości nadproża
                  i&nbsp;łączy się z&nbsp;zabudową umywalki oraz podświetlanym lustrem.
                  Drewno w&nbsp;strefie mokrej wymagało zabezpieczenia odpornego
                  na&nbsp;wilgoć i&nbsp;starannego rozplanowania styków z&nbsp;płytką.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-12">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/realizacje/dom-matemblewo/lazienka-boazeria-debowa-lustro-led.webp"
                  alt="Łazienka z dębową boazerią i podświetlanym lustrem — Gdańsk Matemblewo"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/realizacje/dom-matemblewo/detal-debowej-kratownicy-regal.webp"
                  alt="Detal dębowej kratownicy w zabudowie regału"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Zakres realizacji */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Zakres realizacji
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scope.map((s) => (
                <div key={s.room} className="bg-white p-5 rounded-sm">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-1">
                    {s.room}
                  </p>
                  <p className="text-sm text-text-muted font-sans leading-relaxed">{s.work}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Galeria realizacji
            </h2>
            <ImageCarousel images={carouselImages} />
          </div>
        </section>

        {/* Powiązane usługi */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Powiązane usługi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/kuchnie-na-wymiar-gdansk", title: "Kuchnie na wymiar", city: "Gdańsk" },
                { href: "/panele-sufitowe-na-wymiar-gdansk", title: "Panele sufitowe", city: "Trójmiasto" },
                { href: "/panele-scienne-na-wymiar-gdansk", title: "Panele ścienne", city: "Trójmiasto" },
                { href: "/meble-lazienkowe-na-wymiar-gdansk", title: "Meble łazienkowe", city: "Trójmiasto" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white p-6 rounded-sm hover:bg-primary hover:text-text-on-dark transition-colors"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium">
                    {s.city}
                  </span>
                  <p className="font-serif text-base font-semibold text-primary group-hover:text-text-on-dark mt-2 mb-3 transition-colors">
                    {s.title}
                  </p>
                  <span className="inline-flex items-center text-xs font-medium text-primary group-hover:text-secondary transition-colors font-sans">
                    Zobacz ofertę
                    <svg
                      className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
                Planujesz podobną realizację?
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Kompleksowe zabudowy stolarskie dla domów i&nbsp;apartamentów.
                Bezpłatny pomiar i&nbsp;wycena w&nbsp;Trójmieście.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Dom w stylu angielskim — kompleksowa zabudowa stolarska, Gdańsk Matemblewo",
            description:
              "Dom 200 m² w Gdańsku Matemblewie. Dębowe sufity kasetonowe, drzwi płycinowe, boazeria, kuchnia z niebieskimi frontami. Case study D&B Pracownia Stolarska.",
            author: { "@type": "Organization", name: "D&B Pracownia Stolarska" },
          }),
        }}
      />
    </>
  );
}
