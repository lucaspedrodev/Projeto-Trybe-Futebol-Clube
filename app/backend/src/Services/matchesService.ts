import MatchesModel from '../database/models/matchesModel';
import TeamModel from '../database/models/teamModel';
import { ICreateNewMatch, IMatches, IUpdateMatch } from '../Interfaces/matchesInterface';

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

  public async createMatch(matchs: ICreateNewMatch) {
    const { homeTeamGoals, homeTeamId, awayTeamGoals, awayTeamId } = matchs;
    // const teamId = await TeamModel.findOne({ where: { id: homeTeamId || awayTeamId } });
    // if (!teamId) {
    //   const status = { type: 404, message: 'There is no team with such id!' };
    //   return status;
    // }
    const result = this._model.create({
      homeTeamGoals,
      homeTeamId,
      awayTeamGoals,
      awayTeamId,
      inProgress: true,
    });
    return result;
  }
}

export default MatchesService;
