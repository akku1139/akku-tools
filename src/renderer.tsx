import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(async ({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
