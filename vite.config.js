import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-emotion-diary/', 
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
