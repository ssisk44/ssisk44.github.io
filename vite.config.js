import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'ssisk44.github.io',
  plugins: [react()],
  build: {
    outDir: './dist'
  }

})
