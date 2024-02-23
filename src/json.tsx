import { Hono } from 'hono';
import { renderer } from "./renderer.tsx";

const app = new Hono();

app.get('*', renderer);

app.get('/format', async (c) => {
  const body = await c.req.parseBody();
  return c.render(<>
    <code>{JSON.parse(body.json)}</code>
    <a href="/json">別の</a>
  </>);
});

export default app;
