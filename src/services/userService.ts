import UserFilter from '../models/user/UserFilter';
import UserDal from '../db/dal/users'

class UserService {
  private userDal: UserDal;
  constructor(userDal:UserDal) {
    this.userDal = userDal;
  }

  getAllUsers = async (filters: UserFilter) => {
    return await this.userDal.getAll(filters);
  }
}

export default UserService;