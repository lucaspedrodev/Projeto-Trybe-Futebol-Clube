import { Request, Response } from 'express';
import TeamService from '../Services/teamService';

class TeamController {
  private _service = new TeamService();

  public getAllTeams = async (_req: Request, res: Response) => {
    const allTeams = await this._service.getAllTeams();
    return res.status(200).json(allTeams);
  };
}
export default TeamController;
