const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero: ')

for (let i = 1; i <= 10; i++){
    console.log(`${numero} * ${i} = ${numero * i}`)
}