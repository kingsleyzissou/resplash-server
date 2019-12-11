import mongoose from 'mongoose';
import AvatarSchema from '../avatar/schema';

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
    type: AvatarSchema,
  },
});

export default schema;
