import express from "express";
import connectionFromDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import "dotenv/config";
import mongoose from "mongoose";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const db = await connectionFromDatabase();

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com banco feita");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;