import * as jwt from 'jsonwebtoken';
import { IUser } from '../Interfaces/userInterface';

const secret = process.env.JWT_CONFG || 'jwt_secret';
const jwtconf: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '35m',
};

const createToken = (payload: IUser) => jwt.sign(payload, secret, jwtconf);
const validateToken = (token: string) => jwt.verify(token, secret);

export { createToken, validateToken };
