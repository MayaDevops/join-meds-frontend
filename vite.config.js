
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import tailwindcss from '@tailwindcss/vite'
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    // base: env.VITE_BASE_URL,
    base: '/',
    experimental: {
      // renderBuiltUrl: (filename) => `${env.VITE_BASE_URL}/${filename}`
      renderBuiltUrl: (filename) => `/${filename}`
    },
    plugins: [react(), jsconfigPaths(), tailwindcss()]

  };
});
