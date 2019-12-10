import Collection from '~/models/collection';

export default {

  Query: {
    collection: async (_, { _id }, { user }) => {
      if (!user) return null;
      return Collection.findById({ _id });
    },
    collections: async (_, args, { user }) => {
      if (!user) return null;
      return Collection.find({
        user: {
          _id: user._id,
        },
      });
    },
  },

  Mutation: {
    addCollection: async (_, { collection }) => {
      // eslint-disable-next-line
      console.log(collection);
      return collection;
    },
  },

};
