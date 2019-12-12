// import Comment from '~/models/comment';
// import Collection from '~/models/collection';

// const getCollection = async (_id) => {
//   return Collection.findOne({ _id: collectionId });
// };

// const getComment = async (_id) => {
//   return Comment.findOne({ _id: collectionId });
// };

// export default {

//   Query: {
//     likes: async (_, { typeId, type }, { user }) => {
//       const obj = (type === 'collection')
//         ? getCollection(typeId)
//         : getComment(typeId);
//       let likedByMe = obj.likedByMe(user._id);
//       let count = obj.likeCount;
//       return { likedByMe, count };
//     },
//   },

// };
export default {}
