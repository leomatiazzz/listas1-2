/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

const prompt = require('prompt-sync')();

const linhas = 2
const colunas = 3

let m = []

for(let i = 1; i <= linhas; i++) {
    m[i] = []
    for(let j = 1; j <= colunas; j++) {
        m[i][j] = parseInt(prompt(`M[${i}][${j}]: `))
    }
}

const C = []

for(let i = 1; i <= linhas; i++) {
    let contador = 0
    for(let j = 1; j <= colunas; j++) {
        if(m[i][j] < 0) {
            contador++
        }
    }

    C[i] = contador
}

for(let i = 1; i <= linhas; i++){
    console.log(`Linha ${i} tem ${C[i]} elementos negativos.`)
}