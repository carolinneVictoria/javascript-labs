// 1. Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = {
    nome: 'Ana',
    idade: 23,
    email: 'ana@gmail.com'
}
const { nome, idade, email } = pessoa;
console.log(nome, idade, email);

// 2. Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const linguagens = ['java', 'python', 'c#'];
const [ling1, ling2, ling3] = linguagens;

console.log(ling1, ling2, ling3);

// 3. Crie uma função que receba vários números como parâmetros usando o operador rest (...). Utilize um laço for para somar todos os valores recebidos e retorne o total.
function somarTudo(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}
console.log(somarTudo(1, 2, 3, 4));

// 4. Crie dois arrays de frutas e combine-os usando o operador spread.
let frutasVermelhas = ['morango', 'maçã', 'amora', 'framboesa'];
let frutas = ['banana', 'kiwi'];

let todasFrutas = [...frutasVermelhas, ...frutas];
console.log(todasFrutas);

// 5. Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const dados1 = { nome: "Joana" };
const dados2 = { idade: 32 };
const perfil = { ...dados1, ...dados2 };

console.log(perfil);

// 6. Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function saudacao(nome = "visitante") {
    console.log(`Olá, ${nome}!`);
}
saudacao();
saudacao("Marcos");

// 7. Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();

console.log(`Hoje é ${dia}/${mes}/${ano}`);

// 8. Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

// 9. Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.
function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);

// 10. Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro,
// usando concatenação de strings.
function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.descrever = function () {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());