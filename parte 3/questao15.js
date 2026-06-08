/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.
*/

// Definindo o tamanho da matriz
let n = 7

// Criando um array vazio que vai guardar a matriz
let MI = []

// Percorrendo as linhas
for(let i = 1; i <= n; i++) {
    // para cada linha "i", criamos um array vazio que vai guardar as colunas
    MI[i] = []
    for(let j = 1; j <= n; j++) {
        // percorre cada coluna da matriz
        if(i == j) {
            // se a linha for igual a coluna ou se a soma da linha com a coluna for igual a n + 1, então o valor é 1
            MI[i][j] = 1
        } else {
            MI[i][j] = 0
        }
    }
}

console.log("\nMatriz Identidade [1...7][1...7]:\n ")


for (let i = 1; i <= n; i++) {
    let linha = ""
    for (let j = 1; j <= n; j++) {
        linha += MI[i][j] + " "
    }

    console.log(linha)
}
    

console.table(MI)