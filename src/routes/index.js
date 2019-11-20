import errors from '~/middleware/errors';
import { Tantrum } from '~/utilities';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello there' });
  });

  // Throw tantrum to test error
  // handling
  router.get('/error', () => {
    throw new Tantrum(500, 'some error');
  });

  // Last route to catch 404 endpoints
  router.use((req, res, next) => {
    const error = new Tantrum(404, 'Not found');
    next(error);
  });

  // Catch all errors and report
  router.use(errors.reporter);

  // handle error and send response
  // return router to be used in server
  return router.use(errors.handler);
};
