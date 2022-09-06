import { db } from "../config/config";
import { UserSignUp } from "../model/user";

export const signUp = async function (userInfo: UserSignUp) {
  const { username, password } = userInfo;

  const sql: string = "INSERT INTO User(`username`, `password`) VALUES(?, ?)";
  const params: Array<string> = [username, password];

  const userId: any = await db.query(sql, params);

  return userId;
}