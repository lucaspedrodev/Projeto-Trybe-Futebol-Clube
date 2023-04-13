import { Request, Response, Router } from 'express';
import LeaderboardController from '../Controllers/leaderboardController';

const LeaderboardRouter = Router();
const lBoard = new LeaderboardController();

LeaderboardRouter.get('/home', (req:Request, res: Response) => lBoard.getHomeLeaderboard(req, res));

export default LeaderboardRouter;
