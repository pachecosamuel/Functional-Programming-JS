function exec(fn, a, b) {
    return fn(a, b);
}

const somar = (x, y) => x + y;
const subtrair = (a, b) => a - b;
const multiplicar = (w, z) => w - z;

console.log("Soma = + " + exec(somar, 10, 10));
console.log("Subtração = - " + exec(subtrair, 20, 5));
console.log("Multiplicação = * " + exec(multiplicar, 10, 5));

const result = exec(somar, 10, 15);
console.log(`Meu resultado ${result}`);

/* 
Explanando sobre o conceito de callback.
Normalmente, trabalharemos eventos que serão
disparados com uma conhecida frequência, então
é configurada uma função de callback para que responda
a esse evento.
O setInterval e setTimeout são esses exemplos

Explaning a little about the concept of callback.
Usually, we work in JS with events that will be
shot with a well-known frequency, so we gonna
set a callback function to ansewrs its call.
setInterval and setTimeout are good examples.
They work with microseconds
*/

const sayHello = () => console.log("Hello guys");
setInterval(sayHello, 2000);

setInterval(() => console.log("Say my name"), 1000);

setTimeout(() => console.log("Julia Soares"), 1000);