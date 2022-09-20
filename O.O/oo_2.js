class Produto {

    constructor(nome, preco, desc = 0.15) {
        this.nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    finalPrice = () => this.preco * (1 - this.desc);

}

const p1 = new Produto("Monitor 25'", 1500);
const p2 = new Produto("Razer Kranken White", 450);

console.log(p1.nome);
console.log(p1.finalPrice());