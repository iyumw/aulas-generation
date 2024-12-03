const leia = require('readline-sync')

let salarioBruto, addNoturno, hrExtra, descontos

console.log("\n========== Calculo do Salario Liquido ==========")

salarioBruto = leia.questionFloat("\nInsira seu salario bruto: ")
addNoturno = leia.questionFloat("Insira o adicional noturno: ")
hrExtra = leia.questionFloat("Insira as horas extras: ")
descontos = leia.questionFloat("Insira os descontos: ")

console.log("\n================================================")

let salLiquido = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salarioBruto + addNoturno + (hrExtra * 5) - descontos)

console.log(`\nO Salario Liquido resultante é: ${salLiquido}`)