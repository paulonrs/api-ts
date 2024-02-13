import { Op } from 'sequelize';
import { UserInputAttributes, UserOutputAttributes } from '../../models/user/UserAttributes'
import UserFilter from '../../models/user/UserFilter'
import User from '../../models/user/userModel'

class UserDal {
	getAll = async (filters?: UserFilter): Promise<UserOutputAttributes[]> => {
		let queryOptions: any = {};
		queryOptions.attributes = ['name', 'email']

		if (filters) {
			queryOptions.where = {};

			if (filters.name) {
				queryOptions.where.name = { [Op.iLike]: `%${filters.name}%` };
			}

			if (filters.email) {
				queryOptions.where.email = { [Op.iLike]: `%${filters.email}%` };
			}
		}

		return User.findAll(queryOptions);
	}
}

export default UserDal;