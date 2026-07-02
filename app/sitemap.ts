import type { MetadataRoute } from "next";

const siteUrl = "https://www.brightlinedental.com";

const routes = [
  "",
  "/about",
  "/services",
  "/doctors",
  "/appointment",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
