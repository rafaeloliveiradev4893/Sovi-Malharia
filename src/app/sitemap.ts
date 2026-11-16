import type { MetadataRoute } from "next";
import { publicSiteUrl } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = publicSiteUrl();
  if (!url) return [];

  return [
    {
      url,
      lastModified: "2026-11-15",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
