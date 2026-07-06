const { getAllBooks, getBookId } = require('../services/livro');

function getLivros (req, res) {
    try {
        // throw new Error('Erro de teste'); -- Para testar o tratamento de erro
        const livros = getAllBooks();
        res.send(livros);
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
};

function getLivro (req, res) {
    try {
        const id = req.params.id; // Obtém o ID do livro a partir dos parâmetros da rota
        const livro = getBookId(id);
        res.send(livro);
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
};

module.exports = {
    getLivros,
    getLivro
}