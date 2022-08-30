// setTimeout(function () {
//     console.log("Exec callback 1");

//     setTimeout(function () {
//         console.log("Exec callback 2");

//         setTimeout(function () {
//             console.log("Exec callback 3");
//         }, 2000)
//     }, 2000)
// }, 2000);

function waitFor(time = 2000) {

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando promise");
            resolve("Muita treta vish");
        }, time)
    })
}

waitFor()
    .then(() => waitFor())
    .then(waitFor)