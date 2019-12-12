import mongoose from 'mongoose';
import ImageSchema from '../image/schema';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  images: [{
    type: ImageSchema,
    default: [],
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
  }],
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
