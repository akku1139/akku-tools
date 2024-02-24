import { Hono } from 'hono';
import { renderer } from "./renderer.tsx";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <p>JavaScript不要のJSON整形ツール</p>
    <form action="/json/format" method="post">
      <div>
        <textarea name="json" placeholder
="ここにJSONを入力"></textarea>
      </div>
      <div>
        <label for="indentSize">インデントの大きさ</label>
        <input type="number" name="indentSize" value="2" />
      </div>
      <button type="submit">整形</button>
    </form>
  </>, {
    title: "JSON整形",
  });
});

app.post('/format', async (c) => {
  const body = await c.req.parseBody();
  return c.render(<>
    <div>{(() => {
      try {
        return <pre><code>{
          JSON.stringify(JSON.parse(body.json), null, Number(body.indentSize))
        }</code></pre>;
      } catch(e: SyntaxError | TypeError) {
        return <>
          <p>エラーがー発生されました</p>
          <pre><code>
            {e.name}: {e.message}
          </code></pre>
        </>;
      }
    })()}</div>
    <a href="/json">別の</a>
  </>, {
    title: "整形結果",
  });
});

export default app;
