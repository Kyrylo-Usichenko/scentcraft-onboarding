import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';
import onboarding from './routes/onboarding';
import { logger } from 'hono/logger';

const app = new Hono();

app.use('*', prettyJSON());
app.use('*', logger());

app.notFound((c) => c.json({ message: 'Not Found' }, 404));

app.route('/onboarding', onboarding);

export default app;
