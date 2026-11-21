import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shcdata.ca',
  trailingSlash: 'always',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
