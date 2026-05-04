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
for (const nome of estudantes){
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
if(livros.indexOf(livroProcurado) !== -1){
    console.log("O livro " + livroProcurado + "está disponivel!")
} else {
    console.lof("O livro " + livroProcurado + "não foi encontrado.")
}

// Transformando dados com map()
const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map(preco => preco * 0.9);
console.log("Preços com desconto:", precosComDesconto);