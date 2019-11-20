import { createLogger, transports, format } from 'winston';

const { combine, colorize, simple, json } = format;

const logger = createLogger({
  level: 'info',
  format: json(),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        simple(),
      ),
    }),
  ],
});

export default logger;
