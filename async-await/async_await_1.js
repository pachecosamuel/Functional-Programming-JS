function esperarPor(time = 2000) {

    return new Promise(function (resolve) {
        setTimeout(() => resolve("rs"), time);
    })
}

// esperarPor(1000)
//     .then(console.log)
//     .then(esperarPor)
//     .then(console.log)

function returnValue() {

    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000);
    })
}

async function exec() {
    let valor = await returnValue();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 10}...`);

    await esperarPor(1500);
    console.log(`Async/Await ${valor + 20}...`);

    return valor + 30;
}

async function fastValue() { return 500 };

fastValue()
    .then(console.log)

exec()
    .then(console.log)