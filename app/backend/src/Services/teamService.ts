import TeamModel from '../database/models/teamModel';
import ITeam, { ITeamsService } from '../Interfaces/teamInterface';

class TeamsService implements ITeamsService {
  private _model = TeamModel;

  async getAllTeams(): Promise<ITeam[]> {
    return this._model.findAll();
  }
}

export default TeamsService;
