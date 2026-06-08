/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.
*/

const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número para calcular o fatorial: '))

if (numero < 0) {
    console.log('Fatorial não é definido para números negativos.')
} else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1.`)
} else {
    let fatorial = 1
    for (let i = 2; i <= numero; i++) {
        fatorial *= i
    }
    console.log(`O fatorial de ${numero} é ${fatorial}.`)
}