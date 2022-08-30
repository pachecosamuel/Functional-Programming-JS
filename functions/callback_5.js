// Reduce
const Carrinho = [
    { nome: "Iphone 13 Pro", qtd: 10, preco: 5000.50 },
    { nome: "AirPods 2", qtd: 0, preco: 1099.9 },
    { nome: "Ipad Ultra", qtd: 4, preco: 2565.2 },
    { nome: "Turbo Charger", qtd: 3, preco: 129.9 },
    { nome: "Macbook pro", qtd: 1, preco: 8099.9 }
];

const f1 = (el) => el.preco * el.qtd;
const f2 = (acc, el) => acc + el;
const totalGeral = Carrinho.map(f1).reduce(f2);
console.log(totalGeral);


Array.prototype.myReduce = function (fn, inicial) {
    let acc = inicial;

    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }

    return acc;
}

console.log(Carrinho.map((el) => el.preco * el.qtd).myReduce((acc, el) => acc + el));