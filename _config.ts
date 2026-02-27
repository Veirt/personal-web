import toc, {
	linkInsideHeader,
} from "https://cdn.jsdelivr.net/gh/lumeland/markdown-plugins@0.11.1/toc.ts";
import presetIcons from "@unocss/preset-icons";
import { presetWind4 } from "@unocss/preset-wind4";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import lume from "lume/mod.ts";
import brotli from "lume/plugins/brotli.ts";
import check_urls from "lume/plugins/check_urls.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import extract_date from "lume/plugins/extract_date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import gzip from "lume/plugins/gzip.ts";
import icons from "lume/plugins/icons.ts";
import image_size from "lume/plugins/image_size.ts";
import json_ld from "lume/plugins/json_ld.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import og_images from "lume/plugins/og_images.ts";
import picture from "lume/plugins/picture.ts";
import purgecss from "lume/plugins/purgecss.ts";
import reading_info from "lume/plugins/reading_info.ts";
import robots from "lume/plugins/robots.ts";
import seo from "lume/plugins/seo.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import transformImages from "lume/plugins/transform_images.ts";
import unocss from "lume/plugins/unocss.ts";
import validate_html from "lume/plugins/validate_html.ts";

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
site.use(extract_date());
site.use(reading_info());
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
			presets: [presetWind4(), presetIcons()],
			shortcuts: {
				"sidebar-nav-item":
					"block py-1.5 text-base font-medium tracking-wide text-text/65 hover:text-text transition-colors duration-150 cursor-pointer",
				"sidebar-nav-item-active": "text-primary! opacity-100",
				"theme-toggle-btn":
					"bg-transparent border border-solid border-border p-2 cursor-pointer text-text/60 transition-all duration-200 flex items-center justify-center hover:border-primary hover:text-primary",
			},
		},
	}),
);

// Optimizers
site.use(lightningcss());
site.use(svgo());
site.use(purgecss());
site.use(minify_html());
site.use(brotli());
site.use(gzip());
site.use(slugifyUrls());
site.use(og_images());
site.use(picture());
site.use(transformImages());

// SEO
site.use(json_ld());
site.use(metas());
site.use(sitemap());
site.use(robots());
site.use(seo());
site.use(validate_html());

// Other
site.use(check_urls());
site.use(favicon({ input: "static/favicon.png" }));
site.use(image_size());
site.use(icons());

site.use(
	feed({
		output: "/feed.xml",
		query: "type=blog",
		info: {
			title: "veirt's blog",
			description:
				"wandering the web, building and breaking things, sometimes to solve a problem, sometimes to try an interesting idea.",
		},
	}),
);

// Set up site data
site.data("site", {
	title: "veirt's website",
	description:
		"wandering the web, building and breaking things, sometimes to solve a problem, sometimes to try an interesting idea.",
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
