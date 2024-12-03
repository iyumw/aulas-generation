const leia = require('readline-sync')

let salarioBruto, addNoturno, hrExtra, descontos

salarioBruto = leia.questionFloat("Insira seu salario bruto: ")
addNoturno = leia.questionFloat("Insira o adicional noturno: ")
hrExtra = leia.questionFloat("Insira as horas extras: ")
descontos = leia.questionFloat("Insira os descontos: ")

let salLiquido = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salarioBruto + addNoturno + (hrExtra * 5) - descontos)

console.log(`\nSalario Liquido: ${salLiquido}`)