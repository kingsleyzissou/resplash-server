import mongoose from 'mongoose';
import schema from './schema';

// eslint-disable-next-line
schema.pre(['find', 'findOne'], function () {
  this.populate('user');
});

export default mongoose.model('comment', schema);
