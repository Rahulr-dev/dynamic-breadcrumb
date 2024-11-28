import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'DynamicBreadcrumb',
      fileName: (format) => `dynamic-breadcrumb.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'react'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
        },
      },
    },
  },
  plugins: [vue()],
});
