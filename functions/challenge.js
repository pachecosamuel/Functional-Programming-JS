// 1° Develop a function that receive 3 params and return their sum

const soma = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

const soma2 = a => b => c => a + b + c;
const somaDois = (a) => (b) => (c) => a + b + c;
console.log(somaDois(10)(20)(10));


console.log(soma(2)(3)(5));

const um = soma(10);
const dois = um(20);
const tres = dois(30);
console.log(tres);

// 2° Develop a function that receive 2 params and return a function
// that it'll calculate a math operation among them.

// Primeira resolução
function params(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y);
        }
    }
}

// Segunda resolução
const calculate = (a) => {
    return (b) => {
        return (fn) => {
            return fn(a, b)
        }
    }
}

// Terceira resolução
const parametros = (a) => (b) => (fn) => fn(a, b);

const multiply = (j, k) => j * k;
const division = (x, y) => x / y;

console.log(parametros(15)(5)(division));

console.log(calculate(1000)(2)(division));

const result = params(10)(5)(multiply);
console.log(result);

// console.log(params(2)(3)(multiply));

// let try1 = params(10);
// let try2 = try1(5);
// let try3 = try2(multiply);
// console.log(try3);
