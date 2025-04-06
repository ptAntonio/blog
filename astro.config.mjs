// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://ptantonio.github.io',
  base: 'blog',

  adapter: netlify(),
});