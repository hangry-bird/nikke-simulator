import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@images', replacement: resolve(__dirname, 'src/assets/images') },
      { find: '@stores', replacement: resolve(__dirname, 'src/stores') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
    ]
  }
})
