import { db } from "../config/config";
import { UserSignUp, loginData } from "../model/user";

export const signUp = async function (userInfo: UserSignUp) {
  const { username, password } = userInfo;

  const sql: string = "INSERT INTO User(`username`, `password`) VALUES(?, ?)";
  const params: Array<String> = [username, password];

  await db.query(sql, params);

  return;
}

export const login = async function (loginData: loginData) {
  const { username, password } = loginData;

  const sql: string = "SELECT username, password FROM User WHERE username = ? AND password = ?";
  const params: Array<String> = [username, password];

  const userData = await db.query(sql, params);

  return userData;
}