import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://sathwikanumandla.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1 },
    { url: `${BASE}/projects`, priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
