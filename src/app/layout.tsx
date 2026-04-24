import type { Metadata, Viewport } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#002200",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://db-pracowniastolarska.pl"),
  title: {
    default: "D&B Pracownia Stolarska — Meble na Wymiar Gdańsk | Kuchnie, Szafy, Zabudowy",
    template: "%s | D&B Pracownia Stolarska",
  },
  description:
    "Meble na wymiar Gdańsk i Gdynia. Kuchnie, szafy wnękowe, meble łazienkowe i biurowe. D&B Pracownia Stolarska — rzemiosło, precyzja, indywidualny projekt. ☎ 504 688 396",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://db-pracowniastolarska.pl",
    siteName: "D&B Pracownia Stolarska",
    title: "D&B Pracownia Stolarska — Meble na Wymiar Gdańsk",
    description: "Meble na wymiar Gdańsk — kuchnie, szafy, garderoby, meble łazienkowe. Własna stolarnia i lakiernia. Bezpłatny pomiar w Trójmieście.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D&B Pracownia Stolarska — Meble na Wymiar Gdańsk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D&B Pracownia Stolarska — Meble na Wymiar Gdańsk",
    description: "Meble na wymiar Gdańsk — kuchnie, szafy, garderoby. Własna stolarnia i lakiernia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${notoSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
