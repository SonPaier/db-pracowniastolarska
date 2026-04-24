import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import MaterialCard from "@/components/MaterialCard";
import TechFeature from "@/components/TechFeature";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Materiałoteka i Technologie — Standard D&B | Pracownia Stolarska Gdańsk",
  description:
    "Rozwiązania techniczne i materiałoteka D&B Pracownia Stolarska. MDF lakierowany, akryl, laminaty HPL, spieki kwarcowe, systemy Blum Servo-Drive, LeMans, Space Tower.",
};

export default function MaterialotekaPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Strefa Projektanta", href: "/stolarz-wspolpraca-z-projektantami-gdansk" },
          { label: "Materiałoteka i technologie" },
        ]} />

        {/* Hero */}
        <section className="relative pt-4 lg:pt-8 pb-16 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute right-[calc(-5%+50px)] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
            <Image src="/logo.webp" alt="" width={600} height={600} className="w-[400px] lg:w-[600px] h-auto opacity-[0.04]" loading="lazy" />
          </div>
          <div className="container-editorial relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-6 font-sans font-medium">
                Rozwiązania techniczne i materiałoteka
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Inteligentne materiały i&nbsp;technologie.
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Poznaj standard D&B.
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans">
                Nie wierzymy w&nbsp;półśrodki. Każdy projekt opieramy na&nbsp;materiałach,
                które wytrzymają próbę czasu i&nbsp;technologiach, które realnie
                ułatwiają życie. Poniżej znajdziesz pełny przegląd naszych rozwiązań.
              </p>
            </div>
          </div>
        </section>

        {/* Przewodnik po wykończeniach */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Przewodnik po wykończeniach frontów
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Wybór wykończenia frontu to&nbsp;jedna z&nbsp;najważniejszych decyzji
                przy projektowaniu mebli. Każda technologia ma&nbsp;swoje zalety
                — pomagamy dobrać najlepszą do&nbsp;Twojego projektu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MaterialCard
                title="MDF Lakierowany"
                badge="Premium"
                imageAlt="Front lakierowany MDF RAL — wykończenie mat Gdańsk"
                description="Nasza specjalność. Oferujemy lakierowanie w pełnej palecie RAL/NCS. Dzięki wielowarstwowemu nakładaniu lakieru i precyzyjnemu szlifowaniu, uzyskujemy idealnie gładką powierzchnię odporną na wilgoć. Idealny do frezowanych uchwytów i frontów o nietypowych kształtach."
              />
              <MaterialCard
                title="Akryl"
                badge="Głębia i odporność"
                imageAlt="Front akrylowy wysoki połysk — wykończenie meblowe Gdańsk"
                description="Alternatywa dla lakieru o niesamowitym połysku lub głębokim macie. Powierzchnia akrylowa jest niezwykle twarda i odporna na zarysowania, a dzięki laserowemu oklejaniu krawędzi, spoina jest praktycznie niewidoczna."
              />
              <MaterialCard
                title="Laminaty HPL"
                badge="Trwałość"
                imageAlt="Laminat HPL Egger struktura synchroniczna — meble na wymiar Gdańsk"
                description="Najlepszy wybór tam, gdzie liczy się wytrzymałość mechaniczna. Pracujemy na strukturach synchronicznych Egger i Forner, które do złudzenia przypominają naturalne drewno lub kamień, zachowując przy tym odporność na uderzenia."
              />
            </div>
          </div>
        </section>

        {/* Blaty */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Blaty do zadań specjalnych
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Blat roboczy musi być piękny i&nbsp;niezniszczalny jednocześnie.
                Pracujemy z&nbsp;dwoma technologiami, które spełniają oba wymagania.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MaterialCard
                title="Spieki kwarcowe"
                imageAlt="Blat spiek kwarcowy Dekton — kuchnia na wymiar Gdańsk"
                aspectRatio="16/9"
                description="Odporne na ogień, zarysowania i plamy. Na spiekach możesz kroić bezpośrednio nożem i stawiać gorące garnki. To rozwiązanie na pokolenia. Stosujemy spieki Dekton i Silestone w pełnej gamie kolorystycznej."
              />
              <MaterialCard
                title="Blaty kompaktowe (HPL Solid)"
                imageAlt="Blat kompaktowy HPL 12mm — zlewozmywak podwieszany Gdańsk"
                aspectRatio="16/9"
                description="Cienkie (12 mm), a niesamowicie wytrzymałe. Całkowicie wodoodporne, co pozwala na montaż zlewozmywaków podwieszanych i wyfrezowanie ociekacza bezpośrednio w blacie. Idealne do nowoczesnych kuchni i łazienek."
              />
            </div>
          </div>
        </section>

        {/* Technologia */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">03</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                Technologia, która Cię wyręcza
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Automatyka i&nbsp;ergonomia to&nbsp;nie gadżety — to&nbsp;rozwiązania,
                które zmieniają codzienne korzystanie z&nbsp;kuchni. Stosujemy systemy
                Blum, które łączą niezawodność z&nbsp;intuicyjną obsługą.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TechFeature
                title="Servo-Drive"
                subtitle="Automatyczne szuflady"
                imageAlt="Automatyczna szuflada Blum Servo-Drive montaż Gdańsk"
                description="Kuchnia bez uchwytów w najczystszym wydaniu. Dzięki elektrycznemu wspomaganiu otwierania Blum Servo-Drive, wystarczy lekkie naciśnięcie frontu kolanem lub biodrem, by szuflada wysunęła się sama. Idealne, gdy masz brudne ręce podczas gotowania."
              />
              <TechFeature
                title="LeMans"
                subtitle="Inteligentne systemy narożne"
                imageAlt="System narożny LeMans Blum — kuchnia na wymiar Gdańsk"
                description="Koniec z nurkowaniem w głąb szafek. Półki LeMans płynnie wyjeżdżają na zewnątrz, dając pełny dostęp do garnków schowanych w narożniku. Wykorzystujemy każdy centymetr Twojej kuchni."
              />
              <TechFeature
                title="Space Tower"
                subtitle="Spiżarnia idealna"
                imageAlt="Blum Space Tower spiżarnia wysuwana — meble kuchenne Gdańsk"
                description="Zamiast jednej głębokiej szafki, stosujemy system indywidualnie wysuwanych szuflad wewnętrznych. Widzisz wszystko od góry i nie musisz przekładać produktów, by dostać się do tych z tyłu."
              />
            </div>
          </div>
        </section>

        {/* Loga producentów */}
        <section className="py-10 lg:py-14 bg-surface-50">
          <div className="container-editorial">
            <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-text-light font-sans mb-8">
              Pracujemy z markami
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
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

        {/* Zaproszenie do warsztatu */}
        <section className="py-8 lg:py-16 bg-white">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mb-6">
                  Dotknij materiałów na żywo
                </h2>
                <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                  Zdjęcia i&nbsp;opisy nie oddają w&nbsp;pełni charakteru materiałów.
                  Zapraszamy do&nbsp;naszej wzorcowni w&nbsp;Cieplewie — setki próbek
                  oklein, płyt, blatów i&nbsp;okuć w&nbsp;jednym miejscu. Przyjdź
                  ze&nbsp;swoim klientem lub projektantem.
                </p>
                <p className="text-text-on-dark/50 text-sm font-sans mb-8">
                  ul. Klonowa 2, 83-031 Cieplewo · pon-pt 8:00–16:00
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
                  >
                    Umów wizytę
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
