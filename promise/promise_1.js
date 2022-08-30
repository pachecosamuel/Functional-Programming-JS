let a = 'Samuel';
console.log(a);

let p = new Promise(function (resolve) {
    resolve(['Samuel', 'Julia', 'Jessica'])
});

const firstValue = el => el[0];
const lm = el => el.toLowerCase();

p
    .then(firstValue)
    .then(firstValue)
    .then(lm)
    .then(console.log);