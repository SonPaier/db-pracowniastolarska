import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wycena Mebli na Wymiar Gdańsk — Bezpłatna Wycena | D&B Pracownia Stolarska",
  description:
    "Bezpłatna wycena mebli na wymiar w Gdańsku. Indywidualna kalkulacja kuchni, szaf, garderob i mebli łazienkowych. Szybka wycena w D&B Pracownia Stolarska. ☎ 504 688 396",
};

const factors = [
  {
    title: "Wymiary i złożoność projektu",
    desc: "Im więcej metrów bieżących zabudowy i im bardziej skomplikowany układ (skosy, nisze, nietypowe kąty), tym wyższy koszt. Prosta szafa wnękowa kosztuje mniej niż garderoba walk-in z systemem organizacji.",
  },
  {
    title: "Rodzaj frontów",
    desc: "Fronty laminowane to najtańsza opcja. Fronty lakierowane mat/połysk kosztują więcej. Najdroższe są fronty fornirowane z drewna naturalnego i fronty ze spieku kwarcowego.",
  },
  {
    title: "Materiał blatu",
    desc: "Laminat HPL to ekonomiczny wybór. Blaty kompaktowe i kwarcowe (Silestone, Dekton) to średnia półka. Granit i marmur naturalny to najwyższy przedział cenowy.",
  },
  {
    title: "Okucia i akcesoria",
    desc: "Systemy Blum i Hettich (cicho domykające szuflady, podnośniki, cargo) podnoszą cenę, ale zapewniają komfort użytkowania i wieloletnią trwałość. Okucia stanowią zwykle 15–25% wartości mebla.",
  },
  {
    title: "Oświetlenie LED",
    desc: "Podświetlenie podszafkowe, wewnętrzne w szufladach, czujnikowe w garderobach — każdy punkt świetlny to dodatkowy koszt, ale zmienia charakter mebla.",
  },
  {
    title: "Lakierowanie i wykończenie",
    desc: "Posiadamy własną lakiernię, co pozwala nam kontrolować koszty i terminy. Lakierowanie w kolorze RAL/NCS, mat lub połysk — każdy kolor bez dopłaty za niestandardowość.",
  },
];

const priceRanges = [
  { category: "Kuchnia na wymiar", from: "od 15 000 zł", note: "zabudowa typu L, fronty laminowane" },
  { category: "Kuchnia z wyspą", from: "od 25 000 zł", note: "wyspa + zabudowa, fronty lakierowane" },
  { category: "Szafa wnękowa", from: "od 5 000 zł", note: "drzwi przesuwne lub rozwierane" },
  { category: "Garderoba walk-in", from: "od 8 000 zł", note: "system organizacji, oświetlenie LED" },
  { category: "Meble łazienkowe", from: "od 4 000 zł", note: "szafka pod umywalkę + lustro" },
  { category: "Meble biurowe", from: "od 3 500 zł", note: "biurko + zabudowa regałowa" },
];

export default function WycenaPage() {
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
                Wycena
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-on-dark mb-3">
                Wycena mebli na wymiar
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Bezpłatna, indywidualna, bez zobowiązań
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Każdy projekt wyceniamy indywidualnie — bo&nbsp;każde wnętrze jest inne.
                Nie stosujemy cenników z&nbsp;półki. Przyjeżdżamy, mierzymy, rozmawiamy
                o&nbsp;Twoich potrzebach i&nbsp;przygotowujemy szczegółową kalkulację.
                Szybko i&nbsp;konkretnie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#formularz"
                  className="inline-flex items-center justify-center bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  Wyślij zapytanie o wycenę
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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

        {/* Dlaczego indywidualnie */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Dlaczego wycena jest indywidualna?
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Meble na&nbsp;wymiar to&nbsp;nie produkt z&nbsp;katalogu — każdy projekt
                różni się wymiarami, materiałami, okuciami i&nbsp;stopniem złożoności.
                Dlatego nie&nbsp;podajemy sztywnego cennika. Zamiast tego przygotowujemy
                szczegółową kalkulację opartą na&nbsp;Twoim konkretnym projekcie.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Wycena jest bezpłatna i&nbsp;nie&nbsp;zobowiązuje do&nbsp;zamówienia.
                Otrzymujesz pełną specyfikację: wymiary, materiały, okucia, ilość
                elementów i&nbsp;cenę końcową — bez ukrytych kosztów. Pomiar, projekt 3D
                i&nbsp;dostawę wliczamy w&nbsp;cenę realizacji.
              </p>
            </div>
          </div>
        </section>

        {/* Co wpływa na cenę */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Co wpływa na cenę mebli na wymiar?
              </h2>
              <p className="text-text-muted leading-relaxed font-sans">
                Poniżej najważniejsze czynniki, które kształtują koszt realizacji.
                Znając je, łatwiej zaplanować budżet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factors.map((f) => (
                <div key={f.title} className="bg-white p-6 rounded-sm">
                  <h3 className="font-serif text-base font-semibold text-primary mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Jak szybko wyceniamy */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mb-6">
                    Szybka wycena — bez czekania
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Wiemy, że&nbsp;czas ma&nbsp;znaczenie. Dlatego wyceny przygotowujemy
                    sprawnie — po&nbsp;otrzymaniu wymiarów i&nbsp;informacji o&nbsp;materiałach
                    wracamy z&nbsp;kalkulacją najszybciej jak to&nbsp;możliwe.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-6">
                    Wystarczy zdjęcie pomieszczenia, orientacyjne wymiary i&nbsp;opis tego,
                    czego potrzebujesz. Na&nbsp;tej podstawie przygotujemy wstępną wycenę.
                    Po&nbsp;bezpłatnym pomiarze w&nbsp;Twoim domu — wycenę szczegółową
                    z&nbsp;wizualizacją 3D.
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-serif text-2xl font-semibold text-secondary">1</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Wyślij zapytanie</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-secondary">2</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Wstępna wycena</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-secondary">3</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Pomiar i projekt 3D</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/realizacje/realizacje-3.webp"
                    alt="Wycena mebli na wymiar — kuchnia nowoczesna"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formularz wyceny */}
        <section id="formularz" className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                  Wyślij zapytanie o&nbsp;wycenę
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-6">
                  Opisz czego potrzebujesz — rodzaj mebla, orientacyjne wymiary,
                  preferowane materiały. Możesz dołączyć zdjęcie pomieszczenia
                  lub rysunek.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-muted font-sans">Wycena bezpłatna i bez zobowiązań</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-muted font-sans">Pomiar, projekt 3D i dostawa w cenie</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm text-text-muted font-sans">Cena końcowa bez ukrytych kosztów</p>
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
              <p className="text-xs text-text-muted font-sans mt-4 text-center">
                lub napisz na <a href="mailto:biuro@db-pracowniastolarska.pl" className="text-secondary hover:underline">biuro@db-pracowniastolarska.pl</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
