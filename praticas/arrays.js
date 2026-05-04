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