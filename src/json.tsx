import { Hono } from 'hono';
import { renderer } from "./renderer.tsx";

const app = new Hono();

app.get('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <p>JavaScript不要のJSON整形ツール</p>
    <form action="/json/format" method="post">
      <div><textarea name="json"></textarea></div>
      <div><input type="number" name="indentSize" value="2" /></div>
      <button type="submit">整形</button>
    </form>
  </>);
});

app.post('/format', async (c) => {
  const body = await c.req.parseBody();
  return c.render(<>
    <code>{JSON.stringify(JSON.parse(body.json), null, Number(body.indentSize))}</code>
    <a href="/json">別の</a>
  </>);
});

export default app;
