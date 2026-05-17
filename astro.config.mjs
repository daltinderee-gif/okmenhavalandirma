import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://okmenhavalandirma.com',
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Admin sayfası sadece geliştirici/müşteri içindir, Google indekslemesin
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  image: {
    domains: ['images.pexels.com'],
  },
});
