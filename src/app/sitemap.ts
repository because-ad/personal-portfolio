import type { MetadataRoute } from "next";
import { career, caseStudies } from "@/data/career";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
    "/demo/sales-pipeline",
    "/resume",
    "/resume-print",
  ].map((path) => ({
    url: `${career.siteUrl}${path}`,
    priority: path === "/" ? 1 : 0.7,
  }));
}
