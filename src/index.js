import server from '~/server';
import config from '~/config';
import database from '~/database';
import { logger } from '~/utilities';

// Prepare the server
const app = server();

// Get the server port
const { port, db } = config;

// Connect to the database
database.connect(db);


// Start the server
app.listen(port, () => {
  logger.info(
    `App started on http://localhost:${port}`,
  );
});

export default app;
