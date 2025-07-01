
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // Important: ensures paths are root-relative
  build: {
    outDir: 'dist', // Explicitly define output folder
    emptyOutDir: true, // Clears dist before building
  },
  plugins: [react(), jsconfigPaths(), tailwindcss()],
});
