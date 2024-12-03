const leia = require('readline-sync')

let n1, n2, n3, n4

n1 = leia.questionFloat("Digite o primeiro numero: ")
n2 = leia.questionFloat("Digite o segundo numero: ")
n3 = leia.questionFloat("Digite o terceiro numero: ")
n4 = leia.questionFloat("Digite o quarto numero: ")

calculo = (n1 * n2) -  (n3 * n4)
console.log(`A diferença é: ${calculo.toFixed(1)}`)