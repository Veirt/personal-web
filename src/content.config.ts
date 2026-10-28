import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({
		base: "./projects",
		pattern: "*/index.md",
		generateId: ({ entry }) =>
			entry.split("/")[0].toLowerCase().replaceAll(".", "-"),
	}),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		github_url: z.string().url().optional(),
		technologies: z.array(z.string()).default([]),
		screenshot: z.string().optional(),
		screenshot_image: image().optional(),
		screenshot_width: z.number().int().positive().optional(),
		screenshot_quality: z.number().int().min(1).max(100).optional(),
		icon: z.string().optional(),
	}),
});

const blog = defineCollection({
	loader: glob({
		base: "./blog",
		pattern: "*/index.md",
		generateId: ({ entry }) => entry.split("/")[0].toLowerCase(),
	}),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		og_image: z.string().optional(),
		cover_image: image().optional(),
	}),
});

export const collections = { projects, blog };
