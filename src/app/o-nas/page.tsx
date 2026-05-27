import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "O nas — D&B Pracownia Stolarska | Stolarz Gdańsk, Meble na Wymiar",
  description:
    "Poznaj D&B Pracownia Stolarska — lokalny stolarz z Gdańska. Własna stolarnia i lakiernia, okucia Blum i Hettich, meble na wymiar od projektu po montaż. Zapraszamy do warsztatu.",
};

export default function ONasPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                O nas
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Rzemiosło, nie fabryka.
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Stolarz z Gdańska od&nbsp;ponad 10&nbsp;lat.
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans">
                Jako lokalny stolarz z&nbsp;Gdańska, każdy projekt traktujemy
                osobiście. Nie jesteśmy fabryką — jesteśmy rzemieślnikami, którzy
                znają się z&nbsp;klientem po imieniu. Od&nbsp;pierwszego pomiaru
                po&nbsp;ostatnią regulację zawiasu.
              </p>
            </div>
          </div>
        </section>

        {/* 01 — Ludzie i Rzemiosło */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  D&B to nie fabryka. To&nbsp;rzemiosło w&nbsp;rękach pasjonatów.
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Za&nbsp;każdym meblem, który opuszcza naszą stolarnię, stoją konkretni
                  ludzie. Nie&nbsp;bezosobowa linia produkcyjna, ale stolarz, który zna
                  Twój projekt na&nbsp;pamięć — bo&nbsp;sam go weryfikował, sam ciął płyty,
                  sam okleinował krawędzie i&nbsp;sam zamontował okucia.
                </p>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  D&B Pracownia Stolarska to&nbsp;firma rodzinna, zbudowana na&nbsp;pasji
                  do&nbsp;drewna i&nbsp;precyzji. Zaczynaliśmy od&nbsp;małego warsztatu,
                  dziś dysponujemy w&nbsp;pełni wyposażoną stolarnią z&nbsp;własną lakiernią
                  — ale podejście zostało to&nbsp;samo: każdy projekt przechodzi przez ręce
                  i&nbsp;oczy ludzi, którym zależy.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Nie&nbsp;bierzemy dwudziestu zleceń naraz. Wolimy realizować mniej
                  projektów, ale każdy na&nbsp;najwyższym poziomie. Bo&nbsp;wiemy, że&nbsp;meble
                  na&nbsp;wymiar to&nbsp;inwestycja na&nbsp;lata — i&nbsp;Twoje zaufanie
                  zobowiązuje.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Współpracujemy z&nbsp;doświadczonymi kamieniarzami z&nbsp;Trójmiasta
                  — dzięki temu blaty z&nbsp;granitu, marmuru i&nbsp;spieków kwarcowych
                  dopasowujemy milimetrowo do&nbsp;naszych zabudów. Koordynujemy pomiary,
                  terminy i&nbsp;montaż, żebyś nie musiał tego robić sam.
                </p>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200">
                  <Image
                    src="/o-nas/warsztat-stolarski-cieplewo.webp"
                    alt="Warsztat D&B Pracownia Stolarska w Cieplewie — zabudowa meblowa, tablica narzędzi, wiertarka Blum"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Warsztat (dark floating card) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Sercem naszej pracy jest stolarnia w&nbsp;Cieplewie pod Gdańskiem.
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Nasza hala produkcyjna przy ul.&nbsp;Klonowej to&nbsp;miejsce, gdzie
                    projektowane meble stają się rzeczywistością. Pracujemy na&nbsp;precyzyjnych
                    maszynach, które gwarantują docisk i&nbsp;cięcie co&nbsp;do milimetra
                    — bez wyszczerbień lakieru, bez nierównych krawędzi.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Posiadamy własną lakiernię — nie&nbsp;zlecamy lakierowania na&nbsp;zewnątrz.
                    Dzięki temu kontrolujemy jakość powłoki, kolor i&nbsp;termin. Lakierujemy
                    MDF w&nbsp;dowolnym kolorze RAL/NCS, mat lub połysk.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans">
                    Tutaj możesz też zobaczyć setki wzorników — oklein, płyt, blatów
                    i&nbsp;okuć. Zapraszamy na&nbsp;wizytę — pokażemy Ci, jak powstają
                    Twoje meble.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-primary-light">
                    <Image
                      src="/o-nas/felder-k700s-pilarka-formatowa.webp"
                      alt="Hala produkcyjna D&B — pilarka formatowa Felder K 700 S do precyzyjnego cięcia płyt meblowych"
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Na czym pracujemy */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200">
                    <Image
                      src="/o-nas/felder-fd21-wiertarka.webp"
                      alt="Wiertarka piętrowa Felder FD 21 Professional do precyzyjnego wiercenia w drewnie i płytach meblowych"
                      fill
                      sizes="(min-width: 1024px) 29vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200">
                    <Image
                      src="/o-nas/blum-minipress-p.webp"
                      alt="Wiertarko-wkrętarka Blum Minipress P do montażu okuć meblowych Blum"
                      fill
                      sizes="(min-width: 1024px) 29vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200">
                    <Image
                      src="/o-nas/lange-b85kf-okleiniarka.webp"
                      alt="Okleiniarka prostoliniowa Lange Maschinenbau B 85 KF do oklejania krawędzi płyt meblowych"
                      fill
                      sizes="(min-width: 1024px) 29vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200">
                    <Image
                      src="/o-nas/joos-prasa-membranowa.webp"
                      alt="Prasa membranowa Joos do laminowania i prasowania frontów meblowych"
                      fill
                      sizes="(min-width: 1024px) 29vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Jakość, której nie trzeba reklamować.
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-6">
                  Nie szukamy oszczędności tam, gdzie liczy się trwałość. Stosujemy
                  materiały i&nbsp;systemy, które sprawdzają się latami — i&nbsp;które sami
                  byśmy wybrali do&nbsp;własnego domu.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-primary mb-2">
                      Systemy i okucia
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-sans">
                      Wyłącznie okucia Blum i&nbsp;Hettich z&nbsp;dożywotnią gwarancją
                      producenta. Szuflady cicho domykające, podnośniki Aventos, zawiasy
                      Clip&nbsp;Top — wytrzymałe na&nbsp;dziesiątki tysięcy cykli.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-primary mb-2">
                      Materiały
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-sans">
                      Płyty Egger i&nbsp;Kronospan, lakiery ICA i&nbsp;Adler, blaty kompaktowe
                      HPL, spieki kwarcowe Dekton i&nbsp;Silestone, granity, forniry
                      naturalne. Wszystko z&nbsp;atestem i&nbsp;gwarancją producenta.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-primary mb-2">
                      Bezpieczeństwo
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-sans">
                      Używamy atestowanych materiałów o&nbsp;niskiej emisji formaldehydu
                      (klasa E1) — bezpiecznych dla Twojego domu i&nbsp;Twojej rodziny.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-surface-200">
                  <a href="https://www.blum.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/blum.jpg" alt="Blum" width={80} height={30} className="h-6 w-auto grayscale opacity-50 mix-blend-multiply" /></a>
                  <a href="https://www.hettich.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/hettich.jpg" alt="Hettich" width={80} height={30} className="h-6 w-auto grayscale opacity-50 mix-blend-multiply" /></a>
                  <a href="https://www.egger.com" target="_blank" rel="noopener noreferrer"><Image src="/loga/egger.png" alt="Egger" width={80} height={30} className="h-6 w-auto grayscale opacity-50 mix-blend-multiply" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Zasięg */}
        <section className="section-padding bg-surface-50 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
            <p className="font-serif text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold text-primary/[0.03] whitespace-nowrap tracking-tight leading-none -rotate-12">
              D&B PRACOWNIA STOLARSKA
            </p>
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Od Oliwy po Orłowo — meblujemy całe Trójmiasto.
              </h2>
              <p className="text-text-muted leading-relaxed font-sans text-lg mb-8">
                Realizujemy projekty na&nbsp;terenie Gdańska, Gdyni, Sopotu
                oraz w&nbsp;promieniu 50&nbsp;km od&nbsp;naszej stolarni — Pruszcz
                Gdański, Rumia, Reda, Wejherowo, Kolbudy, Kaszuby. Bezpłatny pomiar
                i&nbsp;dostawa w&nbsp;całym zasięgu.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans text-text-muted">
                {["Gdańsk", "Gdynia", "Sopot", "Pruszcz Gdański", "Rumia", "Wejherowo", "Kolbudy", "Kaszuby"].map((city) => (
                  <span key={city} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Zapraszamy na kawę */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">05</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Zapraszamy na kawę i&nbsp;wzorniki.
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Wybór frontów z&nbsp;katalogu to&nbsp;nie to samo, co&nbsp;dotknięcie
                struktury drewna czy sprawdzenie płynności szuflady na&nbsp;żywo.
                Odwiedź nas w&nbsp;warsztacie, zobacz proces produkcji
                i&nbsp;wybierz materiały przy dobrej kawie.
              </p>
              <p className="text-text-muted leading-relaxed font-sans mb-8">
                W&nbsp;naszej wzorcowni znajdziesz setki próbek oklein, płyt, blatów
                kompaktowych, spieków i&nbsp;okuć. Możesz przyjść sam lub ze&nbsp;swoim
                projektantem — doradzimy od&nbsp;strony technicznej, pokażemy próbki
                w&nbsp;naturalnym świetle i&nbsp;pomożemy podjąć decyzję.
              </p>

              <div className="bg-surface-50 p-6 rounded-sm mb-8 inline-block text-left">
                <p className="font-serif text-sm font-semibold text-primary mb-1">
                  D&B Pracownia Stolarska
                </p>
                <p className="text-sm text-text-muted font-sans">ul. Klonowa 2, 83-031 Cieplewo</p>
                <p className="text-sm text-text-muted font-sans">
                  <a href="tel:+48504688396" className="text-secondary hover:underline">504 688 396</a>
                  {" · "}
                  <a href="mailto:biuro@db-pracowniastolarka.pl" className="text-secondary hover:underline">biuro@db-pracowniastolarka.pl</a>
                </p>
              </div>

              <div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  Umów wizytę w warsztacie
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
                Porozmawiajmy o&nbsp;Twoim projekcie
              </h2>
              <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
                Bezpłatny pomiar, indywidualny projekt i&nbsp;wycena.
                Zadzwoń, napisz lub odwiedź nas w&nbsp;warsztacie.
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
            "@type": "LocalBusiness",
            name: "D&B Pracownia Stolarska",
            alternateName: "Best-meble Manufaktura",
            url: "https://db-pracownia-stolarska.pl",
            telephone: "+48504688396",
            email: "biuro@db-pracowniastolarka.pl",
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
            description: "D&B Pracownia Stolarska — lokalny stolarz z Gdańska. Meble na wymiar: kuchnie, szafy, garderoby, meble łazienkowe. Własna stolarnia i lakiernia.",
          }),
        }}
      />
    </>
  );
}
