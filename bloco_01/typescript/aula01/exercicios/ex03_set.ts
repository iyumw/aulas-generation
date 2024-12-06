import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

console.log("\n", "-".repeat(25) ,"Numeros", "-".repeat(25), "\n")
let n1: number

for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt("Digite um numero nao repetido: "))
}

const numerosOrdenados = [...numeros].sort((a, b) => a - b)

console.log(numerosOrdenados)