import type { APIRoute } from 'astro';

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/platform/', priority: '0.9' },
  { path: '/services/', priority: '0.9' },
  { path: '/about/', priority: '0.7' },
  { path: '/careers/', priority: '0.6' },
  { path: '/contact/', priority: '0.7' },
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://shcdata.ca');
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${new URL(page.path, base).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
