import toc, {
	linkInsideHeader,
} from "https://deno.land/x/lume_markdown_plugins@v0.9.0/toc.ts";
import { presetTypography } from "@unocss/preset-typography";
import { presetWind4 } from "@unocss/preset-wind4";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import lume from "lume/mod.ts";
import brotli from "lume/plugins/brotli.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import icons from "lume/plugins/icons.ts";
import json_ld from "lume/plugins/json_ld.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import picture from "lume/plugins/picture.ts";
import purgecss from "lume/plugins/purgecss.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import transformImages from "lume/plugins/transform_images.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume(
	{
		src: "./",
		location: new URL("https://veirt.is-a.dev"),
		dest: "./_site",
		server: {
			middlewares: [cacheBusting()],
		},
	},
	{
		markdown: {
			options: {
				breaks: false,
				linkify: true,
			},
		},
	},
);

// Plugins
site.use(date());
site.use(
	code_highlight({
		theme: {
			name: "nord",
			cssFile: "highlight-nord.css",
		},
	}),
);
site.use(
	toc({
		anchor: linkInsideHeader(),
	}),
);
site.use(
	feed({
		output: "/feed.xml",
		query: "type=blog",
		info: {
			title: "veirt's blog",
			description:
				"wandering the web, building and taking things apart — mostly to learn, sometimes to solve.",
		},
	}),
);

site.use(esbuild());
site.use(terser());

// Style
site.use(
	unocss({
		options: {
			theme: {
				colors: {
					primary: "var(--primary)",
					secondary: "var(--secondary)",
					accent: "var(--accent)",
					text: "var(--text)",
					background: "var(--background)",	
					surface: "var(--surface)",
					border: "var(--border)",
				},
			},
			presets: [presetWind4() as any],
		},
	}),
);

// Optimizers
site.use(lightningcss());
site.use(svgo());
site.use(purgecss());
site.use(minify_html());
site.use(brotli());

// SEO
site.use(json_ld());
site.use(metas());
site.use(sitemap());
site.use(robots());

// Other
site.use(check_urls());
site.use(favicon({ input: "static/favicon.png" }));
site.use(slugifyUrls());
site.use(picture());
site.use(transformImages());
site.use(icons());

site.filter("readingTime", (content: string) => {
	const wordsPerMinute = 275;
	const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return minutes;
});

// Set up site data
site.data("site", {
	title: "veirt's website",
	description:
		"wandering the web, building and taking things apart — mostly to learn, sometimes to solve.",
	url: "https://veirt.is-a.dev",
	author: {
		name: "veirt",
		url: "https://github.com/Veirt",
	},
	keywords: [
		"veirt",
		"software engineer",
		"full-stack developer",
		"devops",
		"web development",
		"programming",
		"javascript",
		"typescript",
		"python",
		"rust",
	],
	lang: "en",
});

site.add("static", ".");
site.add([".jpg", ".gif", ".png"], (file) => file);

export default site;
