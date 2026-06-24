// Lista de Compras
let listaCompras = ['arroz', 'macarrão', 'óleo']
console.log("Segundo item da lista: " + listaCompras[1])
listaCompras[listaCompras.length - 1] = 'feijão'
console.log("Lista de Compras após modificação: " + listaCompras)

// Total de despesas
const despesas = [120, 80, 45.5, 200, 60];
let soma = 0;

for (let i = 0; i < despesas.length; i++) {
    soma += despesas[i]
}
console.log(`Total de despesas: R$ ${soma}`);

// Exibindo nomes com for of
const estudantes = ['Carla', 'João', 'Maria', 'Lucas'];
for (const nome of estudantes) {
    console.log("Estudante: ", nome);
}

// Exibindo mensagem com forEach
const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
mensagens.forEach(msg => {
    console.log("Notificação:", msg);
});

// Adicionando e removendo itens de uma lista
const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas[tarefas.length + 1] = 'Ir na Academia'
console.log("Lista após adicionar: " + tarefas)

tarefas.pop()
console.log("Lista após retirar a ultima tarefa: " + tarefas)

// Clonando um array
const pedidos = ['camiseta', 'calça', 'tênis'];
const pedidosCopia = pedidos.slice()

pedidosCopia.push('bota')

console.log("Array Original: " + pedidos)
console.log("Array Copiado: " + pedidosCopia)

// Buscando itens em uma lista
const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';
if (livros.indexOf(livroProcurado) !== -1) {
    console.log("O livro " + livroProcurado + "está disponivel!")
} else {
    console.lof("O livro " + livroProcurado + "não foi encontrado.")
}

// Transformando dados com map()
const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map(preco => preco * 0.9);
console.log("Preços com desconto:", precosComDesconto);

// Filtrando valores
const participantes = [
    { nome: 'Ana', idade: 17 },
    { nome: 'Bruno', idade: 22 },
    { nome: 'Carla', idade: 19 },
    { nome: 'Daniel', idade: 15 },
    { nome: 'Eduarda', idade: 25 }
];

const maiores18 = participantes.filter(pessoa => {
    pessoa.idade >= 18 ? console.log(`Acesso liberado para: ${pessoa.nome}`) : false;
    return pessoa.idade >= 18;
});
const aprovados = maiores18.map(pessoa => pessoa.nome)
console.log("Lista de aprovados:", aprovados);

// Painel de controle de produtos
const produtos = [
    { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
    { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
    { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
    { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log("Relatório de Produtos vendidos: ")
for (const produto of produtos) {
    console.log("Produto: ", produto.nome, " | Preço: ", produto.preco, " | Quantidade Vendida: ", produto.quantidadeVendida);
}

console.log("Produtos com alto volume de vendas (> 100 unidades):")
const maisDeCemUnidades = produtos.filter(prod => {
    prod.quantidadeVendida >= 100 ? console.log(prod.nome) : false;
    return prod.quantidadeVendida >= 100;
});

console.log("Total de vendas por produto:")
let maisLucrativo = { nome: '', totalVendas: 0 };

produtos.forEach(prod => {
    const totalVendidoProduto = prod.preco * prod.quantidadeVendida;

    console.log(`Produto: ${prod.nome} | Total vendido: R$ ${totalVendidoProduto}`);

    if (totalVendidoProduto > maisLucrativo.totalVendas) {
        maisLucrativo.nome = prod.nome;
        maisLucrativo.totalVendas = totalVendidoProduto;
    }
});

console.log(`\nProduto mais lucrativo: ${maisLucrativo.nome} (R$ ${maisLucrativo.totalVendas})`);


// Crie uma lista de produtos
// A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado
let itens = ['computador', 'telefone', 'mouse', 'teclado']

// Exiba essa lista no console quando abrir o index.html.
console.log(itens)

// Mostre no console quantos produtos tem nessa lista.
console.log("Quantidade de produtos: ", itens.length)

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
itens = itens.filter(produto => produto !== 'mouse')
console.log("Lista sem o mouse: ", itens)

// Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe
// e mostre também o nome deste produto, caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
const itemProcurado = 'computador'
if (itens.indexOf(itemProcurado) !== -1) {
    console.log(`O produto ${itemProcurado} está disponivel e foi encontrado!`)
} else {
    console.log(`O produto ${itemProcurado} não foi encontrado!`)
}

// Remova o segundo item da sua lista.
itens.splice(1, 1)
console.log(itens)

// Crie uma lista de apenas números: 1, 3, 5, 7, 0, 9
let numeros = [1, 3, 5, 7, 0, 9]

// Ordene essa lista do menor para o maior.
numeros.sort((a, b) => a - b)
console.log("Lista Ordenada: ", numeros)

// Retire o primeiro número desta lista.
numeros.shift()
console.log(numeros)

// Inverta toda ordem da sua lista, por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
numeros.reverse()
console.log(numeros)

// Crie uma string que contenha o dia de hoje:
let hoje = '04/05/2026';

// Separe essa data em variáveis: dia (apenas o dia), mês (apenas o mês),
// e ano (apenas o ano).
let partes = hoje.split('/');

let dia = partes[0];
let mes = partes[1];
let ano = partes[2];

console.log("Dia:", dia);
console.log("Mês:", mes);
console.log("Ano:", ano);