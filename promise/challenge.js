const fs = require('fs');
const path = require('path');
const way = path.join(__dirname, "data.txt");

function lerArquivo(caminho) {

    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function (_, conteudo) {
            try {
                resolve(conteudo.toString());
            } catch (error) {
                reject("Erro na leitura do arquivo")
            }
        })
    })
}

lerArquivo(way)
    .then(
        v => console.log(v),
        err => console.log(err)
    )
    // .then(content => content.split("\n"))
    // .then(lines => lines.join(","))
    // .then(ctt => `O valor final é: ${ctt}`)
    // .then(console.log);