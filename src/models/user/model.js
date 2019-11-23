import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import schema from './schema';
import { Tantrum } from '~/utilities';

// Perform the following function before updating
// the user in the database. Check if the password has
// been modified, if so, hash the password before
// saving.
// eslint-disable-next-line
schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt.hash(this.password, 10)
    .catch((err) => next(err));
  this.password = hash;
  return next();
});

// Validate the user password
schema.methods.verifyPassword = (async (cipher, plain) => {
  const comparison = await bcrypt.compare(plain, cipher)
    .catch((err) => {
      throw new Tantrum(500, err);
    });
  return comparison;
});

export default mongoose.model('user', schema);
