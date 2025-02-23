import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000kB (1MB)
  },
  server:{
    proxy:{
      "/api":'http://localhost:2000'
    }
  }
})