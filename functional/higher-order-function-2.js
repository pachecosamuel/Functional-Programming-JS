// Curring
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax);
    }
}

const euaFinalPrice = finalPrice(0.052);
const brFinalPrice = finalPrice(0.085);

console.log(euaFinalPrice(505));
console.log(brFinalPrice(505));

/*
console.log(finalPrice(0.0725)(25));
console.log(finalPrice(0.0725)(50));
console.log(finalPrice(0.0725)(75));
*/