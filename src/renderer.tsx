import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <a href="/">ホーム</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
});
