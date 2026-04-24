import Image from "next/image";

const designerTestimonials = [
  {
    quote:
      "W&nbsp;ramach realizacji projektów wnętrz współpracuję z&nbsp;D&B Pracownią Stolarską przy opracowaniu i&nbsp;wykonaniu zabudów stolarskich. Współpraca obejmuje rozwinięcie rozwiązań projektowych w&nbsp;zakresie detali stolarskich oraz ich wykonanie w&nbsp;toku inwestycji. Ważnym aspektem jest dla mnie sprawna komunikacja na&nbsp;każdym etapie realizacji, która stanowi istotny element procesu.",
    author: "Katarzyna Kruk",
    role: "Architekt wnętrz",
    website: "https://www.katarzynakruk.pl/",
    logo: "/loga/projektanci/kruk.svg",
  },
];

export default function DesignerTestimonials() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Lewa strona — tekst sekcji */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
              Zaufanie projektantów
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Mówią o&nbsp;nas architekci
            </h2>
            <p className="text-text-muted leading-relaxed font-sans">
              Współpracujemy z&nbsp;biurami projektowymi i&nbsp;architektami wnętrz
              z&nbsp;całego Trójmiasta. Oto ich opinie o&nbsp;pracy z&nbsp;D&B.
            </p>
          </div>

          {/* Prawa strona — opinia */}
          <div className="lg:col-span-7">
            {designerTestimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white p-8 lg:p-10 rounded-sm"
              >
                <svg className="w-8 h-8 text-secondary/30 mb-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="font-serif text-base lg:text-lg text-primary leading-relaxed italic mb-8"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />

                <div className="flex items-center gap-4 pt-6 border-t border-surface-200">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden bg-surface-100 shrink-0 flex items-center justify-center">
                    <Image
                      src={t.logo}
                      alt={t.author}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-sm font-semibold text-primary">
                      {t.author}
                    </p>
                    <p className="text-xs text-text-light font-sans mt-0.5">
                      {t.role}
                    </p>
                    {t.website && (
                      <a
                        href={t.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-secondary hover:text-secondary-muted transition-colors font-sans mt-0.5 inline-block"
                      >
                        katarzynakruk.pl
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
