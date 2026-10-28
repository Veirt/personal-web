import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
	const posts = (await getCollection("blog")).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);
	return rss({
		site,
		title: "veirt notes",
		description: "Notes from building things, learning new tools, and maintaining a tiny homelab.",
		customData: "<language>en</language>",
		items: posts.map((post) => ({
			title: post.data.title,
			link: `/blog/${post.id}/`,
			pubDate: post.data.date,
			description: post.data.description,
			categories: post.data.tags,
		})),
	});
};
