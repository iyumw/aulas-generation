const leia = require("readline-sync");
let numero,
  media = 0,
  i = 0

do {
    numero = leia.questionInt("\nDigite um numero: ")
    if(numero != 0 && numero % 3 === 0) {
        i++
        media += numero
    }
} while (numero != 0)

if(i > 0) {
    media /= i
    console.log(`\nA media dos numeros digitados é ${media.toFixed(2)}`)
} else {
    console.log("\nNenhum numero digitado é multiplo de 3.")
} 
