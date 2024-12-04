const leia = require('readline-sync')

n1 = leia.questionInt("\nDigite um numero: ", "\n")

if (n1 > 0 && n1 % 2 == 0){
    console.log(`O numero ${n1} eh par e positivo`)
} else if (n1 > 0 && n1 % 2 != 0){
    console.log(`O numero ${n1} eh impar e positivo`)
} else if (n1 < 0 && n1 % 2 == 0) {
    console.log(`O numero ${n1} eh par e negativo`)
} else if (n1 < 0 && n1 % 2 != 0) {
    console.log(`O numero ${n1} eh impar e negativo`)
} else {
    console.log(`O numero ${n1} nao eh impar, nem par; nem negativo e nem positivo`)
}