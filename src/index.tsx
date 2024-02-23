import { Hono } from 'hono';
import { renderer } from './renderer';

import jsonFormatter from './json.tsx';

const app = new Hono();

app.get('*', renderer);

app.get("/", (c) => {
  return c.html(<>
    <a href="/json">JSON整形</a>
  </>);
})

app.mount("/json", jsonFormatter);

export default app;
