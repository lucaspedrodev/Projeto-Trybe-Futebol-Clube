import MatchesModel from '../database/models/matchesModel';
import TeamModel from '../database/models/teamModel';
import { IMatches, IUpdateMatch } from '../Interfaces/matchesInterface';

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

  public async updateMatch(id: string, goals : IUpdateMatch) {
    const { homeTeamGoals, awayTeamGoals } = goals;
    const result = await this._model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return result;
  }
}

export default MatchesService;
