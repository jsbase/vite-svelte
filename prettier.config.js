import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { prettierTailwindPlugin } from 'prettier-plugin-tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [prettierTailwindPlugin(), svelte()],
  tailwindConfig: './tailwind.config.js',
});
