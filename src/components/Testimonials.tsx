const testimonials = [
  {
    quote:
      "Firma wykonała dla nas całą kuchnię, zabudowę pod TV oraz zabudowy w sypialni i łazience — wszystko przepięknie, z ogromną dbałością o detale i jakość wykonania. Każda moja wizja została w pełni zrealizowana, a efekt końcowy przerósł oczekiwania. Jeśli ktoś szuka solidnej, rzetelnej firmy stolarskiej — lepszego wyboru nie możecie sobie wymarzyć.",
    author: "Patrycja Zimnawoda",
    location: "Opinia Google",
    project: "Kuchnia, zabudowy, łazienka",
  },
  {
    quote:
      "Miałam \u201Eprzyjemność\u201D współpracować z innymi stolarzami i do tej pory nie trafiłam na tak rzetelnego, sprawnego i profesjonalnego wykonawcę. Moja zabudowa w garderobie i na przedpokoju spełnia wszystkie oczekiwania! Szafy są starannie wykonane, materiały dobrane perfekcyjnie. Taki specjalista to skarb!",
    author: "Karolina R",
    location: "Opinia Google",
    project: "Garderoba i przedpokój",
  },
  {
    quote:
      "Po złych doświadczeniach ze stolarzami udało mi się znaleźć dobrą firmę. Wszystko było w terminie, każde spotkanie, jak i wykonanie i montaż mebli. Komunikacja przebiegała bardzo sprawnie i wszystkie ustalenia stawały się rzeczywistością. Całość wykonana bardzo starannie i zgodnie z moimi oczekiwaniami. Bardzo polecam!",
    author: "Paweł",
    location: "Opinia Google",
    project: "Kompleksowe zabudowy",
  },
  {
    quote:
      "Projekt kuchni, zabudów w łazience i holu, a także regały, szafy i drzwi — wykonany bardzo profesjonalnie, starannie i dokładnie z użyciem nowoczesnych technologii i materiałów. Kontakt z wykonawcą przebiegał bardzo sprawnie i terminowo. Jestem bardzo zadowolona z efektu końcowego.",
    author: "Dorota Ochmańska",
    location: "Opinia Google",
    project: "Kuchnia, szafy, drzwi, łazienka",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white" id="opinie">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
            Opinie
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Co mówią nasi klienci
          </h2>
          <p className="text-text-muted leading-relaxed font-sans">
            Zaufanie naszych klientów to&nbsp;najlepsza rekomendacja. Zobacz, co&nbsp;mówią
            o&nbsp;współpracy z&nbsp;D&B Pracownia Stolarska.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-surface-50 p-8 rounded-sm flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div>
                <svg className="w-8 h-8 text-secondary/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-surface-200">
                <p className="font-serif text-sm font-semibold text-primary">
                  {t.author}
                </p>
                <p className="text-xs text-text-light font-sans mt-1">
                  {t.location}
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary font-sans mt-2">
                  {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-serif font-semibold text-primary mb-1">5.0 / 5.0</p>
          <p className="text-xs text-text-light font-sans mb-4">Średnia ocen w Google</p>
          <a
            href="https://share.google/9yDHlVsnXIzwp6u9j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-text-on-dark font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-primary-light transition-colors"
          >
            Zobacz wszystkie opinie
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
