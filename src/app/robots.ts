import type { MetadataRoute } from "next";
import { career } from "@/data/career";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${career.siteUrl}/sitemap.xml`,
  };
}
