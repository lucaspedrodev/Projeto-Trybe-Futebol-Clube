import { Request, Response, NextFunction } from 'express';

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

export { fieldsValidation, emailValidation, passwordValidation };
