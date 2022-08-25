import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv"
import morgan from "morgan";
import router from "./route"

const app = express();

dotenv.config();

const port: number = parseInt(process.env.SERVER_PORT as string, 10) || 3000;
const host: string = process.env.SERVER_URL || 'localhost';

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));


app.use(morgan(":method :url | :status | :response-time ms | :date[iso] | "));
app.use(express.json());

app.use("/", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: "Welcome" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: "API를 확인해주세요." });
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

app.listen(port, host, () => {
  console.log(`서버가 ${host}:${port}로 실행중입니다.`);
});