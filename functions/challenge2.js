/* 
1° retornar fragil: true
2° qtd & preço
3° media total
*/
const Carrinho = [
    { nome: "Iphone 13 Pro", qtd: 10, preco: 5000.50, fragil: true },
    { nome: "AirPods 2", qtd: 1, preco: 1099.9, fragil: true },
    { nome: "Ipad Ultra", qtd: 4, preco: 2565.2, fragil: true },
    { nome: "Turbo Charger", qtd: 3, preco: 129.9, fragil: false },
    { nome: "Macbook pro", qtd: 1, preco: 8099.9, fragil: true }
];

// 1° Done
const Fragil = el => el.fragil === true;
//console.log(Carrinho.filter(Fragil).map(el => [el.nome, el.fragil]));

// 2°  Done
const PrecoQtd = el => [el.preco, el.qtd];
const vet = Carrinho.map(PrecoQtd);
console.log(vet);

// 3° Um vetor em que cada célula tenha a media entre preco e qtd
const getTotal = el => el.qtd * el.preco;
const getMedia = (acc, el) => {

    const novaQtd = acc.qtd + 1;
    const novoTotal = acc.total + 1;

    return {
        qtd: novaQtd,
        total: novoTotal,
        media: novoTotal / novaQtd
    }
}

const mediaInicial = { qtd: 0, total: 0, media: 0 }

const media = Carrinho
    .filter(Fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

console.log(`A média é: ${media}`);



