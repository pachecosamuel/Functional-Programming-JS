//Filter
const Carrinho = [
    { nome: "Iphone 13 Pro", qtd: 10, preco: 5000.50 },
    { nome: "AirPods 2", qtd: 0, preco: 1099.9 },
    { nome: "Ipad Ultra", qtd: 4, preco: 2565.2 },
    { nome: "Turbo Charger", qtd: 3, preco: 129.9 },
    { nome: "Macbook pro", qtd: 1, preco: 8099.9 }
];

//console.log(Carrinho.filter((el) => el.qtd > 0));

Array.prototype.meuFilter = function (fn) {
    const novoArray = [];

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray;
}

console.log(Carrinho.meuFilter((el) => el.qtd > 0));

