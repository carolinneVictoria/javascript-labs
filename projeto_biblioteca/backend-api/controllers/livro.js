const { getAllBooks, getBookId, insertBook, modificaLivro, deletarLivroPorId } = require('../services/livro');

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
        if (id && Number(id)) {
            const livro = getBookId(id);
            res.send(livro);
        } else {
            res.status(422).send('ID inválido. O ID deve ser um número positivo.');
            return;
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

function postLivro (req, res) {
    try {
        const livroNovo = req.body; // Obtém os dados do novo livro a partir do corpo da requisição
        if (req.body.nome) {
            insertBook(livroNovo);
            res.status(201)
            res.send('Livro inserido com sucesso!');
        } else {
            res.status(422).send('O campo "nome" é obrigatório para inserir um novo livro.');
        }
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

function deleteLivro (req, res) {
    try {
        const id = req.params.id;
        deletarLivroPorId(id);
        res.status(200).send(`Livro com ID ${id} deletado com sucesso!`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}