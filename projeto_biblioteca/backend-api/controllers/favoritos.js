const { deleteFavoriteById, getAllFavorites, insertFavorite } = require ("../services/favorito")

function getFavorites (req, res) {
    try {
        const favoritos = getAllFavorites();
        res.send(favoritos);
    } catch (error) {
        res.status(500).send({error: error.message,});
    }
}

function postFavorite (req, res) {
    try {
        const id = req.params.id;
        insertFavorite(id);
        res.status(201)
        res.send('Livro inserido com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

function deleteFavorite (req, res) {
    try {
        const id = req.params.id;
        deleteFavoriteById(id);
        res.status(200).send("Favorito deletado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getFavorites,
    postFavorite,
    deleteFavorite
}