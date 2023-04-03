import * as bcrypt from 'bcryptjs';
import { createToken } from '../Middlewares/token';
import usersModel from '../database/models/userModel';
import { ILogin } from '../Interfaces/userInterface';

class UserService {
  private _model = usersModel;

  public async login(email: string, password: string): Promise<ILogin> {
    const result = await this._model.findOne({ where: { email } });

    if (!result) return { type: 401, message: 'Invalid email or password' };

    const passwordCheck = bcrypt.compareSync(password, result.password);

    if (!passwordCheck) return { type: 401, message: 'Invalid email or password' };

    const token = createToken(result.dataValues);
    return { type: null, message: token };
  }
}

export default UserService;
