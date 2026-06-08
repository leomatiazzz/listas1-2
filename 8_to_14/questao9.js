/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const n = 10
let a = 0, b = 1

console.log(`Os primeiros ${n} números da sequência de Fibonacci são:`)
console.log(a)
console.log(b)

for (let i = 2; i < n; i++) {
    let c = a + b
    console.log(c)
    a = b
    b = c
}