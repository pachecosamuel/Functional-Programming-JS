// Retornar uma função a partir de outra função

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp);
    }
}

console.log(potencia(4)(2));

const por2 = potencia(2);
const por3 = potencia(3);

console.log(por2(2));
console.log(por3(2));