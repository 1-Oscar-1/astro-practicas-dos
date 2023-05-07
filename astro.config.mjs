import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://1-Oscar-1.github.io',
  base: '/astro-practicas-dos',
  build: {
    assets: 'assets'
  }
});