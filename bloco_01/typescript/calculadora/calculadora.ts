import readlinesync = require('readline-sync');

let n1: number
let n2: number

n1 = readlinesync.questionFloat('Digite o primeiro numero: ')
n2 = readlinesync.questionFloat('Digite o segundoo numero: ')

console.log("\nA soma dos numeros eh igual a: ", n1 + n2)
console.log("\nA subtracao dos numeros eh igual a: ", n1 - n2)
console.log("\nA multiplicacao dos numeros eh igual a: ", n1 * n2)
console.log("\nA divisao dos numeros eh igual a: ", n1 / n2)