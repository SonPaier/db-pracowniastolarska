import Image from "next/image";
import Link from "next/link";
import { ofertaLinks, companyLinks, legalLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary text-text-on-dark relative overflow-hidden">
      {/* Diagonal hatching — gold accent, left top + right */}
      <div className="absolute top-0 left-0 w-48 h-64 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.2]">
          <defs>
            <pattern id="footer-hatch-left" width="20" height="20" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#c4873c" strokeWidth="4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-hatch-left)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-64 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.2]">
          <defs>
            <pattern id="footer-hatch-right" width="20" height="20" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#c4873c" strokeWidth="4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-hatch-right)" />
        </svg>
      </div>

      <div className="container-editorial py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-8">
          {/* Left: 3 columns (70%) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* NAP — Name, Address, Phone */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-xs text-text-on-dark/60 uppercase tracking-[0.2em]">
                Pracownia Stolarska
              </span>
            </Link>

            <address className="not-italic text-sm text-text-on-dark/70 font-sans space-y-2">
              <p className="font-medium text-text-on-dark">Best-meble Manufaktura</p>
              <p>D&B Pracownia Stolarska</p>
              <p>ul. Klonowa 2</p>
              <p>83-031 Cieplewo</p>
              <p className="pt-2">
                <a
                  href="tel:+48504688396"
                  className="text-secondary-light hover:text-secondary transition-colors"
                >
                  tel. 504 688 396
                </a>
              </p>
              <p>
                <a
                  href="mailto:biuro@db-pracowniastolarska.pl"
                  className="text-secondary-light hover:text-secondary transition-colors"
                >
                  biuro@db-pracowniastolarska.pl
                </a>
              </p>
            </address>

            <Image
              src="/logo.webp"
              alt="D&B Pracownia Stolarska"
              width={120}
              height={120}
              className="w-24 h-auto mt-6 brightness-0 invert opacity-40"
            />

          </div>

          {/* Oferta links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-on-dark/40 font-sans font-medium mb-6">
              Oferta
            </h3>
            <ul className="space-y-3">
              {ofertaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-on-dark/40 font-sans font-medium mb-6">
              Firma
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 mt-6 pt-6 border-t border-text-on-dark/10">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-on-dark/40 hover:text-text-on-dark/60 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social media */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/db.pracownia.stolarska" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-text-on-dark/50 hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          </div>

          {/* Right: Map (30%) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-on-dark/40 font-sans font-medium mb-6">
              Lokalizacja stolarni
            </h3>
            <div className="h-full min-h-[300px] rounded-sm overflow-hidden bg-primary-light">
              <iframe
                src="https://maps.google.com/maps?q=D%26B+Pracownia+Stolarska,+Klonowa+2,+83-031+Cieplewo&z=15&hl=pl&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="D&B Pracownia Stolarska, ul. Klonowa 2, Cieplewo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="container-editorial pt-6 pb-6 border-t border-text-on-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-on-dark/40 font-sans">
            © 2026 D&B Pracownia Stolarska. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-text-on-dark/30 font-sans">
            Meble na wymiar Gdańsk — kuchnie, szafy, zabudowy
          </p>
        </div>
      </div>
    </footer>
  );
}
