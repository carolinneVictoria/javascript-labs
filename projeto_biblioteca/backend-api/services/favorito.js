const fs = require('fs');

function getAllFavorites () {
    return JSON.parse(fs.readFileSync('./favoritos.json', 'utf-8'));
}

function insertFavorite (id) {
    const favoritos = JSON.parse(fs.readFileSync('./favoritos.json', 'utf-8'));
    const livros = JSON.parse(fs.readFileSync('./livros.json', 'utf-8'));
    
    const livroInserido = livros.find(livro => livro.id == id);
    const novaListaDeFavoritos = [...favoritos, livroInserido]; // spread
    fs.writeFileSync('./favoritos.json', JSON.stringify(novaListaDeFavoritos));
}

function deleteFavoriteById(id) {
    let favoritos = JSON.parse(fs.readFileSync('./favoritos.json', 'utf-8'))

    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id)
    fs.writeFileSync("./favoritos.json", JSON.stringify(favoritosFiltrados))
}

module.exports = {
    getAllFavorites,
    deleteFavoriteById,
    insertFavorite,
}