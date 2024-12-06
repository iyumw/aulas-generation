const leia = require('readline-sync')
let encontrado = false
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numero = leia.questionInt('\nDigite o numero que deseja encontrar: ')

for (let i = 0; i < vetor.length; i++) {  // percorre todo o vetor
    if (vetor[i] === numero) {
        console.log(`\nO numero ${numero} foi encontrado na posicao: ${i}`)
        encontrado = true
        break
    } 
}
    
if (!encontrado) { 
    console.log(`\nO numero ${numero} nao foi encontrado no vetor`) 
}