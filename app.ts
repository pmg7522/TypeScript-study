import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const port: number = parseInt(process.env.SERVER_PORT as string, 10) || 3000;
const host: string = process.env.SERVER_URL || 'localhost';
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send({
    message: "Welcome"
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).send({ message: "API를 확인해주세요." });
});

// 에러처리
// app.use((err, req: Request, res: Response, next: NextFunction) => {
//   return res.status(err.status).send({
//     message: err.message,
//     data: {
//       errorCode: err.errorCode
//     }
//   })
// });

app.listen(port, host, async () => {
  console.log(`서버가 ${host}:${port}로 실행중입니다.`);
});