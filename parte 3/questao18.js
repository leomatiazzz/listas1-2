/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

const dados = {
    nome: 'Léo',
    idade: 27,
    hobbies: ['leitura', 'jogos', 'viagem'],
    contatos: {
        email: 'leo@email.com',
        telefone: '123456789'
    },
    notas: [8, 9, 10]
}

function obterPropriedadesArray(objeto) {
    const resultado = {}

    for (const [chave, valor] of Object.entries(objeto)) {
        if (Array.isArray(valor)) {
            resultado[chave] = valor
        }
    }

    return resultado
}

const propriedadesArray = obterPropriedadesArray(dados)

console.log(propriedadesArray)