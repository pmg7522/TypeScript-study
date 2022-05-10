import {
  DataTypes,
  Model,
  Optional,
} from 'sequelize';
import { sequelize } from './index';

type UserAttributes = {
  id: number;
  email: string;
  password: string;
  nickname: string;
  age: number;
  gender: number;
}

type UserCreationAttributes = Optional<UserAttributes, "id">;

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare email: string;
  declare password: string;
  declare nickname: string;
  declare age: number;
  declare gender: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    modelName: "user",
    tableName: "User"
  }
)