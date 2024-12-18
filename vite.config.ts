import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import legacy from '@vitejs/plugin-legacy';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['styled-components'], // Ensure styled-components is included
  },
  build: {
    minify: 'terser', // Ensure terser is specified explicitly
    rollupOptions: {
      external: [], // Make sure no unnecessary externalizations exist
    },
  },
}));
