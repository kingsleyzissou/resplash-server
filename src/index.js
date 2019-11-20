import express from 'express';
import logger from 'utilities/logger';

const app = express();
const port = 3000;

app.listen(port, () => {
  logger.info(
    `App started on http://localhost:${port}`,
  );
});
