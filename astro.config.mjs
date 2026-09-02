import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  // Aktifkan adapter Netlify HANYA saat build/production
  adapter: import.meta.env.PROD ? netlify() : undefined,
  integrations: [react()],
});