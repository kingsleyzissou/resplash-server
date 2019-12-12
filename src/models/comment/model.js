import mongoose from 'mongoose';
import schema from './schema';

// eslint-disable-next-line
schema.pre(['find', 'findOne'], function () {
  this.populate('user');
  this.populate('comments');
});

// eslint-disable-next-line
schema.methods.likeDetails = function (user) {
  return {
    likedByMe: this.likes.includes(user),
    count: this.likes.length,
  };
};

export default mongoose.model('comment', schema);
