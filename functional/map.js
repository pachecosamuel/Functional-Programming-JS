const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(el => el * 5)
console.log(numbers.map(el => el * 2), numbers, numbersV2);


const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];

const getScore = (elem) => elem.score;
const result = students.map(getScore)

const notinha = students.map(el => el.score)

console.log(students, notinha);
// const result = students.map(getScore)