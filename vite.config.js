import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(), // Automatically injects styles into your components
  ],
  build: {
    lib: {
      entry: resolve("./src/index.js"),
      name: "Scheduler", // Global variable name for UMD builds
      fileName: (format) => `scheduler.${format}.js`,
      formats: ["es", "umd"], // Generates both modern ESM and legacy UMD formats
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"], // Do not bundle React
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
