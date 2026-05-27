import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności D&B Pracownia Stolarska. Informacje o przetwarzaniu danych osobowych.",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 lg:pt-40">
        <article className="container-editorial py-12 lg:py-16">
          <div className="max-w-3xl mx-auto prose-sm font-sans text-text-muted">
            <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-8">
              Polityka Prywatności
            </h1>
            <p className="text-xs text-text-light mb-8">Ostatnia aktualizacja: 5 czerwca 2025</p>

            <p className="leading-relaxed mb-6">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
              Użytkowników serwisu <strong>db-pracownia-stolarska.pl</strong>, prowadzonego przez:
            </p>
            <p className="leading-relaxed mb-6">
              <strong>D&B PRACOWNIA STOLARSKA Dmytro Ivanets</strong><br />
              ul. Klonowa 2, 83-031 Cieplewo<br />
              NIP: 5842754587
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">1. Zgoda Użytkownika</h2>
            <p className="leading-relaxed mb-6">
              Korzystanie z serwisu oznacza akceptację zasad gromadzenia danych opisanych w niniejszej Polityce.
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do realizacji usług (kontakt, wycena, realizacja zamówienia).
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">2. Jakie dane zbieramy</h2>
            <p className="leading-relaxed mb-4">Zbieramy wyłącznie dane podane dobrowolnie przez Użytkownika:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Treść wiadomości</li>
              <li>Temat wiadomości</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">3. Cel przetwarzania danych</h2>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Komunikacja z Użytkownikiem (odpowiedź na zapytanie, wycena)</li>
              <li>Przesyłanie ofert handlowych drogą elektroniczną (za zgodą)</li>
              <li>Kontakt telefoniczny w celach marketingowych (za zgodą)</li>
              <li>Umożliwienie dodawania komentarzy i opinii</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">4. Udostępnianie danych</h2>
            <p className="leading-relaxed mb-6">
              Dane osobowe Użytkownika nie są przekazywane podmiotom trzecim bez wyraźnej zgody,
              z wyjątkiem sytuacji wymaganych przepisami prawa.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">5. Prawa Użytkownika</h2>
            <p className="leading-relaxed mb-4">Każdy Użytkownik ma prawo do:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Weryfikacji i sprostowania danych</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">6. Pliki cookies</h2>
            <p className="leading-relaxed mb-6">
              Serwis wykorzystuje pliki cookies do utrzymania sesji, optymalizacji działania,
              bezpieczeństwa, analityki i dostosowania treści do preferencji Użytkownika.
              Szczegóły opisuje <a href="/polityka-cookies" className="text-secondary hover:text-secondary/80 transition-colors">Polityka Cookies</a>.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">7. Bezpieczeństwo danych</h2>
            <p className="leading-relaxed mb-6">
              Stosujemy systemy i procedury chroniące dane osobowe przed nieuprawnionym dostępem.
              Dane przechowywane są przez okres niezbędny do realizacji celów przetwarzania.
            </p>

            <h2 className="font-serif text-xl font-semibold text-primary mt-10 mb-4">8. Kontakt</h2>
            <p className="leading-relaxed mb-6">
              W sprawie danych osobowych prosimy o kontakt:<br />
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
