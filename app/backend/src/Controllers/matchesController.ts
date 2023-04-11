import { Request, Response } from 'express';
import MatchesService from '../Services/matchesService';

export default class MatcherController {
  private _service = new MatchesService();

  public getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const result = await this._service.getAllMatches();
    let resultOption = result;
    if (inProgress === 'true') {
      resultOption = result.filter((match) => match.inProgress === true);
    }
    if (inProgress === 'false') {
      resultOption = result.filter((match) => match.inProgress === false);
    }

    res.status(200).json(resultOption);
  };

  public finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.finish(id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this._service.updateMatch(id, { homeTeamGoals, awayTeamGoals });
    return res.status(200).json({ message: 'Updated' });
  };
}
