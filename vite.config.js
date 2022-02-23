import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import json from '@rollup/plugin-json'

export default defineConfig({
  plugins: [
  	json({
  		compact: true,
  	}),
  	svelte({}),
  ],
});
