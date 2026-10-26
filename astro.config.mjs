import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://veirt.is-a.dev",
	output: "static",
	trailingSlash: "always",
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		assets: "assets",
		inlineStylesheets: "auto",
	},
});
