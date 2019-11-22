import jwt from 'jsonwebtoken';
import config from '~/config';
import Tantrum from '~/utilities/tantrum';

const extractToken = (header) => {
  if (typeof header === 'undefined') throw new Tantrum(401, 'User not authorised');
  return header.split(' ')[1];
};

const authenticated = (req, res, next) => {
  const token = extractToken(req.headers.authorization);
  jwt.verify(token, config.jwtSecret);
  // req.token = decoded;
  next();
};

export default authenticated;
