import User from '~/models/user';
import { Tantrum } from '~/utilities';

const register = async (body) => {
  const { username, name, password, email } = body;
  const user = new User({ username, name, password, email });
  user.save()
    .catch((err) => {
      throw new Tantrum(500, err);
    });
};

export default register;
