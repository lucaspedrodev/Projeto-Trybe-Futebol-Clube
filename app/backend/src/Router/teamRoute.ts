import { Request, Response, Router } from 'express';
import TeamController from '../Controllers/teamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.get('/', (req: Request, res: Response) => teamController.getAllTeams(req, res));

export default teamRouter;
