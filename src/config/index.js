import path from 'path';
import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

const test = process.NODE_ENV === 'test';

const connectionString = (!test)
  ? process.env.DB_HOST
  : new MongoMemoryServer().getConnectionString();

export default {
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT || 4000,
  root: path.resolve(__dirname, '../', '../'),
  db: {
    host: connectionString,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwtSecret: process.env.JWT_SECRET,
};
