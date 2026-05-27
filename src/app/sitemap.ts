import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://db-pracownia-stolarska.pl";

  return [
    {
      url: baseUrl,
      lastModified: "2026-04-01",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/meble-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kuchnie-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/szafy-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garderoby-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/meble-lazienkowe-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/meble-biurowe-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/panele-scienne-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/panele-sufitowe-na-wymiar-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/realizacje-zabudowy-meblowe-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/realizacje-zabudowy-meblowe-gdansk/tarasy-baltyku-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/stolarz-wspolpraca-z-projektantami-gdansk`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/materialoteka`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
