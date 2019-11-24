import User from '~/models/user';

export default {

  Query: {
    user: async (_, { _id }, { user }) => {
      if (!user) return null;
      return User.findById({ _id });
    },
  },

};
