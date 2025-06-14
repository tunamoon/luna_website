import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

const REPO = "luna_website";
export default defineConfig({
  integrations: [tailwind(), react()],
  base: `/${REPO}/`,
  outDir: 'docs',
});