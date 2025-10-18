import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/New-Portfolio/', // تأكد من اسم المستودع
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})