const fs = require('fs');
const { getAllBooks } = require('../services/livro');

function getLivros (req, res) {
    try {
        // throw new Error('Erro de teste'); -- Para testar o tratamento de erro
        const livros = getAllBooks();
        res.send(livros);
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
};

module.exports = {
    getLivros
}