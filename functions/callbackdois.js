const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, "data.txt");

function showContent(erro, conteudo) {
    console.log(conteudo.toString());
}

console.log("Início leitura assíncrona");
const archive = fs.readFile(caminho, {}, showContent);
console.log(archive);
console.log("Fim leitura assíncrona");
