const numbers = [2, 4, 6, 8, 10];

const sum = (total, elem) => total + elem;
const totalSoma = numbers.reduce((total, elem) => total + elem);
console.log(totalSoma);

/*
A função reduce pode receber até 4 argumentos
seriam respectivamente (acc, elem, i, array)
1° = Acumulador/Total
2° = Elemento propriamente dito
3° = índex do elemento
4° = Array propriamente dito
*/

const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length;
    } else {
        return acc + el;
    }
}

console.log(numbers.reduce(avg));

// const average = (acc, elem, i, array) => {
//     if (i === array.length -1) {
//         return (acc + el) / array.length
//     } else {
//         return acc + el
//     }
// }