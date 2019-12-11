// import Joi from '@hapi/joi';
import { Tantrum } from '~/utilities';

export default (schema) => (req, res, next) => {
  const { value, error } = schema.validate({ ...req.body }, { abortEarly: false });
  if (error) {
    const messages = error.details.map((detail) => detail.message);
    throw new Tantrum(401, messages);
  }
  if (!req.value) req.value = {};
  req.value.fields = value;
  next();
};
