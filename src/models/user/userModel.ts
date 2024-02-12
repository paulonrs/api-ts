import { DataTypes, Model } from 'sequelize';
import { UserAttributes, UserCreationAttributes } from './UserAttributes';
import sequelizeDatabase from '../../../config/database';

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public user_id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public active!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initUserModel() {
    return User.init(
      {
        user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING
        },
        active: {
          allowNull: false,
          type: DataTypes.BOOLEAN
        },
      },
      {
        sequelize: sequelizeDatabase,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
      }
    );
  }
}

User.initUserModel();

export default User;
