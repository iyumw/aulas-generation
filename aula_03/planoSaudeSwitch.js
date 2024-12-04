const leia = require('readline-sync')

console.log("\n","=".repeat(20), "Plano de Saude", "=".repeat(20))

let nome = leia.question("\nInsira o seu nome: ")
console.log(`\nOla! Seja bem-vindo(a) ${nome}, ao seu Plano de Saude!`)

console.log("\n","-".repeat(20), "Faixas Etarias", "-".repeat(20))
console.log("\n1. Idade entre 0 e 10 anos")
console.log("2. Idade entre 11 e 29 anos")
console.log("3. Idade entre 30 e 45 anos")
console.log("4. Idade entre 46 e 59 anos")
console.log("5. Idade entre 60 e 65 anos")
console.log("6. Idade acima de 65 anos")

let faixaEtaria = leia.questionInt("\nSelecione uma opcao de acordo com sua faixa etaria: ")
let valor

console.log("\n", "-".repeat(54) ,"\n")

switch(faixaEtaria) {
    case 1:
        valor = 100.00
        break;
    case 2:
        valor = 200.00
        break;
    case 3:
        valor = 300.00
        break;
    case 4:
        valor = 500.00
        break;
    case 5:
        valor = 600.00
        break;
    case 6: 
        valor = 1000.00
        break;
    default:
        console.log("Opcao invalida. Tente novamente.")
        process.exit(0)
}

valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor)

console.log(`✨ O valor do Plano do(a) Saude de ${nome} eh de ${valor} ✨`)

console.log("\n", "=".repeat(54))
