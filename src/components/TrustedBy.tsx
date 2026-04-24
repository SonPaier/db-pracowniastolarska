const logos = [
  "Blum",
  "Egger",
  "Häfele",
  "Italiana Ferramenta",
  "Corian",
  "Peka",
  "Bortoluzzi",
  "Eclisse",
  "Franke",
];

export default function TrustedBy() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container-editorial">
        <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-text-light font-sans mb-8">
          Pracujemy na produktach renomowanych marek
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {logos.map((name) => (
            <div
              key={name}
              className="w-28 h-12 bg-surface-100 rounded-sm flex items-center justify-center"
            >
              <span className="text-xs font-sans font-medium text-text-light/50 uppercase tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
