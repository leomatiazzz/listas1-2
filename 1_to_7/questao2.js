/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const prompt = require('prompt-sync')();
let idade = parseInt(prompt("Digite a idade da pessoa: "));

if (idade >= 0 && idade <= 12) {
    console.log("A pessoa é uma criança.");
} else if (idade > 12 && idade <= 18) {
    console.log("A pessoa é um adolescente.");
} else if (idade > 18 && idade <= 60) {
    console.log("A pessoa é um adulto.");
} else if (idade > 60) {
    console.log("A pessoa é um idoso.");
}