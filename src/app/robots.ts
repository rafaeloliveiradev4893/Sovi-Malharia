import type { MetadataRoute } from "next";
import { publicSiteUrl } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  const url = publicSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: url ? `${url}/sitemap.xml` : undefined,
  };
}
