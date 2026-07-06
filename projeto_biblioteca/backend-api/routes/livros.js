const { Router } = require('express');
const { getLivros, getLivro, postLivro, patchLivro } = require ("../controllers/livro.js");

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/", (req, res) => {
    res.send('Recebido, voce fez uma requisição do tipo Delete!');
})

module.exports = router;