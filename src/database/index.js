import mongoose from 'mongoose';
import { logger } from '~/utilities';

const database = {
  // Connect to MongoDB
  server: {},
  async connect({ host, options, server }) {
    // Attempt connection or else
    // catch any connection errors
    this.server = server;
    await mongoose.connect(host, options)
      .catch((error) => this.report(error));
    // Handle errors after initial connection
    mongoose.connection.on('error', (error) => this.report(error));
  },
  async disconnect() {
    if (this.server) await this.server.stop();
    await mongoose.connection.close();
  },
  async reset() {
    await mongoose.connection.db.dropDatabase();
  },
  // Report errors
  report(error) {
    logger.error(error);
  },
};

export default database;
