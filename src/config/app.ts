import express, { Express } from 'express';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';

export const setupApp = async (): Promise<Express> => {
  const app = express();

  setupMiddlewares(app);
  setupRoutes(app);

  app.listen(3333, () => console.log('Server is running...'));

  return app;
};
