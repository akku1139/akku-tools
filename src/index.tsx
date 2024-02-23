import { Hono } from 'hono';
import { renderer } from './renderer.tsx';

import jsonFormatter from './json.tsx';

const app = new Hono();

app.get('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <h1>あっくさんのツール類</h1>
    <ul>
      <li><a href="/json">JSON整形</a></li>
    </ul>
  </>);
})

app.mount("/json", jsonFormatter);

export default app;
