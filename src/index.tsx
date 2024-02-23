import { Hono } from 'hono';
import { renderer } from './renderer';

import jsonFormatter from './json.tsx';

const app = new Hono();

app.get('*', renderer);

app.mount("/json", jsonFormatter);

export default app;
