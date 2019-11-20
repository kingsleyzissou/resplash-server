import express from 'express';
import app from '~/app';
import config from '~/config';
import logger from '~/utilities/logger';

// Prepare the server
const server = app(express);

// Get the server port
const { port } = config;

// Start the server
server.listen(port, () => {
  logger.info(
    `App started on http://localhost:${port}`,
  );
});
