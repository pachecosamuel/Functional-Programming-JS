const dobro = [1, 3, 5, 7, 9];
function exec(el, i, a) { return el * 2 + i + a.length }
console.log(dobro.map(exec));

const nomes = ['Julia', 'Tuane', 'Roberta']
function firstLetter(el) { return el[0] }
console.log(nomes.map(firstLetter));

const Carrinho = [
    { nome: "Iphone 13 Pro", qtd: 10, preco: 5000.50 },
    { nome: "AirPods 2", qtd: 0, preco: 1099.9 },
    { nome: "Ipad Ultra", qtd: 4, preco: 2565.2 },
    { nome: "Turbo Charger", qtd: 3, preco: 129.9 },
    { nome: "Macbook pro", qtd: 1, preco: 8099.9 }
]


console.log("Nome dos produtos: " + Carrinho.map((el) => el.nome));
console.log("Valores * qtd: " + Carrinho.map((el) => el.preco * el.qtd));

Array.prototype.meuMap = function (fn) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(fn(this[i], i, this))
    }

    return newArray;
}

const getName = el => el.nome;

console.log("Nome dos produtos: \n" + Carrinho.meuMap(getName));