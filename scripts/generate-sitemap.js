import { createClient } from "@sanity/client";
import { mkdir, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const SITE_URL = process.env.SITE_URL ?? "https://wuraola-portfolio.vercel.app";
const OUTPUT_PATH = "dist/sitemap.xml";

const STATIC_PATHS = ["/", "/resume"];

const PROJECT_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)] | order(order asc) {
  "slug": slug.current,
  _updatedAt
}`;

function entry(path, lastmod) {
  const lastmodTag = lastmod
    ? `\n    <lastmod>${lastmod.slice(0, 10)}</lastmod>`
    : "";

  return `  <url>\n    <loc>${SITE_URL}${path}</loc>${lastmodTag}\n  </url>`;
}

export function buildSitemapXml(projects) {
  const entries = [
    ...STATIC_PATHS.map((path) => entry(path)),
    ...projects.map((project) =>
      entry(`/projects/${project.slug}`, project._updatedAt)
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join(
    "\n"
  )}\n</urlset>\n`;
}

async function main() {
  const client = createClient({
    projectId: "dce45g85",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
  });

  try {
    const projects = await client.fetch(PROJECT_SLUGS_QUERY);
    await mkdir("dist", { recursive: true });
    await writeFile(OUTPUT_PATH, buildSitemapXml(projects));
    console.log(
      `Sitemap written to ${OUTPUT_PATH} (${projects.length} case studies)`
    );
  } catch (error) {
    console.warn(
      `Sitemap not generated, keeping public/sitemap.xml. Reason: ${error.message}`
    );
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
