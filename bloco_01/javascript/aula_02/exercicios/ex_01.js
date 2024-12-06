const leia = require('readline-sync')

let salario, abono
console.log("\n========= Calculo do Novo Salario =========")
salario = leia.questionFloat("\nDigite seu salario atual: ")
abono = leia.questionFloat("Digite o abono: ")

novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario + abono)

console.log("\n=============================================")
console.log(`\nSeu novo salário será: ${novoSalario}`)