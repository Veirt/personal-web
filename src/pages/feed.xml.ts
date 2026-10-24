import { getCollection } from "astro:content";
import { escapeXml } from "../lib/content";

export async function GET() {
	const posts = (await getCollection("blog"))
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
	const items = posts.map((post) => `
		<item>
			<title>${escapeXml(post.data.title)}</title>
			<link>https://veirt.is-a.dev/blog/${post.id}/</link>
			<guid>https://veirt.is-a.dev/blog/${post.id}/</guid>
			<description>${escapeXml(post.data.description)}</description>
			<pubDate>${post.data.date.toUTCString()}</pubDate>
		</item>`).join("");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<rss version="2.0"><channel>
		<title>veirt's blog</title>
		<link>https://veirt.is-a.dev/blog/</link>
		<description>Notes from building things, learning new tools, and maintaining a tiny homelab.</description>
		<language>en</language>${items}
	</channel></rss>`;
	return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
