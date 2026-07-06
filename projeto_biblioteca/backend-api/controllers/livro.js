const fs = require('fs');

function getLivros (req, res) {
    try {
        // throw new Error('Erro de teste'); -- Para testar o tratamento de erro
        const livros = JSON.parse(fs.readFileSync('../livros.json', 'utf-8'));
        res.send(livros);
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
};

module.exports = {
    getLivros
}