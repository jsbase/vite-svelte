import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {reactivePreprocess} from 'svelte-reactive-preprocessor';
import json from '@rollup/plugin-json';
import prettierTailwindPlugin from 'prettier-plugin-tailwindcss';

export default defineConfig({
  plugins: [
    prettierTailwindPlugin,
    json({compact: true}),
    svelte({
      preprocess: reactivePreprocess({
        postcss: true,
        enabled: true,
        state: true,
      }),
    }),
  ],
  rollupDedupe: ['svelte'],
});
