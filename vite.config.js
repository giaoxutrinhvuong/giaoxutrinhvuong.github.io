import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    minify: false,
    copyPublicDir: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
      },
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
