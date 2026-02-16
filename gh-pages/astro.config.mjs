// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://hellosantosh.github.io',
	// base: '/gh-pages',
	integrations: [
		starlight({
			title: 'Santosh Shanbhag',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'About Me',
					// autogenerate: { directory: 'about-me' },

					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Resume', slug: 'about-me/resume' },
						{ label: 'Learning Journey', slug: 'about-me/my-learning-journey' },
						{ label: 'Projects', slug: 'about-me/my-projects' },
						{ label: 'Contact Me', slug: 'about-me/contact-me' },
						{ label: 'Example', slug: 'about-me/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
