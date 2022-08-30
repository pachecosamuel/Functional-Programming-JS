const fs = require('fs');
const path = require('path');
const way = path.join(__dirname, "data.txt");

function lerArquivo(caminho) {

    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}

lerArquivo(way)
    .then(content => content.split("\n"))
    .then(lines => lines.join(","))
    .then(ctt => `O valor final é: ${ctt}`)
    .then(console.log);