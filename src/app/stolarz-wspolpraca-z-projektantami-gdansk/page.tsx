import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Stolarz dla Architektów — Współpraca z Projektantami Gdańsk | D&B",
  description:
    "Współpraca stolarza z projektantami wnętrz i architektami w Gdańsku. Weryfikacja techniczna, wzorcownia materiałów, realizacja mebli na wymiar z rysunków. ☎ 504 688 396",
};

const faqItems = [
  {
    question: "Czy wykonujecie pomiary z natury przed produkcją?",
    answer:
      "Tak — zawsze. Nawet jeśli dysponujemy rysunkami projektowymi, wykonujemy pomiar kontrolny z natury przed rozpoczęciem produkcji. Eliminuje to ryzyko niezgodności wymiarów.",
  },
  {
    question: "Czy pracujecie na systemach innych niż standardowe?",
    answer:
      "Tak. Realizujemy projekty oparte na systemach Blum, Hettich, Grass, Peka i innych. Jeśli projekt wymaga niestandardowego rozwiązania — dobieramy je wspólnie z projektantem.",
  },
  {
    question: "Jaki jest aktualny czas oczekiwania na montaż?",
    answer:
      "Standardowo 4–6 tygodni od zatwierdzenia projektu. Przy większych realizacjach lub lakierowaniu — do 8 tygodni. Dokładny harmonogram ustalamy indywidualnie.",
  },
  {
    question: "Czy udostępniacie tekstury i próbki do wizualizacji?",
    answer:
      "Tak. Udostępniamy fizyczne próbki materiałów oraz pliki tekstur do Twoich wizualizacji. Możesz je odebrać w naszej wzorcowni lub wyślemy je kurierem.",
  },
  {
    question: "Jakie formaty plików przyjmujecie?",
    answer:
      "Przyjmujemy rysunki w formatach PDF, DWG, DXF oraz wizualizacje w JPG/PNG. Pracujemy również na podstawie odręcznych szkiców — weryfikujemy je technicznie i przygotowujemy dokumentację produkcyjną.",
  },
];

export default function WspolpracaZProjektantamiPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-primary overflow-hidden">
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
                Strefa Projektanta
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-8">
                Stolarz, który czyta
                <br />
                Twoje rysunki.
                <span className="block text-secondary text-2xl sm:text-3xl lg:text-4xl mt-4">
                  Współpraca dla architektów w&nbsp;Gdańsku.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark/80 leading-relaxed max-w-2xl font-sans mb-10">
                Realizujemy skomplikowane projekty mebli na&nbsp;wymiar z&nbsp;pełnym wsparciem
                technologicznym. Ty projektujesz — my gwarantujemy wykonalność
                i&nbsp;jakość rzemiosła.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  Wyślij projekt do wyceny
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

        {/* Wzorcownia — Twój warsztat w Gdańsku */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Twój Warsztat w&nbsp;Gdańsku
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Zapraszamy do&nbsp;naszej wzorcowni — miejsca, gdzie projekt spotyka
                  się z&nbsp;materią. Setki wzorników Egger, Kronospan, Forner, blaty
                  kompaktowe i&nbsp;spieki kwarcowe w&nbsp;jednym miejscu.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-6">
                  Możesz przyjść tu ze&nbsp;swoim klientem, by&nbsp;wspólnie dobrać
                  materiały przy kawie. Dotknąć powierzchni, porównać okleiny,
                  sprawdzić kolory w&nbsp;naturalnym świetle. To&nbsp;zmienia
                  jakość rozmowy z&nbsp;inwestorem.
                </p>

                <blockquote className="border-l-2 border-secondary pl-6 py-2 my-8">
                  <p className="text-sm text-text-muted italic font-serif leading-relaxed">
                    &ldquo;Nie musisz jechać do&nbsp;trzech hurtowni. U&nbsp;nas masz
                    wszystko w&nbsp;jednym miejscu — i&nbsp;eksperta, który doradzi
                    od&nbsp;strony technicznej.&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/panele-scienne-fornirowane-8.webp"
                    alt="Wzorcownia D&B — próbki materiałów, forniry, okleiny"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zaplecze technologiczne — floating dark card */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Zaplecze technologiczne i&nbsp;materiałowe
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Projektanci muszą wiedzieć, na&nbsp;czym pracujemy.
                    Konkretne marki, sprawdzone systemy, pełna powtarzalność jakości.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-8">
                    Posiadamy własną lakiernię — dzięki temu nie&nbsp;jesteśmy uzależnieni
                    od&nbsp;zewnętrznych podwykonawców. Lepiej kontrolujemy terminy realizacji
                    i&nbsp;jakość wykończenia. Lakierujemy MDF w&nbsp;dowolnym kolorze RAL/NCS,
                    mat lub połysk.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Okucia</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Blum, Hettich, Grass — dożywotnia gwarancja producenta
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Systemy</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Peka, oświetlenie LED meblowe, zasilanie wbudowane
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Wykończenia</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Lakier MDF w dowolnym RAL/NCS, forniry, drewno lite
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-secondary">Blaty</p>
                      <p className="text-xs text-text-on-dark/60 font-sans mt-1 leading-relaxed">
                        Spieki kwarcowe, granit, marmur, kompakt HPL
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image
                      src="/realizacje/drzwi-wewnetrzne-fornirowane-9.webp"
                      alt="Drzwi fornirowane — detal rzemiosła stolarskiego"
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

        {/* TODO: przywrócić materiałotekę
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <Link href="/materialoteka" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-8">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
                  Rozwiązania techniczne i materiałoteka
                </p>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-4">
                  Inteligentne materiały i&nbsp;technologie. Poznaj standard D&B.
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-6">
                  MDF lakierowany w&nbsp;pełnej palecie RAL/NCS, akryl, laminaty HPL, spieki kwarcowe,
                  systemy Blum Servo-Drive, LeMans, Space Tower — pełny przegląd naszych rozwiązań.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors font-sans">
                  Zobacz materiałotekę
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="lg:col-span-4">
                <div className="bg-surface-50 p-6 rounded-sm">
                  <div className="space-y-3 text-sm font-sans text-text-muted">
                    <p>Fronty: MDF, Akryl, HPL</p>
                    <p>Blaty: Spieki, Kompakty HPL</p>
                    <p>Automatyka: Servo-Drive, LeMans</p>
                    <p>Marki: Blum, Hettich, Egger</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        */}

        {/* Opinie projektantów */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
                Opinie
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-4">
                Co mówią o&nbsp;nas projektanci
              </h2>
            </div>

            <div className="max-w-3xl">
              <div className="bg-white p-8 lg:p-10 rounded-sm">
                <svg className="w-8 h-8 text-secondary/30 mb-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-serif text-base lg:text-lg text-primary leading-relaxed italic mb-8">
                  &ldquo;W&nbsp;ramach realizacji projektów wnętrz współpracuję z&nbsp;D&B Pracownią Stolarską przy opracowaniu i&nbsp;wykonaniu zabudów stolarskich. Współpraca obejmuje rozwinięcie rozwiązań projektowych w&nbsp;zakresie detali stolarskich oraz ich wykonanie w&nbsp;toku inwestycji. Ważnym aspektem jest dla mnie sprawna komunikacja na&nbsp;każdym etapie realizacji, która stanowi istotny element procesu.&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-surface-200">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden bg-surface-100 shrink-0 flex items-center justify-center">
                    <Image
                      src="/loga/projektanci/kruk.svg"
                      alt="Katarzyna Kruk"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-sm font-semibold text-primary">
                      Katarzyna Kruk
                    </p>
                    <p className="text-xs text-text-light font-sans mt-0.5">
                      Architekt wnętrz
                    </p>
                    <a
                      href="https://www.katarzynakruk.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary hover:text-secondary-muted transition-colors font-sans mt-0.5 inline-block"
                    >
                      katarzynakruk.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pracujemy dla najlepszych — tymczasowo wyłączone, potrzebne logotypy */}

        {/* Jak ułatwiamy Ci pracę? */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Jak ułatwiamy Ci pracę?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Weryfikacja techniczna",
                  desc: "Sprawdzamy każdy projekt pod kątem konstrukcyjnym przed produkcją — eliminujemy błędy na etapie rysunku. Oszczędzasz czas i nerwy na budowie.",
                },
                {
                  title: "Biblioteka materiałów",
                  desc: "Udostępniamy próbki fizyczne oraz tekstury do Twoich wizualizacji. Setki wzorników w jednym miejscu — Egger, Kronospan, Forner, spieki.",
                },
                {
                  title: "Nadzór autorski",
                  desc: "Jesteśmy w stałym kontakcie podczas montażu, dbając o każdy milimetr zgodności z projektem. Raportujemy postęp na każdym etapie.",
                },
                {
                  title: "Szybka wycena",
                  desc: "Wstępna analiza techniczna i kosztorys w 48h. Wyślij rysunki w PDF lub DWG — odezwiemy się z konkretnymi liczbami.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-surface-50 p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">
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

        {/* Portfolio techniczne — detale */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Portfolio techniczne — detale rzemiosła
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Dla projektanta zdjęcie całej kuchni to&nbsp;za mało. Oto bliskie kadry,
                które pokazują jakość wykonania wytrzymującą surowe oko architekta.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { src: "/realizacje/drzwi-wewnetrzne-fornirowane-9.webp", alt: "Łączenia forniru pod kątem 45°" },
                { src: "/realizacje/lazienka-i-wc-4.webp", alt: "Systemy wewnętrzne w zabudowie łazienkowej" },
                { src: "/realizacje/garderoba-1.webp", alt: "Systemy organizacji w garderobie" },
                { src: "/realizacje/azienka-8.webp", alt: "Detale wykończenia — łazienka premium" },
              ].map((photo) => (
                <div key={photo.src} className="relative aspect-square rounded-sm overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-4">
                    <p className="text-xs text-white font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logotypy zaufania */}
        <section className="py-10 lg:py-14 bg-white">
          <div className="container-editorial">
            <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-text-light font-sans mb-8">
              Pracujemy z markami
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
              {[
                { name: "Blum", src: "/loga/marki/blum.png" },
                { name: "Häfele", src: "/loga/marki/hafele.png" },
                { name: "Egger", src: "/loga/marki/egger.png" },
                { name: "Corian", src: "/loga/marki/corian.png" },
                { name: "Italiana Ferramenta", src: "/loga/marki/italiana-ferramenta.png" },
                { name: "Peka B40", src: "/loga/marki/peka-b40.png" },
              ].map((brand) => (
                <div key={brand.name} title={brand.name}>
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Szybka wycena projektu — formularz */}
        <section className="section-padding bg-primary">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
                  Szybka wycena projektu
                </h2>
                <p className="text-text-on-dark/70 leading-relaxed font-sans mb-6 text-lg">
                  Wyślij rysunki w&nbsp;PDF lub DWG. Wstępna analiza techniczna
                  i&nbsp;kosztorys w&nbsp;48h.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-on-dark/70 font-sans">PDF, DWG, DXF, JPG, PNG — lub odręczny szkic</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-on-dark/70 font-sans">Weryfikacja techniczna w cenie</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-on-dark/70 font-sans">Odpowiedź z kosztorysem w 48h</p>
                  </div>
                </div>
                <a
                  href="tel:+48504688396"
                  className="inline-flex items-center text-secondary font-sans text-sm font-medium"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  504 688 396
                </a>
              </div>
              <ContactForm variant="designer" />
            </div>
          </div>
        </section>

        {/* FAQ dla profesjonalistów */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">05</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-10">
                FAQ dla profesjonalistów
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
      </main>
      <Footer />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Współpraca z projektantami wnętrz — meble na wymiar",
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
                description: "Współpraca stolarza z architektami i projektantami wnętrz w Gdańsku. Weryfikacja techniczna projektów, wzorcownia materiałów, realizacja mebli na wymiar.",
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
                  { "@type": "ListItem", position: 2, name: "Strefa Projektanta", item: "https://db-pracowniastolarska.pl/stolarz-wspolpraca-z-projektantami-gdansk" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
