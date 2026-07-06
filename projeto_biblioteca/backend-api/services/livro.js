const fs = require('fs');


function getAllBooks () {
    return JSON.parse(fs.readFileSync('../livros.json', 'utf-8'));
}

function getBookId (id) {
    const livros = JSON.parse(fs.readFileSync('../livros.json', 'utf-8'));
    const livroFiltrado =livros.filter( livro => livro.id === id);
    return livroFiltrado;
}

module.exports = {
    getAllBooks,
    getBookId
}