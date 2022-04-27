import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    dialect: "mysql"
  }
}