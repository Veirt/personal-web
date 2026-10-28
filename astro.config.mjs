import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://veirt.is-a.dev",
	output: "static",
	trailingSlash: "always",
	integrations: [sitemap()],
	prefetch: {
		defaultStrategy: "hover",
	},
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		assets: "assets",
		inlineStylesheets: "auto",
	},
});
