import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // for testing
    proxy:{
      '/api':'http://localhost:3000'
    },

  }
})
