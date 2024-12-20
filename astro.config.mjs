import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

dotenv.config();

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});