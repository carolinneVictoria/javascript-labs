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