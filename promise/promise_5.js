function funcionarOuNao(valor, chanceErro) {

    return new Promise((resolve, reject) => {

        try {
            if (Math.random() < chanceErro) {
                sol.log("rs")
                reject("A error has happend");
            } else {
                resolve(valor);
            }
        } catch (error) {
            reject(error);
        }

    })
};

funcionarOuNao("I'm gonna make a test", 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(console.log("Fim"))