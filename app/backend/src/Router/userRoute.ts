import { Request, Response, Router } from 'express';
import UserController from '../Controllers/userController';
import {
  fieldsValidation, emailValidation, passwordValidation } from '../Middlewares/loginMiddlewares';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/',
  fieldsValidation,
  emailValidation,
  passwordValidation,
  (req: Request, res: Response) => userController.login(req, res),
);

export default userRouter;
