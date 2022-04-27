import { Sequelize } from "sequelize";
import { config } from "../config/config";

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    dialect: "mysql",
    logging: false,
  }
)