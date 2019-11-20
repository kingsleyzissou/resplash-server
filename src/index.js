import express from 'express';
import app from '~/app';
import logger from '~/utilities/logger';

const server = app(express());

const port = 3000;

server.listen(port, () => {
  logger.info(
    `App started on http://localhost:${port}`,
  );
});
