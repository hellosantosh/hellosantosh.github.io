import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: one Markdown file per post in src/content/posts/.
const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			topics: z.array(reference('topics')).default([]),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			draft: z.boolean().default(false),
		}),
});

const resource = z.object({
	title: z.string(),
	url: z.url().optional(),
	by: z.string().optional(),
	note: z.string().optional(),
});

// Areas of interest: an intro plus curated books, courses, videos, and so on.
const topics = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/topics' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number().default(99),
		books: z.array(resource).default([]),
		courses: z.array(resource).default([]),
		videos: z.array(resource).default([]),
		podcasts: z.array(resource).default([]),
		people: z.array(resource).default([]),
		links: z.array(resource).default([]),
	}),
});

// Standalone pages such as About and Projects.
const pages = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const item = z.object({
	by: z.string().optional(),
	title: z.string(),
	url: z.url().optional(),
	date: z.string().optional(),
});

// Courses, certifications, licenses, and conferences, kept in one YAML file.
const learning = defineCollection({
	loader: file('./src/data/learning.yaml'),
	schema: z.object({
		title: z.string(),
		intro: z.string().optional(),
		order: z.number(),
		groups: z.array(z.object({ name: z.string(), items: z.array(item) })),
	}),
});

export const collections = { posts, topics, pages, learning };
