import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from '../api/rest/routes';
import errorMiddleware from '../api/rest/middlewares/errorMiddleware';

const expressLoader = async ({ app }: { app: express.Application }) => {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', routes);

  app.use(errorMiddleware);
};

export default expressLoader;
