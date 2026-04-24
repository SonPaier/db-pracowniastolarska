"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "db-cookie-consent";

function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setConsent(consent: CookieConsent) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      // Small delay so banner doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    const consent: CookieConsent = { necessary: true, analytics: true, marketing: true };
    setConsent(consent);
    setVisible(false);
  }

  function acceptSelected() {
    const consent: CookieConsent = { necessary: true, analytics, marketing };
    setConsent(consent);
    setVisible(false);
  }

  function rejectOptional() {
    const consent: CookieConsent = { necessary: true, analytics: false, marketing: false };
    setConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 lg:p-6" role="dialog" aria-label="Zgoda na cookies">
      <div className="container-editorial">
        <div className="bg-primary/95 backdrop-blur-sm rounded-sm p-6 lg:p-8 max-w-3xl ml-auto shadow-xl">
          <p className="text-sm text-text-on-dark/80 font-sans leading-relaxed mb-4">
            Używamy plików cookies, aby zapewnić prawidłowe działanie strony.
            Cookies analityczne i marketingowe wymagają Twojej zgody.{" "}
            <Link
              href="/polityka-cookies"
              className="text-secondary hover:text-secondary/80 transition-colors underline"
            >
              Polityka cookies
            </Link>
          </p>

          {showDetails && (
            <div className="space-y-3 mb-4 pt-4 border-t border-text-on-dark/10">
              <label className="flex items-center gap-3 cursor-default">
                <input type="checkbox" checked disabled className="w-4 h-4 accent-secondary" />
                <span className="text-sm text-text-on-dark/60 font-sans">
                  <strong className="text-text-on-dark/80">Niezbędne</strong> — wymagane do działania strony
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="w-4 h-4 accent-secondary"
                />
                <span className="text-sm text-text-on-dark/60 font-sans">
                  <strong className="text-text-on-dark/80">Analityczne</strong> — pomagają ulepszać stronę
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="w-4 h-4 accent-secondary"
                />
                <span className="text-sm text-text-on-dark/60 font-sans">
                  <strong className="text-text-on-dark/80">Marketingowe</strong> — reklamy dopasowane do Ciebie
                </span>
              </label>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={acceptAll}
              className="bg-secondary text-white font-sans text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-secondary/90 transition-colors"
            >
              Akceptuję wszystkie
            </button>
            {showDetails ? (
              <button
                onClick={acceptSelected}
                className="bg-transparent text-text-on-dark font-sans text-sm font-medium px-6 py-2.5 rounded-sm border border-text-on-dark/20 hover:bg-white/10 transition-colors"
              >
                Zapisz wybrane
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="bg-transparent text-text-on-dark font-sans text-sm font-medium px-6 py-2.5 rounded-sm border border-text-on-dark/20 hover:bg-white/10 transition-colors"
              >
                Dostosuj
              </button>
            )}
            <button
              onClick={rejectOptional}
              className="text-text-on-dark/40 font-sans text-sm hover:text-text-on-dark/60 transition-colors px-3 py-2.5"
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
