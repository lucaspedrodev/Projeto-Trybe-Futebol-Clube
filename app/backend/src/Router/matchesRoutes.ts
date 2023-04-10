import { Request, Response, Router } from 'express';
import MatchesController from '../Controllers/matchesController';
import { tokensValidate } from '../Middlewares/loginMiddlewares';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));
matchesRouter.patch(
  '/:id/finish',
  tokensValidate,
  (req: Request, res: Response) => matchesController.finish(req, res),
);

export default matchesRouter;
