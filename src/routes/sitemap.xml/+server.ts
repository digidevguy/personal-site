export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<url>
                <loc>https://www.mattlittrell.dev/</loc>
                <lastmod>2025-01-04T04:37:45+00:00</lastmod>
                <priority>1.00</priority>
            </url>
            <url>
                <loc>https://www.mattlittrell.dev/guestbook</loc>
                <lastmod>2025-01-04T04:37:49+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.mattlittrell.dev/svelte-runes</loc>
                <lastmod>2025-01-04T04:37:49+00:00</lastmod>
                <priority>0.80</priority>
            </url>
            <url>
                <loc>https://www.mattlittrell.dev/hello-world</loc>
                <lastmod>2025-01-04T04:37:49+00:00</lastmod>
                <priority>0.80</priority>
            </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
