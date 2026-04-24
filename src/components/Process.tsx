const steps = [
  {
    number: "01",
    title: "Kontakt i pomiar",
    description:
      "Umawiamy się na bezpłatny pomiar w Twoim domu lub biurze. Omawiamy potrzeby, styl i budżet. Przywozimy próbki materiałów.",
  },
  {
    number: "02",
    title: "Projekt i wycena",
    description:
      "Przygotowujemy indywidualny projekt z wizualizacją 3D. Przedstawiamy szczegółową wycenę — bez ukrytych kosztów. Wprowadzamy poprawki do akceptacji.",
  },
  {
    number: "03",
    title: "Produkcja",
    description:
      "Meble powstają w naszej stolarni w Gdańsku. Kontrolujemy jakość na każdym etapie — od cięcia płyt po montaż okuć i wykończenie.",
  },
  {
    number: "04",
    title: "Dostawa i montaż",
    description:
      "Dostarczamy i montujemy meble w ustalonym terminie. Sprawdzamy każdy detal, regulujemy mechanizmy i sprzątamy po sobie.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-primary" id="proces">
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-light mb-4 font-sans font-medium">
            Jak pracujemy
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
            Proces realizacji mebli na wymiar
          </h2>
          <p className="text-text-on-dark/70 leading-relaxed font-sans">
            Od pierwszego kontaktu do&nbsp;montażu — przejrzysty proces
            w&nbsp;4&nbsp;krokach. Wiesz, czego się spodziewać na&nbsp;każdym
            etapie.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-serif text-5xl lg:text-6xl font-semibold text-secondary">
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-text-on-dark mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-on-dark/70 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
