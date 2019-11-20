import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { schema } from './schema';
import { Tantrum } from '~/utilities';

// eslint-disable-next-line
schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hash = await bcrypt.hash(this.password, 10)
    .catch((err) => next(err));
  this.password = hash;
  return next();
});

userSchema.methods.verifyPassword = (async (cipher, plain) => {
  const comparison = await bcrypt.compare(cipher, plain)
    .catch((err) => {
      throw new Tantrum(500, 'Unable to compare password');
    });
  return comparison;
});

export default mongoose.model('user', userSchema);

