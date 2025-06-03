import express from "express";
const app = express();
export default app;
import filezRouter from "./api/filez.js"

app.use(express.json());

app.use("/", filezRouter)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});

