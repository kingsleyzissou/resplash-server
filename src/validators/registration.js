import Joi from '@hapi/joi';

export default Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
  }),
  username: Joi.string().required().messages({
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Must be a valid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be atleast 6 characters',
  }),
  confirm: Joi.string().required().valid(Joi.ref('password')).messages({
    'any.required': 'Password confirmation is required',
    'any.only': 'Passwords must match',
  }),
});
