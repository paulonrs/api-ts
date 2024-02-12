import { Request, Response } from 'express';
import userService from '../../services/userService';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.send(users);
  }
}

export default new UserController();
