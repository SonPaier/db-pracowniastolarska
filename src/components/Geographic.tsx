export default function Geographic() {
  return (
    <section className="section-padding bg-surface-50 relative overflow-hidden" id="zasieg">
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <p className="font-serif text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold text-primary/[0.03] whitespace-nowrap tracking-tight leading-none -rotate-12">
          D&B PRACOWNIA STOLARSKA
        </p>
      </div>

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
            Zasięg
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Meble na wymiar — Gdańsk, Gdynia, Trójmiasto
          </h2>
          <p className="text-text-muted leading-relaxed font-sans text-lg">
            Realizujemy projekty mebli na&nbsp;wymiar na&nbsp;terenie całego
            Trójmiasta. Bezpłatny pomiar i&nbsp;dostawę zapewniamy
            w&nbsp;promieniu 50&nbsp;km od&nbsp;naszej stolarni w&nbsp;Gdańsku.
          </p>
        </div>
      </div>
    </section>
  );
}
