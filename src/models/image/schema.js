import mongoose from 'mongoose';
import logger from '~/utilites/logger';

const { Schema } = mongoose;

const schema = new Schema({
  alt_description: {
    type: String,
  },
  description: {
    type: String,
  },
  urls: {
    type: String,
    get: (data) => JSON.parse(data).catch((err => {
      logger.error(err);
      return data;
    })),
    set: (data) => JSON.stringify(data),
  },
  user: {
    type: String,
    get: (data) => JSON.parse(data).catch((err => {
      logger.error(err);
      return data;
    })),
    set: (data) => JSON.stringify(data),
  },
  likes: {
    type: Number,
    default: 0,
  },
  created_at: Date,
  updated_at: Date,
});

export default schema;
