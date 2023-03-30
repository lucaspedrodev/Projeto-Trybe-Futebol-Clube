import { DataTypes, Model } from 'sequelize';
import db from '.';

class TeamModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamModel.init({
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'TeamModel',
  timestamps: false,
  tableName: 'teams',
  underscored: true,
});

export default TeamModel;
