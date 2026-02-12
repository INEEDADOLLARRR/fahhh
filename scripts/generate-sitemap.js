import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://roofprosites.com';
const ARTICLES_DIR = path.join(__dirname, '../src/content/articles');
const PUBLIC_DIR = path.join(__dirname, '../public');

const staticPages = [
    '',
    '/blog',
    '/contact'
];

async function generateSitemap() {
    console.log('Generating sitemap...');

    // Get all articles
    const files = fs.readdirSync(ARTICLES_DIR).filter(file => file.endsWith('.md'));

    // Build URL List
    const urls = [
        ...staticPages.map(page => ({
            loc: `${BASE_URL}${page}`,
            lastmod: new Date().toISOString(),
            priority: page === '' ? '1.0' : '0.8'
        })),
        ...files.map(file => {
            const slug = file.replace('.md', '');
            return {
                loc: `${BASE_URL}/blog/${slug}`,
                lastmod: new Date().toISOString(), // In a real app we'd read file stats
                priority: '0.7'
            };
        })
    ];

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write to public folder
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log(`Sitemap generated with ${urls.length} URLs at public/sitemap.xml`);
}

generateSitemap();
