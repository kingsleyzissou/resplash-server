import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

export default (app) => {
  app.use(cors());

  app.use(helmet());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  return app;
};
