import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  medium: {
    type: String,
  },
  regular: {
    type: String,
  },
  full: {
    type: String,
  },
});

export default schema;
