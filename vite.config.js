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

    // for production
    // proxy: {
    //   '/api': {
    //     target: 'https://backend.bucketbuy.store', // Change this to your production API endpoint
    //     changeOrigin: true,
    //     secure:false,
    //     rewrite: (path) => path.replace(/^\/api/, '/api'),
    //   },
    // },

  }
})
