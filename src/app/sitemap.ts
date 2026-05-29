import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { blogs } from "@/lib/blogs";

const BASE = "https://sathwikanumandla.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1 },
    { url: `${BASE}/projects`, priority: 0.8 },
    { url: `${BASE}/blogs`, priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE}/blogs/${b.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
