import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send({
    message: "Welcome"
  })
})

app.listen(port, () => {
  console.log(`서버가 ${port}로 실행중입니다.`);
})