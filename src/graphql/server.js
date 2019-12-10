import { ApolloServer } from 'apollo-server-express';
import { authenticated, getToken, getTokenUser } from '~/middleware/auth';
import resolvers from './resolvers';
import typeDefs from './schema';

export default new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  context({ req }) {
    const token = getToken(req.headers);
    return {
      user: (authenticated({ token }))
        ? getTokenUser({ token })
        : null,
    };
  },
  formatError: (error) => {
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');
    return {
      ...error,
      message,
    };
  },
});
