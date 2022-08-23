// Function expression & anonymous
const v1 = function (n) {
    return n + 1;
}

// Arrow Function is always anonymous
const v2 = (n) => {
    return n + 1;
}

const v3 = n => {
    return n + 1;
}

const v4 = n => n + 1;

const v5 = (n, m) => n + m + 1;

const v6 = () => `Olá, mundo`;
console.log(v6());

console.log(v1(9));
console.log(v2(19));
console.log(v3(29));
console.log(v4(39));
console.log(v5(39, 30));