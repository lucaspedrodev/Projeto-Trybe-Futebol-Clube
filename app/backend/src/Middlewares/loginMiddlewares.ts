import { Request, Response, NextFunction } from 'express';

const emailPassValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

const test = () => {
};

export { emailPassValidation, test };
