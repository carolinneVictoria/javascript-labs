//1. Classificando a temperatura
console.log("1. Classificando a temperatura.");
const temperatura = 10;

if (temperatura < 15){
    console.log("Frio!");
} else if (temperatura >= 15 && temperatura <= 25){
    console.log("Agradável!");
} else {
    console.log("Quente!")
}

//2. Horario de funcionamento
console.log("2. Horario de funcionamento.")
const diaDaSemana = 3;

if (diaDaSemana === 6 || diaDaSemana === 0){
    console.log("A loja esta aberta em horário especial:10h às 14h.");
} else {
    console.log("Loja aberta em horário normal: 9h às 18h.");
}

//3. Autenticação de Login
console.log("3. Autenticação de Login.")
const usuario = "carol";

const mensagem = (usuario === "admin") ? "Login bem sucedido" : "Usuario invalido";
console.log(mensagem)

//4. Verificando status de pagamento
console.log("4. Verificando status de pagamento")
const status = "aprovado"

switch(status){
    case "pendente":
        console.log("Pagamento pendente!");
        break;
    case "aprovado":
        console.log("Pagamento aprovado!");
        break;
    case "recusado":
        console.log("Pagamento recusado!");
        break;
    default:
        console.log("Status invalido.")
        break;
}

//5. Verificar acesso a nível de jogo
console.log("5. Verificar acesso a nível de jogo")
const pontos = 60;
const vidas = 1;

if (pontos >= 60 && vidas > 0){
    console.log("Próximo nivel liberado!")
} else {
    console.log("Não pode avançar para o próximo nível.");
}