import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {reactivePreprocess} from 'svelte-reactive-preprocessor';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  plugins: [
    svelte({
      preprocess: reactivePreprocess({
        enabled: true,
        state: true,
      }),
    }),
    postcss({
      modules: true,
      plugins: [],
    }),
    json({compact: true}),
  ],
  rollupDedupe: ['svelte'],
});
