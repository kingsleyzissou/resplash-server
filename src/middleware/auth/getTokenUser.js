import User from '~/models/user';

export default async ({ token }) => {
  const { _id } = token;
  return User.findOne({ _id });
};
