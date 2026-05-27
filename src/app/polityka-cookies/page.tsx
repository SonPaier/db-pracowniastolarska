import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Polityka Cookies",
  description: "Polityka cookies D&B Pracownia Stolarska. Informacje o plikach cookies i ich wykorzystaniu.",
  robots: { index: false, follow: false },
};

export default function PolitykaCookiesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 lg:pt-40">
        <article className="container-editorial py-12 lg:py-16">
          <div className="max-w-3xl mx-auto prose-sm font-sans text-text-muted">
            <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-8">
              Polityka Cookies
            </h1>
            <p className="text-xs text-text-light mb-8">Ostatnia aktualizacja: 5 czerwca 2025</p>

            <p className="leading-relaxed mb-6">
              Niniejsza Polityka Cookies wyjaśnia, w jaki sposób serwis{" "}
              <strong>db-pracownia-stolarska.pl</strong> wykorzystuje pliki cookies.
              Administratorem danych jest:
            </p>
            <p className="leading-relaxed mb-6">
              <strong>D&B PRACOWNIA STOLARSKA Dmytro Ivanets</strong><br />
              ul. Klonowa 2, 83-031 Cieplewo<br />
              NIP: 5842754587
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">1. Czym są pliki cookies</h2>
            <p className="leading-relaxed mb-6">
              Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu Użytkownika
              podczas korzystania z serwisu. Umożliwiają rozpoznanie urządzenia i zapamiętanie
              preferencji bez ingerencji w konfigurację urządzenia.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">2. Rodzaje cookies i ich zastosowanie</h2>

            <h3 className="font-serif text-lg font-semibold text-primary mt-6 mb-3">Cookies techniczne (niezbędne)</h3>
            <p className="leading-relaxed mb-4">
              Wymagane do prawidłowego działania serwisu: utrzymanie sesji, bezpieczeństwo,
              zapamiętanie preferencji Użytkownika (np. zgoda na cookies). Nie wymagają zgody.
            </p>

            <h3 className="font-serif text-lg font-semibold text-primary mt-6 mb-3">Cookies analityczne</h3>
            <p className="leading-relaxed mb-4">
              Zbierają anonimowe informacje o sposobie korzystania z serwisu: odwiedzane strony,
              czas wizyty, skuteczność kampanii. Pomagają ulepszać serwis. Wymagają zgody Użytkownika.
            </p>

            <h3 className="font-serif text-lg font-semibold text-primary mt-6 mb-3">Cookies marketingowe</h3>
            <p className="leading-relaxed mb-6">
              Umożliwiają wyświetlanie spersonalizowanych reklam. Serwis może korzystać
              z technologii Google i Meta w celach reklamowych oraz reCAPTCHA w celach
              bezpieczeństwa. Wymagają zgody Użytkownika.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">3. Zarządzanie cookies</h2>
            <p className="leading-relaxed mb-4">
              Użytkownik może w dowolnym momencie zmienić ustawienia cookies w przeglądarce:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Google Chrome: Ustawienia &gt; Prywatność i bezpieczeństwo &gt; Pliki cookie</li>
              <li>Mozilla Firefox: Ustawienia &gt; Prywatność i bezpieczeństwo</li>
              <li>Safari: Preferencje &gt; Prywatność</li>
              <li>Microsoft Edge: Ustawienia &gt; Pliki cookie i uprawnienia witryn</li>
            </ul>
            <p className="leading-relaxed mb-6">
              Wyłączenie cookies może ograniczyć funkcjonalność serwisu.
              Zgody na cookies analityczne i marketingowe można cofnąć w dowolnym momencie
              za pomocą paska cookies na dole strony.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">4. Kontakt</h2>
            <p className="leading-relaxed mb-6">
              W sprawie plików cookies prosimy o kontakt:<br />
              E-mail: <a href="mailto:biuro@db-pracowniastolarka.pl" className="text-secondary hover:text-secondary/80 transition-colors">biuro@db-pracowniastolarka.pl</a><br />
              Adres: ul. Klonowa 2, 83-031 Cieplewo
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
