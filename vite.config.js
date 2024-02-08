import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // for production
    proxy: {
      '/api': {
        target: 'https://bucketbuybackend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },

    // for testing
    // proxy:{
    //   '/api':'http://localhost:3000'
    // }
  }
})
