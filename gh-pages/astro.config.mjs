// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://hellosantosh.github.io',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
	// Keep links from the old Starlight site working.
	redirects: {
		'/areas-of-interest': '/topics',
		'/areas-of-interest/architecture': '/topics/architecture',
		'/areas-of-interest/architecture/blog': '/topics/architecture',
		'/areas-of-interest/engineering': '/topics/engineering',
		'/areas-of-interest/product': '/topics/product',
		'/areas-of-interest/ai': '/topics/ai',
		'/areas-of-interest/everything-else': '/topics/everything-else',
		'/about-me/resume': '/about',
		'/about-me/contact-me': '/about',
		'/about-me/my-projects': '/projects',
		'/about-me/my-learning-journey': '/learning',
	},
});
