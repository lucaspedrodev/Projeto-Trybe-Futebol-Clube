import { Request, Response } from 'express';
import UserService from '../Services/userService';

class UserController {
  private _service = new UserService();

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { type, message } = await this._service.login(email, password);

    if (type) return res.status(type).json({ message });
    const token = message;
    return res.status(200).json({ token });
  };
}

export default UserController;
