const leia = require('readline-sync')

let a = leia.questionInt("\nInsira o numero A: ")
let b = leia.questionInt("Insira o numero B: ")
let c = leia.questionInt("Insira o numero C: ")

let soma = a + b
console.log("\n","-".repeat(20), "Resultado", "-".repeat(20))

if(soma > c) {
    console.log(`\n${a} + ${b} = ${soma} > ${c}`)
} else if (soma < c) {
    console.log(`\n${a} + ${b} = ${soma} < ${c}`)
} else {
    console.log(`\n${a} + ${b} = ${soma} = ${c}`)
}