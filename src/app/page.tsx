import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyDB from "@/components/WhyDB";
import Testimonials from "@/components/Testimonials";
import PhotoStrip from "@/components/PhotoStrip";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Geographic from "@/components/Geographic";
import FAQ from "@/components/FAQ";
import DesignerTestimonials from "@/components/DesignerTestimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://db-pracowniastolarska.pl/#organization",
      name: "D&B Pracownia Stolarska",
      alternateName: "Best-meble Manufaktura",
      url: "https://db-pracowniastolarska.pl",
      telephone: "+48504688396",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gdańsk",
        addressRegion: "pomorskie",
        addressCountry: "PL",
      },
      areaServed: [
        { "@type": "City", name: "Gdańsk" },
        { "@type": "City", name: "Gdynia" },
        { "@type": "City", name: "Sopot" },
      ],
      description:
        "Meble na wymiar Gdańsk — kuchnie, szafy wnękowe, meble łazienkowe i biurowe. Indywidualny projekt, własna stolarnia, montaż.",
      priceRange: "$$",
    },
    {
      "@type": "Service",
      serviceType: "Meble na wymiar",
      provider: { "@id": "https://db-pracowniastolarska.pl/#organization" },
      areaServed: [
        { "@type": "City", name: "Gdańsk" },
        { "@type": "City", name: "Gdynia" },
        { "@type": "City", name: "Sopot" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Meble na wymiar",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kuchnie na wymiar" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Szafy na wymiar" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meble łazienkowe na wymiar" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meble biurowe na wymiar" } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: "https://db-pracowniastolarska.pl",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <TrustedBy />
        <Services />
        <WhyDB />
        <PhotoStrip />
        <Process />
        <Testimonials />
        <Gallery />
        <Geographic />
        <FAQ />
        <DesignerTestimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
