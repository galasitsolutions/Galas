import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { ViteBundlerAnalyzer } from "vite-plugin-bundle-analyzer";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotliCompress",
      threshold: 10240,
    }),
    ViteBundlerAnalyzer(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir: "dist",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
    css: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
