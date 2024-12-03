const leia = require('readline-sync')

let salario, abono

salario = leia.questionFloat("Digite seu salario atual: ")
abono = leia.questionFloat("Digite o abono: ")

novoSalario = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salario + abono)

console.log(`\nSeu novo salário será: ${novoSalario}`)