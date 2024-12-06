import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(5);
numeros.push(7);
numeros.push(3);
numeros.push(2);

for (let numero of numeros) {
    console.log(numero);
}

// Insere no final da array
numeros.push(readlinesync.questionFloat("Digite um numero: "))

// Insere os numeros no começo do array
numeros.unshift(2, 5.4, 8, 9);
console.table(numeros)

// Consulta em arrays
    // Se tiver o mesmo número repetido, ele retorna a primeira ocorrência
console.log("\nExiste o numero 5 no array? ", numeros.includes(5));

console.log("\nQual eh o indice do numero 3 no array? ", numeros.indexOf(3));

// Remove números a partir da posição do numero 10 no array (1 para apagar apenas o 9)
numeros.splice(numeros.indexOf(9), 1);
console.table(numeros);