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
        'index': resolve(__dirname, 'index.html'),
        'Đoàn Thể': resolve(__dirname, 'Đoàn Thể.html'),
        //'Giáo Xứ': resolve(__dirname, 'Giáo Xứ.html'),
        //'Mục Vụ': resolve(__dirname, 'Mục Vụ.html'),
        'Phụng Vụ': resolve(__dirname, 'Phụng Vụ.html'),
        //'Sinh Hoạt': resolve(__dirname, 'Sinh Hoạt.html'),
        //'Thông Tin': resolve(__dirname, 'Thông Tin.html'),
      },
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
