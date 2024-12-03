const leia = require('readline-sync')

let n1, n2, n3, n4

console.log("\n========== Calculo da Media de Notas ==========")

n1 = leia.questionFloat("\nInsira a primeira nota: ")
n2 = leia.questionFloat("Insira a segunda nota: ")
n3 = leia.questionFloat("Insira a terceira nota: ")
n4 = leia.questionFloat("Insira a quarta nota: ")

console.log("\n===============================================")

let media = (n1+n2+n3+n4) / 4
console.log(`\nSua média é de: ${media.toFixed(1)}\n`)

if (media >= 7) {
    console.log("Parabens!! Voce passou :D!")
} else {
    console.log("Nao foi dessa vez. Voce nao passou :(")
}