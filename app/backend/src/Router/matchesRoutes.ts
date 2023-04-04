import { Request, Response, Router } from 'express';
import MatchesController from '../Controllers/matchesController';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));
// matchesRouter.get('/:id', (req: Request, res: Response) => matchesController.teamById(req, res));

export default matchesRouter;
