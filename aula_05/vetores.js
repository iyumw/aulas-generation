const leia = require('readline-sync')

let vetorString = ['Boxer', 'Pastor Alemao', 'Pinscher', 'Husky Siberiano', 'Corgi']

for(let i = 0; i < vetorString.length; i++){
    console.log(vetorString[i])
}

console.log('O tamanho do vetor de strings eh: ' + vetorString.length)

// let vetorInt = new Array(5)

// for(let i = 0; i < vetorInt.length; i++){
//     vetorInt[i] = leia.questionInt('Digite um numero: ')
// }

// console.table(vetorInt)

let vetorNumeros = [4, 3, 7, 8, 2, 9, 1, 5, 10, 6]


console.table(vetorString.sort())

// Descrescente
console.table(vetorNumeros.sort((a, b) => b - a))
// Crescente
console.table(vetorNumeros.sort((a, b) => a - b))