import { Request, Response, NextFunction } from "express";
import { logIn } from "../../data/user";

export const userSignIn = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: { username: string, password: string } = req.body;

  const logInData = { username, password };

  logIn(logInData)
    .then(() => {
      return res.status(200).send({
        message: "로그에 성공하였습니다."
      });
    })
    .catch((err) => {
      return res.status(400).send({
        message: "아이디나 비밀번호가 일치하지 않습니다."
      });
    });
}