import { Hono } from 'hono';
import { renderer } from "./renderer.tsx";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
    <p>JavaScript不要のDNS参照</p>
    <form action="/dns/lookup" method="get">
      <label for="domain">ドメイン</label>
      <input autofocus required type="text" name="domain" placeholder="example.com" />
      <button type="submit">lookup</button>
    </form>
  </>, {
    title: "DNS lookup",
  });
});

app.post('/lookup', async (c) => {
  const domain = c.req.query('domain')
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "");
  const records = await (await fetch("https://cloudflare-dns.com/dns-query?name="+domain, {
    method: "GET",
    headers: {
      Accept: "application/dns-json",
    },
  })).json();
  return c.render(<>
    <table>
      <thead>
        <tr>
          <th>Hostname</th>
          <th>Type</th>
          <th>TTL</th>
          <th>Priority</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>{
      }</tbody>
    </table>
  </>);
});

export default app;
