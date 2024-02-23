import build from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    }),
    tsconfigPaths(), // 効いてない
  ],
});
