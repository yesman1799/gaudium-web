import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Allows @ to refer to src/
    }
  },
  build: {
    target: 'esnext' // This enables top-level await support
  }
});