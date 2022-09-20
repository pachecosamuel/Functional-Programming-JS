/* Função construtora */
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;

    this.finalPrice = () => this.preco * (1 - this.desc);
}


const p1 = new Produto("Air max", 500.00);
// console.log(p1.nome);

const p2 = new Produto("Apto 50m²", 200000)
console.log(p2.nome);
console.log(p2.finalPrice());