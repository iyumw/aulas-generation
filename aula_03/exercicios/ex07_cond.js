const leia = require('readline-sync')

let n1 = leia.questionInt("\nInsira o primeiro numero: ")
let n2 = leia.questionInt("Insira o segundo numero: ")

console.log("\n","-".repeat(20), "Operacoes", "-".repeat(20))
console.log("\n1. Soma")
console.log("2. Subtracao")
console.log("3. Multiplicacao")
console.log("4. Divisao")

let cod = leia.questionInt("\nSelecione uma opcao de acordo com a operacao matematica a ser realizada: ")
let resultado

console.log("\n", "-".repeat(54) ,"\n")

switch(cod) {
    case 1:
        resultado = n1 + n2
        op = "+"
        break;
    case 2:
        resultado = n1 - n2
        op = "-"
        break;
    case 3:
        resultado = n1 * n2
        op = "*"
        break;
    case 4:
        op = "/"
        if(n2 === 0){
            console.log("Nao eh possivel fazer a divisao de um numero por 0")
            process.exit(0)
        } else {
            resultado = n1 / n2
        }
        break;
    default:
        console.log("Opcao invalida. Tente novamente.")
        process.exit(0)
}

console.log(`${n1} ${op} ${n2} = ${resultado}`)