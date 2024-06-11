import { defineConfig } from 'vite'

export default defineConfig({
  devServer: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  server: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem',
    },
    host: 'localhost',
    port: 3000, // You can change the port if needed
  },
})
