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
let b = 0;

while (entradas[b] !== "fim") {
    console.log("Nome: ", entradas[b]);
    b++
}

//6. Número proibido
console.log("6. Número proibido")
for (a = 1; a <= 20; a++) {
    if (a === 10) {
        console.log("Número proibido encontrado! Encerrando...")
        break;
    }
    console.log(a);
}

//7. Validação de Login
console.log("7. Validação de Login")
const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

let j = 0;
let acessoLiberado = false;

while (j < tentativas.length && j < 3) {
    if (tentativas[j] === senhaCorreta) {
        console.log("Acesso permitido!");
        acessoLiberado = true;
        break;
    } else {
        console.log(`Tentativa ${j + 1} inválida.`);
    }
    j++;
}

if (!acessoLiberado) {
    console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}