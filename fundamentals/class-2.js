//Anonymous Function
(function (a, b, c) {
    return a * b * c;
})

//Function Expression
const sum = function (a, b) {
    return `A soma é: ${a + b}`;
}
console.log(sum(3, 3));
const result = sum(4, 4);
console.log(result);


const AnotherSum = sum;
console.log(AnotherSum(2, 2));

const x = AnotherSum;
console.log(x(2, 3));

//How malleable is a variable in JS
let z = 10;
console.log(`Só um exemplinho: ${z}`);

z = sum;
console.log(sum(10, 10));