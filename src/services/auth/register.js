import User from '~/models/user';
import { Tantrum } from '~/utilities';
import generateJWT from './generateJWT';

const register = async (fields) => {
  const { username, name, password, email } = fields;
  const user = new User({ username, name, password, email });
  user.save()
    .catch((err) => {
      throw new Tantrum(500, err);
    });
  return {
    user,
    token: generateJWT(user),
  };
};

export default register;
