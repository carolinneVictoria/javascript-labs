// 1. Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
function saudacao(){
    console.log("Olá! Seja bem-vindo(a)!");
}
saudacao();

// 2. Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
function apresentarPessoa(nome, idade){
    console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
}
apresentarPessoa("Carol", 21);

// 3. Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura. A função deve calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura) ---- A função deve retornar o valor do IMC. Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.
function calcularIMC(peso, altura){
    return (peso/(altura * altura)).toFixed(2);
}
let resultado = calcularIMC(44, 1.50);
console.log("Seu IMC é: " + resultado);

// 4. Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
function verificarAprovacao(nota){
    if (nota >= 7){
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!");
    }
}
verificarAprovacao(8);

// 5. Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.
function ehPar(numero){
    return numero % 2 === 0;
}
console.log("Esse número é par?: " + ehPar(4));

// 6. Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
function somaDeNumeros(numero1, numero2){
    return numero1 + numero2;
}
let numero1 = 15;
let numero2 = 16;
console.log("A soma entre " + numero1 + " e " + numero2 + " é: " + somaDeNumeros(numero1, numero2));

// 7. Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco. A função deve receber dois parâmetros: valorCompra e valorPago.
// A função deve: - calcular o valor do troco - retornar o valor calculado. Depois, utilize o retorno da função para exibir o valor do troco no console.
function calcularTroco(valorCompra, valorPago){
    return (valorPago - valorCompra).toFixed(2);
}
console.log("O seu troco é de R$ " + calcularTroco(24.50, 50));

// 8. Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
const somarArrow = (a, b) => a + b;
console.log("Soma (arrow): " + somarArrow(3, 7));

// 9. Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
function executarAcao(acao) {
    acao();
}
executarAcao(function() {
    console.log("Executando ação!");

});

// 10. Desafio do quiz: Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada
// (simule a resposta com uma variável).
function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = respostaCorreta;
    if (respostaUsuario === respostaCorreta) {
        console.log("Resposta correta!");
    } else {
        console.log("Resposta errada!");
    }
}

fazerPergunta("Em Stardew Valley, em qual estação nasce a Carambola? ", "Verão");