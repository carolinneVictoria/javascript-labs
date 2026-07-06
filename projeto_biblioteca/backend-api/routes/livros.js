const { Router } = require('express');
const { getLivros } = require ("../controllers/livro.js");

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
    res.send('Recebido, voce fez uma requisição do tipo Post!');
})

router.patch("/", (req, res) => {
    res.send('Recebido, voce fez uma requisição do tipo Patch!');
})

router.delete("/", (req, res) => {
    res.send('Recebido, voce fez uma requisição do tipo Delete!');
})

module.exports = router;