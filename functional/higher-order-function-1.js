/* 
Function that operate on other functions
either by taking them as arguments or by
returning them, are called higher-order-functions

Qd a linguagem permite que uma função opere
usando outras funções.
*/

function run(fn) {
    return fn();
}

function sayHello() {
    console.log('Hello little world.');
}

run(sayHello);

run(function () {
    console.log('Corre filho!');
})

const result = run(Math.random);
console.log(result);

run(function () {
    console.log(`Multiplicação: ${2 * 2}`);
})