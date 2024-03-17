import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <a href="/">ホーム</a>
        </header>
        <main>{children}</main>
        <hr />
        <footer>
          <a href="https://github.com/akku1139/akku-tools/">ソースコード</a>
        </footer>
      </body>
    </html>
  );
});
