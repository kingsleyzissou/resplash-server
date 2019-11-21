import User from '~/models/user';

export default {

  Query: {
    user: async (_, { _id }) => User.findById({ _id }),
  },

};
