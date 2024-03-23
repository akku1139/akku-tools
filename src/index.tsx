import { Hono } from 'hono';
import { renderer } from './renderer.tsx';

import jsonFormatter from './json.tsx';
import goto from "./goto.tsx";

import Links from "./links.tsx";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <h1>あっくさんのツール類</h1>
    <p>基本的にクライアントJavaScript不要です</p>

    <form action="/goto/move" method="post">
      <label for="url">URL か 検索</label>
      <input autofocus type="text" name="url" />
      <button type="submit">GOTO</button>
    </form>

    <hr />
    <ul>
      <li><a href="/json">JSON整形</a></li>
      {/* <li><a href="/dns">DNS lookup</a></li> */}
      <li><a href="/goto">URL goto</a></li>
    </ul>

    <hr />
    <Links />

    <hr />
    <textarea rows="20" placeholder="簡易メモ帳" style="width: 100%"></textarea>
  </>, {
    title: "akku's toolbox",
  });
})

app.route("/json", jsonFormatter);
app.route("/goto", goto);

export default app;
