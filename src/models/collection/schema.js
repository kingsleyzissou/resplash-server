import mongoose from 'mongoose';

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
    type: Schema.Types.ObjectId,
    ref: 'image',
  }],
  subcomments: [{
    type: Schema.Types.ObjectId,
    required: 'comment',
  }],
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
