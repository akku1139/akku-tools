import { Hono } from 'hono';
import { renderer } from './renderer';

import jsonFormatter from './json-formatter';

const app = new Hono();

app.get('*', renderer);

app.mount("/json", jsonFormatter);

export default app;
