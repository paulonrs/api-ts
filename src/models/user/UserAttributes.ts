import { Optional } from "sequelize";

interface UserAttributes {
    user_id: number;
    name: string;
    email: string;
    password: string;
    active: boolean;
  }

interface UserCreationAttributes extends Optional<UserAttributes, 'user_id'> {}

export { UserAttributes, UserCreationAttributes };