import errors from '~/middleware/errors';
import { Tantrum } from '~/utilities';
import { login, register } from '~/services/auth';
// import authenticated from '~/middleware/auth/authenticated';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello there' });
  });

  // Throw tantrum to test error
  // handling
  router.get('/error', () => {
    throw new Tantrum(500, 'some error');
  });

  router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    const response = await login(username, password)
      .catch((err) => next(err));
    res.status(200).send(response);
  });

  router.post('/register', async (req, res, next) => {
    const response = await register(req.body)
      .catch((err) => next(err));
    res.status(200).send(response);
  });

  // router.get('/protected', authenticated, async (req, res) => {
  //   res.status(200).send({ message: 'Cool cool cool' });
  // });

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
