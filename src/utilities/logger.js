import { createLogger, transports, format } from 'winston';
import config from '~/config';

const { combine, colorize, simple, json } = format;

// Create the logger for the app
const logger = createLogger({
  level: 'info',
  format: json(),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        simple(),
      ),
      silent: config.env === 'test',
    }),
  ],
});

export default logger;
