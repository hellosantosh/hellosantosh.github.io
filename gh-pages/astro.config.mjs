// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hellosantosh.github.io',
	integrations: [
		starlight({
			title: 'Santosh Shanbhag',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Areas of Interest',

					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Architecture', slug: 'areas-of-interest/architecture' },
						{ label: 'Engineering', slug: 'areas-of-interest/engineering'},
						{ label: 'Product', slug: 'areas-of-interest/product' },
						{ label: 'AI', slug: 'areas-of-interest/ai' },
						{ label: 'Everything Else', slug: 'areas-of-interest/everything-else' },
					],
				},
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
				// {
				// 	label: 'Areas Of Interest',
				// 	autogenerate: { directory: 'areas-of-interest' },
				// },
			],
		}),
	],
});
