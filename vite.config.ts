import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/eshop/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 500000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Combine React and React DOM into vendor chunk
        },
      },
    },
  },
});
