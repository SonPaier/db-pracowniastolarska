import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Realizacja — Nowe Kolibki Gdynia Orłowo | Meble na Wymiar | D&B",
  description:
    "Kompleksowa zabudowa meblowa mieszkania 80 m² w Nowych Kolibkach, Gdynia Orłowo. Okleina dębowa, styl japoński, okucia Blum, system Bortolussi. Case study.",
};

export default function NoweKolibkiPage() {
  return (
    <>
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Realizacje", href: "/realizacje-zabudowy-meblowe-gdansk" },
          { label: "Nowe Kolibki Gdynia Orłowo" },
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
                Nowe Kolibki, Gdynia&nbsp;Orłowo
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-secondary mb-8">
                Japońska harmonia w&nbsp;okleinie dębowej
              </p>
              <p className="text-lg lg:text-xl text-text-on-dark/70 leading-relaxed max-w-2xl font-sans mb-10">
                Mieszkanie 80&nbsp;m² z&nbsp;kompletną zabudową meblową inspirowaną japońskim
                minimalizmem. Fornirowane ściany, sufity i&nbsp;meble na wymiar tworzą spójną,
                harmonijną przestrzeń — od&nbsp;progu aż po&nbsp;sufit.
              </p>

              {/* Location */}
              <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-text-on-dark/60 font-sans">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  Gdynia, Orłowo
                </span>
              </div>

              {/* Project stats */}
              <div className="flex flex-wrap gap-8 lg:gap-12">
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">80 m²</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Powierzchnia</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">4</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Pokoje</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">3</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Tygodnie realizacji</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-secondary">2026</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark/50 font-sans mt-1">Rok realizacji</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width hero image — salon z drzwiami do sypialni */}
        <section className="relative w-full h-[50vh] lg:h-[60vh]">
          <Image
            src="/realizacje/nowe-kolibki/salon-drzwi-sypialnia-widok.jpg"
            alt="Nowe Kolibki Gdynia — salon z drzwiami fornirowanymi i widokiem na sypialnię"
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
                Japonia spotyka Trójmiasto. W&nbsp;tym 80-metrowym mieszkaniu w&nbsp;prestiżowej
                inwestycji Nowe Kolibki stworzyliśmy przestrzeń, która oddycha spokojem
                — od&nbsp;progu aż po&nbsp;sufit.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Wyzwaniem było utrzymanie jednolitego charakteru drewna na&nbsp;tak dużej
                powierzchni — ściany, sufity, szafy, meble łazienkowe i&nbsp;kuchenne musiały
                tworzyć jedną, nieprzerywaną kompozycję. Każdy element wymagał milimetrowej
                precyzji, by&nbsp;okleina dębowa zachowała ciągłość rysunku słojów.
              </p>
            </div>
          </div>
        </section>

        {/* Etap 1 — Salon i kuchnia */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">01</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Salon i&nbsp;kuchnia — fornirowane serce mieszkania
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Sufity fornirowane z&nbsp;japońskimi kasetami nadają salonowi charakter
                  — ciepłe światło odbija się od&nbsp;naturalnej okleiny dębowej, tworząc
                  przytulną atmosferę mimo minimalistycznej formy. Zabudowa kuchenna stanowi
                  integralną część salonu, a&nbsp;fornirowane fronty płynnie przechodzą
                  w&nbsp;panele ścienne.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Szuflady z&nbsp;okuciami Blum gwarantują cichą i&nbsp;precyzyjną pracę
                  na&nbsp;co&nbsp;dzień. Bar z&nbsp;hokerami łączy strefę kuchenną z&nbsp;salonem,
                  a&nbsp;widok na&nbsp;zieleń Orłowa dopełnia całość.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    {/* Kuchnia z barem i salon — widok ogólny */}
                    <Image src="/realizacje/nowe-kolibki/kuchnia-bar-salon.jpg" alt="Kuchnia z barem i salon — fornirowany sufit, Nowe Kolibki Gdynia" fill className="object-cover" sizes="35vw" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                    {/* Jadalnia — sufit kasetonowy + widok na ogród */}
                    <Image src="/realizacje/nowe-kolibki/salon-sufit-fornirowany-kasety.jpg" alt="Jadalnia z fornirowanym sufitem i widokiem na ogród — Nowe Kolibki" fill className="object-cover" sizes="35vw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width photo break — salon z sofą */}
        <section className="relative w-full h-[40vh]">
          <Image
            src="/realizacje/nowe-kolibki/salon-sofa-sufit-japonski.jpg"
            alt="Salon z sofą i fornirowanym sufitem kasetonowym — Nowe Kolibki"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Etap 2 — Drzwi i panele ścienne */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                {/* Drzwi podwójne eklysy — pełna wysokość, podświetlone */}
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/realizacje/nowe-kolibki/drzwi-eklysa-pelna-wysokosc.jpg" alt="Drzwi podwójne fornirowane w stylu eklysy — od podłogi po sufit, Nowe Kolibki" fill className="object-cover" sizes="60vw" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">02</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Drzwi w&nbsp;stylu eklysy — od&nbsp;podłogi po&nbsp;sufit
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Drzwi wewnętrzne zaprojektowane w&nbsp;stylu eklysy sięgają od&nbsp;podłogi
                  aż po&nbsp;sufit — bez widocznych ościeżnic, wtopione w&nbsp;fornirowane panele
                  ścienne. Efekt: drzwi &bdquo;znikają&rdquo; w&nbsp;ścianie, zachowując czystość linii
                  i&nbsp;japońską estetykę całej przestrzeni.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Detale stolarskie — precyzyjne łączenia drewna w&nbsp;japońskim stylu kumiko
                  — widoczne w&nbsp;zwieńczeniach szaf i&nbsp;detalach drzwi, nadają wnętrzom
                  rzemieślniczy charakter.
                </p>
              </div>
            </div>

            {/* Dodatkowe zdjęcia drzwi */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Drzwi otwarte z salonu do sypialni */}
                <Image src="/realizacje/nowe-kolibki/drzwi-otwarte-sypialnia.jpg" alt="Drzwi fornirowane otwarte — widok z salonu do sypialni" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Drzwi podwójne — widok z salonu, kumiko */}
                <Image src="/realizacje/nowe-kolibki/drzwi-podwojne-fornirowane.jpg" alt="Drzwi podwójne fornirowane z kumiko — Nowe Kolibki" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Korytarz — drzwi + panele ścienne */}
                <Image src="/realizacje/nowe-kolibki/korytarz-fornirowany-drzwi.jpg" alt="Korytarz z fornirowanymi panelami ściennymi i drzwiami" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Detal — klamka czarna na drzwiach fornirowanych */}
                <Image src="/realizacje/nowe-kolibki/drzwi-klamka-czarna-fornir.jpg" alt="Czarna klamka na drzwiach fornirowanych — detal" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </section>

        {/* Full-width photo break — widok z salonu do sypialni */}
        <section className="relative w-full h-[40vh]">
          <Image
            src="/realizacje/nowe-kolibki/salon-drzwi-sypialnia-widok.jpg"
            alt="Nowe Kolibki — salon z drzwiami fornirowanymi i widokiem na sypialnię"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Etap 3 — Łazienka (dark section) */}
        <section className="py-8 lg:py-16 bg-surface-50">
          <div className="ml-auto pl-[clamp(1.5rem,4vw,4rem)] lg:pl-[max(4rem,calc((100vw-80rem)/2+4rem))]">
            <div className="bg-primary rounded-l-sm p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/30">03</span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-text-on-dark mt-2 mb-6">
                    Łazienka — fornir od&nbsp;podłogi po&nbsp;sufit
                  </h2>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans mb-4">
                    Zabudowa łazienkowa w&nbsp;pełni fornirowana okleiną dębową — szafka pod
                    umywalkę z&nbsp;otwartymi półkami na&nbsp;kosze, szafki górne z&nbsp;panelami
                    ściennymi i&nbsp;fornirowany sufit z&nbsp;kasetami. Lustro z&nbsp;podświetleniem
                    LED wbudowane w&nbsp;zabudowę.
                  </p>
                  <p className="text-text-on-dark/70 leading-relaxed font-sans">
                    Detale firmy Häfele — oświetlenie LED wewnątrz szaf — podkreślają
                    każdy element zabudowy. Całość utrzymana w&nbsp;spójnej stylistyce
                    z&nbsp;resztą mieszkania — te&nbsp;same materiały, ten sam język formy.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                      {/* Łazienka — szafka, umywalka, lustro LED, kosze */}
                      <Image src="/realizacje/nowe-kolibki/lazienka-fornirowana-umywalka-led.jpg" alt="Łazienka fornirowana — szafka pod umywalkę z lustrem LED, Nowe Kolibki" fill className="object-cover" sizes="30vw" />
                    </div>
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                      {/* Drzwi podwójne fornirowane — zamknięte, widok frontalny */}
                      <Image src="/realizacje/nowe-kolibki/drzwi-podwojne-fornirowane.jpg" alt="Drzwi podwójne fornirowane — widok frontalny z kumiko, Nowe Kolibki" fill className="object-cover" sizes="30vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etap 4 — Sypialnie i szafy */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-serif text-6xl lg:text-7xl font-semibold text-secondary/20">04</span>
                <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mt-2 mb-6">
                  Sypialnie — szafy fornirowane z&nbsp;japońskimi detalami
                </h2>
                <p className="text-text-muted leading-relaxed font-sans mb-4">
                  Szafy wnękowe z&nbsp;drzwiami fornirowanymi sięgającymi od&nbsp;podłogi
                  po&nbsp;sufit. System przesuwany Bortolussi pozwala na&nbsp;płynne otwieranie
                  bez zajmowania dodatkowej przestrzeni. Wnętrza szaf wyposażone
                  w&nbsp;oświetlenie LED marki Häfele.
                </p>
                <p className="text-text-muted leading-relaxed font-sans">
                  Zwieńczenia szaf i&nbsp;detale w&nbsp;stylu japońskich połączeń drewnianych
                  (kumiko) nadają zabudowie unikalny, rzemieślniczy charakter. Fornirowane
                  ściany i&nbsp;sufity w&nbsp;sypialniach dopełniają efekt &bdquo;drewnianego kokonu&rdquo;
                  — spokojnej przestrzeni do&nbsp;odpoczynku.
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                    {/* Sypialnia — szafy fornirowane + drzwi eklysy */}
                    <Image src="/realizacje/nowe-kolibki/sypialnia-szafy-fornirowane.jpg" alt="Sypialnia z szafami fornirowanymi i drzwiami eklysy — Nowe Kolibki Gdynia" fill className="object-cover" sizes="35vw" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                    {/* Garderoba z lamelami przesuwnymi */}
                    <Image src="/realizacje/nowe-kolibki/garderoba-lamele-przesuwne-1.jpg" alt="Garderoba z drzwiami przesuwanymi lamelowymi — system Bortolussi" fill className="object-cover" sizes="35vw" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dodatkowe zdjęcia — detale kumiko i przedpokój */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Kumiko — zwieńczenie szafy */}
                <Image src="/realizacje/nowe-kolibki/kumiko-zwienczenie-szafy.jpg" alt="Kumiko — zwieńczenie szafy w stylu japońskim, detal" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Kumiko — zwieńczenie szafy, inny kąt */}
                <Image src="/realizacje/nowe-kolibki/kumiko-zwienczenie-szafy-2.jpg" alt="Kumiko — japońskie zwieńczenie szafy, zbliżenie" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Detal kumiko — regał z figurką japońską */}
                <Image src="/realizacje/nowe-kolibki/detal-kumiko-japonski.jpg" alt="Regał z połączeniami kumiko i figurką japońską" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                {/* Przedpokój — zabudowa z regałami */}
                <Image src="/realizacje/nowe-kolibki/przedpokoj-zabudowa-regal.jpg" alt="Przedpokój — pełna zabudowa fornirowana z regałem" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>
        </section>

        {/* Podsumowanie */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-6">
                Japońska precyzja, trójmiejskie rzemiosło
              </h2>
              <p className="text-text-muted leading-relaxed font-sans mb-4">
                Ta realizacja to&nbsp;dowód, że&nbsp;meble na wymiar mogą definiować charakter
                całego mieszkania. Okleina dębowa na&nbsp;ścianach, sufitach i&nbsp;meblach
                — od&nbsp;kuchni po&nbsp;łazienkę — tworzy jednolity, spójny świat inspirowany
                japońskim minimalizmem.
              </p>
              <p className="text-text-muted leading-relaxed font-sans">
                Kluczem do&nbsp;sukcesu była precyzja wykonania i&nbsp;dobór sprawdzonych
                materiałów: okucia Blum, system przesuwany Bortolussi, detale
                i&nbsp;oświetlenie LED Häfele. Każdy z&nbsp;tych elementów pracuje cicho,
                niezawodnie i&nbsp;bez&nbsp;kompromisów — dokładnie jak cała zabudowa.
              </p>
            </div>
          </div>
        </section>

        {/* Karuzela zdjęć — wszystkie fotki */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Więcej zdjęć
            </h2>
            <ImageCarousel
              images={[
                { src: "/realizacje/nowe-kolibki/kuchnia-bar-salon.jpg", alt: "Kuchnia z barem i salon — fornirowany sufit, Nowe Kolibki" },
                { src: "/realizacje/nowe-kolibki/salon-sofa-sufit-japonski.jpg", alt: "Salon z sofą i sufitem kasetonowym w stylu japońskim" },
                { src: "/realizacje/nowe-kolibki/salon-sufit-fornirowany-kasety.jpg", alt: "Jadalnia z fornirowanym sufitem i widokiem na ogród" },
                { src: "/realizacje/nowe-kolibki/drzwi-eklysa-pelna-wysokosc.jpg", alt: "Drzwi podwójne fornirowane w stylu eklysy — pełna wysokość" },
                { src: "/realizacje/nowe-kolibki/drzwi-podwojne-fornirowane.jpg", alt: "Drzwi podwójne fornirowane z kumiko — dąb naturalny" },
                { src: "/realizacje/nowe-kolibki/korytarz-fornirowany-drzwi.jpg", alt: "Korytarz z fornirowanymi panelami ściennymi i drzwiami" },
                { src: "/realizacje/nowe-kolibki/drzwi-otwarte-sypialnia.jpg", alt: "Drzwi otwarte — widok z salonu do sypialni" },
                { src: "/realizacje/nowe-kolibki/drzwi-klamka-czarna-fornir.jpg", alt: "Detal — czarna klamka na drzwiach fornirowanych" },
                { src: "/realizacje/nowe-kolibki/drzwi-klamka-detal.jpg", alt: "Detal — klamki drzwi fornirowanych" },
                { src: "/realizacje/nowe-kolibki/drzwi-fornirowane-detal-profil.jpg", alt: "Profil drzwi fornirowanych — detal stolarki" },
                { src: "/realizacje/nowe-kolibki/detal-fronty-debowe.jpg", alt: "Detal frontów dębowych — japońskie łączenia kumiko" },
                { src: "/realizacje/nowe-kolibki/lazienka-fornirowana-umywalka-led.jpg", alt: "Łazienka fornirowana z lustrem LED i koszami" },
                { src: "/realizacje/nowe-kolibki/lazienka-panele-scienne-fornir.jpg", alt: "Łazienka — panele ścienne fornirowane i lustro LED" },
                { src: "/realizacje/nowe-kolibki/sypialnia-szafy-fornirowane.jpg", alt: "Sypialnia — szafy fornirowane z drzwiami eklysy" },
                { src: "/realizacje/nowe-kolibki/garderoba-lamele-przesuwne-1.jpg", alt: "Garderoba z lamelami — drzwi przesuwne Bortolussi" },
                { src: "/realizacje/nowe-kolibki/garderoba-lamele-przesuwne-2.jpg", alt: "Garderoba lamelowa — sufit fornirowany" },
                { src: "/realizacje/nowe-kolibki/przedpokoj-zabudowa-regal.jpg", alt: "Przedpokój — zabudowa fornirowana z regałem" },
                { src: "/realizacje/nowe-kolibki/kumiko-zwienczenie-szafy.jpg", alt: "Kumiko — zwieńczenie szafy w stylu japońskim" },
                { src: "/realizacje/nowe-kolibki/kumiko-zwienczenie-szafy-2.jpg", alt: "Kumiko — detal japońskiego zwieńczenia" },
                { src: "/realizacje/nowe-kolibki/detal-kumiko-japonski.jpg", alt: "Regał kumiko z figurką japońską" },
                { src: "/realizacje/nowe-kolibki/detal-kumiko-japonski-2.jpg", alt: "Kumiko — detal połączeń drewnianych" },
                { src: "/realizacje/nowe-kolibki/salon-drzwi-sypialnia-widok.jpg", alt: "Salon — drzwi do sypialni z lampami rattanowymi" },
                { src: "/realizacje/nowe-kolibki/korytarz-fornirowany-drzwi-2.jpg", alt: "Salon — sofa z widokiem na drzwi fornirowane i sypialnię" },
              ]}
            />
          </div>
        </section>

        {/* Użyte materiały */}
        <section className="section-padding bg-surface-50">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Użyte materiały
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Okleina", value: "Naturalna okleina dębowa na stabilnej konstrukcji" },
                { label: "Okucia", value: "Blum — zawiasy, szuflady, systemy otwierania" },
                { label: "System przesuwany", value: "Bortolussi — bezgłośne drzwi przesuwne" },
                { label: "Detale", value: "Häfele — oświetlenie LED wewnątrz szaf" },
                { label: "Drzwi", value: "Styl eklysy — od podłogi po sufit, fornirowane" },
                { label: "Sufity", value: "Fornirowane kasety w stylu japońskim" },
                { label: "Panele ścienne", value: "Okleina dębowa, pełna zabudowa ścian" },
                { label: "Łazienka", value: "Zabudowa fornirowana z lustrem LED" },
              ].map((m) => (
                <div key={m.label} className="bg-white p-5 rounded-sm">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans font-medium mb-1">{m.label}</p>
                  <p className="text-sm text-text-muted font-sans leading-relaxed">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powiązane usługi */}
        <section className="section-padding bg-white">
          <div className="container-editorial">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary mb-8">
              Powiązane usługi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/szafy-na-wymiar-gdansk", title: "Szafy na wymiar", city: "Trójmiasto" },
                { href: "/kuchnie-na-wymiar-gdansk", title: "Kuchnie na wymiar", city: "Trójmiasto" },
                { href: "/meble-lazienkowe-na-wymiar-gdansk", title: "Meble łazienkowe", city: "Trójmiasto" },
                { href: "/panele-sufitowe-na-wymiar-gdansk", title: "Panele sufitowe", city: "Trójmiasto" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-surface-50 p-6 rounded-sm hover:bg-primary hover:text-text-on-dark transition-colors"
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
                Kompleksowe zabudowy meblowe dla mieszkań, domów i&nbsp;apartamentów.
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
            headline: "Kompleksowa zabudowa meblowa — Nowe Kolibki Gdynia Orłowo",
            description: "Meble na wymiar w stylu japońskim. Mieszkanie 80 m², okleina dębowa, okucia Blum, system Bortolussi. Case study D&B Pracownia Stolarska.",
            author: { "@type": "Organization", name: "D&B Pracownia Stolarska" },
          }),
        }}
      />
    </>
  );
}
