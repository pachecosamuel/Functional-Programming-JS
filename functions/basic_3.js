let numbers = [2, 4, 6];

// ...array é um rest operator
// isso significa que ele pode receber um número
// ilimitado de paramêtros. let useReduce = (...array)

// Caso queira operacionalizar um array, o correto é passá-lo como argumento
let useReduce = array => {
    console.log(Array.isArray(array));
    return array.reduce((total, el) => total + el);
}

console.log(useReduce(numbers));

const desafio = (base) => (exp) => Math.pow(base, exp);

console.log("Desafio expoente: " + desafio(2)(5));