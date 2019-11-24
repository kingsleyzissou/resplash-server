import Tantrum from '~/utilities/tantrum';

const getToken = ({ authorization }) => {
  if (!authorization) throw new Tantrum(403, 'User not authorised');
  return authorization.split(' ')[1];
};

export default getToken;
