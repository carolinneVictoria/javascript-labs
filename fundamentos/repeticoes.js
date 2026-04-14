//1. Use um for para mostrar no console os números de 1 até 10, um por linha.
for (let contador = 1; contador <= 10; contador++) {
    console.log(contador);
};

//2. Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
let soma = 0;
for (let contador = 1; contador <= 100; contador++) {
    soma += contador;
}
console.log("O resultado da soma é: " + soma);

//3. Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
let numeroTabuada = 6;
for (let i = 1; i <= 10; i++) {
    let resultado = (numeroTabuada * i);
    console.log(resultado);
}

//4. Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let contadorA = 10;
while (contadorA >= 0) {
    console.log(contadorA);
    contadorA--;
}
console.log("Contagem finalizada");

//5. Simule a digitação de números usando uma variável numeroDigitado. Use um do...while para repetir a execução até que o valor seja 0.
//Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final. Considere que o valor de numeroDigitado
// é alterado manualmente a cada repetição.
let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
    if (repeticoes === 0) {
        numeroDigitado = 5;
    } else if (repeticoes === 1) {
        numeroDigitado = 10;
    } else {
        numeroDigitado = 0;
    }

    if (numeroDigitado !== 0) {
        quantidade++;
    }

    repeticoes++;
} while (numeroDigitado !== 0);

console.log("Total de números digitados: " + quantidade);

//6. Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for. Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:
// "Acertou!" se for igual ----- "Tente novamente" se for diferente. As tentativas devem ser simuladas por variáveis dentro do laço.
const numeroSecreto = 13;

for(let tentativa = 1; tentativa <= 3; tentativa++){
    let numeroTentado;
    if(tentativa === 1){
        numeroTentado = 3;
    } else if(tentativa === 2){
        numeroTentado = 5;
    } else {
        numeroTentado = 13;
    }

    if (numeroTentado === numeroSecreto){
        console.log("Acertou!");
    } else {
        console.log("Tente novamente!");
    }
}

//7. Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.
let anoNascimento = 1985;
let anoAtual = 2000;
let idade = 0;

for(contagem = anoNascimento; contagem <= anoAtual; contagem++){
    console.log("Idade em " + anoNascimento + ": " + idade);
    idade++;
    anoNascimento++;
}

//8. Mostre todos os números pares entre 1 e 50 usando for.
for(let contador = 1; contador <= 50; contador++){
    if(contador % 2 === 0){
        console.log(contador);
    }
}

//9. Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
let multiplos3 = 0;
for(let contador = 1; contador <= 100; contador++){
    if(contador % 3 === 0){
        multiplos3++;
    }
}
console.log("Contagem de números divisiveis por 3: " + multiplos3);

//10. Crie uma variável opcao. Use um do...while para exibir repetidamente as opções:
// 1 - Ver saldo -- 2 - Fazer depósito -- 3 - Sair
// O menu deve continuar sendo exibido até que a opção seja 3. Mostre no console a ação correspondente a cada opção.
let opcao;
let escolha = 0;

do{
    if(escolha === 0){
        opcao = 1;
    } else if(escolha === 1){
        opcao = 2;
    } else {
        opcao = 3;
    }

    if (opcao === 1){
        console.log("1. Ver Saldo.");
    } else if(opcao === 2){
        console.log("2. Fazer Depósito.");
    } else {
        console.log("3. Sair.");
    }

    escolha++;

} while(opcao !== 3);
