const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = (el) => el > 0;
const greaterThanFive = (el) => el >= 5;
const even = (el) => el % 2 === 0;
const odd = (el) => el % 2 != 0;

console.log("Maior que 0 = " + numbers.filter(greaterThanZero));
console.log("Maior que 5 = " + numbers.filter(greaterThanFive));
console.log("Pares = " + numbers.filter(even));
console.log("Ímpares = " + numbers.filter(odd));


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];

const greatStudent = (elem) => elem.score >= 9.0;
console.log("Estudantes com nota > 9");
console.log(students.filter(greatStudent));
console.log(students);