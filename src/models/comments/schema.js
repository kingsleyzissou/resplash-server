import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  subcomments: [{
    type: Schema.Types.ObjectId,
    required: 'comment',
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
