import { Hono } from 'hono';
import { renderer } from "./renderer.tsx";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <form action="/goto/move" method="post">
      <label for="url">URL か 検索</label>
      <input autofocus autocomplete="url" name="url" />
      <button type="submit">GOTO</button>
    </form>
  </>, {
    title: "URL goto",
  });
});

app.post('/move', async (c) => {
  const body = await c.req.parseBody();

  const isURL = URL.canParse(body.url);

  if(isURL) {
    return c.redirect(body.url);
  } else {
    return c.redirect("https://google.com/search?q="+encodeURIComponent(body.url));
  }
});

export default app;
