import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send({
    message: "Welcome"
  })
})

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).send({ message: "API를 확인해주세요." });
});

app.listen(port, () => {
  console.log(`서버가 ${port}로 실행중입니다.`);
})