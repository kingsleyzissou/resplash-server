import mongoose from 'mongoose';
import ImageSchema from '../image/schema';
import CommentSchema from '../comment/schema';

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
  comment: [{
    type: CommentSchema,
    default: [],
  }],
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
