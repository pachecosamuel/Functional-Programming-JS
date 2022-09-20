function generateRandomNumbers(min, max, forbiddenNums) {
    if (min > max) [max, min] = min, max;

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;

        if (forbiddenNums.includes(aleatorio)) {
            reject("Número repetido.");
        } else {
            resolve(aleatorio);
        }
    })
}

async function generateMegaSena(amountNums) {
    const numeros = [];

    try {
        //Gerando um array de um certo tamanho
        for (let _ of Array(amountNums).fill()) {
            numeros.push(await generateRandomNumbers(1, 60, numeros))
        }
    } catch (e) {
        throw "It's boring :("
    }

    return numeros;
}

generateMegaSena(5)
    .then(console.log)
    .catch(console.log)

// generateRandomNumbers(1, 5, [1, 5])
//     .then(console.log)
//     .catch(console.log)