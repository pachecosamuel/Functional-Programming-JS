// Function declaration

//1° without parameter
function SayHello() {
    console.log('Hello, good morning 1st!');
}
SayHello();


//2° with parameter
function SayHelloTo(name) {
    console.log('Hello, good morning .. ' + name);
    // Concatenando
}

function SayHelloTo2(name) {
    console.log(`Hello, good morning .. ${name}`);
    // Interpolando
}

SayHelloTo('Samuel');
SayHelloTo('Lorena');


//3° without parameter and with return
function returnHi() {
    return 'Hi guy!';
}

const f1 = returnHi();
console.log(f1);

console.log(returnHi());


//4° With parameter and return
function returnHiTo(name) {
    return `Hi ... ${name}, morning!`
}

const f2 = returnHiTo('Julia Roberts');
console.log(f2);

console.log(returnHiTo('Wolverine'));


