import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import path from "path";

const app: Application = express();
app.use(cors());

app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/weee/asdf", async (req: Request, res: Response, next: NextFunction) => {
  res.sendFile("./public/index.html");  
});

app.listen(3000, () => {
  console.log("express server listening on port 3000");
});
