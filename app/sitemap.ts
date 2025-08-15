import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pumpjacked.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/free-card-check`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }
  ];
}
