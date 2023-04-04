import { Request, Response } from 'express';
import MatchesService from '../Services/matchesService';

export default class MatcherController {
  private _service = new MatchesService();

  public getAllMatches = async (_req: Request, res: Response) => {
    const result = await this._service.getAllMatches();
    return res.status(200).json(result);
  };
}
