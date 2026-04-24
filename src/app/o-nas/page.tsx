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
                Stolarz z Gdańska od&nbsp;ponad 15&nbsp;lat.
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
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-surface-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    <p className="text-sm text-surface-400 font-sans">Zdjęcie ekipy D&B przy pracy</p>
                  </div>
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
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-primary-light flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="w-16 h-16 text-text-on-dark/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0H21m-3.75 3H21m-3.75 3H21" />
                      </svg>
                      <p className="text-sm text-text-on-dark/30 font-sans">Zdjęcie hali produkcyjnej</p>
                    </div>
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
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-surface-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-surface-400 font-sans">Zdjęcie wzorników i maszyn</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
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

                <div className="bg-surface-50 p-6 rounded-sm mb-6">
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

                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  Umów wizytę w warsztacie
                </Link>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-surface-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 text-surface-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="text-sm text-surface-400 font-sans">Zdjęcie wzorcowni — próbki materiałów przy kawie</p>
                  </div>
                </div>
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
            url: "https://db-pracowniastolarska.pl",
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
