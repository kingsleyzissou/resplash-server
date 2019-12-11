import mongoose from 'mongoose';
import ArtistSchema from '../artist/schema';
import UrlSchema from '../url/schema';

const { Schema } = mongoose;

const schema = new Schema({
  id: {
    type: String,
  },
  alt_description: {
    type: String,
  },
  description: {
    type: String,
  },
  user: {
    type: ArtistSchema,
    required: true,
  },
  urls: {
    type: UrlSchema,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
