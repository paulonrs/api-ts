import { UserAttributes } from '../models/user/UserAttributes';
import User from '../models/user/userModel';

class UserService {
  async getAllUsers() {
    const users = await User.findAll({
      where: { active: true },
    });
    return users;
  }
}

export default new UserService();