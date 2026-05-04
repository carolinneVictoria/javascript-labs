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

// Lidando com arrays dentro de objetos
const receita = {
    nome: 'Panqueca',
    ingredientes: ['farinha', 'ovos', 'sal'],
    tempoPreparo: '15 minutoss'
}
console.log('Igrediente Complementar: ', receita.ingredientes[2])

