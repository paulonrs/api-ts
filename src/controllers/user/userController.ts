import { Request, Response } from 'express';
import UserService from '../../services/userService';
import UserFilter from '../../models/user/UserFilter';

class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getAllUsers = async (req: Request, res: Response) => {
    const filter = this.getFilterFromRequest(req);
    const users = await this.userService.getAllUsers(filter);
    res.send(users);
  }

  private getFilterFromRequest(req: Request): UserFilter {
    const { name, email} = req.query;
    let filter: UserFilter = {};

    if (name) {
      filter.name = name.toString();
    }

    if (email) {
      filter.email = email.toString();
    }

    return filter;
  }
}

export default UserController;
