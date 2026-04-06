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
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['react-tilt', 'react-vertical-timeline-component', 'react-simple-typewriter'],
          'mail-vendor': ['@emailjs/browser'],
        },
      },
    },
  },
  server: { port: 3000, host: true },
})
