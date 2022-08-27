const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

const caminho = path.join(__dirname, "dados.txt");

console.log(caminho);

function exibirConteudo(erro, conteudo) {
    console.log(conteudo.toString());
}

console.log("Síncrona");
fs.readFile(caminho, {}, exibirConteudo);

console.log("Assíncrona");
const Sincrono = fs.readFileSync(caminho)
console.log(Sincrono.toString());