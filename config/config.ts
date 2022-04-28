import dotenv from 'dotenv';
dotenv.config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME
} = process.env

export const config = {
  development: {
    username: DB_USERNAME || "root",
    password: DB_PASSWORD,
    database: DB_NAME || "typescript"
  }
}