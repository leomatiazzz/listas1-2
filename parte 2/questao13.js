/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).
*/

const prompt = require('prompt-sync')();
process.stdin.setEncoding('utf8');
process.stdout.setDefaultEncoding('utf8');

const funcionarios = []

for(let i = 0; i < 3; i++) { // Alterar o valor de "80" e testar com menos funcionários para facilitar a entrada de dados
    const matricula = prompt(`Digite a matrícula do funcionário ${i + 1} (ou sair): `)
    if (matricula.toLowerCase() === 'sair'){
        break
    }
    const nome = prompt(`Digite o nome do funcionário ${i + 1}: `)
    const salarioBruto = parseFloat(prompt(`Digite o salário bruto de ${nome}: `))
    const deducaoINSS = salarioBruto * 0.12
    const salarioLiquido = salarioBruto - deducaoINSS
    funcionarios.push({ matricula, nome, salarioBruto, deducaoINSS, salarioLiquido })
}

console.log('Contracheques dos funcionários:')
funcionarios.forEach(funcionario => {
    console.log(`Matrícula: ${funcionario.matricula}`)
    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`)
    console.log(`Dedução INSS: R$ ${funcionario.deducaoINSS.toFixed(2)}`)
    console.log(`Salário líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`)
    console.log('-----------------------------')
})