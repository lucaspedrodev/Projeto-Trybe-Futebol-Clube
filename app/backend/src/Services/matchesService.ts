import MatchesModel from '../database/models/matchesModel';
import TeamModel from '../database/models/teamModel';
import { IMatches } from '../Interfaces/matchesInterface';

class MatchesService {
  private _model = MatchesModel;

  public async getAllMatches(): Promise<IMatches[]> {
    const resultModel = await this._model.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return resultModel;
  }
}

export default MatchesService;
