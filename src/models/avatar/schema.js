import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  medium: {
    type: String,
    required: true,
  },
});

export default schema;
