// Lista de Exercicios 1 - Fundamentos de Programação

// 1. Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]!
// Seja bem-vindo(a) ao curso de JavaScript!"

let nome = "Carolinne Victória";
console.log("1. Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!");

// 2. Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
let anoAtual = 2026;
let anoNascimento = 2005;
let idade = anoAtual - anoNascimento;

console.log("2. Você tem " + idade + " anos.");

// 3. Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."
let cidade = "Ortigueira";
let estado = "Paraná";
let pais   = "Brasil";

console.log("3. Você está em " + cidade + " - " + estado + ", " + pais + ".");

// 4. Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
let temCarteira = true;
console.log("4. O tipo da variável é " + typeof temCarteira);

// 5. Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
let saldoInicial = 0;
saldoInicial += 200;
saldoInicial -= 50;

console.log("5. O saldo é de " + saldoInicial + " reais.");

// 6. Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
let matematica = 5.5;
let portugues = 8.5;
let ciencias = 10.0;

media = (matematica + portugues + ciencias)/3;
console.log("A média é " + media + "!");

// 7. Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000;
let novoSalario = salario * 1.10;

console.log("Após um aumento de 10% o novo salário é R$" + novoSalario.toFixed(2) + "!");

// 8. Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.
let clique = 0;
clique++;
clique++;
clique++;

console.log("O total de clique é " + clique + ".");

// 9. Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.
const PI = 3.14;
console.log("PI é uma constante e por isso não pode ser alterado. PI: " + PI);

// 10. Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado 
// e o tipo final no console usando typeof.
let mensagem = "Julia";
let numero = "33";
let frase = "Olá eu sou a " + mensagem + "! Tenho " + numero + " anos de idade!";

console.log(typeof frase);
console.log(frase);