const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    try {
        // throw new Error('Erro de teste'); -- Para testar o tratamento de erro
        res.send('Olá mundo!');
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
})

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