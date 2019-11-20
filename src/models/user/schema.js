import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
