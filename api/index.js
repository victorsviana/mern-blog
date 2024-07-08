import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 ☕ > http://localhost:3000");
});
