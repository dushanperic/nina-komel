// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';

const { REPO_NAME, LIVE_URL, LOCALHOST_URL } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ''
);

const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dushanperic.github.io',
  base: 'nina-komel',
});
