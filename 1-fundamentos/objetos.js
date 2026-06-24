// 1. Crie um objeto com seu nome, idade e profissão.
let pessoa = {
    nome: "Carolinne Victória",
    idade: 21,
    profissao: "Programadora"
};

// 2. Acesse e exiba o valor da propriedade "nome" no console.
console.log(pessoa.nome);

// 3. Modifique a propriedade "idade" com um novo valor.
pessoa.idade = 22;

// 4. Adicione ao objeto uma nova propriedade chamada "cidade".
pessoa.cidade = "Curitiba";
console.log("Cidade adicionada:", pessoa.cidade);

// 5. Crie uma função que receba um objeto pessoa contendo as propriedades: nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.
function dadosPessoais(pessoa) {
    console.log("Nome: " + pessoa.nome + "\nIdade: " + pessoa.idade + "\nProfissão: " + pessoa.profissao + "\nCidade: " + pessoa.cidade);
}
dadosPessoais(pessoa);

// 6. Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 22 },
    { nome: "Mariana", idade: 15 }
];

// 7. Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
for (let p of pessoas) {
    if (p.idade >= 18) {
        console.log(`${p.nome} é maior de idade.`);
    }
}

// 8. Crie um objeto chamado usuario com as propriedades nome e saudacao. A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa,
// utilizando o nome armazenado no objeto por acesso direto à propriedade.
const usuario = {
    nomeUsuario: "Ana",
    saudacao: function () {
        console.log("Olá " + usuario.nome);
    }
};
usuario.saudacao();
// 9. Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado anteriormente.
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 10. Crie um objeto produto com preco e quantidade, e calcule o valor total da compra (preco * quantidade).
const produto = {
    preco: 25,
    quantidade: 4
};
const valorTotal = produto.preco * produto.quantidade;
console.log(`Valor total da compra: R$${valorTotal}`);