/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.
*/

const prompt = require('prompt-sync')();

let somaSalarios = 0
let somaFilhos = 0
let contadorPessoas = 0
let maiorSalario = 0
let contadorSalariosAte350 = 0

while(true) {
    const salario = parseFloat(prompt('Digite o salário (ou um valor negativo para encerrar): '))
    if (salario < 0) {
        break
    }
    const filhos = parseInt(prompt('Digite o número de filhos: '))
    somaSalarios += salario
    somaFilhos += filhos
    contadorPessoas++
    if (salario > maiorSalario) {
        maiorSalario = salario
    }
    if (salario <= 350) {
        contadorSalariosAte350++
    }
}

if (contadorPessoas > 0) {
    const mediaSalarios = somaSalarios / contadorPessoas
    const mediaFilhos = somaFilhos / contadorPessoas
    const percentualAte350 = (contadorSalariosAte350 / contadorPessoas) * 100
    console.log(`Média de salário da população: R$${mediaSalarios.toFixed(2)}`)
    console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`)
    console.log(`Maior salário: R$${maiorSalario.toFixed(2)}`)
    console.log(`Percentual de pessoas com salário até R$350,00: ${percentualAte350.toFixed(2)}%`)
} else {
    console.log("Nenhuma pessoa foi cadastrada.")
}
