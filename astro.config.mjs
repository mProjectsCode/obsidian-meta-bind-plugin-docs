import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mprojectscode.github.io',
	base: '/obsidian-meta-bind-plugin-docs',
	integrations: [
		starlight({
			title: 'Meta Bind Docs',
			social: {
				github: 'https://github.com/mProjectsCode/obsidian-meta-bind-plugin',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/installation/' },
						{ label: 'Input Fields', link: '/guides/inputfields/' },
						{ label: 'View Fields', link: '/guides/viewfields/' },
						{ label: 'Templates', link: '/guides/templates/' },
						{ label: 'Obsidian Publish', link: '/guides/obsidianpublish/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Input Fields', autogenerate: { directory: 'reference/inputFields' } },
						{ label: 'Input Field Arguments', autogenerate: { directory: 'reference/inputFieldArguments' } },
					],
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
