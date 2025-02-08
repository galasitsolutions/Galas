// filepath: /d:/client/gal/Galas/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { SitemapPlugin } from "vite-plugin-sitemap";
import fs from "fs";

const getRoutes = () => {
  const routes = [];
  const files = fs.readdirSync(path.resolve(__dirname, "src/pages"));
  files.forEach((file) => {
    const route = file.replace(".jsx", "");
    routes.push(`/${route}`);
  });
  return routes;
};

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: "https://www.galasitsolutions.com/",
      routes: getRoutes(),
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
