const usps = [
  {
    number: "01",
    title: "Indywidualny projekt",
    description:
      "Każdy mebel powstaje od zera, według Twoich potrzeb i wymiarów. Nie korzystamy z gotowych szablonów — projektujemy rozwiązania dopasowane do Twojej przestrzeni.",
  },
  {
    number: "02",
    title: "Własna stolarnia",
    description:
      "Posiadamy w pełni wyposażoną stolarnię w Gdańsku. Cały proces — od projektu po montaż — realizujemy we własnym zakresie, bez pośredników.",
  },
  {
    number: "03",
    title: "Najwyższa jakość materiałów",
    description:
      "Pracujemy z materiałami od sprawdzonych europejskich producentów. Płyty meblowe, okucia i akcesoria dobieramy pod kątem trwałości i estetyki.",
  },
  {
    number: "04",
    title: "Terminowość i montaż",
    description:
      "Dotrzymujemy ustalonych terminów. Montaż realizujemy osobiście, dbając o każdy detal. Po zakończeniu prac zostawiamy porządek.",
  },
  {
    number: "05",
    title: "Doświadczenie i zaufanie",
    description:
      "Ponad 10 lat w branży stolarskiej i setki zrealizowanych projektów. Nasi klienci wracają i polecają nas dalej.",
  },
  {
    number: "06",
    title: "Bezpłatna wycena i pomiar",
    description:
      "Przyjeżdżamy na bezpłatny pomiar w Gdańsku, Gdyni i okolicach. Wycenę przygotowujemy w ciągu 48 godzin.",
  },
];

export default function WhyDB() {
  return (
    <section className="section-padding bg-surface-50" id="dlaczego-db">
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
            Dlaczego my
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Dlaczego D&B Pracownia Stolarska?
          </h2>
          <p className="text-text-muted leading-relaxed font-sans">
            Łączymy tradycyjne rzemiosło stolarskie z&nbsp;nowoczesnym
            podejściem do&nbsp;projektowania. Oto, co&nbsp;nas wyróżnia.
          </p>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {usps.map((usp) => (
            <div key={usp.number}>
              <span className="font-serif text-3xl font-semibold text-secondary-light/60">
                {usp.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-primary mt-3 mb-3">
                {usp.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-sans">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
