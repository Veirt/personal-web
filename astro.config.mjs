import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://veirt.is-a.dev",
	output: "static",
	trailingSlash: "always",
	build: {
		assets: "assets",
		inlineStylesheets: "auto",
	},
});
