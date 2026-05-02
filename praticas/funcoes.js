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

// Processamento de Pedido

function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}

function processarPedido(nomeCliente, tipoCliente, callback) {
    console.log("Processando pedido de " + nomeCliente)
    callback(nomeCliente, tipoCliente);
}

processarPedido("Carol", "vip", mensagemPersonalizada);

// Mensagem pós processamento
function mostrarResposta(nome) {
    setTimeout(() => {
        console.log("Olá " + nome + "! Aqui está a resposta para sua dúvida.");
    }, 3000);
}

function responderUsuario(nomeUsuario, callback) {
    console.log("Processando sua pergunta...")
    callback(nomeUsuario)
}

responderUsuario("Fernanda", mostrarResposta)

// Avaliando a pontuação de um usuário
function exibirMensagemDesempenho(pontuacao) {
    if (pontuacao >= 70) {
        console.log("Parabéns, você foi aprovado!")
    } else if (pontuacao > 50 && pontuacao <= 69) {
        console.log("Tente mais! Você precisa de reforço!")
    } else {
        console.log("Você foi reprovado! Continue se esforçando.")
    }
}

function avaliarDesempenho(pontuacaoFinal, callback) {
    console.log("Pontuação: " + pontuacaoFinal)
    callback(pontuacaoFinal)
}

avaliarDesempenho(82, exibirMensagemDesempenho);
avaliarDesempenho(52, exibirMensagemDesempenho);
avaliarDesempenho(40, exibirMensagemDesempenho);
