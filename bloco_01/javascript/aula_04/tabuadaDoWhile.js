const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero: ')
let i = 1

do {
    console.log(`${numero} x ${i} = ${numero * i}`)
    i++
}
while(i <= 10)