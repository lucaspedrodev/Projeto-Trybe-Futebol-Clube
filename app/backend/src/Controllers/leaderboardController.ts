import { Request, Response } from 'express';
import LeaderboardService from '../Services/leaderboardService';

export default class MatcherController {
  private _service = new LeaderboardService();

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const leaderboard = await this._service.homeLeaderboard();
    res.status(200).json(leaderboard);
  };
}
