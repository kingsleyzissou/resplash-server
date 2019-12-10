import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profile_image: {
    type: Schema.Types.ObjectId,
    ref: 'url',
  }
});

export default schema;
