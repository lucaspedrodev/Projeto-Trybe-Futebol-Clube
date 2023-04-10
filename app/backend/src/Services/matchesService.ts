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

  public async finish(id: string) {
    const finished = await this._model.update({ inProgress: false }, { where: { id } });
    return finished;
  }
}

export default MatchesService;
