const express = require('express');
const rotaFavoritos = require('./routes/favoritos');
const rotaLivros = require('./routes/livros');
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(cors({ origin: '*' })); // Middleware para habilitar o CORS

const port = 8000;


app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);

app.listen(port, () => {
    console.log(`Escutando a porta: ${port}`);
});