import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding pb-0 bg-primary">
      <div className="container-editorial text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-text-on-dark mb-6">
            Zaplanuj swoje meble na wymiar
          </h2>
          <p className="text-text-on-dark/70 leading-relaxed font-sans mb-10 text-lg">
            Bezpłatny pomiar, indywidualny projekt i&nbsp;wycena w&nbsp;48h.
            Zadzwoń lub napisz — doradzimy i&nbsp;pomożemy wybrać najlepsze
            rozwiązanie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              504 688 396
            </a>
          </div>

          {/* Trust line */}
          <p className="text-xs text-text-on-dark/40 font-sans">
            Realizacje na terenie Gdańska, Gdyni i całego Trójmiasta
          </p>
        </div>
      </div>
    </section>
  );
}
