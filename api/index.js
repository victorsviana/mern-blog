import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 ☕ > http://localhost:3000");
});