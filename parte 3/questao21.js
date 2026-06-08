/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

const vendas = [
    { vendedor: 'Alice', valor: 100 },
    { vendedor: 'Roberto', valor: 150 },
    { vendedor: 'Alice', valor: 200 },
    { vendedor: 'Roberto', valor: 50 },
    { vendedor: 'Carlos', valor: 300 }
]

function sumarizarVendasPorVendedor(vendas) {
    const resumo = {}
    for (const venda of vendas) {
        const { vendedor, valor } = venda
        if (resumo[vendedor]) {
            resumo[vendedor] += valor
        } else {
            resumo[vendedor] = valor
        }
    }
    return resumo
} 

const resumoVendas = sumarizarVendasPorVendedor(vendas)
console.log(resumoVendas)