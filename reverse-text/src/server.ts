import * as express from 'express';
import * as path from 'path';

export let pathToStatic =
  path.resolve(__dirname, '..', 'front-end', 'build', 'bundled-amd');

export function getApp(): express.Express {
  const app: express.Express = express();

  app.use(express.static(pathToStatic));

  app.use(express.urlencoded({
    "extended": false
  }));

  app.post('/api', (req, res) => {
    res.send({ result: reverseText(req.body.text) });
  });

  return app;
}



function reverseText(text: string): string {
  return text.split('').reverse().join('');
}
