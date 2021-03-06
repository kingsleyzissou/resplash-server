import { logger, Tantrum } from '~/utilities';

// First method in the error stack
// catches the error, logs it and
// passes it down the stack
const reporter = ({ message, status }, req, res, next) => {
  // Throw tantrum to be used for error
  const error = new Tantrum(status, message);
  // Log error
  logger.error(message);
  // Pass the error on
  next(error);
};

export default reporter;
