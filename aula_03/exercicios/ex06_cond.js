const leia = require('readline-sync')

let nome = leia.question("\nInsira o seu nome: ")
let salario = leia.questionFloat("Digite seu salario: ")

console.log("\n","-".repeat(20), "Codigo do Cargo", "-".repeat(20))
console.log("\n1. Gerente")
console.log("2. Vendedor")
console.log("3. Supervisor")
console.log("4. Motorista")
console.log("5. Estoquista")
console.log("6. Tecnico de TI")

let cod = leia.questionInt("\nSelecione uma opcao de acordo com seu Cargo: ")
let novoSal
let cargo


switch(cod) {
    case 1:
        novoSal = salario + (0.1 * salario)
        cargo = "Gerente"
        break;
    case 2:
        novoSal = salario + (0.07 * salario)
        cargo = "Vendedor"
        break;
    case 3:
        novoSal = salario + (0.09 * salario)
        cargo = "Supervisor"
        break;
    case 4:
        novoSal = salario + (0.06 * salario)
        cargo = "Motorista"
        break;
    case 5:
        novoSal = salario + (0.05 * salario)
        cargo = "Estoquista"
        break;
    case 6: 
        novoSal = salario + (0.08 * salario)
        cargo = "Tecnico de TI"
        break;
    default:
        console.log("Opcao invalida. Tente novamente.")
        process.exit(0)
}

console.log("\n","-".repeat(25), "Resultado", "-".repeat(25))

novoSal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(novoSal)
console.log(`\nO colaborador ${nome}, do cargo de: ${cargo}, tera o salario ${novoSal} apos o reajuste`)