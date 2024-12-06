const leia = require('readline-sync')

let somaPrincipal = 0, somaSecundaria = 0
let elemPrincipal = [], elemSecundaria = []

// Linhas da matriz
let matriz = new Array(3);

// Divide as linhas com colunas 
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}

// Preenche a matriz com valores
for (iLinha = 0; iLinha < matriz.length; iLinha++){
    for(iColuna = 0; iColuna < matriz.length; iColuna++){
        matriz[iLinha] [iColuna] = leia.questionInt("\nDigite um numero: ");
    }
} 

// Percorre a matriz para achar os elementos das diagonais
for (let i = 0; i < iLinha; i++) {
        somaPrincipal += matriz[i][i];
        elemPrincipal[i] = matriz[i][i] 

        somaSecundaria += matriz[i] [2 - i];
        elemSecundaria[i] = matriz[i] [2 - i]
}

console.table(matriz)

console.log("\nDiagonal Principal: ", elemPrincipal)
console.log("Diagonal Secundaria: ", elemSecundaria)
console.log("Soma principal: ", somaPrincipal)
console.log("Soma Secundaria: ", somaSecundaria)