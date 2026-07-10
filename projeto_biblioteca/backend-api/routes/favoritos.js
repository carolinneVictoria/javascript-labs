const { Router } = require('express');
const { getFavorites, postFavorite, deleteFavorite } = require('../controllers/favoritos.js');

const router = Router();

router.get("/", getFavorites);

router.post("/", postFavorite);

router.delete("/:id", deleteFavorite);

module.exports = router;