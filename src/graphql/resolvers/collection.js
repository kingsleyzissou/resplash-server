import Collection from '~/models/collection';
import Image from '~/models/image';
import Tantrum from '~/utilities/tantrum';

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
    addCollection: async (_, { input }) => {
      const collection = new Collection({ ...input });
      await collection
        .save()
        .catch((err) => {
          throw new Tantrum(500, err);
        });
      return collection;
    },
    addImage: async (_, { _id, input }) => {
      const image = new Image({ ...input });
      const collection = await Collection.findOne({ _id })
        .catch((err) => {
          throw new Tantrum(500, err);
        });
      collection.images.push(image);
      collection.save();
      return collection;
    },
    removeImage: async (_, { _id, image }) => {
      const collection = await Collection.findOne({ _id })
        .catch((err) => {
          throw new Tantrum(500, err);
        });
      collection.images.pull(image);
      collection.save();
      return collection;
    },
  },

};
