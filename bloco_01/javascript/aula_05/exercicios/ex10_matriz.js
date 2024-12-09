const leia = require('readline-sync');

let medias = []

// Qtd de linhas
let matriz = new Array(9);

// Qtd de colunas 
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(4);
}

// Preenche a matriz com valores
for (let iLinha = 0; iLinha < matriz.length; iLinha++){

    let somaLinha = 0

    for(let iColuna = 0; iColuna < matriz[iLinha].length; iColuna++){
        matriz[iLinha] [iColuna] = leia.questionFloat("\nDigite um numero: ");
        somaLinha += matriz[iLinha][iColuna]
    }

    medias[iLinha] = ((somaLinha / matriz[iLinha].length).toFixed(1))
} 

console.table(matriz)
console.log(`\nAs médias de cada aluno são: ${medias.join(", ")}`);