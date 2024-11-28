import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Output directory
    lib: {
      entry: './src/index.js', // Entry file for the library
      name: 'DynamicBreadcrumb',
      formats: ['es', 'cjs', 'umd'], // Supported formats
      fileName: (format) => `dynamic-breadcrumb.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Externalize Vue dependency
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
