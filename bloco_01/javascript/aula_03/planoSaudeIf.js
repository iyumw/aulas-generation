const leia = require('readline-sync')

console.log("\n=============== Plano de Saude ================")

let nome = leia.question("\nInsira o seu nome: ")
let idade = leia.questionInt("Insira sua idade: ")
let valor

console.log("\n==============================================\n")

if (idade >= 0 && idade <= 10) {
    valor = 100.00
} else if (idade > 10 && idade <= 29) {
    valor = 200.00
} else if (idade > 29 && idade <= 45) {
    valor = 300.00
} else if (idade > 45 && idade <= 59) {
    valor = 500.00
} else if (idade > 59 && idade <= 65) {
    valor = 600.00
} else if (idade > 65) {
    valor = 1000.00
} else {
    console.log("A idade nao eh valida, tente novamente.")
    process.exit(0)
}

valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor)

console.log(`O valor do Plano de Saude de ${nome} eh de ${valor}`)