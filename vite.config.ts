import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  // or can also use the following
  // resolve: {
  //     alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
    exclude: [
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/playwright/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
  },
});
