/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
    if (sexo.toLowerCase() === 'masculino') {
        return 72.7 * altura - 58
    } else if (sexo.toLowerCase() === 'feminino') {
        return 62.1 * altura - 44.7
    } else {
        return null
    }
}

const altura = parseFloat(prompt('Digite a altura em metros: '))
const sexo = prompt('Digite o sexo (masculino/feminino): ')
const pesoIdeal = calcularPesoIdeal(altura, sexo)

if (pesoIdeal !== null) {
    console.log(`O peso ideal para ${sexo} com altura ${altura}m é: ${pesoIdeal.toFixed(2)}kg`)
} else {
    console.log('Sexo inválido. Por favor, digite "masculino" ou "feminino".')
}