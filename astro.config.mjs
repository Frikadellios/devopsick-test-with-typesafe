import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import million from 'million/compiler';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
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
  integrations: [react(), mdx(), sitemap()]
});