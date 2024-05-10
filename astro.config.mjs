import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: 'docs',
	integrations: [
		starlight({
			title: 'Muimi Documentation',
			social: {
				github: 'https://github.com/Muimi-Chat',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Muimi Chat?', link: '/getting-started/context/' },
					],
				},
				{
					label: 'Setting Up',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'User Service', link: '/setup/user-service/' },
					],
				},
			],
		}),
	],
});
