import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import routes from '~/routes';
import apollo from '~/graphql/server';

export default (express) => {
  const app = express();
  const router = express.Router();

  // Enable cors
  app.use(cors());

  // Help secure the app
  app.use(helmet());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Add apollo to the stack and provide
  // grapql route
  // you can now go to localhost:{port}/graphql
  // to access the graphql playground
  apollo.applyMiddleware({ app, path: '/graphql' });

  // this statement is last
  // so error handling can be
  // applied
  return app.use(routes(router));
};
