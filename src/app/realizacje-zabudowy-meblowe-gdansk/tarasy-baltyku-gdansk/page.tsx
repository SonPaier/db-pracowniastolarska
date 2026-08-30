import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Realizacja — Tarasy Bałtyku Gdańsk | Zabudowy Meblowe | D&B",
  description:
    "Kompleksowa realizacja zabudów meblowych w apartamencie Tarasy Bałtyku Gdańsk. Kuchnia, szafy, łazienka, garderoba — od projektu po montaż. Case study D&B Pracownia Stolarska.",
};

export default function TarasyBaltykuPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Realizacje", href: "/realizacje" },
          { label: "Tarasy Bałtyku Gdańsk" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Case study
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Tarasy Bałtyku, Gdańsk
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Kompleksowa realizacja wszystkich zabudów meblowych
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Apartament 105,6&nbsp;m² w&nbsp;prestiżowej inwestycji Tarasy Bałtyku.
                Kuchnia, garderoba, dwie łazienki, szafy wnękowe i&nbsp;zabudowa salonu
                — wszystko zaprojektowane i&nbsp;wykonane przez D&B Pracownia Stolarska
                we&nbsp;współpracy z&nbsp;projektantką wnętrz, kamieniarzem i&nbsp;ekipą
                elektryczną.
              </p>

              {/* Location & designer */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-text-on-dark/60 font-sans">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  Gdańsk, Przymorze
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
                  Projekt: <a href="https://konzept.com.pl/" rel="nofollow noopener" target="_blank" className="underline hover:text-text-on-dark transition-colors">KONZEPT</a>, Kraków
                </span>
              </div>

              {/* Project stats */}
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">105,6 m²</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Powierzchnia</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">5</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Pomieszczeń</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">7</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Tygodni realizacji</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">2024</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Rok realizacji</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width hero image */}
        <section className="relative w-full h-[50vh] lg:h-[60vh]">
          <Image
            src="/realizacje/realizacje-3.webp"
            alt="Tarasy Bałtyku — kuchnia na wymiar, widok ogólny"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </section>

        {/* Intro — kontekst projektu */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Wyzwanie
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Klientka — młoda para z&nbsp;Gdańska — kupiła apartament w&nbsp;stanie
                deweloperskim w&nbsp;Tarasach Bałtyku. Wnętrza zaprojektowała architektka
                Marta Nowicka ze&nbsp;studia MN&nbsp;Design. Projekt zakładał spójną stylistykę
                w&nbsp;całym mieszkaniu: ciepłe drewno dębowe, szare akcenty, ukryte oświetlenie
                LED i&nbsp;maksymalne wykorzystanie przestrzeni.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Wyzwaniem było skoordynowanie prac stolarskich z&nbsp;kamieniarzem (blaty
                i&nbsp;okładziny), elektrykiem (podświetlenia, gniazdka w&nbsp;zabudowach)
                oraz glazurnikiem (łazienki). Wszystko musiało ze&nbsp;sobą współgrać
                milimetrowo — przy pięciu pomieszczeniach wymagających zabudów.
              </p>
            </div>
          </div>
        </section>

        {/* Etap 1 — Kuchnia */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Kuchnia — serce apartamentu
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Kuchnia łącząca MDF fornirowany z&nbsp;MDF lakierowanym w&nbsp;półmacie.
                  Szuflady Blum Legrabox z&nbsp;dnem antypoślizgowym zapewniają cichą
                  i&nbsp;precyzyjną pracę na&nbsp;co&nbsp;dzień. Wybrane szuflady wyposażone
                  w&nbsp;napęd elektryczny Blum Servo-Drive — otwieranie jednym dotknięciem.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Barek z&nbsp;podświetleniem LED dolnym oraz ramką firmy Zobal
                  — elegancki detal, który scala strefę kuchenną z&nbsp;salonem.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/realizacje/realizacje-db-5.webp" alt="Kuchnia Tarasy Bałtyku — detale frontów i blatu" fill className="object-cover" sizes="60vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width photo break */}
        <section className="relative w-full h-[40vh]">
          <Image
            src="/realizacje/sufity-fornirowane-w-stylu-japonskim-6.webp"
            alt="Tarasy Bałtyku — sufit fornirowany w salonie"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Etap 2 — Garderoba i szafy */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/realizacje/garderoba-1.webp" alt="Garderoba walk-in Tarasy Bałtyku" fill className="object-cover" sizes="60vw" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Garderoba i&nbsp;szafy wnękowe
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Garderoba z&nbsp;podświetleniem LED w&nbsp;bokach — delikatne światło
                  podkreśla wnętrze i&nbsp;ułatwia codzienne korzystanie. System organizacji
                  z&nbsp;drążkami, szufladami i&nbsp;półkami dopasowany do&nbsp;potrzeb
                  mieszkańców.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Całość utrzymana w&nbsp;spójnej stylistyce z&nbsp;resztą apartamentu
                  — te&nbsp;same materiały i&nbsp;wykończenia, co&nbsp;w&nbsp;panelach
                  ściennych i&nbsp;drzwiach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 3 — Łazienki (dark section) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">03</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Dwie łazienki — dwa charaktery
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Łazienka główna — ciemna, dramatyczna. Zabudowa pod umywalkę z&nbsp;frontem
                    fornirowanym dąb wędzony, blat z&nbsp;spieku kwarcowego. Lustro z&nbsp;podświetleniem
                    LED na&nbsp;całą szerokość zabudowy. Szafka wysoka na&nbsp;kosmetyki
                    z&nbsp;oświetleniem wewnętrznym.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans">
                    Łazienka gościnna — jasna, skandynawska. Szafka pod umywalkę w&nbsp;drewnie
                    dębowym z&nbsp;otwartymi półkami na&nbsp;kosze rattanowe. Koordynacja
                    z&nbsp;glazurnikiem — zabudowa musiała idealnie przylegać do&nbsp;płytek
                    wielkoformatowych bez widocznych fug.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image src="/realizacje/azienka-8.webp" alt="Łazienka główna — ciemna zabudowa pod umywalkę z frontem fornirowanym" fill className="object-cover" sizes="60vw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 4 — Panele i drzwi */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Panele ścienne i&nbsp;drzwi fornirowane
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Panele ścienne fornirowane oraz panele z&nbsp;kasetkami — zarówno
                  w&nbsp;wersji fornirowanej, jak i&nbsp;z&nbsp;MDF lakierowanego
                  w&nbsp;półmacie. Spójny język wykończenia w&nbsp;całym apartamencie.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Drzwi ukryte firmy Elizy — fornirowane i&nbsp;lakierowane, wtopione
                  w&nbsp;panele ścienne. Efekt: drzwi &ldquo;znikają&rdquo;
                  w&nbsp;ścianie, zachowując czystość linii.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Sufit w&nbsp;salonie — kasety fornirowane w&nbsp;stylu japońskim,
                  z&nbsp;podświetleniem pośrednim LED.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/realizacje/drzwi-wewnetrzne-fornirowane-9.webp" alt="Drzwi ukryte fornirowane wtopione w panele ścienne — Tarasy Bałtyku" fill className="object-cover" sizes="60vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Podsumowanie — współpraca */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Koordynacja — klucz do&nbsp;sukcesu
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Realizacja w&nbsp;Tarasach Bałtyku wymagała ścisłej współpracy z&nbsp;czterema
                zespołami: projektantką (MN&nbsp;Design), kamieniarzem, elektrykiem
                i&nbsp;glazurnikiem. Każdy etap prac stolarskich był uzależniony od&nbsp;postępu
                prac pozostałych ekip.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Przyjęliśmy model &ldquo;stolarz jako koordynator&rdquo; — przejmując odpowiedzialność
                za&nbsp;harmonogram i&nbsp;komunikację między ekipami. Cotygodniowe spotkania
                na&nbsp;budowie, wspólne pomiary kontrolne i&nbsp;elastyczność w&nbsp;kolejności
                montażu pozwoliły zamknąć projekt w&nbsp;7&nbsp;tygodni — zgodnie z&nbsp;planem.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Kluczowe było również zaufanie projektantki, która od&nbsp;początku traktowała
                nas jako partnera technicznego, a&nbsp;nie tylko wykonawcę. Weryfikowaliśmy
                każdy detal pod kątem wykonalności, proponowaliśmy alternatywne rozwiązania
                tam, gdzie oryginalne założenia projektowe kolidowały z&nbsp;fizyką materiałów.
              </p>
            </div>
          </div>
        </section>

        {/* Opinia klienta */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-10 h-10 text-secondary/30 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-serif text-xl lg:text-2xl text-primary leading-relaxed italic mb-8">
                &ldquo;Panowie wykonali kawał dobrej roboty. Wszystkie zabudowy stolarskie
                zostały wykonane przez D&B Pracownię Stolarską. Wszystko wykonane
                na&nbsp;najwyższym poziomie z&nbsp;dbałością o&nbsp;najmniejszy szczegół.
                Zabudowy wykonane co&nbsp;do&nbsp;milimetra oraz idealnie spasowane.
                Kontakt z&nbsp;Panami rewelacyjny, a&nbsp;pomysły aranżacyjne lepsze niż&nbsp;te
                zaproponowane przez architekta. Co&nbsp;do&nbsp;terminowości nie&nbsp;mam zastrzeżeń.
                Robota wykonana na&nbsp;110%!&rdquo;
              </p>
              <p className="font-serif text-sm font-semibold text-primary">
                Piotr Jabłoński
              </p>
              <p className="text-xs text-text-light font-sans mt-1">
                Opinia Google — Lokalny przewodnik
              </p>
            </div>
          </div>
        </section>

        {/* Użyte materiały */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Użyte materiały
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Kuchnia", value: "MDF fornirowany + MDF lakierowany w półmacie" },
                { label: "Szuflady", value: "Blum Legrabox z dnem antypoślizgowym, napęd Servo-Drive" },
                { label: "Drzwi", value: "Drzwi ukryte Elizy — fornirowane i lakierowane" },
                { label: "Panele ścienne", value: "Fornirowane + kasetki z MDF lakierowanego" },
                { label: "Garderoba", value: "Podświetlenie LED w bokach, system organizacji" },
                { label: "Barek", value: "Podświetlenie LED dolne, ramka Zobal" },
                { label: "Oświetlenie", value: "LED Häfele, podświetlenia w zabudowach" },
                { label: "Okucia", value: "Blum — Legrabox, Servo-Drive, zawiasy Clip Top" },
              ].map((m) => (
                <div key={m.label} className="bg-surface-50 p-5 rounded-sm">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-1">{m.label}</p>
                  <p className="text-sm text-text-muted font-sans leading-relaxed">{m.value}</p>
                </div>
              ))}
            </div>
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
                { href: "/szafy-na-wymiar-gdansk", title: "Szafy na wymiar", city: "Gdańsk" },
                { href: "/garderoby-na-wymiar-gdansk", title: "Garderoby na wymiar", city: "Gdańsk" },
                { href: "/meble-lazienkowe-na-wymiar-gdansk", title: "Meble łazienkowe", city: "Gdańsk" },
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
                    <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                Kompleksowe zabudowy meblowe dla apartamentów, domów i&nbsp;obiektów
                komercyjnych. Bezpłatny pomiar i&nbsp;wycena.
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
            headline: "Realizacja zabudów meblowych — Tarasy Bałtyku Gdańsk",
            description: "Kompleksowa realizacja zabudów meblowych w apartamencie Tarasy Bałtyku. Kuchnia, szafy, łazienki, panele ścienne.",
            author: { "@type": "Organization", name: "D&B Pracownia Stolarska" },
          }),
        }}
      />
    </>
  );
}
