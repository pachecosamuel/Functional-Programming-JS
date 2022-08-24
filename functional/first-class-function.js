/*
A programming language is said to have
First-class functions (citizen) when functions
in that language are treated like any other variable.
Quando a linguagem aceita alocar uma função em uma variável.
like an example in class 2:
const sum = (a,b) => a + b;
*/

const add = (a, b) => a + b;
console.log(add(10, 10));

const subtraction = (a, b) => a - b;
console.log(subtraction(50, 10));

const multiplication = (a, b) => a * b;
console.log(multiplication(3, 3));

const division = (a, b) => a / b;
console.log(division(16, 4));