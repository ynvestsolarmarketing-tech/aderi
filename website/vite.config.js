import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      png: {
        quality: 85,
      },
      webp: {
        lossless: true,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
  base: './',
})
