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
}
