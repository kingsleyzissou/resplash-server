import User from '~/models/user';
import { Tantrum } from '~/utilities';
import generateJWT from './generateJWT';

const login = async (email, password) => {
  const user = await User
    .findOne({ email })
    .select('+password')
    .exec()
    .catch((err) => {
      throw new Tantrum(500, err);
    });
  if (!user) throw new Tantrum(404, 'User not found');
  const verified = await user.verifyPassword(user.password, password);
  if (!verified) throw new Tantrum(403, 'Username or password incorrect');
  return {
    user,
    token: generateJWT(user),
  };
};

export default login;
