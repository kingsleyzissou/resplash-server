import jwt from 'jsonwebtoken';
import config from '~/config';
import Tantrum from '~/utilities/tantrum';

const authenticated = ({ token }) => {
  if (!token) throw new Tantrum(401, 'User not authenticated');
  return jwt.verify(token, config.jwtSecret);
};

export default authenticated;
