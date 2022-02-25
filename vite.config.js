import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {reactivePreprocess} from 'svelte-reactive-preprocessor';
import json from '@rollup/plugin-json';

export default defineConfig({
  plugins: [
    json({compact: true}),
    svelte({
      preprocess: reactivePreprocess({
        enabled: true,
        state: true,
      }),
    }),
  ],
  rollupDedupe: ['svelte'],
});
