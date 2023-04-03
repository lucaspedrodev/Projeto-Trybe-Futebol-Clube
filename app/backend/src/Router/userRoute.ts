import { Request, Response, Router } from 'express';
import UserController from '../Controllers/userController';
import { emailPassValidation } from '../Middlewares/loginMiddlewares';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/',
  emailPassValidation,
  (req: Request, res: Response) => userController.login(req, res),
);

export default userRouter;
