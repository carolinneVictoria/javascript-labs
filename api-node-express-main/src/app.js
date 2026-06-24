import express from "express";
import connectionFromDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import "dotenv/config";

const db = await connectionFromDatabase();

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com banco feita");
});

const app = express();
app.use(express.json());

routes(app);

export default app;