/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.
*/

const arrayDeStrings = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']

function contarOcorrencias(array) {
    const contagem = {}
    for (const item of array) {
        if (contagem[item]) {
            contagem[item]++
        } else {
            contagem[item] = 1
        }
    }
    return contagem
}

const resultado = contarOcorrencias(arrayDeStrings)

console.log(resultado)