// 1. Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica".
// Caso contrário, mostre "Venda proibida para menores de 18 anos".
let idadeUsuario = 17;

if(idadeUsuario >= 18){
    console.log("Pode comprar bebida alcoolica.")
} else{
    console.log("Venda proibida para menores de 18 anos.");
}

// 2. Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".
let horaAtual = 7;

if(horaAtual >= 6 && horaAtual < 12){
    console.log("Bom dia!");
} else if(horaAtual >= 12 && horaAtual <= 18){
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");
}

// 3. Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.
let numero = -4;

if (numero === 0){
    console.log("O número " + numero + " é igual a 0!");
} else if (numero < 0){
    console.log("O número " + numero + " é negativo!");
} else {
    console.log("O número " + numero + " é positivo!");
}

// 4. Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).
let notaUsuario = 5;

if(notaUsuario >= 9){
    console.log("A");
} else if (notaUsuario >= 8){
    console.log("B");
} else if(notaUsuario >= 6){
    console.log("C");
} else if(notaUsuario >= 4){
    console.log("D");
} else {
    console.log("E");
}

// 5. Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
let numeroB = 47;

let resultado = (numeroB % 2 === 0) ? "Par" : "Impar";
console.log("O resultado é " + resultado);

// 6. Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
let opcao = 2;

switch(opcao){
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Insira uma opção válida!")
};

// 7. Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".
let email = "";
if(email){
    console.log("Email válido.");
} else {
    console.log("Preencha o campo de email.");
};

// 8. Crie duas variáveis: senha ----- senhaValida (valor true ou false, definido manualmente)
// Se senhaValida for verdadeira, mostre "Senha válida". Caso contrário, mostre "Senha muito curta". 📌 Observação:
// Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.
let senha = "123abc";
let senhaValida = true;

if (senhaValida === true){
    console.log("Senha válida");
} else {
    console.log("Senha muito curta.");
};

// 9. Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".
let saldoDisponivel = 1236;
let valorCompra = 560;

if (saldoDisponivel > valorCompra){
    console.log("Compra Aprovada!");
} else {
    console.log("Saldo Insuficiente!");
}
// 10.Crie três variáveis: nome ----- email--------- idade
// Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).
// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".
let nome = "Carol";
let emailUsuario = "carol@123.com";
let idade = 23;
let formularioValido = true;

if (formularioValido === true){
    console.log("Formulario enviado com sucesso!");
} else {
    console.log("Preencha todos os campos do formulário!");
};