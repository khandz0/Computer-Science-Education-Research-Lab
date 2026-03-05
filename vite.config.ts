import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.JPG'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('pdfjs-dist')) return 'pdfjs';
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'vendor';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
