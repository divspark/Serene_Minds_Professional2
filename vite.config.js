import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set the base path for all assets
  base: '/',
  
  build: {
    outDir: 'dist', // The output directory for the build
    rollupOptions: {
      input: 'index.html', // Ensures index.html is the entry point
    }
  }
})
