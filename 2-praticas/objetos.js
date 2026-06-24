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

/// Removendo uma propriedade
const carro = {
    marca: 'Ford',
    modelo: 'F250',
    ano: 2005,
    modeloAntigo: 'F249'
};
delete carro.modeloAntigo
console.log(carro)

// Iterando um array de objetos
const dispositivos = [
    { nome: 'Impressora', status: 'Ativo' },
    { nome: 'Scanner', status: 'Inativo' },
    { nome: 'Projetor', status: 'Ativo' },
]

for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`)
}

// Criando métodos dentro de um objeto
const maquina = {
    nome: 'Mondial Dolce Crema',
    funcionando: true,
    exibirStatus: function () {
        if (this.funcionando) {
            console.log(`A máquina ${this.nome} está em funcionamento.`);
        } else {
            console.log(`A máquina ${this.nome} está parada.`);
        }
    }
}
maquina.exibirStatus();