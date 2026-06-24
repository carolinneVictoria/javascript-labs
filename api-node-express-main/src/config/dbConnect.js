import mongoose from "mongoose";
import dns from "dns";

// Força o Node a usar DNS do Google/Cloudflare (resolve problema de SRV no roteador local)
dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function connectionFromDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);

        console.log("Mongo conectado");
        return mongoose.connection;
    } catch (erro) {
        console.error("Erro no connect:", erro);
        throw erro;
    }
}

export default connectionFromDatabase;