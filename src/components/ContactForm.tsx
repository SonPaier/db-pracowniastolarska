"use client";

import { useState } from "react";

interface ContactFormProps {
  variant?: "default" | "designer";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const isDesigner = variant === "designer";

  return (
    <div className="bg-surface-50 rounded-sm p-8 lg:p-10">
      {submitted ? (
        <div className="text-center py-12">
          <p className="font-serif text-2xl font-semibold text-primary mb-3">
            Dziękujemy!
          </p>
          <p className="text-sm text-text-muted font-sans">
            Odezwiemy się najszybciej jak to możliwe.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white border border-surface-200 rounded-sm px-4 py-3 text-sm font-sans text-primary placeholder:text-text-light focus:outline-none focus:border-secondary transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white border border-surface-200 rounded-sm px-4 py-3 text-sm font-sans text-primary placeholder:text-text-light focus:outline-none focus:border-secondary transition-colors"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white border border-surface-200 rounded-sm px-4 py-3 text-sm font-sans text-primary placeholder:text-text-light focus:outline-none focus:border-secondary transition-colors"
              placeholder=""
            />
          </div>

          {isDesigner && (
            <div>
              <label htmlFor="deadline" className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
                Planowany termin realizacji
              </label>
              <input
                type="text"
                id="deadline"
                name="deadline"
                className="w-full bg-white border border-surface-200 rounded-sm px-4 py-3 text-sm font-sans text-primary placeholder:text-text-light focus:outline-none focus:border-secondary transition-colors"
                placeholder=""
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
              {isDesigner ? "Opis projektu" : "Wiadomość"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-white border border-surface-200 rounded-sm px-4 py-3 text-sm font-sans text-primary placeholder:text-text-light focus:outline-none focus:border-secondary transition-colors resize-none"
              placeholder=""
            />
          </div>

          {isDesigner && (
            <div>
              <label className="block text-xs font-sans font-medium text-text-muted mb-2 uppercase tracking-[0.1em]">
                Załącznik (PDF, DWG, DXF, JPG)
              </label>
              <label
                htmlFor="file"
                className="flex items-center justify-center w-full bg-white border border-dashed border-surface-300 rounded-sm px-4 py-6 text-sm font-sans text-text-light cursor-pointer hover:border-secondary transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Przeciągnij plik lub kliknij, aby wybrać
                <input type="file" id="file" name="file" className="hidden" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png" />
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-secondary text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-secondary/90 transition-colors"
          >
            {isDesigner ? "Wyślij projekt do wyceny" : "Wyślij zapytanie"}
          </button>

          <p className="text-[0.65rem] text-text-light font-sans text-center">
            {isDesigner
              ? "Odezwiemy się najszybciej jak to możliwe."
              : "Odpowiadamy w ciągu 24h. Wycena bezpłatna."}
          </p>
        </form>
      )}
    </div>
  );
}
