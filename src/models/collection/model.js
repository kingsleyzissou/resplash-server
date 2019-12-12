import mongoose from 'mongoose';
import schema from './schema';

// eslint-disable-next-line
schema.pre(['find', 'findOne'], function () {
  this.populate('comments');
});

export default mongoose.model('collection', schema);
