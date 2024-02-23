import build from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    }),
  ],
  resolve: {
    alias: {
      '/': path.resolve(__dirname, './src')
    },
  },
});
