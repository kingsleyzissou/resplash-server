import Comment from '~/models/comment';
import Collection from '~/models/collection';

const pushToCollection = async (_id, comment) => {
  await Collection.updateOne({ _id }, {
    $push: {
      comments: comment._id,
    },
  });
  return comment;
};

const pushToSubcomment = async (_id, comment) => {
  await Comment.updateOne({ _id }, {
    $push: {
      comments: comment._id,
    },
  });
  return comment;
};

export default {

  Query: {
    comments: async (_, { typeId }) => {
      const collection = await Collection.findOne({ _id: typeId });
      return collection.comments;
    },
  },

  Mutation: {
    addComment: async (_, { typeId, type, input }, { user }) => {
      if (!user) return null;
      const comment = new Comment({
        type, typeId, user: user._id, message: input,
      });
      await comment.save();
      return (type === 'collection')
        ? pushToCollection(typeId, comment)
        : pushToSubcomment(typeId, comment);
    },
  },

};
