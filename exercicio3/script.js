// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:

// ```
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
// ```
console.log(pokemon1)
// a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.
const pokemomCopia={...pokemon1}
const squirtle = {...pokemon1}
squirtle.tipo='Água'
console.log(squirtle)
// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.
pokemon1.ataques = []

// c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

// ```
const ataque ={
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataque)//aqui inseri dentro de ataques a variavel ataque, que é um objeto
// ```

// d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.
pokemomCopia.ataques = [...pokemon1.ataques]//spread de um arrai

// e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.
const ataque2 = {
    nome: 'Folha Navalha',
    dano: 45, 
    tipo: 'Grama', 
    precisao: 100
}
pokemon1.ataques.push(ataque2)
console.log(pokemon1,'pokemom1')
// f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.
const ataque3= {nome:"H20",
    dano: 40,
    tipo: 'H2O',
    precisao:100}
// g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.