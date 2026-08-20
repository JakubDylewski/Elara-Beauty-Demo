import type { APIRoute } from "astro";
import { categories } from "../data/categories";
import { cities } from "../data/cities";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://elara-beauty-demo.pages.dev";

  const staticPaths = [
    "/",
    "/uslugi",
    "/vouchery",
    "/promocje",
    "/zespol",
    "/o-nas",
    "/pierwsza-wizyta",
    "/kontakt",
    "/jak-pozyskujemy-klientki",
  ];

  const categoryPaths = categories.map((category) => `/uslugi/${category.slug}`);
  const cityPaths = cities.map((city) => `/beauty-${city.slug}`);

  const allPaths = [...staticPaths, ...categoryPaths, ...cityPaths];

  const urlEntries = allPaths
    .map((path) => `  <url>\n    <loc>${base}${path}</loc>\n  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
