import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/lib/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/gallery",
    "/blog",
    "/faq",
    "/testimonials",
    "/contact",
    "/consultation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/services" || route === "/projects" ? 0.9 : 0.8,
  }));

  // Dynamic service detail routes
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/service-single/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
