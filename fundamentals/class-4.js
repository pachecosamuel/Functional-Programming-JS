//Anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    console.log(a * b * c);
})(2, 3, 4);

(function (a, b) {
    let x = 19561.20
    console.log(x);
})();

((a) => console.log(`Exemplo arrow ${a}`))(2);

(() => console.log("A vida como ela é"))();
