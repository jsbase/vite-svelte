import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json';

export default defineConfig({
  plugins: [svelte({preprocess: preprocess()}), json({compact: true})],
  rollupDedupe: ['svelte']
});
