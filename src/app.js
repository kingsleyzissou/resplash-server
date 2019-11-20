import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import routes from '~/routes';

export default (express) => {
  const app = express();
  const router = express.Router();

  app.use(cors());

  app.use(helmet());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // this statement is last
  // so error handling can be
  // applied
  return app.use(routes(router));
};
