/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

// Importa a biblioteca prompt-sync para ler a entrada do usuário -> npm install prompt-sync

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}