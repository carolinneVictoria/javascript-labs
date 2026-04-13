// 1. Crie uma variável idade. Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18. O resultado deve ser true ou false.
let idade = 16;
console.log(idade >= 18);
console.log("1. A idade é " + idade);

// 2. Crie duas variáveis com notas de um aluno. Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.
let portugues = 5.5;
let matematica = 7.8;
let media = (portugues + matematica)/2;

console.log(media >= 7);
console.log("A média é de " + media);

// 3. Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
let valorCompra = 35.90;
let valorPago = 50;
let calculoTroco = valorPago - valorCompra;

console.log("O seu troco é de R$" + calculoTroco.toFixed(2) + "!");

// 4. Crie duas variáveis com senhas digitadas em momentos diferentes. Exiba no console o resultado da comparação que verifica se as senhas são iguais.
let senha1 = "123abc";
let senha2 = "123abc"

console.log(senha1 === senha2);

// 5. Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.
let totalAulas = 80;
let faltas = 25;
let limiteFaltas = totalAulas * 0.25;

console.log(faltas > limiteFaltas);

// 6. Crie duas variáveis booleanas: temLogin e temSenha.
// Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.
let temLogin = true;
let temSenha = true;

console.log(temLogin && temSenha);

// 7. Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponivel = false;
console.log("Disponibilidade invertida: " + !disponivel);

// 8. Crie duas variáveis numéricas. Exiba no console o resultado da expressão que verifica se: os dois números são pares e os dois números são iguais.
let valorA = 5;
let valorB = 7;

console.log(
    valorA % 2 === 0 &&
    valorB % 2 === 0 &&
    valorA === valorB
);

// 9. Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
let total = 120;
let porcentagem = total * 0.15;
console.log("15% de 120 é igual a " + porcentagem);

// 10. Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
let operacao = 2 + 3 * 5;
console.log("Resultado da operação: " + operacao);
console.log("A multiplicação é feita primeiro por causa da ordem de precedência dos operadores");