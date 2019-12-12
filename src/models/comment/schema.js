import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  type: {
    type: String,
    enum: ['collection', 'comment'],
    default: 'collection',
  },
  typeId: Schema.Types.ObjectId,
  message: {
    type: String,
    required: true,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
    default: [],
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default schema;
