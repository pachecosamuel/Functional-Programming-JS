// Function Declaration
function goodMorning() {
    console.log("Good morning!");
}

// Function Expression
const goodAft = () => console.log("Good afternoon!");


// Função que operacionaliza outras funções
function execFunction(fn) {
    if (typeof fn == 'function') {
        fn();
    } else {
        console.log(fn);
    }
}

execFunction(goodMorning);
execFunction(goodAft);
execFunction(3);

console.log(2 == '2'); // 
console.log(2 === '2'); // comparação estrita