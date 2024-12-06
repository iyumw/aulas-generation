import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

console.log("\n", "-".repeat(25) ,"Numeros", "-".repeat(25), "\n")
let n1: number = readlinesync.questionInt("Digite o numero que deseja encontrar: ")

for (let numero of numeros) {
    if (numero === n1) {
        console.log(`O numero ${n1} foi encontrado na posicao ${numeros.indexOf(numero)}`);
        break;
    }
}

if (!numeros.includes(n1)) {
    console.log(`\nO numero ${n1} nao foi encontrado no array`);
}