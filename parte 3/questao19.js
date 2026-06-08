/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.
*/

const obj1 = {
    nome: 'Alice',
    idade: 25,
    cidade: 'São Paulo'
}

const obj2 = {
    idade: 30, // Esta propriedade irá sobrescrever a idade do obj1
    profissão: 'Engenheira'
}

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 }
}
const objetoCombinado = combinarObjetos(obj1, obj2)

console.log(objetoCombinado)