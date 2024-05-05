import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import million from 'million/compiler';
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from './src/constants';
import { remarkReadingTime } from './src/utils/readTime.mjs';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "ru", "es", "nl", "uk"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  markdown: {
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    gfm: true
  },
  prefetch: {
    prefetchAll: true
  },
  vite: {
    plugins: [million.vite({
      mode: 'react',
      server: true,
      auto: {
        threshold: 0.05,
        skip: ['useBadHook', /badVariable/g]
      }
    }), tailwindcss()]
  },
  integrations: [react(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  }), sitemap()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});