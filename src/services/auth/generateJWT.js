import jwt from 'jsonwebtoken';
import config from '~/config';

const generateJWT = (user) => jwt.sign(user.toJSON(), config.jwtSecret);

export default generateJWT;
