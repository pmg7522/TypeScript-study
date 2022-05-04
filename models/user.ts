import {
  DataTypes,
  Model,
} from 'sequelize';
import { sequelize } from './index';

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  nickname: string;
  age: number;
  gender: number;
}

export class User extends Model<UserAttributes>{
  public readonly id!: number;
  public email!: string;
  public password!: string;
  public nickname!: string;
  public age!: number;
  public gender!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    // 관계 설정
  };
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