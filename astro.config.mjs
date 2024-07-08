import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import MetaBind from './metaBindLanguage.js';
import CustomMD from './customMD.js';
import starlightLinksValidator from 'starlight-links-validator';
import { bundledLanguages } from 'shiki';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

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
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
				SocialIcons: './src/components/SocialIcons.astro',
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
						{ label: 'Buttons', link: '/guides/buttons/' },
						{ label: 'Meta Bind Embeds', link: '/guides/metabindembed/' },
						{ label: 'Bind Targets', link: '/guides/bindtargets/' },

						{ label: 'Examples', link: '/guides/examples/' },
						{ label: 'Advanced Use-Cases', link: '/guides/advancedusecases/' },

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
						{ label: 'Button Actions', autogenerate: { directory: 'reference/buttonActions' } },
					],
				},
				typeDocSidebarGroup,
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
				shiki: {
					langs: [...Object.entries(bundledLanguages).map(([_, langFn]) => langFn), MetaBind, CustomMD],
				},
			},
			plugins: [
				starlightLinksValidator({
					errorOnRelativeLinks: false,
					exclude: ['/obsidian-meta-bind-plugin-docs/api/**/*'],
				}),
				starlightTypeDoc({
					entryPoints: ['obsidian-meta-bind-plugin/packages/obsidian/src/docsExports.ts'],
					typeDoc: {
						parametersFormat: 'htmlTable',
						propertiesFormat: 'list',
						enumMembersFormat: 'htmlTable',
						typeDeclarationFormat: 'table',
						excludePrivate: true,
						excludeProtected: true,
						excludeInternal: true,

						plugin: ['typedoc-plugin-mdn-links'],
					},
					tsconfig: 'obsidian-meta-bind-plugin/packages/obsidian/tsconfig.json',
					sidebar: {
						label: 'API Reference',
						collapsed: true,
					},
				}),
			],
		}),
	],
});
