import { Request, Response, NextFunction } from 'express';
import { validateToken } from './token';

const fieldsValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

const emailValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const emailVerify = regex.test(email);
  if (!emailVerify) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  next();
};

const tokensValidate = async (req:Request, res:Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const payload = validateToken(authorization);
    req.body.token = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token must be a valid token',
    });
  }
};

// const tokensValidate = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { authorization } = req.headers;
//     const token = authorization as string;
//     const payload = validateToken(token);
//     if (!payload) {
//       return res.status(401).json({ message: 'Token must be a valid token' });
//     }
//     next();
//   } catch (error) {
//     return null;
//   }
// };
export { fieldsValidation, emailValidation, passwordValidation, tokensValidate };
