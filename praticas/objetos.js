// Criando um objeto com dados de um produto
const produto = {
    nome: 'Eixo Dianteiro',
    preco: 30,
    disponivel: true
}
console.log(produto)

// Acessando dados com ponto e colchetes
const configuracoes = {
    tema: 'escuro',
    notificacoes: 0,
    idioma: 'pt-BR'
}
console.log("Tema: ", configuracoes.tema)
console.log("Idioma: ", configuracoes['idioma'])