const leia = require("readline-sync");
let numero,
  soma = 0

do {
    numero = leia.questionInt("\nDigite um numero: ")
    if (numero > 0) {
        soma += numero
    }
} while (numero != 0)

console.log(`\nA soma dos numeros positivos digitados é ${soma}`)