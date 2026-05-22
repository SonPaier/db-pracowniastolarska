import Link from "next/link";

const services = [
  {
    href: "/kuchnie-na-wymiar-gdansk",
    title: "Kuchnie na wymiar",
    description: "Funkcjonalne kuchnie dopasowane do Twojej przestrzeni. Meble kuchenne z najwyższej jakości materiałów.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Kitchen — countertop with cabinets */}
        <rect x="5" y="18" width="40" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="21" width="14" height="18" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="29" y="21" width="14" height="18" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="25" x2="14" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="30" r="1" fill="currentColor" />
        <circle cx="17" cy="30" r="1" fill="currentColor" />
        <rect x="32" y="24" width="8" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="32" y="32" width="8" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="26.5" r="0.75" fill="currentColor" />
        <circle cx="36" cy="34.5" r="0.75" fill="currentColor" />
        {/* Steam / cooking */}
        <path d="M22 15 C22 12, 25 12, 25 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M28 15 C28 12, 31 12, 31 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/szafy-na-wymiar-gdansk",
    title: "Szafy na wymiar",
    description: "Szafy wnękowe, garderoby i zabudowy. Maksymalne wykorzystanie każdego centymetra.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Wardrobe with sliding doors */}
        <rect x="8" y="6" width="34" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="25" y1="6" x2="25" y2="46" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        {/* Handles */}
        <line x1="22" y1="23" x2="22" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="23" x2="28" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Shelves hint */}
        <line x1="28" y1="16" x2="39" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="24" x2="39" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="36" x2="39" y2="36" stroke="currentColor" strokeWidth="1" />
        {/* Hanging rod */}
        <line x1="11" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="13" y="12" width="3" height="8" rx="0.5" stroke="currentColor" strokeWidth="1" />
        <rect x="18" y="12" width="3" height="10" rx="0.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    href: "/meble-lazienkowe-na-wymiar-gdansk",
    title: "Meble łazienkowe",
    description: "Szafki łazienkowe, blaty pod umywalkę i zabudowy pralki szyte na miarę.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Vanity cabinet */}
        <rect x="8" y="20" width="34" height="22" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="25" y1="20" x2="25" y2="42" stroke="currentColor" strokeWidth="1.5" />
        {/* Drawers */}
        <line x1="8" y1="31" x2="25" y2="31" stroke="currentColor" strokeWidth="1" />
        <circle cx="16.5" cy="25.5" r="0.75" fill="currentColor" />
        <circle cx="16.5" cy="36.5" r="0.75" fill="currentColor" />
        {/* Door handle right */}
        <line x1="28" y1="29" x2="28" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sink on top */}
        <path d="M14 20 C14 16, 20 14, 25 14 C30 14, 36 16, 36 20" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="25" cy="17" rx="6" ry="2.5" stroke="currentColor" strokeWidth="1.2" />
        {/* Faucet */}
        <path d="M25 14 L25 10 C25 9, 27 9, 27 10 L27 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Mirror hint */}
        <rect x="16" y="4" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    href: "/meble-biurowe-na-wymiar-gdansk",
    title: "Meble biurowe",
    description: "Biurka, regały i zabudowy biurowe. Ergonomia i estetyka w miejscu pracy.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Desk */}
        <rect x="6" y="22" width="38" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        {/* Legs */}
        <line x1="9" y1="25" x2="9" y2="42" stroke="currentColor" strokeWidth="1.5" />
        <line x1="41" y1="25" x2="41" y2="42" stroke="currentColor" strokeWidth="1.5" />
        {/* Drawer unit */}
        <rect x="28" y="25" width="12" height="14" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="28" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="35" x2="40" y2="35" stroke="currentColor" strokeWidth="1" />
        <circle cx="34" cy="27.5" r="0.75" fill="currentColor" />
        <circle cx="34" cy="32.5" r="0.75" fill="currentColor" />
        <circle cx="34" cy="37.5" r="0.75" fill="currentColor" />
        {/* Monitor */}
        <rect x="14" y="10" width="16" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="21" x2="22" y2="22" stroke="currentColor" strokeWidth="1.2" />
        <line x1="18" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/panele-sufitowe-na-wymiar-gdansk",
    title: "Panele sufitowe",
    description: "Sufity fornirowane, lamele drewniane, panele akustyczne. Ciepło drewna na suficie.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Ceiling panel — horizontal slats */}
        <rect x="5" y="8" width="40" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="15" width="40" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="5" y="22" width="40" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        {/* Support beam */}
        <line x1="15" y1="29" x2="15" y2="44" stroke="currentColor" strokeWidth="1.5" />
        <line x1="35" y1="29" x2="35" y2="44" stroke="currentColor" strokeWidth="1.5" />
        {/* Light fixture */}
        <circle cx="25" cy="34" r="3" stroke="currentColor" strokeWidth="1.2" />
        <line x1="25" y1="26" x2="25" y2="31" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    href: "/panele-scienne-na-wymiar-gdansk",
    title: "Panele ścienne",
    description: "Panele fornirowane, lamele, zabudowy ścienne. Ściana akcentowa i zabudowa TV.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-secondary-light">
        {/* Wall panel — vertical slats */}
        <rect x="8" y="5" width="4" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="5" width="4" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="5" width="4" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="29" y="5" width="4" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="36" y="5" width="4" height="40" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        {/* TV screen hint */}
        <rect x="14" y="16" width="22" height="14" rx="1" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-surface-50" id="uslugi">
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4 font-sans font-medium">
            Oferta
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Meble na wymiar — pełna oferta
          </h2>
          <p className="text-text-muted leading-relaxed font-sans">
            Specjalizujemy się w&nbsp;produkcji mebli na&nbsp;wymiar dla klientów
            z&nbsp;Gdańska, Gdyni i&nbsp;całego Trójmiasta. Każdy projekt
            realizujemy indywidualnie.
          </p>
        </div>

        {/* Service tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white hover:bg-surface-50 p-8 rounded-sm transition-colors"
            >
{/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center text-xs font-medium text-primary group-hover:text-primary-light transition-colors font-sans">
                Dowiedz się więcej
                <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Link to full offer */}
        <div className="mt-12 text-center">
          <Link
            href="/meble-na-wymiar-gdansk"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors font-sans"
          >
            Zobacz pełną ofertę
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
