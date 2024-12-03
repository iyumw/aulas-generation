const leia = require('readline-sync')

let n1, n2, n3, n4

console.log("\n========== Calculo da Diferenca ==========")

n1 = leia.questionFloat("\nDigite o primeiro numero: ")
n2 = leia.questionFloat("Digite o segundo numero: ")
n3 = leia.questionFloat("Digite o terceiro numero: ")
n4 = leia.questionFloat("Digite o quarto numero: ")

console.log("\n==========================================")

calculo = (n1 * n2) -  (n3 * n4)
console.log(`\nO resultado de (${n1} * ${n2}) - (${n3} * ${n4}) é = ${calculo.toFixed(1)}`)