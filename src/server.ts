import express, { Response, Request } from 'express';

const app = express();

app.get('/users', (request: Request, response: Response) => {
	return response.json({ hey: 'ok' });
});

app.listen(3333);
