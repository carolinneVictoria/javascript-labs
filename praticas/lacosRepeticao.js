//1. Contagem de números
console.log("1. Contagem de números.");
const numeroFinal = 10;
let contagem = 1;

while (contagem <= numeroFinal) {
    console.log(contagem);
    contagem += 1;
}

//2. Contagem regressiva
console.log("2. Contagem regressiva.")
for (i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Lançar!");

//3. Números Pares
console.log("3. Números Pares.")
for (i = 1; i <= numeroFinal; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4. Exibindo os caracteres
console.log("4. Exibindo os caracteres.")
const senha = "seguranç@2025";

for (let i = 0; i < senha.length; i++) {
    console.log(`Caractere ${i + 1}: ${senha[i]}`);
}

//5. Solicitando nomes até digitar fim
console.log("5. Solicitando nomes até digitar fim")
const entradas = ["ana", "carla", "manoel", "fim", "julia"];
let i = 0;

while (entradas[i] !== "fim"){
    console.log("Nome: ", entradas[i]);
    i++
}