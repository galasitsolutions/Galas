import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      threshold: 10240,
    }),
  ],
  /*   server: {
    proxy: {
      "/send-email": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  }, */
  build: {
    outDir: "dist",
  },
});
