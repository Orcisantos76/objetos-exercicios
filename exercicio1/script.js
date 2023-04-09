// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
//const sacolao = []

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// const objet1 = {nome: 'aaa',preco: '2',disponibilidade: true}
// const objet2 = {nome: 'bbb',preco: '3',disponibilidade: false}
// const objet3 = {nome: 'ccc',preco: '4',disponibilidade: true}

// const objet4 = {nome: 'ddd',preco: '5',disponibilidade: true}
// const objet5 = {nome: 'eee',preco: '6',disponibilidade: false}
// const objet6 = {nome: 'fff',preco: '7',disponibilidade: true}
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
// sacolao.push(objet1)
// sacolao.push(objet2)
// sacolao.push(objet3)

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
// console.log(sacolao.length)
// console.log(sacolao[1].nome)


let array2 = {nome: "orci", idade:46,generoMusical:'soft-rock'}

console.log(`O nome da pessoa é ${array2.nome} ela tem ${array2.idade} anos e gosta muito de ${array2.generoMusical}`)
let array3 ={...array2,nome:'Ana'}// cria a copia e altera o nome
//array3.nome='Ana'
array3.idade=43
console.log(`O nome da pessoa é ${array3.nome} ela tem ${array3.idade} anos e gosta muito de ${array3.generoMusical}`)
array3.sexo = 'Feminino'
console.log(array3)
let nomePessoa = array3.nome
console.log(nomePessoa)

/// Buscando o maior numero com for e while

let array4 = [11,15,18,25,14,12,13]
let maior = 0
let contador = 0

while (contador < array4.length){    
    if (array4[contador]>maior){
        maior = array4[contador]        
    }
    contador ++
}
console.log(`O maior número do array com while é ${maior}`)

let maiorDoFor = 0
for (let i =0; i < array4.length; i++){
    if(array4[i]> maiorDoFor){
        maiorDoFor = array4[i]
    }
}
console.log(`O maior número do array com for é ${maiorDoFor}`)

let maiorForOf =0
for (let valor of array4){
    if(valor > maiorForOf){
        maiorForOf = valor
    }
}
console.log(`O maior número do array com o for of é ${maiorForOf}`)

// Exercicio 12

const prof ={
    nome: 'Letícia Chijo',
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos:['Chrono Trigger','Undertale','Hollow Kinght'],
    constaPiada: ()=>console.log('É pave ou pacume?'),
    pet:{
        nome:'Polly',
        especie: 'cachorro',
        raca: "lhasa apso",
        snackFavoritos:['biscoito','maça','frango']
    }
}



const verificaAula=(aula)=>{
    if(aula){
        return 'Dá'
    }else{
        return "Não da"
    }
}
let aulasFront = verificaAula(prof.aulasFront)//posso declarar variavel do elemento dentro de um objeto
let aulasBack = verificaAula(prof.aulasBack)

const jogos = []
for (let jogo = 1;jogo<=prof.jogosFavoritos.length;jogo++){
    jogos.push(`\n${jogo}) ${prof.jogosFavoritos[jogo-1]}`)
}
// console.log(jogos)
const frase = `Olá ${prof.nome} que tem ${prof.idade} anos.
${aulasFront} aulas de frontend, e ${aulasBack} aulas de backend.
Os Jogos favoritos são: ${jogos}
Tem uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snackFavoritos[1]}
`
console.log(frase)
//chamando a funcao dentro do objeto
prof.constaPiada()

const pokemons =[
    {nome: 'Bulbasaur', tipo: 'grama'},
    {nome: 'Bellsprout', tipo: 'grama'},
    {nome: 'Charmander', tipo: 'fogo'},
    {nome: 'vulpix', tipo: 'fogo'},
    {nome: 'Squirtle', tipo: 'agua'},
    {nome: 'Psyduck', tipo: 'agua'}
]

//   pokemonelemento é o item em si ===  {nome: 'Bulbasaur', tipo: 'grama'}
// indice == indice de cada elemento na lista pokemons
// array == é o array todo em si
// map cria uma lista com o mesmo numero de elementos do original
const nomeDosPokemons = pokemons.map((pokemonElemento,indice,array)=>{
    return pokemonElemento.nome 
})
// filter cria uma lista somente com os itens selecionados, é do tamanho diferente do array original
const nomeDosTipo = pokemons.filter((pokemonElemento,indice,array)=>{
    return pokemonElemento.tipo === 'grama'
})

const produtos = [
    {nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5},
    {nome: 'Guaraná 2L', categoria: 'Bebidas', preco: 7.8},
    {nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6},
    {nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7},
    {nome: 'Leite', categoria: 'Bebidas', preco: 2.99},
    {nome: 'Candida', categoria: 'Limpeza', preco: 3.3},
    {nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2},
    {nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55},
    {nome: 'Berinjela Kg', categoria: 'Hortifruti', preco: 8.99},
    {nome: 'Sabão em pó', categoria: 'Limpeza', preco: 10.80},

]
// prod é cada objeto da minha lista
// prod.preco é o elemento preco de cada objeto
//...prod, é o spreed copia uma lista igual
const produtosComDesconto = produtos.map((prod)=>{ 
    return {...prod, preco: (prod.preco*.9).toFixed(2)}
})
console.log(produtosComDesconto)
const hortifruti = produtos.filter((prod)=>{
    return prod.categoria === 'Hortifruti'
    }
    
)

const hortifrutiComDesconto = produtos.filter((prod)=>{
    return prod.categoria === 'Hortifruti'
}).map((prod)=>{// filtrei pela categoria
    return {...prod, preco:(prod.preco*.9).toFixed(2)}
})// deu desconto em todos os produtos mapeados dentro do filter

console.log(hortifrutiComDesconto)
