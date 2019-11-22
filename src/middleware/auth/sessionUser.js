import User from '~/models/user';
import Tantrum from '~/utilities/tantrum';

export default async (req, res, next) => {
  const { _id } = req.token;
  const user = await User.findOne({ _id });
  if (!user) next(new Tantrum(500, 'User not found'));
  req.user = user;
  next();
};
