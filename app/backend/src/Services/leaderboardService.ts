import sequelize from '../database/models';
import query from '../utils/query';

class Leaderboard {
  private _sequelize = sequelize;
  async homeLeaderboard() {
    const [result] = await this._sequelize.query(query);
    return result;
  }
}

export default Leaderboard;
