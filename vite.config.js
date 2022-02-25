import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
// import json from '@rollup/plugin-json';
// import { reactivePreprocess } from 'svelte-reactive-preprocessor';

export default defineConfig({
  plugins: [
    svelte({preprocess: preprocess()}) /*
    reactivePreprocess({
      enabled: true,
      state: true
    }),
    json({compact: true}) */
  ],
  rollupDedupe: ['svelte']
});
