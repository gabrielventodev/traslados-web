// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_ORIGIN, BASE } from './src/data/site.js';

export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
