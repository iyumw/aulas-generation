const leia = require('readline-sync')

let n1, n2, n3, n4

n1 = leia.questionFloat("Insira a primeira nota: ")
n2 = leia.questionFloat("Insira a segunda nota: ")
n3 = leia.questionFloat("Insira a terceira nota: ")
n4 = leia.questionFloat("Insira a quarta nota: ")

let media = (n1+n2+n3+n4) / 4
console.log(`Sua média é de: ${media.toFixed(1)}`)