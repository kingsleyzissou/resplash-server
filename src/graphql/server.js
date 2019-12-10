import { ApolloServer } from 'apollo-server-express';
import { authenticated, getToken } from '~/middleware/auth';
import resolvers from './resolvers';
import typeDefs from './schema';

export default new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  async context({ req }) {
    const token = getToken(req.headers);
    return {
      user: (authenticated({ token }))
        ? authenticated({ token })
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
