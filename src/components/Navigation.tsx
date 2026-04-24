"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ofertaLinks } from "@/lib/navigation";

const mainLinks = [
  { href: "/realizacje-zabudowy-meblowe-gdansk", label: "Realizacje" },
  { href: "/cennik", label: "Wycena" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-200/50">
      <div className="container-editorial flex items-center justify-between h-18 lg:h-22">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="D&B Pracownia Stolarska — logo"
            width={48}
            height={48}
            className="w-14 h-14 lg:w-18 lg:h-18"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Oferta — hover opens mega menu, click navigates to /oferta */}
          <Link
            href="/meble-na-wymiar-gdansk"
            onMouseEnter={() => setMegaOpen(true)}
            onFocus={() => setMegaOpen(true)}
            aria-expanded={megaOpen}
            aria-haspopup="true"
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1"
          >
            Oferta
            <svg
              className={`w-3.5 h-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/stolarz-wspolpraca-z-projektantami-gdansk"
            className="text-sm font-medium text-secondary hover:text-secondary-muted transition-colors"
          >
            Strefa Projektanta
          </Link>

          <Link
            href="/kontakt"
            className="bg-secondary text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-secondary/90 transition-colors"
          >
            Bezpłatna wycena
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primary"
          aria-expanded={mobileOpen}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop mega menu — full-width card */}
      {megaOpen && (
        <div
          className="hidden lg:block bg-white/95 backdrop-blur-xl border-t border-surface-200/50"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="container-editorial py-10">
            <div className="grid grid-cols-4 gap-8">
              {/* Oferta column */}
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-text-light mb-4 font-sans">
                  Meble na wymiar
                </p>
                <ul className="space-y-3">
                  {ofertaLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strefa Projektanta + Materiałoteka */}
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-text-light mb-4 font-sans">
                  Dla projektantów
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/stolarz-wspolpraca-z-projektantami-gdansk"
                      className="text-sm text-secondary hover:text-secondary-muted transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      Strefa Projektanta
                    </Link>
                  </li>
                  {/* TODO: przywrócić materiałotekę
                  <li>
                    <Link
                      href="/materialoteka"
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      Materiałoteka i technologie
                    </Link>
                  </li>
                  */}
                  <li>
                    <Link
                      href="/realizacje-zabudowy-meblowe-gdansk"
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      Realizacje
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA in mega menu */}
              <div className="bg-surface-50 rounded-sm p-6 flex flex-col justify-between">
                <div>
                  <p className="font-serif text-base font-semibold text-primary mb-2">
                    Bezpłatna wycena
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    Przyjedziemy na pomiar, doradzimy i wycenimy Twój projekt w 48h.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-primary text-secondary-light text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-primary-light transition-colors text-center"
                  onClick={() => setMegaOpen(false)}
                >
                  Umów pomiar
                </Link>
              </div>
            </div>

            {/* Bottom link */}
            <div className="mt-8 pt-6 border-t border-surface-200/50">
              <Link
                href="/meble-na-wymiar-gdansk"
                className="text-xs font-medium text-text-light hover:text-primary transition-colors"
                onClick={() => setMegaOpen(false)}
              >
                Zobacz pełną ofertę →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu — accordion per section */}
      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </nav>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [ofertaExpanded, setOfertaExpanded] = useState(false);

  return (
    <div className="lg:hidden bg-white/95 backdrop-blur-xl pb-6 border-t border-surface-200/50">
      <div className="container-editorial flex flex-col">
        {/* Oferta accordion */}
        <button
          onClick={() => setOfertaExpanded(!ofertaExpanded)}
          className="flex items-center justify-between text-sm font-medium text-text-muted py-4 border-b border-surface-100"
        >
          Oferta
          <svg
            className={`w-4 h-4 transition-transform ${ofertaExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {ofertaExpanded && (
          <div className="py-2 space-y-1">
            {ofertaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-text-light pl-4 py-2"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {mainLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-text-muted py-4 border-b border-surface-100"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/stolarz-wspolpraca-z-projektantami-gdansk"
          className="text-sm font-medium text-secondary py-4 border-b border-surface-100"
          onClick={onClose}
        >
          Strefa Projektanta
        </Link>

        <Link
          href="/kontakt"
          className="bg-primary text-secondary-light text-sm font-medium px-6 py-3 rounded-sm text-center mt-4"
          onClick={onClose}
        >
          Bezpłatna wycena
        </Link>
      </div>
    </div>
  );
}
