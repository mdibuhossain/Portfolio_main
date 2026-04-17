import type { APIContext } from "astro";

export async function GET({ site }: APIContext) {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site ?? "https://mdibuhossain.web.app").toString()}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
