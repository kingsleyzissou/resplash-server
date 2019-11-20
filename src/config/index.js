import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.APP_PORT || 4000,
  root: path.resolve(__dirname, '../', '../'),
  db: {
    host: process.env.DB_HOST,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwtSecret: process.env.JWT_SECRET,
};
