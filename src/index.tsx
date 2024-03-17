import { Hono } from 'hono';
import { renderer } from './renderer.tsx';

import jsonFormatter from './json.tsx';
import goto from "./goto.tsx";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <h1>あっくさんのツール類</h1>
    <p>基本的にクライアントJavaScript不要です</p>
    <ul>
      <li><a href="/json">JSON整形</a></li>
      {/* <li><a href="/dns">DNS lookup</a></li> */}
      <li><a href="/goto">URL goto</a></li>
    </ul>
  </>, {
    title: "akku's toolbox",
  });
})

app.route("/json", jsonFormatter);
app.route("/goto", goto);

export default app;
