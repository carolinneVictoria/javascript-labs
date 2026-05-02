// Função sem parâmetros
function saudacao(nome = "") {
    if (nome) {
        console.log(`Olá, ${nome}! Boas vindas!`);
    } else {
        console.log("Olá! Boas vindas!");
    }
}

saudacao("Lucas");
saudacao();

// Desconto de preço
function calcularDesconto(preco, desconto = 10) {
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}

console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));

// Calcular média com arrow function
const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

console.log(calcularMedia(7, 9));

// Verificar se um número é par ou ímpar
const verificarParidade = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Impar"
    }
};
console.log(verificarParidade(8));
console.log(verificarParidade(5));

// Calcular Frete
function calcularFrete(distancia) {
    if (distancia <= 5) {
        console.log("Frete fixo de R$5,00.")
    } else if (distancia <= 20) {
        console.log("Frete no valor de R$" + distancia * 0.5)
    } else {
        console.log("Frete fixo de R$20,00.")
    }
}
calcularFrete(15)