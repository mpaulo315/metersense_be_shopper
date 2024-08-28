import express, { Express, Request, Response } from "express";
// import "dotenv/config";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello from the server!!! teste");
});

app.listen(process.env.PORT, () =>
  console.log(
    `App is listening on ${process.env.PORT}: http://localhost:${process.env.PORT}`
  )
);
