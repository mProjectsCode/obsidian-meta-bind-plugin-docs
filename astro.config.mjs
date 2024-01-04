import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import MetaBind from './metaBindLanguage.js';
import CustomMarkdown from './customMarkdownLanguage.js';
import { bundledLanguages } from 'shikiji';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.moritzjung.dev',
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
						{ label: 'Input Field Templates', link: '/guides/templates/' },
						{ label: 'View Fields', link: '/guides/viewfields/' },
						{ label: 'Buttons', link: '/guides/buttons/', badge: 'New' },
						{ label: 'Meta Bind Embeds', link: '/guides/metabindembed/', badge: 'New' },
						{ label: 'Bind Targets', link: '/guides/bindtargets/' },
						{ label: 'Syntax Highlighting', link: '/guides/syntaxhighlighting/' },
						{ label: 'Obsidian Publish', link: '/guides/obsidianpublish/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Input Fields', autogenerate: { directory: 'reference/inputFields' } },
						{ label: 'Input Field Arguments', autogenerate: { directory: 'reference/inputFieldArguments' } },
						{ label: 'View Fields', autogenerate: { directory: 'reference/viewFields' } },
						{ label: 'View Field Arguments', autogenerate: { directory: 'reference/viewFieldArguments' } },
					],
				},
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			expressiveCode: {
				themes: ['dracula', 'github-light'],
				useStarlightUiThemeColors: true,
			},
			plugins: [starlightLinksValidator()],
		}),
	],
	markdown: {
		shikiConfig: {
			langs: [
				...Object.keys(bundledLanguages),
				// {
				// 	id: 'meta-bind',
				// 	scopeName: 'source.meta-bind',
				// 	grammar: MetaBind,
				// 	aliases: [],
				// },
				MetaBind,
				CustomMarkdown,
			],
		},
	},
});
