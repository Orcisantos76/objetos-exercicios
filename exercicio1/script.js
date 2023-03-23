// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const objet1 = {nome: 'aaa',preco: '2',disponibilidade: true}
const objet2 = {nome: 'bbb',preco: '3',disponibilidade: false}
const objet3 = {nome: 'ccc',preco: '4',disponibilidade: true}

const objet4 = {nome: 'ddd',preco: '5',disponibilidade: true}
const objet5 = {nome: 'eee',preco: '6',disponibilidade: false}
const objet6 = {nome: 'fff',preco: '7',disponibilidade: true}
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
sacolao.push(objet1)
sacolao.push(objet2)
sacolao.push(objet3)

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log(sacolao.length)
console.log(sacolao[1].nome)
