// 1. Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
let nomes = ["Carolinne", "Alice", "Maria Júlia", "Merrylee", "Katniss"];

for (let i=0; i < nomes.length; i++){
    console.log(nomes[i]);
}

// 2. Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
let frutas = ["Banana", "Kiwi", "Maça"];
console.log(frutas);

frutas.push("Morango");
frutas.shift();
console.log(frutas);

// 3. Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
let cidades = ["São Paulo", "Curitiba", "Florianópolis", "Porto Alegre"];
console.log("A quantidade de itens que tem no array é: " + frutas.length);

// 4. Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
console.log("A soma dos números é: " + soma);

// 5. Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
let notas = [5, 9, 6, 3];
let somaNotas = 0;

for(let nota of notas){
    somaNotas += nota;
}
let media = somaNotas/notas.length;
if (media >= 7){
    console.log("Aprovado com média: " + media);
} else {
    console.log("Reprovado com média: " + media);
}

// 6. Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
let usuarios = ["Laura", "Rafaela", "Leonor"];
usuarios.forEach(function(usuario){
    console.log("Olá " + usuario + "!");
});

// 7. Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
let precos = [100, 200, 300]
let comDescontos = precos.map(function(preco){
    return preco * 0.9;
});
console.log("Preços com até 10% de desconto: " + comDescontos);

// 8. Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
let idades = [23, 55, 12, 43, 50];
let maiores = idades.filter(function(idade){
    return idade >= 18;
})
console.log("Maiores de idade: " + maiores);

// 9. Crie um array com os preços de produtos em um carrinho de compras. Utilize um laço for ou for...of para calcular o valor total da compra.
// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.
let carrinho = [50, 30, 20];
let total = 0;

for(let preco of carrinho){
    total += preco;
}
let totalComDesconto = total * 0.8;
console.log("Total con desconto de 20%: R$ " + totalComDesconto);

// 10. Crie dois arrays: - um array com nomes de tarefas - outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas. Exiba a lista de tarefas pendentes no console.
let tarefas = ["Estudar", "Lavar a louça", "Ir ao mercado", "Caminhar", "Dormir"];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function(tarefa, index) {
    return concluida[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);