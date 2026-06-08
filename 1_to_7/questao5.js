/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const prompt = require("prompt-sync")();
const peso = parseFloat(prompt("Digite o seu peso em kg: "));
const altura = parseFloat(prompt("Digite a sua altura em metros: "));

const imc = peso / (altura * altura);

console.log(`O IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Categoria: Sobrepeso");
} else {
  console.log("Categoria: Obesidade");
}
