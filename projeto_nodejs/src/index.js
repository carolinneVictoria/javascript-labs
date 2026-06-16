const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
    if(erro){
        console.log("Qual é o erro?", erro.code)
        return
    }
    contaPalavras(texto);
})

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}

function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.map((paragrafo) => {
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function verificarPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ')
    const resultado = {}
    // objeto[propriedade] = valor
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })
    console.log(resultado);
}