import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@components': path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        './src/components',
      ),
    },
  },
})
