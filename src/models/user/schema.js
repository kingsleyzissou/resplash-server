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
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: Date,
  updated_at: Date,
});

export { schema };
