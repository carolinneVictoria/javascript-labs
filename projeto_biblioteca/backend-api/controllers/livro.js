function getLivros (req, res) {
    try {
        // throw new Error('Erro de teste'); -- Para testar o tratamento de erro
        res.send('Olá mundo!');
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao processar a requisição.');
    }
};

module.exports = {
    getLivros
}