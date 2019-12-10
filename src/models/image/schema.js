import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  alt_description: {
    type: String,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'url'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'artist'
  },
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
