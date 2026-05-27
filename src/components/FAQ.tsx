import Image from "next/image";

const faqs = [
  {
    question: "Ile kosztują meble na wymiar w Gdańsku?",
    answer:
      "Cena mebli na wymiar zależy od rodzaju mebla, wymiarów, materiałów i akcesoriów. Kuchnia na wymiar to koszt od ok. 15 000 zł, szafa wnękowa od ok. 5 000 zł. Bezpłatna wycena pozwala poznać dokładny koszt Twojego projektu.",
  },
  {
    question: "Jak długo trwa realizacja mebli na wymiar?",
    answer:
      "Standardowy czas realizacji to 4–8 tygodni od zatwierdzenia projektu. Termin zależy od złożoności projektu i dostępności materiałów. Dokładny harmonogram ustalamy indywidualnie.",
  },
  {
    question: "Czy oferujecie bezpłatny pomiar?",
    answer:
      "Tak, oferujemy bezpłatny pomiar na terenie Gdańska, Gdyni i okolic (do 50 km). Podczas pomiaru omawiamy Twoje potrzeby, pokazujemy próbki materiałów i doradzamy w kwestii rozwiązań.",
  },
  {
    question: "Jakie materiały używacie do produkcji mebli?",
    answer:
      "Pracujemy z płytami meblowymi renomowanych producentów (Egger, Kronospan, Pfleiderer). Stosujemy okucia Blum, Italiana Ferramenta i Häfele. Oferujemy fronty fornirowane, lakierowane, z laminatów HPL, akrylu oraz Corianu. Na życzenie wykonujemy meble z drewna litego.",
  },
  {
    question: "Czy realizujecie projekty w Gdyni i Sopocie?",
    answer:
      "Tak, realizujemy projekty mebli na wymiar w całym Trójmieście — Gdańsk, Gdynia, Sopot — oraz w okolicach: Rumia, Reda, Wejherowo, Pruszcz Gdański, Kolbudy i inne.",
  },
  {
    question: "Czy mogę zobaczyć wizualizację mebli przed produkcją?",
    answer:
      "Tak, przygotowujemy wizualizację 3D każdego projektu. Możesz zobaczyć, jak meble będą wyglądać w Twojej przestrzeni, zanim rozpoczniemy produkcję. Wprowadzamy poprawki do pełnej akceptacji.",
  },
  {
    question: "Jaka jest gwarancja na meble?",
    answer:
      "Udzielamy 24-miesięcznej gwarancji na nasze meble. Gwarancja obejmuje wady materiałowe i produkcyjne. Serwis gwarancyjny realizujemy na terenie Trójmiasta.",
  },
  {
    question: "Czy współpracujecie z projektantami wnętrz?",
    answer:
      "Tak, mamy dedykowaną Strefę Projektanta. Współpracujemy z architektami i projektantami wnętrz z Gdańska i Trójmiasta, oferując preferencyjne warunki i wsparcie techniczne.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="faq">
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/logo.webp"
          alt=""
          width={900}
          height={900}
          className="w-[500px] lg:w-[900px] h-auto opacity-[0.04]"
          loading="lazy"
        />
      </div>
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
              FAQ
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-text-muted leading-relaxed font-sans">
              Odpowiedzi na najczęstsze pytania dotyczące mebli na wymiar,
              procesu realizacji i współpracy z D&B Pracownia Stolarska.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-surface-50 rounded-sm group">
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
  );
}
