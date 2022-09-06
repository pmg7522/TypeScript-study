import { Request, Response, NextFunction } from "express";
import { signUp } from "../../data/user";

export const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: { username: string, password: string } = req.body;

  const signUpData = { username, password };

  signUp(signUpData)
    .then(() => {
      return res.status(200).send({
        message: "회원가입에 성공하였습니다."
      });
    })
    .catch((err) => {
      return res.status(400).send({
        message: "회원가입에 실패하였습니다."
      });
    });
}