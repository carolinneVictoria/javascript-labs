const { getAllBooks, getBookId, insertBook, modificaLivro } = require('../services/livro');

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
        res.status(500).send(error.message);
    }
};

function postLivro (req, res) {
    try {
        const livroNovo = req.body; // Obtém os dados do novo livro a partir do corpo da requisição
        insertBook(livroNovo);
        res.status(201).send('Livro inserido com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchLivro (req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        modificaLivro(body, id);

        res.status(200).send('Livro modificado com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro
}