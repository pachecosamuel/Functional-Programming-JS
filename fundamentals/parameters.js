//Talking about parameters
function logParams(a, b, c) {
    console.log(a, b, c);
}

/*logParams(2, 4, 6, 8);
logParams(2, 4, 6);
logParams(2, 4);
logParams(2);
logParams();*/

function defaultParams(a = 30, b = 20, c = 10) {
    console.log(a, b, c);
}

/*
defaultParams();
defaultParams(3);
defaultParams(3, 6);
defaultParams(3, 6, 9);
*/


function logNums(a, ...nums) {
    console.log(`O 1° valor é: ${a} e o restante: ${nums}`);
}
logNums(2, 4, 6, 8);

function logNumsV2(a, ...nums) {
    console.log(`Primeiro valor: ${a} `);
    for (let x of nums) {
        console.log(x);
    }
}
logNumsV2(3, 5, 7, 9);


function sumAll(...nums) {
    let total = 0;
    for (let x of nums) {
        total += x;
    }
    return total;
}
console.log(sumAll(2, 5, 9));


const Somar = (...nums) => {
    console.log(Array.isArray(nums));
    let total = 0;
    for (let x of nums) {
        total += x;
    }
    return total;
}

const v = Somar(10, 20, 30);
console.log(v);

console.log(Somar(5, 5, 5));








