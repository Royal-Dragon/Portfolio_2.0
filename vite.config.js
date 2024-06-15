import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Portfolio_2.0/",
  optimizeDeps: {
    include: ['three'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server:{port: 3000},
})
