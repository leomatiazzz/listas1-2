/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')();

console.log('Menu:');
console.log('1. Opção 1');
console.log('2. Opção 2');
console.log('3. Opção 3'); 

const escolha = parseInt(prompt('Escolha uma opção (1, 2 ou 3): '))

switch (escolha) {
    case 1:
        console.log('Você escolheu a Opção 1');
        break;

    case 2:
        console.log('Você escolheu a Opção 2');
        break;
    
    case 3:
        console.log('Você escolheu a Opção 3');
        break;

    default:
        console.log('Opção inválida. Por favor, escolha 1, 2 ou 3.');
}   
