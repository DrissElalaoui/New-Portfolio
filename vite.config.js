import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/New-Portfolio/', // CRITIQUE pour GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})